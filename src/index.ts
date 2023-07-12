import * as vscode from 'vscode'
import { addEventListener, getSelection, registerCompletionItemProvider } from '@vscode-use/utils'
import { findPkgUI, parser } from './utils'
import UI from './ui'

let UINames: any = []
let optionsComponents: any = null
let UiCompletions: any = null
let cacheMap: any = {}

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

  addEventListener('activeText-change', (editor: vscode.TextEditor) => {
    // 找到当前活动的编辑器
    const visibleEditors = vscode.window.visibleTextEditors
    const currentEditor = visibleEditors.find(e => e === editor)
    if (currentEditor)
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
  UINames = null
  optionsComponents = null
  UiCompletions = null
  cacheMap = null
}

function findUI() {
  const cwd = vscode.window.activeTextEditor?.document.uri.fsPath
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
