import * as vscode from 'vscode'
import { addEventListener, getSelection, registerCompletionItemProvider } from '@vscode-use/utils'
import { findPkgUI, parser } from './utils'
import UI from './ui'

let UINames: string[] = []
let optionsComponents: any = null
let UiCompletions: any = null

export function activate(context: vscode.ExtensionContext) {
  const filter = ['javascript', 'javascriptreact', 'typescriptreact', 'html', 'vue', 'css']
  // registerCommand('common-intellisense.pickerUI', () => {
  //   createSelect([
  //     'elementUI',
  //     'antDesign',
  //     'elementPlus',
  //     'vant',
  //     'varlet',
  //   ], {
  //     title: '选择你使用的UI框架',
  //     canPickMany: true,
  //   }).then((options: any) => {
  //     if (!options) {
  //       message.error('加载错误，请稍后重新选择UI框架')
  //       return
  //     }
  //     optionsComponents = options.map((option: string) => `${option}Components`).reduce((result: any, name: string) => {
  //       result.push(...(UI as any)[name]())
  //       return result
  //     }, [])
  //     UiCompletions = options.reduce((result: any, option: string) =>
  //       Object.assign(result, (UI as any)[option]?.())
  //       , {} as any)
  //   })
  // })

  addEventListener('activeText-change', () => {
    findUI()
  })

  findUI()

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

function findUI() {
  findPkgUI(vscode.window.activeTextEditor?.document.uri.fsPath).then((uis) => {
    if (!uis)
      return
    const uisName: string[] = []
    uis.forEach(([uiName, version]) => {
      const _version = version.match(/[^~\s]([0-9]+)./)![1]
      uisName.push(`${uiName.replace(/-(\w)/, (_: string, v: string) => v.toUpperCase())}${_version}`)
    })
    if (uisName.every(name => UINames.includes(name)))
      return
    UINames = uisName

    optionsComponents = UINames.map((option: string) => `${option}Components`).reduce((result: any, name: string) => {
      const componentsNames = (UI as any)[name]?.()
      if (componentsNames)
        result.push(...componentsNames)
      return result
    }, [])
    UiCompletions = UINames.reduce((result: any, option: string) =>
      Object.assign(result, (UI as any)[option]?.())
    , {} as any)
  })
}
