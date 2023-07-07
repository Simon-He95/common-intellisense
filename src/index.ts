import type * as vscode from 'vscode'
import { createSelect, registerCommand, registerCompletionItemProvider } from '@vscode-use/utils'
import { parser } from './utils'
import UI from './ui'

export function activate(context: vscode.ExtensionContext) {
  const filter = ['javascript', 'javascriptreact', 'typescriptreact', 'html', 'vue', 'css']
  let UiCompletions: any = null

  registerCommand('common-intellisense.pickerUI', () => {
    createSelect([
      'elementUI',
    ]).then((option: any) => {
      UiCompletions = UI[option as keyof typeof UI]()
    })
  })

  // todo: 判断当前使用ui
  context.subscriptions.push(registerCompletionItemProvider(filter, (document, position) => {
    const result = parser(document.getText(), position)
    if (UiCompletions && typeof result === 'object') {
      const name = result.tag[0].toUpperCase() + result.tag.replace(/(-\w)/g, (match: string) => match[1].toUpperCase()).slice(1)
      return result.propName === 'on'
        ? UiCompletions[name].events
        : UiCompletions[name].completions
    }
    // if (result === true || (result?.type === 'props' && !result.propName))
    //   return cacheMap
  }, ['"', '\'', '-', ' ', '@']))
}

export function deactivate() {

}
