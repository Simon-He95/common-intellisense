import * as vscode from 'vscode'
import { addEventListener, copyText, createCompletionItem, getSelection, message, registerCommand, registerCompletionItemProvider } from '@vscode-use/utils'
import { CreateWebview } from '@vscode-use/createwebview'
import { findPkgUI, parser } from './utils'
import UI from './ui'

declare const global: {
  commonIntellisense: {
    copyDom: string
  }
}

let UINames: any = []
let optionsComponents: any = null
let UiCompletions: any = null
let cacheMap: any = {}
let extensionContext: any = null
export function activate(context: vscode.ExtensionContext) {
  extensionContext = context
  global.commonIntellisense = {
    copyDom: '',
  }
  const filter = ['javascript', 'javascriptreact', 'typescriptreact', 'vue', 'svelte']
  context.subscriptions.push(addEventListener('activeText-change', (editor: vscode.TextEditor) => {
    // 找到当前活动的编辑器
    const visibleEditors = vscode.window.visibleTextEditors
    const currentEditor = visibleEditors.find(e => e === editor)
    if (currentEditor)
      findUI()
  }))

  context.subscriptions.push(registerCommand('intellisense.copyDemo', () => {
    copyText(global.commonIntellisense.copyDom)
    message.info('copy successfully')
  }))

  findUI()

  context.subscriptions.push(registerCompletionItemProvider(filter, (document, position) => {
    const result = parser(document.getText(), position)
    if (!result)
      return
    const { lineText } = getSelection()!
    const { character } = position
    const isPreEmpty = lineText[character - 1] === ' '
    if (!result.isInTemplate && result.refs && !isPreEmpty) {
      if (result.refsMap && Object.keys(result.refsMap).length) {
        if (lineText?.slice(-1)[0] === '.') {
          for (const key in result.refsMap) {
            const value = result.refsMap[key]
            if ((lineText.endsWith(`.$refs.${key}.`) || lineText.endsWith(`${key}.value.`)) && UiCompletions[value])
              return UiCompletions[value].methods
          }
        }
      }
      if (lineText.slice(character, character + 6) !== '.value')
        return result.refs.map((refName: string) => createCompletionItem({ content: refName, snippet: `${refName}.value`, documentation: `${refName}.value`, preselect: true, sortText: '99' }))
    }

    if (UiCompletions && result?.type === 'props') {
      const name = result.tag[0].toUpperCase() + result.tag.replace(/(-\w)/g, (match: string) => match[1].toUpperCase()).slice(1)
      if (result.propName === 'icon')
        return UiCompletions.icons

      const propName = result.propName
      const { events, completions } = UiCompletions[name]
      const hasProps = result.props
        ? result.props.map((item: any) => {
          if (item.name === 'on' && item.arg)
            return `${item.arg.content}`

          if (typeof item.name === 'object')
            item.name.label = item.name.name.slice(2)
          return item.name
        })
        : []
      if (propName === 'on') {
        const eventCallback = events[0]
        if (eventCallback)
          return eventCallback().filter((item: any) => !hasProps.find((prop: any) => item.label.startsWith(prop)))
      }
      else if (propName) {
        return completions.filter((item: any) => item.label.startsWith(propName)).map((item: any) =>
          createCompletionItem({
            content: item.label.split('=')[1].slice(1, -1),
            documentation: item.documentation,
            detail: item.detail,
          }),
        )
      }
      else if (hasProps.length) {
        return completions.filter((item: any) => !hasProps.find((prop: any) => item.label.startsWith(prop)))
      }
      else {
        return completions
      }
      return propName === 'on'
        ? events
        : propName
          ? completions.filter((item: any) => item.label.startsWith(propName)).map((item: any) =>
            createCompletionItem({
              content: item.label.split('=')[1].slice(1, -1),
              documentation: item.documentation,
              detail: item.detail,
            }),
          )
          : hasProps.length
            ? completions.filter((item: any) => !hasProps.find((prop: any) => item.label.startsWith(prop)))
            : completions
    }
    else if (!result.isInTemplate || isPreEmpty || !optionsComponents) {
      return
    }
    const prefix = lineText.trim().split(' ').slice(-1)[0]
    if (optionsComponents.prefix.some((reg: string) => prefix.startsWith(reg)))
      return optionsComponents.data
  }, ['"', '\'', '-', ' ', '@', '.']))
  const provider = new CreateWebview(context.extensionUri, {
    viewColumn: vscode.ViewColumn.Beside,
    scripts: ['main.js'],
  })
  context.subscriptions.push(registerCommand('intellisense.openDocument', (args) => {
    // 注册全局的link点击时间
    const url = args.link
    if (!url)
      return
    provider.create(`
      <!DOCTYPE html>
      <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Webview</title>
          <style>
            body{
              width:100%;
              height:100vh;
            }
          </style>
        </head>
        <body>
          <iframe src="${url}" width="100%" height="100%"></iframe>
        </body>
      </html>
      `, ({ data, type }) => {
      // callback 获取js层的postMessage数据
      if (type === 'copy') {
        vscode.env.clipboard.writeText(data).then(() => {
          vscode.window.showInformationMessage('复制成功!  ✅')
        })
      }
    })
  }))
}

export function deactivate() {
  UINames = null
  optionsComponents = null
  UiCompletions = null
  cacheMap = null
}

const filters = ['js', 'ts', 'jsx', 'tsx', 'vue', 'svelte']
const nameMap: any = {
  '@varlet/ui': 'varlet',
  '@chakraUi/react': 'chakraUiReact',
  '@chakraUi/vue': 'chakraUiVue',
}
function findUI() {
  const cwd = vscode.window.activeTextEditor?.document.uri.fsPath
  const suffix = cwd?.split('.').slice(-1)[0]

  if (!suffix || !filters.includes(suffix))
    return

  const values = Object.values(cacheMap) as any
  if (values[0] && values[0].includes(cwd))
    return

  findPkgUI(cwd).then(({ uis, pkg }: any) => {
    if (!uis)
      return
    if (Object.keys(cacheMap).length) {
      if (!cacheMap[pkg]) {
        cacheMap = {}
        cacheMap[pkg] = []
      }
    }
    else if (!cacheMap[pkg]) {
      cacheMap[pkg] = []
    }
    cacheMap[pkg].push(cwd)
    const uisName: string[] = []
    uis.forEach(([uiName, version]: any) => {
      const _version = version.match(/[^~]?([0-9]+)./)![1]
      const name = uiName.replace(/-(\w)/g, (_: string, v: string) => v.toUpperCase())
      uisName.push(`${nameMap[name] ?? name}${_version}`)
    })
    if (uisName.every(name => UINames.includes(name)))
      return
    UINames = uisName
    optionsComponents = UINames.map((option: string) => `${option}Components`).reduce((result: any, name: string) => {
      const componentsNames = (UI as any)[name]?.()
      if (componentsNames) {
        const { prefix, data } = componentsNames
        result.prefix.push(prefix)
        result.data.push(...data)
      }
      return result
    }, { prefix: [], data: [] })

    UiCompletions = UINames.reduce((result: any, option: string) =>
      Object.assign(result, (UI as any)[option]?.(extensionContext))
    , {} as any)
  })
}
