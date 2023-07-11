import type * as vscode from 'vscode'
import { createSelect, getSelection, message, registerCommand, registerCompletionItemProvider } from '@vscode-use/utils'
import { parser } from './utils'
import UI from './ui'

export function activate(context: vscode.ExtensionContext) {
  const filter = ['javascript', 'javascriptreact', 'typescriptreact', 'html', 'vue', 'css']
  let UiCompletions: any = null
  let optionsComponents: any = null
  registerCommand('common-intellisense.pickerUI', () => {
    createSelect([
      'elementUI',
      'antDesign',
      'elementPlus',
      'vant',
      'varlet',
    ], {
      title: '选择你使用的UI框架',
      canPickMany: true,
    }).then((options: any) => {
      if (!options) {
        message.error('加载错误，请稍后重新选择UI框架')
        return
      }
      optionsComponents = options.map((option: string) => `${option}Components`).reduce((result: any, name: string) => {
        result.push(...(UI as any)[name]())
        return result
      }, [])
      UiCompletions = options.reduce((result: any, option: string) =>
        Object.assign(result, (UI as any)[option]?.())
      , {} as any)
    })
  })

  // todo: 判断当前使用ui
  context.subscriptions.push(registerCompletionItemProvider(filter, (document, position) => {
    const result = parser(document.getText(), position)
    if (UiCompletions && result?.type === 'props') {
      const name = result.tag[0].toUpperCase() + result.tag.replace(/(-\w)/g, (match: string) => match[1].toUpperCase()).slice(1)
      return result.propName === 'on'
        ? UiCompletions[name].events
        : UiCompletions[name].completions
    }
    const { lineText } = getSelection()!
    if (optionsComponents && lineText?.slice(-1)[0] !== ' ')
      return optionsComponents
  }, ['"', '\'', '-', ' ', '@']))
}

export function deactivate() {

}
