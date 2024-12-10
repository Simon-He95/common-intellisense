import fsp from 'node:fs/promises'
import path from 'node:path'
import * as vscode from 'vscode'

export interface Options {
  title?: string
  scripts?: string | (string | { enforce: 'pre' | 'post', src: string })[]
  styles?: string | string[]
  onMessage?: (data: any) => void
  viewColumn?: vscode.ViewColumn
  retainContextWhenHidden?: boolean
  html?: string
}
export class CreateWebview {
  private webviewView: any
  private _deferScript = ''
  private _extensionUri: vscode.Uri
  private _extensionPath: string
  private props: Record<string, any> = {}
  private scriptsPromises: Promise<string>[] = []
  private viewColumn: vscode.ViewColumn
  private _title: string
  private _scripts: string | (string | { enforce: 'pre' | 'post', src: string })[]
  private _styles: string | string[]
  private retainContextWhenHidden: boolean
  private onMessage?: (data: any) => void
  constructor(
    private readonly _extension: vscode.ExtensionContext,
    options: Options,
  ) {
    this._extensionUri = _extension.extensionUri
    this._extensionPath = _extension.extensionPath
    this._title = options.title || 'webview'
    this._scripts = options.scripts || ''
    this._styles = options.styles || ''
    this.viewColumn = options.viewColumn || vscode.ViewColumn.One
    this.retainContextWhenHidden = options.retainContextWhenHidden === undefined ? true : options.retainContextWhenHidden
    this.onMessage = options.onMessage
  }

  public setProps(props: Record<string, any>) {
    this.props = { ...this.props, ...props }
  }

  public async create(html: string, callback: (data: any) => void = () => { }) {
    const webviewView = vscode.window.createWebviewPanel(
      this._title, // 视图的声明方式
      this._title, // 选项卡标题
      this.viewColumn, // 在编辑器中显示的视图位置
      {
        enableScripts: true, // 启用JS,否则内容将被视为静态HTML
        localResourceRoots: [this._extensionUri],
        retainContextWhenHidden: this.retainContextWhenHidden,
      },
    )
    this.webviewView = webviewView
    webviewView.webview.html = await this._getHtmlForWebview(
      webviewView.webview,
      html,
    )
    webviewView.webview.onDidReceiveMessage((data: any) => {
      callback(data)
      this.onMessage?.(data)
    })
  }

  public async createWithHTMLUrl(htmlUrl: string, callback: (data: any) => void = () => { }) {
    const url = path.resolve(this._extensionPath, htmlUrl)
    const html = await fsp.readFile(url, 'utf-8')
    const webviewView = vscode.window.createWebviewPanel(
      this._title, // 视图的声明方式
      this._title, // 选项卡标题
      this.viewColumn, // 在编辑器中显示的视图位置
      {
        enableScripts: true, // 启用JS,否则内容将被视为静态HTML
        localResourceRoots: [this._extensionUri],
        retainContextWhenHidden: this.retainContextWhenHidden,
      },
    )
    this.webviewView = webviewView
    webviewView.webview.html = html.replace(/(?:src|href)="([/.][^"]*)"/g, (_, u) => _.replace(u, webviewView.webview.asWebviewUri(vscode.Uri.file(
      path.join(this._extensionPath, 'media', u),
    )).toString())).replace(/(<\/head>)/, '<script>\n  const vscode = acquireVsCodeApi();\n  </script>\n  $1')
    webviewView.webview.onDidReceiveMessage((data: any) => {
      callback(data)
      this.onMessage?.(data)
    })
  }

  public isActive() {
    try {
      if (this.webviewView)
        return this.webviewView.active
    }
    catch (error) {
      console.error(error)
    }

    return false
  }

  public destory() {
    if (this.webviewView)
      this.webviewView.dispose()
  }

  public deferScript(scripts: string | string[]) {
    this._deferScript
      = typeof scripts === 'string' ? scripts : scripts.join('\n')
  }

  public deferScriptUri(scriptUri: string | string[]) {
    try {
      const uris = typeof scriptUri === 'string' ? [scriptUri] : scriptUri
      this.scriptsPromises.push(...uris.map(uri => fsp.readFile(
        `${this._extensionUri.path}/media/${uri}`
        , 'utf-8',
      )))
    }
    catch (error: any) {
      throw new Error(error.message)
    }
  }

  public postMessage(data: any) {
    if (this.webviewView)
      this.webviewView.webview.postMessage(data)
  }

  private async _getHtmlForWebview(webview: vscode.Webview, html: string) {
    const outerUriReg = /^https:\/\//
    const styles = this._styles
      ? (Array.isArray(this._styles) ? this._styles : [this._styles])
          .map((style) => {
            const styleUri = outerUriReg.test(style)
              ? style
              : webview.asWebviewUri(
                  vscode.Uri.joinPath(this._extensionUri, 'media', style),
                )
            return `<link href="${styleUri}" rel="stylesheet">`
          })
          .join('\n')
      : ''
    const preScripts: string[] = []
    const postScripts: string[] = []
    const scripts = Array.isArray(this._scripts)
      ? this._scripts
      : [this._scripts]

    scripts.forEach((script) => {
      let isPre = false
      if (typeof script !== 'string') {
        isPre = script.enforce === 'pre'
        script = script.src
      }
      const scriptUri = outerUriReg.test(script)
        ? script
        : webview.asWebviewUri(
            vscode.Uri.joinPath(this._extensionUri, 'media', script),
          )
      const _script = script.startsWith('<script')
        ? script
        : `<script src="${scriptUri}"></script>`

      if (isPre)
        preScripts.push(_script)
      else
        postScripts.push(_script)
    })
    const scriptsUri = await Promise.all(this.scriptsPromises).then(scripts =>
      scripts.map(script => `<script>${script.replace('webviewThis', JSON.stringify(this.props))}</script>`),
    )

    return `<!DOCTYPE html>
      <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>${this._title}</title>
          ${styles}
          <script>
            const vscode = acquireVsCodeApi();
          </script>
          ${preScripts.length ? preScripts.join('\n') : ''}
        </head>
        <body>
          ${html}
        </body>
        ${postScripts.join('\n')}
        ${this._deferScript}
        ${scriptsUri.join('\n')}
      </html>`
  }
}
