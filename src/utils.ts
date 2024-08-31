import fsp from 'node:fs/promises'
import * as vscode from 'vscode'
import { parse } from '@vue/compiler-sfc'
import type { SFCTemplateBlock } from '@vue/compiler-sfc'
import { parse as tsParser } from '@typescript-eslint/typescript-estree'
import { findUp } from 'find-up'
import { createRange, getActiveText, getActiveTextEditor, getActiveTextEditorLanguageId, getConfiguration, getCurrentFileUrl, getLocale, getOffsetFromPosition, getPosition, isInPosition, registerCodeLensProvider, watchFiles } from '@vscode-use/utils'
import { traverse } from '@babel/types'
import type { VineCompilerHooks, VineDiagnostic, VineFileCtx } from '@vue-vine/compiler'
import {
  compileVineTypeScriptFile,
  createCompilerCtx,
} from '@vue-vine/compiler'
import { UINames } from './constants'
import { isVine, isVue, toCamel } from './ui/utils'
import { findDynamicComponent, findUI, optionsComponents, urlCache } from '.'

const { parse: svelteParser } = require('svelte/compiler')

// 引入vue-parser只在template中才处理一些逻辑
let isInTemplate = false

export function parser(code: string, position: vscode.Position & { active: string }) {
  const entry = getCurrentFileUrl()
  if (!entry)
    return
  const isVine = entry.endsWith('.vine.ts')
  if (isVine) {
    return parserVine(code, position)
  }
  else {
    const suffix = entry.slice(entry.lastIndexOf('.') + 1)
    if (!suffix)
      return
    isInTemplate = false
    if (suffix === 'vue') {
      const result = transformVue(code, position)
      if (!result)
        return
      if (!result.refs?.length || !result.template)
        return result
      const refsMap = findRefs(result.template)
      return Object.assign(result, { refsMap })
    }
    if (/ts|js|jsx|tsx/.test(suffix))
      return parserJSX(code, position)

    if (suffix === 'svelte')
      return parserSvelte(code, position)
  }

  return true
}

