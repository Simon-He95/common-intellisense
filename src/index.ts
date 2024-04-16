import fsp from 'node:fs/promises'
import path from 'node:path'
import * as vscode from 'vscode'
import { addEventListener, createCompletionItem, createPosition, createRange, createSelect, getActiveText, getActiveTextEditor, getActiveTextEditorLanguageId, getConfiguration, getCurrentFileUrl, getLineText, getLocale, getPosition, getSelection, message, openExternalUrl, registerCommand, registerCompletionItemProvider, setConfiguration, setCopyText, updateText } from '@vscode-use/utils'
import { CreateWebview } from '@vscode-use/createwebview'
import { parse } from '@vue/compiler-sfc'
import { alias, detectSlots, findPkgUI, parser, registerCodeLensProviderFn } from './utils'
import UI from './ui'
import { UINames as UINamesMap, nameMap } from './constants'
import { toCamel } from './ui/utils'

let UINames: any = []
export let optionsComponents: any = null
let UiCompletions: any = null
const cacheMap: any = new Map()
let extensionContext: any = null
let eventCallbacks: any = new Map()
let completionsCallbacks: any = new Map()
let currentPkgUiNames: null | string[] = null
const isShowSlots = getConfiguration('common-intellisense.showSlots')

// todo: 补充example
export function activate(context: vscode.ExtensionContext) {
  extensionContext = context
  const isZh = getLocale().includes('zh')

  context.subscriptions.push(registerCodeLensProviderFn())

  const filter = ['javascript', 'javascriptreact', 'typescript', 'typescriptreact', 'vue', 'svelte']
  context.subscriptions.push(addEventListener('activeText-change', (editor: vscode.TextEditor) => {
    // 找到当前活动的编辑器
    const visibleEditors = vscode.window.visibleTextEditors
    const currentEditor = visibleEditors.find(e => e === editor)
    if (currentEditor)
      findUI()
  }))

  context.subscriptions.push(registerCommand('intellisense.copyDemo', (demo) => {
    setCopyText(demo)
    message.info('copy successfully')
  }))

  context.subscriptions.push(registerCommand('common-intellisense.pickUI', () => {
    if (currentPkgUiNames && currentPkgUiNames.length) {
      createSelect(currentPkgUiNames, {
        canPickMany: true,
        placeHolder: isZh ? '请指定你需要提示的 UI 库' : 'Please specify the UI library you need to prompt.',
        title: 'common intellisense',
      }).then((data) => {
        setConfiguration('common-intellisense.ui', data)
      })
    }
    else {
      message.error(isZh
        ? '当前项目中并没有安装 common intellisense 支持的 UI 库'
        : 'There is no UI library supported by common intelligence in the current project.')
    }
  }))

  context.subscriptions.push(addEventListener('config-change', (e) => {
    if (e.affectsConfiguration('common-intellisense.ui'))
      findUI()
  }))

  context.subscriptions.push(registerCommand('common-intellisense.import', (params, loc, _lineOffset) => {
    if (!params)
      return
    const [data, lib, _, prefix] = params
    if (!prefix)
      return
    const name = data.name.split('.')[0]
    const code = getActiveText()!
    const uiComponents = getImportUiComponents(code)
    let deps = data.suggestions?.length === 1
      ? data.suggestions.map((i: any) => {
        if (i.includes('-'))
          return toCamel(i).slice(prefix.length)

        return i
      })
      : []

    if (uiComponents[lib])
      deps.push(...uiComponents[lib].components)
    else
      deps.push(name)

    deps = [...new Set(deps)]
    if (uiComponents[lib]) {
      if (deps.includes(name))
        return
      deps.push(name)

      const offsetStart = code.match(uiComponents[lib].match[0])!.index!
      const offsetEnd = offsetStart + uiComponents[lib].match[0].length
      const posStart = getPosition(offsetStart)
      const posEnd = getPosition(offsetEnd)

      const str = `import { ${deps.join(', ')} } from '${lib}'`
      updateText((edit) => {
        edit.replace(createRange(posStart, posEnd), str)
      })
    }
    else {
      // 顶部导入
      let str = `import { ${deps.join(', ')} } from '${lib}'\n`
      const isVue = getActiveTextEditorLanguageId() === 'vue'
      let pos: any = null
      if (isVue) {
        if (loc) {
          pos = createPosition(loc.start.line, 0)
        }
        else {
          const match = code.match(/<script[^>]*>/)
          if (match) {
            const offset = match.index! + match[0].length
            pos = getPosition(offset)
            str = `\n${str}`
          }
          else {
            pos = createPosition(0, 0)
            str = `<script setup>\n${str}</script>`
          }
        }
      }
      else { pos = createPosition(0, 0) }
      updateText((edit) => {
        edit.insert(pos, str)
      })
    }
  }))

  findUI()
  // 监听pkg变化
  if (isShowSlots) {
    context.subscriptions.push(registerCommand('common-intellisense.slots', (child, name, offset = 0) => {
      const activeText = getActiveText()
      if (!activeText)
        return
      if (!child && UiCompletions) {
        const uiDeps = getUiDeps(activeText)
        detectSlots(UiCompletions, uiDeps)
        return
      }
      if (!child.children)
        return
      const lastChild = child.children[child.children.length - 1]
      let slotName = `#${name}`
      if (child.range)
        slotName = `v-slot:${name}`

      if (lastChild) {
        let pos = lastChild.loc.end
        if (lastChild.range) {
          pos = getPosition(lastChild.range[1] + offset + 1)
          const repeatColumn = pos.column - 1 < 0 ? 0 : pos.column - 1
          const empty = ' '.repeat(repeatColumn)
          updateText((edit) => {
            edit.insert(createPosition(pos.line, pos.column - 1 < 0 ? 0 : pos.column - 1), `  <template ${slotName}></template>\n${empty}`)
          })
        }
        else {
          const repeatColumn = pos.column - 1 < 0 ? 0 : pos.column - 1
          const empty = ' '.repeat(repeatColumn)
          updateText((edit) => {
            edit.insert(createPosition(pos.line - 1, pos.column - 1 < 0 ? 0 : pos.column - 1), `${empty}<template ${slotName}></template>\n${empty}`)
          })
        }
      }
      else {
        let index: number
        if (child.range)
          index = child.openingElement.range[1] + offset
        else
          index = child.loc.start.offset + child.loc.source.indexOf('></') + 1

        const pos = getPosition(index)
        const empty = ' '.repeat(child.loc.start.column - 1)
        updateText((edit) => {
          edit.insert(createPosition(pos), `\n${empty}  <template ${slotName}></template>\n${empty}`)
        })
      }
    }))

    context.subscriptions.push(addEventListener('text-change', () => {
      const activeText = getActiveText()
      if (UiCompletions && activeText) {
        const uiDeps = getUiDeps(activeText)
        detectSlots(UiCompletions, uiDeps)
      }
    }))
  }

  context.subscriptions.push(registerCompletionItemProvider(filter, async (document, position) => {
    const { lineText } = getSelection()!
    const p: any = position
    const activeTextEditor = getActiveTextEditor()
    if (!activeTextEditor)
      return
    const preText = lineText.slice(0, activeTextEditor.selection.active.character)
    let completionsCallback: any = null
    p.active = getEffectWord(preText)

    const result = parser(document.getText(), p)
    if (!result)
      return
    const lan = getActiveTextEditorLanguageId()
    const isVue = lan === 'vue' && result.template
    const code = getActiveText()
    if (!code)
      return
    const deps = isVue ? getImportDeps(code) : {}
    const uiDeps = getUiDeps(code)
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
        if (isVue && lineText.slice(character, character + 6) !== '.value' && !/\.value\.?$/.test(lineText.slice(0, character)))
          return result.refs.map((refName: string) => createCompletionItem({ content: refName, snippet: `${refName}.value`, documentation: `${refName}.value`, preselect: true, sortText: 'a' }))

        if (!isVue && lineText.slice(character, character + 8) !== '.current' && !/\.current\.?$/.test(lineText.slice(0, character)))
          return result.refs.map((refName: string) => createCompletionItem({ content: refName, snippet: `${refName}.current`, documentation: `${refName}.current`, preselect: true, sortText: 'a' }))
      }
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
      let target = UiCompletions[name] || await findDynamicComponent(name, deps)
      const importUiSource = uiDeps[name]
      if (importUiSource && target.uiName !== importUiSource) {
        for (const p of optionsComponents.prefix.filter(Boolean)) {
          const realName = p[0].toUpperCase() + p.slice(1) + name
          const newTarget = UiCompletions[realName]
          if (!newTarget)
            continue
          if (newTarget.uiName === importUiSource) {
            target = newTarget
            break
          }
        }
      }

      if (!target)
        return

      const { events, completions, uiName } = target
      const key = uiName + name
      if (!completionsCallbacks.has(key)) {
        const _events = events[0](isVue)
        eventCallbacks.set(key, _events)
        completionsCallbacks.set(key, [...completions[0](isVue), ...(isVue ? [] : _events)])
      }

      if (!eventCallbacks.has(key))
        eventCallbacks.set(key, events[0](isVue))

      completionsCallback = completionsCallbacks.get(key)
      const hasProps = result.props
        ? result.props.map((item: any) => {
          if (item.name === 'on' && item.arg)
            return `${item.arg.content}`

          if (typeof item.name === 'object' && item.name.name !== 'on')
            return item.name.name

          if (item.name === 'model' && item?.loc?.source?.startsWith('v-model'))
            return item.loc.source.split('=')[0]

          if (item.name === 'bind')
            return item?.arg?.content

          if (item.name !== 'on')
            return item.name

          return false
        }).filter(Boolean)
        : []
      if (propName === 'on') {
        return eventCallbacks.get(key).filter((item: any) => !hasProps.find((prop: any) => item?.params?.[1] === prop))
      }
      else if (propName) {
        const r: any[] = []
        completionsCallback.filter((item: any) => isValue
          ? hasProps.find((prop: any) => item?.params?.[1] === prop)
          : !hasProps.find((prop: any) => item?.params?.[1] === prop))
          .filter((item: any) => {
            const reg = propName === 'bind'
              ? new RegExp('^:')
              : new RegExp(`^:?${propName}`)
            return reg.test(item.label)
          })
          .map((item: any) => {
            let label = item.label
            if (result.isDynamic && label[0] === ':')
              label = label.slice(1)

            item.propType.split('/').forEach((p: string) => {
              r.push(createCompletionItem({
                content: p.trim(),
                snippet: p.trim().replace(/'`/g, ''),
                documentation: item.documentation,
                detail: item.detail,
                type: item.kind,
              }))
            })
            return item.label.match(/^\w+={[^}]*}/)
              ? undefined
              : createCompletionItem(isValue
                ? ({
                    content: label,
                    snippet: label.replace(/^\w+=\"([^"]+)\".*/, '$1'),
                    documentation: item.documentation,
                    detail: item.detail,
                    type: item.kind,
                  })
                : ({
                    content: label,
                    snippet: label.split(' ')[0],
                    documentation: item.documentation,
                    detail: item.detail,
                    type: item.kind,
                  }))
          },

          ).filter(Boolean)
        const events = isVue
          ? []
          : isValue
            ? []
            : eventCallbacks.get(key).filter((item: any) => !hasProps.find((prop: any) => item?.params?.[1] === prop))
        if (propName === 'o')
          return [...events, ...r]

        return [...r, ...events]
      }
      else if (hasProps.length) {
        return completionsCallback.filter((item: any) => !hasProps.find((prop: any) => item?.params?.[1] === prop))
      }
      else {
        return completionsCallback
      }
    }
    else if (!result.isInTemplate || isPreEmpty || !optionsComponents) {
      return
    }
    const prefix = lineText.trim().split(' ').slice(-1)[0]
    if (prefix.toLowerCase() === prefix ? optionsComponents.prefix.some((reg: string) => prefix.startsWith(reg) || reg.startsWith(prefix)) : true) {
      const parent = result.parent
      const data = optionsComponents.data.map((c: any) => c()).flat()
      if (parent) {
        const parentTag = parent.tag || parent.name
        const suggestions = UiCompletions[toCamel(parentTag)[0].toUpperCase() + toCamel(parentTag).slice(1)]?.suggestions
        if (suggestions && suggestions.length) {
          data.forEach((child: any) => {
            const label = child.label.split(' ')[0]
            child.sortText = suggestions.includes(label) ? '1' : '2'
            child.loc = result.loc
          })
        }
        else {
          data.forEach((child: any) => {
            child.sortText = '2'
            child.loc = result.loc
          })
        }
      }

      return data
    }
  }, (item: any) => {
    if (!item.command) {
      if (item.params[2]) {
        item.command = {
          title: 'common-intellisense-import',
          command: 'common-intellisense.import',
          arguments: [item.params, item.loc, (item.snippet || item.content).split('\n').length - 1],
        }
      }
      else {
        item.command = {
          title: 'common-intellisense.slots',
          command: 'common-intellisense.slots',
          arguments: [],
        }
      }
    }

    return item
  }, ['"', '\'', '-', ' ', '@', '.', ':']))

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
        setCopyText(data).then(() => {
          const isZh = getLocale().includes('zh')
          message.info(`${isZh ? '复制成功' : 'copy successfully'}!  ✅`)
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
      if (!optionsComponents || !UiCompletions)
        return

      const editor = getActiveTextEditor()
      if (!editor)
        return

      const range = document.getWordRangeAtPosition(position)
      if (!range)
        return

      let word = document.getText(range)
      // 只针对template中的内容才提示
      const lineText = getLineText(position.line)
      if (!lineText)
        return

      const code = document.getText()
      if (lineText[range.start.character - 1] !== '<') {
        const result = parser(code, position as any)
        if (!result)
          return
        if (!result.propName)
          return
        const propName = result.propName === 'bind' ? result.props[0].arg.content : result.propName
        if (['class', 'className', 'style', 'id'].includes(propName))
          return
        const tag = toCamel(result.tag)[0].toUpperCase() + toCamel(result.tag).slice(1)
        const r = UiCompletions[tag] || await findDynamicComponent(tag, {})
        if (!r)
          return
        const completions = result.isEvent ? r.events[0]?.() : r.completions[0]?.()
        if (!completions)
          return
        const detail = getHoverAttribute(completions, propName)
        if (!detail)
          return
        return new vscode.Hover(`## Details \n\n${detail}`)
      }
      const data = optionsComponents.data.map((c: any) => c()).flat()
      if (!data?.length || !word)
        return new vscode.Hover('')
      word = toCamel(word)[0].toUpperCase() + toCamel(word).slice(1)
      let target = UiCompletions[word] || await findDynamicComponent(word, {})
      if (!target)
        return
      const uiDeps = getUiDeps(code)
      const importUiSource = uiDeps[word]
      if (importUiSource && target.uiName !== importUiSource) {
        for (const p of optionsComponents.prefix.filter(Boolean)) {
          const realName = p[0].toUpperCase() + p.slice(1) + word
          const newTarget = UiCompletions[realName]
          if (!newTarget)
            continue
          if (newTarget.uiName === importUiSource) {
            target = newTarget
            break
          }
        }
      }

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
  cacheMap.clear()
  eventCallbacks = null
  completionsCallbacks = null
}

// const filters = ['js', 'ts', 'jsx', 'tsx', 'vue', 'svelte']
export const urlCache = new Map()
export function findUI() {
  UINames = []
  optionsComponents = null
  UiCompletions = null
  eventCallbacks.clear()
  completionsCallbacks.clear()
  currentPkgUiNames = null
  cacheMap.clear()

  const selectedUIs = getConfiguration('common-intellisense.ui') as string[]

  const cwd = getCurrentFileUrl()
  if (!cwd || cwd === 'exthhost')
    return

  if (urlCache.has(cwd)) {
    const uis = urlCache.get(cwd)
    if (uis && uis.length)
      updateCompletions(uis)
    return
  }

  findPkgUI(cwd).then(({ uis }: any = {}) => {
    urlCache.set(cwd, uis)
    if (!uis || !uis.length)
      return
    updateCompletions(uis)
  })

  function updateCompletions(uis: any) {
    const uisName: string[] = []
    uis.forEach(([uiName, version]: any) => {
      let _version = version.match(/[^~]?([0-9]+)./)![1]
      if (uiName in alias) {
        const v = alias[uiName]
        const m = v.match(/([^1-9^]+)\^?([0-9])/)!
        uiName = m[1]
        _version = m[2]
      }
      const name = uiName.replace(/-(\w)/g, (_: string, v: string) => v.toUpperCase())
      uisName.push(`${nameMap[name] ?? name}${_version}`)
    })

    if (selectedUIs && selectedUIs.length && !selectedUIs.includes('auto'))
      UINames = [...selectedUIs]
    else
      UINames = uisName

    currentPkgUiNames = uisName
    optionsComponents = UINames.map((option: string) => `${option}Components`).reduce((result: any, name: string) => {
      let componentsNames
      if (cacheMap.has(name)) {
        componentsNames = cacheMap.get(name)
      }
      else {
        componentsNames = (UI as any)[name]?.()
        cacheMap.set(name, componentsNames)
      }
      if (componentsNames) {
        for (const componentsName of componentsNames) {
          const { prefix, data } = componentsName
          if (!result.prefix.includes(prefix))
            result.prefix.push(prefix)
          result.data.push(data)
        }
      }
      return result
    }, { prefix: [], data: [] })

    UiCompletions = UINames.reduce((result: any, option: string) => {
      let completion
      if (cacheMap.has(option)) {
        completion = cacheMap.get(option)
      }
      else {
        completion = (UI as any)[option]?.(extensionContext)
        cacheMap.set(option, completion)
      }
      return Object.assign(result, completion)
    }, {} as any)
    if (isShowSlots) {
      const activeText = getActiveText()
      if (activeText)
        detectSlots(UiCompletions, getUiDeps(activeText))
    }
  }
}

export function isSamePrefix(label: string, key: string) {
  let labelName = label.split('=')[0]
  if (labelName.indexOf(' ')) {
    // 防止匹配到描述中的=
    labelName = labelName.split(' ')[0]
  }
  return labelName === key
}

const IMPORT_REG = /import\s+([^\s]+)\s+from\s+['"]([^"']+.vue)['"]/g

export function getImportDeps(text: string) {
  text = text.replace(/\/\*[\s\S]*?\*\/|\/\/.*/g, '')
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

const UIIMPORT_REG = /import\s+{([^}]+)}\s+from\s+['"]([^"']+)['"]/g

export function getUiDeps(text: string) {
  if (!text)
    return
  text = text.replace(/\/\*[\s\S]*?\*\/|\/\/.*/g, '')
  const deps: any = {}
  for (const match of text.matchAll(UIIMPORT_REG)) {
    if (!match)
      continue
    const from = match[2]
    if (!UINamesMap.includes(from))
      continue
    const _deps = match[1].trim().replace(/\s+/g, ' ').split(' ')
    _deps.forEach((d) => {
      deps[d] = from
    })
  }
  return deps
}
export function getAbsoluteUrl(url: string) {
  return path.resolve(getCurrentFileUrl()!, '..', url)
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

export async function findDynamicComponent(name: string, deps: Record<string, string>) {
  const prefix = optionsComponents.prefix
  let target = findDynamic(name, prefix)

  let dep
  if (!target && (dep = deps[name])) {
    // 只往下找一层
    const tag = await getTemplateParentElementName(getAbsoluteUrl(dep))
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
      if (!p)
        continue
      const t = UiCompletions[p[0].toUpperCase() + p.slice(1) + tag]
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

function getHoverAttribute(attributeList: any[], attr: string) {
  return attributeList.filter(a =>
    toCamel(a?.params?.[1]?.replace('v-model:', '') || '') === toCamel(attr),
  ).map(i => `- ${i.label}`).join('\n\n')
}

const IMPORT_UI_REG = /import\s+{([^\}]+)}\s+from\s+['"]([^"']+)['"]/g

function getImportUiComponents(text: string) {
  // 读取需要按需导入的ui库， 例如 antd ,拿出导入的components
  const deps: Record<string, any> = {}
  for (const match of text.matchAll(IMPORT_UI_REG)) {
    if (!match)
      continue
    const from = match[2]
    if (UINamesMap.includes(from)) {
      deps[from] = {
        match,
        components: match[1].split(',').map(i => i.trim()),
      }
    }
  }
  return deps
}
