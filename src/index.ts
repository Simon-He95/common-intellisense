import fsp from 'node:fs/promises'
import path from 'node:path'
import * as vscode from 'vscode'
import { addEventListener, createCompletionItem, getActiveText, getActiveTextEditorLanguageId, getCurrentFileUrl, getSelection, message, openExternalUrl, registerCommand, registerCompletionItemProvider, setCopyText } from '@vscode-use/utils'
import { CreateWebview } from '@vscode-use/createwebview'
import { parse } from '@vue/compiler-sfc'
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
  const filter = ['javascript', 'javascriptreact', 'typescript', 'typescriptreact', 'vue', 'svelte']
  context.subscriptions.push(addEventListener('activeText-change', (editor: vscode.TextEditor) => {
    // 找到当前活动的编辑器
    const visibleEditors = vscode.window.visibleTextEditors
    const currentEditor = visibleEditors.find(e => e === editor)
    if (currentEditor)
      findUI()
  }))
  context.subscriptions.push(registerCommand('intellisense.copyDemo', () => {
    setCopyText(global.commonIntellisense.copyDom)
    message.info('copy successfully')
  }))

  context.subscriptions.push(vscode.workspace.onDidChangeConfiguration((e) => {
    if (e.affectsConfiguration('common-intellisense.ui'))
      findUI()
  }))

  findUI()

  context.subscriptions.push(registerCompletionItemProvider(filter, async (document, position) => {
    const { lineText } = getSelection()!
    const p: any = position
    const preText = lineText.slice(0, vscode.window.activeTextEditor?.selection.active.character)
    let completionsCallback: any = null
    p.active = getEffectWord(preText)

    const result = parser(document.getText(), p)
    if (!result)
      return

    const lan = getActiveTextEditorLanguageId()
    const isVue = lan === 'vue'
    const deps = isVue ? getImportDeps(getActiveText()!) : {}
    const { character } = position
    const isPreEmpty = lineText[character - 1] === ' '
    const isValue = result.isValue
    if (!result.isInTemplate && result.refs && !isPreEmpty) {
      if (result.refsMap && Object.keys(result.refsMap).length) {
        if (lineText?.slice(-1)[0] === '.') {
          for (const key in result.refsMap) {
            const value = result.refsMap[key]
            if (isVue && (lineText.endsWith(`.$refs.${key}.`) || lineText.endsWith(`${key}.value.`)) && UiCompletions[value])
              return UiCompletions[value].methods
            else if (!isVue && lineText.endsWith(`${key}.current.`) && UiCompletions[value])
              return UiCompletions[value].methods
          }
        }
      }
      if (isVue && lineText.slice(character, character + 6) !== '.value' && !/\.value\.?$/.test(lineText.slice(0, character)))
        return result.refs.map((refName: string) => createCompletionItem({ content: refName, snippet: `${refName}.value`, documentation: `${refName}.value`, preselect: true, sortText: 'a' }))

      if (!isVue && lineText.slice(character, character + 8) !== '.current' && !/\.current\.?$/.test(lineText.slice(0, character)))
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
      const target = UiCompletions[name] || await findDynamicComponent(name, deps)

      if (!target)
        return

      const { events, completions } = target
      if (!completionsCallbacks.has(name)) {
        const _events = events[0]()
        eventCallbacks.set(name, _events)
        completionsCallbacks.set(name, [...completions[0](), ...(isVue ? [] : _events)])
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

          if (item.name === 'bind')
            return item.arg.content

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
        const events = isVue
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
    if (prefix.toLowerCase() === prefix ? optionsComponents.prefix.some((reg: string) => reg.startsWith(prefix)) : true) {
      const parent = result.parent
      const data = optionsComponents.data.map((c: any) => c()).flat()
      if (parent) {
        const parentTag = parent.tag || parent.name
        const suggestions = UiCompletions[toCamel(parentTag)[0].toUpperCase() + toCamel(parentTag).slice(1)]?.suggestions
        if (suggestions && suggestions.length) {
          data.forEach((child: any) => {
            const label = child.label.split(' ')[0]
            child.sortText = suggestions.includes(label) ? '1' : '2'
          })
        }
        else {
          data.forEach((child: any) => {
            child.sortText = '2'
          })
        }
      }

      return data
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
    async provideHover(document, position) {
      const editor = vscode.window.activeTextEditor
      if (!editor)
        return
      const range = document.getWordRangeAtPosition(position) as any
      const word = document.getText(range)
      const data = optionsComponents.data.map((c: any) => c()).flat()
      if (!data.length || !word)
        return new vscode.Hover('')

      const target = UiCompletions[toCamel(word)[0].toUpperCase() + toCamel(word).slice(1)] || await findDynamicComponent(word, {})

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
  UINames = []
  optionsComponents = null
  UiCompletions = null

  const config = vscode.workspace.getConfiguration('common-intellisense')
  const selectedUIs = config.get('ui') as string[]

  if (selectedUIs && selectedUIs.length && !selectedUIs.includes('auto')) {
    UINames = [...selectedUIs]

    optionsComponents = UINames.map((option: string) => `${option}Components`).reduce((result: any, name: string) => {
      const componentsNames = (UI as any)[name]?.()
      if (componentsNames) {
        const { prefix, data } = componentsNames
        result.prefix.push(prefix)
        result.data.push(data)
      }
      return result
    }, { prefix: [], data: [] })

    UiCompletions = UINames.reduce((result: any, option: string) =>
      Object.assign(result, (UI as any)[option]?.(extensionContext))
    , {} as any)
    return
  }

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
        result.data.push(data)
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

const IMPORT_REG = /import\s+([^\s]+)\s+from\s+['"]([^"']+.vue)['"]/g

export function getImportDeps(text: string) {
  const deps: Record<string, string> = {}
  for (const match of text.matchAll(IMPORT_REG)) {
    if (!match)
      continue
    const from = match[2]
    if (!/^[\.\/\@]/.test(from))
      continue
    deps[match[1]] = from
  }
  return deps
}

export function getAbosluteUrl(url: string) {
  return path.resolve(getCurrentFileUrl(), '..', url)
}

async function getTemplateParentElementName(url: string) {
  const code = await fsp.readFile(url, 'utf-8')
  // 如果有defineProps或者props的忽律，交给v-component-prompter处理
  const {
    descriptor: { template, script, scriptSetup },
  } = parse(code)

  if (script?.content && /^\s*props:\s*{/.test(script.content))
    return
  if (scriptSetup?.content && /defineProps\(/.test(scriptSetup.content))
    return
  if (!template?.ast?.children?.length)
    return

  let result = ''
  for (const child of template.ast.children) {
    const node = child as any
    if (node.tag) {
      if (result) // 说明template下不是唯一父节点
        return
      result = node.tag
    }
  }
  return result
}

async function findDynamicComponent(name: string, deps: Record<string, string>) {
  const prefix = optionsComponents.prefix
  let target = findDynamic(name, prefix)

  let dep
  if (!target && (dep = deps[name])) {
    // 只往下找一层
    const tag = await getTemplateParentElementName(getAbosluteUrl(dep))
    if (!tag)
      return
    target = findDynamic(tag, prefix)
  }
  return target
}

function findDynamic(tag: string, prefix: string[]) {
  let target = UiCompletions[tag]
  if (!target) {
    for (const p of prefix) {
      const t = UiCompletions[p.toUpperCase() + tag]
      if (t) {
        target = t
        break
      }
    }
  }
  return target
}

function getEffectWord(preText: string) {
  let i = preText.length - 1
  let active = ''
  while (preText[i] && (preText[i] !== ' ')) {
    active += preText[i]
    i--
  }
  return active
}