export function transformVue(code: string, position: vscode.Position, offset = 0) {
  const {
    descriptor: { template, script, scriptSetup },
    errors,
  } = parse(code)

  if (errors.length)
    return
  const _script = script || scriptSetup
  if (!template) {
    if (_script?.lang === 'tsx') {
      const r = parserJSX(_script.content, position)
      r.loc = _script.loc
      return r
    }
    return
  }
  if (_script && isInPosition(_script.loc, position, offset)) {
    const content = _script.content!
    const refs: string[] = []
    for (const match of content.matchAll(/(const|let|var)\s+([\w$]+)\s*=\s*ref[^()]*\(/g)) {
      if (match)
        refs.push(match[2])
    }
    return {
      type: 'script',
      refs,
      template,
    }
  }
  if (!isInPosition(template.loc, position, offset))
    return
  // 在template中
  const { ast } = template

  const r = dfs(ast.children, template, position, offset)
  if (r) {
    r.loc = _script?.loc
    return r
  }
  return r
}

export function transformVine(vineFileCtx: VineFileCtx, position: vscode.Position) {
  const targetInPositionNode = vineFileCtx.vineCompFns.find(item => isInPosition(item.fnDeclNode.loc, position))
  if (!targetInPositionNode)
    return

  const { templateAst, fnDeclNode, templateStringNode } = targetInPositionNode
  const children = templateAst?.children
  if (!children)
    return
  const parent = fnDeclNode
  const result = dfs(children, parent, position, templateStringNode?.quasi.quasis[0].start || 0)
  const refsMap = findRef(children, {})
  if (result)
    return Object.assign(result, refsMap)

  return {
    type: 'script',
    refsMap,
  }
}

function dfs(children: any, parent: any, position: vscode.Position, offset = 0) {
  for (const child of children) {
    const { loc, tag, props, children } = child
    if (!isInPosition(loc, position, offset))
      continue

    if (tag) {
      const isTag = isInPosition({
        start: loc.start,
        end: {
          line: loc.start.line,
          column: loc.start.column + tag.length,
        },
      }, position, offset)

      if (isTag) {
        return {
          tag,
          props,
          type: 'tag',
          isInTemplate: true,
          parent: {
            tag: parent.tag ? parent.tag : 'template',
            props: parent.props || [],
          },
          template: parent,
        }
      }
    }

    if (props && props.length) {
      for (const prop of props) {
        if (isInPosition(prop.loc, position, offset)) {
          if (!isInAttribute(child, position, offset))
            return false
          if ((prop.name === 'bind' || prop.name === 'on') && prop.exp && isInPosition(prop.exp.loc, position)) {
            return {
              tag,
              propName: prop.exp?.content !== undefined,
              props,
              type: 'props',
              isInTemplate: true,
              isValue: prop.exp?.content !== undefined,
              parent: {
                tag: parent.tag ? parent.tag : 'template',
                props: parent.props || [],
              },
              isDynamic: prop.name === 'bind',
              isEvent: prop.name === 'on',
              template: parent,
            }
          }
          else {
            let propName = prop.name
            if (prop.arg && isInPosition(prop.arg.loc, position))
              propName = prop.arg.content
            else if (prop.exp && isInPosition(prop.exp.loc, position))
              propName = prop.exp.content

            return {
              tag,
              propName,
              props,
              type: 'props',
              isInTemplate: true,
              isValue: prop.value?.content !== undefined,
              parent: {
                tag: parent.tag ? parent.tag : 'template',
                props: parent.props || [],
              },
              template: parent,
            }
          }
        }
      }
    }
    if (children && children.length) {
      const result = dfs(children, child, position, offset) as any
      if (result)
        return result
    }
    if (tag) {
      if (!isInAttribute(child, position, offset))
        return false
      return {
        type: 'props',
        tag,
        props,
        isInTemplate: true,
        parent: {
          tag: parent.tag ? parent.tag : 'template',
          props: parent.props || [],
        },
        template: parent,
      }
    }
    if (child.type === 2 || child.content?.type === 2) {
      return {
        type: 'text',
        isInTemplate: true,
        props,
        parent: {
          tag: parent.tag ? parent.tag : 'template',
          props: parent.props || [],
        },
        template: parent,
      }
    }
    return
  }
}

export function getReactRefsMap() {
  const ast = tsParser(getActiveText()!, { jsx: true, loc: true })
  const children = ast.body
  return findJsxRefs(children)
}

export function parserJSX(code: string, position: vscode.Position) {
  try {
    const ast = tsParser(code, { jsx: true, loc: true })
    const children = ast.body
    const result = jsxDfs(children, null, position)
    const map = findJsxRefs(children)
    if (result)
      return Object.assign(result, map)

    return {
      type: 'script',
      ...map,
    }
  }
  catch (error) {
    console.error(error)
  }
}

function jsxDfs(children: any, parent: any, position: vscode.Position) {
  for (const child of children) {
    let { loc, type, openingElement, body: children, argument, declarations, init } = child
    child.name = openingElement?.name.name
    if (!loc)
      loc = convertPositionToLoc(child)

    if (!isInPosition(loc, position))
      continue
    if (!openingElement && child.attributes) {
      openingElement = {
        name: {
          name: child.name,
        },
        attributes: child.attributes,
      }
    }
    if (openingElement && openingElement.attributes.length) {
      for (const prop of openingElement.attributes) {
        if (!prop.loc)
          prop.loc = convertPositionToLoc(prop)
        if (isInPosition(prop.loc, position)) {
          return {
            tag: openingElement.name.type === 'JSXMemberExpression'
              ? `${openingElement.name.object.name}.${openingElement.name.property.name}`
              : openingElement.name.name,
            propName: typeof prop.name === 'string' ? prop.type === 'EventHandler' ? 'on' : prop.name : prop.name.name,
            props: openingElement.attributes,
            propType: prop.type,
            type: 'props',
            isInTemplate,
            isValue: prop.value
              ? Array.isArray(prop.value)
                ? prop.value[0]?.raw !== undefined
                : prop.value.type === 'JSXExpressionContainer'
                  ? prop.value?.expression !== undefined
                  : prop.value?.value !== undefined
              : false,
            parent,
            isEvent: prop.type === 'EventHandler' || (prop.type === 'JSXAttribute' && prop.name.name.startsWith('on')),
          }
        }
      }
    }

    if (type === 'JSXElement' || type === 'Element' || (type === 'ReturnStatement' && (argument.type === 'JSXElement' || argument.type === 'JSXFragment')))
      isInTemplate = true

    if (child.children) { children = child.children }
    else if (type === 'ExportNamedDeclaration') { children = child.declaration }
    else if (type === 'ObjectExpression') { children = child.properties }
    else if (type === 'Property' && child.value.type === 'FunctionExpression') { children = child.value.body.body }
    else if (type === 'ExportDefaultDeclaration') {
      if (child.declaration.type === 'FunctionDeclaration')
        children = child.declaration.body.body
      else
        children = child.declaration.arguments
    }
    else if (type === 'JSXExpressionContainer' || type === 'ChainExpression') {
      if (child.expression.type === 'CallExpression') { children = child.expression.arguments }
      else if (child.expression.type === 'ConditionalExpression') {
        children = [
          child.expression.alternate,
          child.expression.consequent,
        ].filter(Boolean)
      }
      else if (child.expression.type === 'LogicalExpression') {
        children = [
          child.expression.left,
          child.expression.right,
        ]
      }
      else { children = child.expression }
    }
    else if (type === 'TemplateLiteral') {
      children = child.expressions
    }
    else if (type === 'ConditionalExpression') {
      children = [
        child.alternate,
        child.consequent,
      ].filter(Boolean)
    }
    else if (type === 'ArrowFunctionExpression') {
      children = child.body
    }
    else if (type === 'VariableDeclaration') { children = declarations }
    else if (type === 'VariableDeclarator') { children = init }
    else if (type === 'ReturnStatement') { children = argument }
    else if (type === 'JSXElement') { children = child.children }
    else if (type === 'ExportNamedDeclaration') { children = child.declaration.body }
    else if (type === 'CallExpression') {
      children = child.arguments
    }
    if (children && !Array.isArray(children))
      children = [children]

    if (children && children.length) {
      const p = child.type === 'JSXElement' ? { name: openingElement.name.name, props: openingElement.attributes } : null
      const result = jsxDfs(children, p, position) as any
      if (result)
        return result
    }

    if (type === 'JSXElement' || type === 'Element' || type === 'InlineComponent') {
      const target = openingElement.attributes.find((item: any) => isInPosition(item.loc, position) || item.value === null)
      if (!openingElement) {
        openingElement = {
          name: {
            name: child.name,
          },
          attributes: child.attributes,
        }
      }
      if (target) {
        return {
          type: 'props',
          tag: openingElement.name.type === 'JSXMemberExpression'
            ? `${openingElement.name.object.name}.${openingElement.name.property.name}`
            : openingElement.name.name,
          props: openingElement.attributes,
          propName: target.value
            ? typeof target.name === 'string'
              ? target.type === 'EventHandler'
                ? 'on'
                : target.name
              : target.name.name
            : '',
          propType: target.type,
          isInTemplate,
          parent,
        }
      }
      const isTag = isInPosition({
        start: loc.start,
        end: {
          line: loc.start.line,
          column: loc.start.column + child.name.length,
        },
      }, position)
      return {
        type: isTag ? 'tag' : 'props',
        tag: openingElement.name.type === 'JSXMemberExpression'
          ? `${openingElement.name.object.name}.${openingElement.name.property.name}`
          : openingElement.name.name,
        props: openingElement.attributes,
        isInTemplate,
        parent,
      }
    }

    if (type === 'JSXText' || type === 'Text') {
      return {
        isInTemplate,
        type: 'text',
        props: openingElement?.attributes,
        parent,
      }
    }
    return
  }
}

function findJsxRefs(childrens: any, map: any = {}, refs: any = []) {
  for (const child of childrens) {
    let { type, openingElement, body: children, argument, declarations, init, id, expression } = child
    if (child.children) {
      children = child.children
    }
    else if (type === 'VariableDeclaration') {
      children = declarations
    }
    else if (type === 'VariableDeclarator') {
      children = init
      if (init.callee && init.callee.name === 'useRef') {
        refs.push(id.name)
        continue
      }
    }
    else if (type === 'ExpressionStatement') {
      children = expression.arguments
    }
    else if (type === 'ReturnStatement') {
      children = argument
    }
    else if (type === 'JSXElement') {
      children = child.children
    }
    else if (type === 'ExportDefaultDeclaration') {
      if (child.declaration.type === 'FunctionDeclaration') {
        children = child.declaration.body.body
      }
    }
    else if (!children) {
      continue
    }
    if (children && !Array.isArray(children))
      children = [children]
    if (openingElement && openingElement.attributes.length) {
      for (const prop of openingElement.attributes) {
        if (prop.name.name === 'ref') {
          const value = prop.value?.expression?.name || prop.value.value
          map[value] = transformTagName(openingElement.name.name)
        }
      }
    }

    if (children && children.length)
      findJsxRefs(children, map, refs)
  }
  return {
    refsMap: map,
    refs,
  }
}

export function findRefs(template: SFCTemplateBlock) {
  const { ast } = template
  return findRef(ast.children, {})
}
function findRef(children: any, map: any) {
  for (const child of children) {
    const { tag, props, children } = child
    if (props && props.length) {
      for (const prop of props) {
        const { name, value } = prop
        if (!value)
          continue
        const { content } = value
        if (name !== 'ref' || !content)
          continue
        const tagName = transformTagName(tag)
        map[content] = tagName
      }
    }
    if (children && children.length)
      findRef(children, map) as any
  }
  return map
}

export function parserSvelte(code: string, position: vscode.Position) {
  const { html } = svelteParser(code)
  const result = jsxDfs([html], null, position)
  const map = {
    refsMap: {},
    refs: [],
  }

  if (result)
    return Object.assign(result, map)

  return {
    type: 'script',
    ...map,
  }
}

let stop: any = null
export const alias = getConfiguration('common-intellisense.alias') as Record<string, string>
export async function findPkgUI(cwd?: string) {
  if (!cwd)
    return
  const pkg = await findUp('package.json', { cwd })
  if (!pkg)
    return
  if (stop)
    stop()
  stop = watchFiles(pkg, {
    onChange() {
      urlCache.clear()
      findUI()
    },
  })
  const p = JSON.parse(await fsp.readFile(pkg, 'utf-8'))
  const { dependencies, devDependencies } = p
  const result = []
  const aliasUiNames = Object.keys(alias)
  if (dependencies) {
    for (const key in dependencies) {
      if (UINames.includes(key) || aliasUiNames.includes(key))
        result.push([key, dependencies[key]])
    }
  }
  if (devDependencies) {
    for (const key in devDependencies) {
      if (UINames.includes(key) || aliasUiNames.includes(key))
        result.push([key, devDependencies[key]])
    }
  }
  return { pkg, uis: result }
}

export function transformTagName(name: string) {
  return name[0].toUpperCase() + name.replace(/(-\w)/g, (match: string) => match[1].toUpperCase()).slice(1)
}

export function isInAttribute(child: any, position: any, offset: number) {
  const len = child.props.length
  let end = null
  const start = {
    column: child.loc.start.column + child.tag.length + 1,
    line: child.loc.start.line,
    offset: child.loc.start.offset + child.tag.length + 1,
  }
  if (!len) {
    const childNode = child.children?.[0]
    if (childNode) {
      end = {
        line: childNode.loc.start.line,
        column: childNode.loc.start.column - 1,
        offset: childNode.loc.start.offset - 1,
      }
    }
    else {
      if (child.isSelfClosing) {
        end = {
          line: child.loc.end.line,
          column: child.loc.end.column - 2,
          offset: child.loc.end.offset - 2,
        }
      }
      else {
        const startOffset = start.offset
        const match = child.loc.source.slice(child.tag.length + 1).match('>')!
        const endOffset = startOffset + match.index
        const _offset = getOffsetFromPosition(position)!
        return (startOffset + offset < _offset) && (_offset <= endOffset + offset)
      }
    }
  }
  else {
    const offsetX = child.props[len - 1].loc.end.offset - child.loc.start.offset
    const x = child.loc.source.slice(offsetX).match('>').index!
    end = {
      column: child.props[len - 1].loc.end.column + 1 + x,
      line: child.props[len - 1].loc.end.line,
      offset: child.props[len - 1].loc.end.offset + 1 + x,
    }
  }

  const _offset = getOffsetFromPosition(position)!
  const startOffset = start.offset
  const endOffset = end.offset
  return (startOffset + offset < _offset) && (_offset <= endOffset + offset)
}

export function convertPositionToLoc(data: any) {
  const { start, end } = data
  const activeTextEditor = getActiveTextEditor()!

  const document = activeTextEditor.document
  return {
    start: convertOffsetToLineColumn(document, start),
    end: convertOffsetToLineColumn(document, end),
  }
}

function convertOffsetToPosition(document: vscode.TextDocument, offset: number) {
  return document.positionAt(offset)
}

function convertOffsetToLineColumn(document: vscode.TextDocument, offset: number) {
  const position = convertOffsetToPosition(document, offset)
  const lineText = document.lineAt(position.line).text
  const line = position.line + 1
  const column = position.character + 1
  const lineOffset = document.offsetAt(position)

  return { line, column, lineText, lineOffset }
}

const modules: any = {
  children: [],
  offset: 0,
}
export async function detectSlots(UiCompletions: any, uiDeps: any) {
  const children = (await getTemplateAst(UiCompletions, uiDeps)).filter(item => item.children.length)

  if (!children.length) {
    modules.children = []
    modules.offset = 0
    return
  }

  modules.children = children
}

export function registerCodeLensProviderFn() {
  const isZh = getLocale().includes('zh')
  return registerCodeLensProvider(['vue', 'javascriptreact', 'typescriptreact', 'typescript'], {
    provideCodeLenses() {
      const languageId = getActiveTextEditorLanguageId()
      if (languageId === 'typescript' && !isVine())
        return []
      const result: vscode.CodeLens[] = []
      const children = modules.children
      children.forEach((child: any) => {
        const offset = child.offset
        child.children.forEach((m: any) => {
          const { child, slots } = m
          const range = child.loc
          const filters: string[] = []
          for (const c of Array.from(child.children) as any) {
            if (c.type === 'JSXElement') {
              if (c.openingElement.name.name !== 'template')
                continue
              for (const p of c.openingElement.attributes) {
                const namespace = p.name.namespace.name
                if (namespace === 'v-slot') {
                  const slotName = p.name.name.name
                  filters.push(slotName)
                  break
                }
              }
            }
            else if (c.tag === 'template' && c.props) {
              for (const p of c.props) {
                if (p.name === 'slot') {
                  const slotName = p.arg.content
                  filters.push(slotName)
                  break
                }
              }
            }
            else if (c.codegenNode?.tag === 'template' && c.codegenNode.props) {
              for (const p of c.codegenNode.props) {
                if (p.name === 'slot') {
                  const slotName = p.arg.content
                  filters.push(slotName)
                  break
                }
              }
            }
          }
          slots.filter((s: any) => !filters.includes(s.name)).forEach((s: any, i: number) => {
            const { name, description, description_zh } = s
            // 计算偏移量
            let codeLensRange = null
            if (isVine()) {
              const fixedStart = getPosition(range.start.offset + offset).position
              const fixedEnd = getPosition(range.end.offset + offset).position
              codeLensRange = createRange(fixedStart, fixedEnd)
            }
            else {
              codeLensRange = createRange(range.start.line - 1, range.start.column, range.end.line - 1, range.end.column)
            }
            result.push(new vscode.CodeLens(codeLensRange, {
              title: `${i === 0 ? 'Slots: ' : ''}${name}`,
              tooltip: isZh ? description_zh : description,
              command: 'common-intellisense.slots',
              arguments: [child, name, offset],
            }))
          })
        })
      })
      return result
    },
  })
}

async function getTemplateAst(UiCompletions: any, uiDeps: any): Promise<[{ children: any, offset: number }] | []> {
  const code = getActiveText()!

  if (isVue()) {
    const {
      descriptor: { template, script, scriptSetup },
    } = parse(code)
    const _script = script || scriptSetup
    if (!template) {
      if (_script?.lang === 'tsx') {
        const children = findAllJsxElements(_script.content)
        return [{
          children: await findUiTag(children, UiCompletions, [], new Set(), uiDeps),
          offset: _script.loc.start.offset,
        }]
      }
      return []
    }
    return [{
      children: await findUiTag(template.ast.children, UiCompletions, [], new Set(), uiDeps),
      offset: 0,
    }]
  }
  else if (isVine()) {
    const { vineFileCtx } = createVineFileCtx('', code)
    if (!vineFileCtx.vineCompFns)
      return []

    return await Promise.all(vineFileCtx.vineCompFns.map(async (item) => {
      const r = {
        children: await findUiTag(item.templateAst?.children, UiCompletions, [], new Set(), uiDeps),
        offset: item.templateStringNode?.quasi.quasis[0].start || 0,
      }
      return r
    })) as any
  }
  else if (['javascriptreact', 'typescriptreact'].includes(getActiveTextEditorLanguageId()!)) {
    const children = findAllJsxElements(code)
    return [{
      children: await findUiTag(children, UiCompletions, [], new Set(), uiDeps),
      offset: 0,
    }]
  }
  return []
}
const originTag = ['div', 'span', 'ul', 'li', 'ol', 'p', 'main', 'header', 'footer', 'template', 'img', 'aside', 'body', 'a', 'video', 'table', 'th', 'tr', 'td', 'form', 'input', 'label', 'button', 'article', 'section']

async function findUiTag(children: any, UiCompletions: any, result: any[] = [], cacheMap = new Set(), uiDeps: any) {
  for (const child of children) {
    let tag: string = child.tag
    if (child.type === 'JSXElement')
      tag = child.openingElement.name.name

    if (!tag)
      continue
    const nextChildren = child.children

    if (nextChildren?.length)
      await findUiTag(nextChildren, UiCompletions, result, cacheMap, uiDeps)
    const range = child.range ?? child.loc

    if (cacheMap.has(range))
      continue
    if (originTag.includes(tag))
      continue
    const tagName = toCamel(`-${tag}`)
    let target = UiCompletions[tagName] || await findDynamicComponent(tagName, {})
    const importUiSource = uiDeps[tagName]
    if (!target)
      continue
    if (importUiSource && target.uiName !== importUiSource) {
      for (const p of optionsComponents.prefix.filter(Boolean)) {
        const realName = p[0].toUpperCase() + p.slice(1) + tagName
        const newTarget = UiCompletions[realName]
        if (!newTarget)
          continue
        if (newTarget.uiName === importUiSource) {
          target = newTarget
          break
        }
      }
    }
    if (!target || !target.rawSlots?.length)
      continue
    cacheMap.add(range)
    result.push({
      child,
      slots: target.rawSlots,
    })
  }
  return result
}

function findAllJsxElements(code: string) {
  const ast = tsParser(code, { jsx: true, loc: true, range: true }) as any
  const results: any = []
  traverse(ast, (node) => {
    if (node.type === 'JSXElement') {
      results.push(node)
    }
    else if (node.type === 'ObjectExpression') {
      const _node: any = node.properties?.find((p: any) => p?.key?.name === 'render')
        || node.properties?.find((p: any) => p?.key?.name === 'setup')
      const t = _node?.value
      if (t) {
        traverse(t, (nextNode) => {
          if (nextNode.type === 'JSXElement') {
            const tag = (nextNode.openingElement.name as any)?.name
            if (tag && !originTag.includes(tag))
              results.push(nextNode)
          }
        })
      }
    }
  })
  return results
}

/**
 * escapeRegExp
 * @description 对字符串中的特殊字符进行转义以在正则表达式中使用它
 * @param str string
 * @returns string
 */
export function escapeRegExp(str: string) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
}

