import * as vscode from 'vscode'
import { addEventListener, copyText, createCompletionItem, getActiveTextEditorLanguageId, getSelection, message, openExternalUrl, registerCommand, registerCompletionItemProvider } from '@vscode-use/utils'
import { CreateWebview } from '@vscode-use/createwebview'
import { findPkgUI, parser } from './utils'
import UI from './ui'
import { nameMap } from './constants'
import { toCamel } from './ui/utils'

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
let eventCallbacks: any = new Map()
let completionsCallbacks: any = new Map()

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
    const { lineText } = getSelection()!
    const p: any = position
    const preText = lineText.slice(0, vscode.window.activeTextEditor?.selection.active.character)
    let i = preText.length - 1
    let active = ''
    let completionsCallback: any = null
    while (preText[i] && (preText[i] !== ' ')) {
      active += preText[i]
      i--
    }
    p.active = active
    const result = parser(document.getText(), p)
    if (!result)
      return
    const { character } = position
    const isPreEmpty = lineText[character - 1] === ' '
    const lan = getActiveTextEditorLanguageId()
    const isValue = result.isValue
    if (!result.isInTemplate && result.refs && !isPreEmpty) {
      if (result.refsMap && Object.keys(result.refsMap).length) {
        if (lineText?.slice(-1)[0] === '.') {
          for (const key in result.refsMap) {
            const value = result.refsMap[key]
            if (lan === 'vue' && (lineText.endsWith(`.$refs.${key}.`) || lineText.endsWith(`${key}.value.`)) && UiCompletions[value])
              return UiCompletions[value].methods
            else if (lan !== 'vue' && lineText.endsWith(`${key}.current.`) && UiCompletions[value])
              return UiCompletions[value].methods
          }
        }
      }
      if (lan === 'vue' && lineText.slice(character, character + 6) !== '.value')
        return result.refs.map((refName: string) => createCompletionItem({ content: refName, snippet: `${refName}.value`, documentation: `${refName}.value`, preselect: true, sortText: 'a' }))
      if (lan !== 'vue' && lineText.slice(character, character + 8) !== '.current')
        return result.refs.map((refName: string) => createCompletionItem({ content: refName, snippet: `${refName}.current`, documentation: `${refName}.current`, preselect: true, sortText: 'a' }))
    }
    if (result.parent && result.tag === 'template') {
      const parentTag = result.parent.tag || result.parent.name
      if (parentTag) {
        const name = toCamel(parentTag)
        const component = UiCompletions[name[0].toUpperCase() + name.slice(1)]
        const slots = component?.slots
        if (slots)
          return slots
      }
    }
    if (UiCompletions && result?.type === 'props') {
      const name = result.tag[0].toUpperCase() + result.tag.replace(/(-\w)/g, (match: string) => match[1].toUpperCase()).slice(1)
      if (result.propName === 'icon')
        return UiCompletions.icons

      const propName = result.propName
      const { events, completions } = UiCompletions[name]
      if (!completionsCallbacks.has(name)) {
        const _events = events[0]()
        eventCallbacks.set(name, _events)
        completionsCallbacks.set(name, [...completions[0](), ...(lan === 'vue' ? [] : _events)])
      }

      if (!eventCallbacks.has(name))
        eventCallbacks.set(name, events[0]())

      completionsCallback = completionsCallbacks.get(name)
      const hasProps = result.props
        ? result.props.map((item: any) => {
          if (item.name === 'on' && item.arg)
            return `${item.arg.content}`

          if (typeof item.name === 'object' && item.name.name !== 'on')
            return item.name.name

          if (item.name === 'model' && item?.loc?.source?.startsWith('v-model'))
            return item.loc.source.split('=')[0]

          if (item.name !== 'on')
            return item.name

          return false
        }).filter(Boolean)
        : []
      if (propName === 'on') {
        return eventCallbacks.get(name).filter((item: any) => !hasProps.find((prop: any) => isSamePrefix(item.label, prop)))
      }
      else if (propName) {
        const result = completionsCallback.filter((item: any) => isValue
          ? hasProps.find((prop: any) => isSamePrefix(item.label, prop))
          : !hasProps.find((prop: any) => isSamePrefix(item.label, prop))).filter((item: any) => item.label.startsWith(propName)).map((item: any) =>
          item.label.match(/^\w+={[^}]*}/)
            ? undefined
            : createCompletionItem(isValue
              ? ({
                  content: item.label,
                  snippet: item.label.replace(/^\w+=\"([^"]+)\".*/, '$1'),
                  documentation: item.documentation,
                  detail: item.detail,
                  type: item.kind,
                })
              : ({
                  content: item.label,
                  documentation: item.documentation,
                  detail: item.detail,
                  type: item.kind,
                })),
        ).filter(Boolean)
        const events = lan === 'vue'
          ? []
          : isValue
            ? []
            : eventCallbacks.get(name).filter((item: any) => !hasProps.find((prop: any) => isSamePrefix(item.label, prop)))
        if (propName === 'o')
          return [...events, ...result]

        return [...result, ...events]
      }
      else if (hasProps.length) {
        return completionsCallback.filter((item: any) => !hasProps.find((prop: any) => isSamePrefix(item.label, prop)))
      }
      else {
        return completionsCallback
      }
    }
    else if (!result.isInTemplate || isPreEmpty || !optionsComponents) {
      return
    }
    const prefix = lineText.trim().split(' ').slice(-1)[0]
    if (prefix.toLowerCase() === prefix ? optionsComponents.prefix.some((reg: string) => prefix.startsWith(reg)) : true) {
      const parent = result.parent
      if (parent) {
        const parentTag = parent.tag || parent.name
        const suggestions = UiCompletions[toCamel(parentTag)[0].toUpperCase() + toCamel(parentTag).slice(1)]?.suggestions
        if (suggestions && suggestions.length) {
          optionsComponents.data.forEach((child: any) => {
            const label = child.label.split(' ')[0]
            child.sortText = suggestions.includes(label) ? '1' : '2'
          })
        }
        else {
          optionsComponents.data.forEach((child: any) => {
            child.sortText = '2'
          })
        }
      }

      return optionsComponents.data
    }
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
  context.subscriptions.push(registerCommand('intellisense.openDocumentExternal', (args) => {
    // 注册全局的link点击时间
    const url = args.link
    if (!url)
      return
    openExternalUrl(url)
  }))
  const LANS = ['javascriptreact', 'typescript', 'typescriptreact', 'vue', 'svelte', 'solid', 'swan', 'react', 'js', 'ts', 'tsx', 'jsx']

  context.subscriptions.push(vscode.languages.registerHoverProvider(LANS, {
    provideHover(document, position) {
      const editor = vscode.window.activeTextEditor
      if (!editor)
        return
      const range = document.getWordRangeAtPosition(position) as any
      const word = document.getText(range)
      if (!optionsComponents.data.length || !word)
        return new vscode.Hover('')

      const target = UiCompletions[toCamel(word)[0].toUpperCase() + toCamel(word).slice(1)]
      if (!target)
        return

      const tableDocument = target.tableDocument

      if (tableDocument)
        return new vscode.Hover(tableDocument)
    },
  }))
}

export function deactivate() {
  UINames = null
  optionsComponents = null
  UiCompletions = null
  cacheMap = null
  eventCallbacks = null
  completionsCallbacks = null
}

const filters = ['js', 'ts', 'jsx', 'tsx', 'vue', 'svelte']

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

function isSamePrefix(label: string, key: string) {
  let labelName = label.split('=')[0]
  if (labelName.indexOf(' ')) {
    // 防止匹配到描述中的=
    labelName = labelName.split(' ')[0]
  }
  return labelName === key
}
