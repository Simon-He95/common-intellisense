import type * as vscode from 'vscode'
import { CreateWebview } from '@vscode-use/createwebview'

export async function createWebviewPanel(context: vscode.ExtensionContext) {
  const panel = new CreateWebview(
    context,
    {
      title: 'vscode-common-intellisense-local',
    },
  )

  panel.createWithHTMLUrl('./src/webview/index.html', () => {

  })
}