export function parserVine(code: string, position: vscode.Position) {
  const { vineFileCtx } = createVineFileCtx('', code)
  if (!vineFileCtx.vineCompFns.length)
    return

  return transformVine(vineFileCtx, position)
}

export function createVineFileCtx(sourceFileName: string, source: string) {
  const compilerCtx = createCompilerCtx({
    envMode: 'module',
    vueCompilerOptions: {
      // 'module' will break Volar virtual code's mapping
      mode: 'function',
      // These options below is for resolving conflicts
      // with original compiler's mode: 'module'
      cacheHandlers: false,
      prefixIdentifiers: false,
      scopeId: null,
    },
    inlineTemplate: false,
  })
  const vineCompileErrs: VineDiagnostic[] = []
  const vineCompileWarns: VineDiagnostic[] = []
  const compilerHooks: VineCompilerHooks = {
    onError: err => vineCompileErrs.push(err),
    onWarn: warn => vineCompileWarns.push(warn),
    getCompilerCtx: () => compilerCtx,
  }
  const vineFileCtx = compileVineTypeScriptFile(
    source,
    sourceFileName,
    {
      compilerHooks,
      babelParseOptions: {
        tokens: true,
      },
    },
  )

  return {
    vineFileCtx,
    vineCompileErrs,
    vineCompileWarns,
  }
}
