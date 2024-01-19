import fsp from 'node:fs/promises'
import * as vscode from 'vscode'
import { parse } from '@vue/compiler-sfc'
import type { SFCTemplateBlock } from '@vue/compiler-sfc'
import { parse as tsParser } from '@typescript-eslint/typescript-estree'
import { findUp } from 'find-up'
import { createRange, getActiveText, getOffsetFromPosition, registerCodeLensProvider } from '@vscode-use/utils'
import { UINames } from './constants'
import { toCamel } from './ui/utils'

const { parse: svelteParser } = require('svelte/compiler')

// 引入vue-parser只在template中才处理一些逻辑
let isInTemplate = false

export function parser(code: string, position: vscode.Position & { active: string }) {
  const entry = vscode.window.activeTextEditor?.document.uri.fsPath
  if (!entry)
    return
  const suffix = entry.slice(entry.lastIndexOf('.') + 1)
  if (!suffix)
    return
  isInTemplate = false
  if (suffix === 'vue') {
    const result = transformVue(code, position)
    if (!result.refs)
      return result
    const refsMap = findRefs(result.template)
    return Object.assign(result, { refsMap })
  }
  if (/ts|js|jsx|tsx/.test(suffix))
    return parserJSX(code, position)

  if (suffix === 'svelte')
    return parserSvelte(code, position)

  return true
}

export function transformVue(code: string, position: vscode.Position) {
  const {
    descriptor: { template, script, scriptSetup },
    errors,
  } = parse(code)
  if (errors.length || !template)
    return
  const _script = script || scriptSetup
  if (_script && isInPosition(_script.loc, position)) {
    const content = _script.content!
    const refs: string[] = []
    for (const match of content.matchAll(/(const|let|var)\s+([\w\$_0-9]+)\s*=\s*ref[^\()]*\(/g)) {
      if (match)
        refs.push(match[2])
    }
    return {
      type: 'script',
      refs,
      template,
    }
  }
  if (!isInPosition(template.loc, position))
    return
  // 在template中
  const { ast } = template
  return dfs(ast.children, template, position)
}

function dfs(children: any, parent: any, position: vscode.Position) {
  for (const child of children) {
    const { loc, tag, props, children } = child
    if (!isInPosition(loc, position))
      continue
    if (props && props.length) {
      for (const prop of props) {
        if (isInPosition(prop.loc, position)) {
          if (!isInAttribute(child, position))
            return false
          if ((prop.name === 'bind' || prop.name === 'on') && prop.arg) {
            return {
              tag,
              propName: prop.arg.content,
              props,
              type: 'props',
              isInTemplate: true,
              isValue: !!prop?.value?.content,
              parent: {
                tag: parent.tag ? parent.tag : 'template',
                props: parent.props || [],
              },
              isDynamic: prop.name === 'bind',
              isEvent: prop.name === 'on',
            }
          }
          else {
            return {
              tag,
              propName: prop.name,
              props,
              type: 'props',
              isInTemplate: true,
              isValue: !!prop?.value?.content,
              parent: {
                tag: parent.tag ? parent.tag : 'template',
                props: parent.props || [],
              },
            }
          }
        }
      }
    }
    if (children && children.length) {
      const result = dfs(children, child, position) as any
      if (result)
        return result
    }
    if (child.tag) {
      if (!isInAttribute(child, position))
        return false
      return {
        type: 'props',
        tag: child.tag,
        props,
        isInTemplate: true,
        parent: {
          tag: parent.tag ? parent.tag : 'template',
          props: parent.props || [],
        },
      }
    }
    if (child.type === 2) {
      return {
        type: 'text',
        isInTemplate: true,
        props,
        parent: {
          tag: parent.tag ? parent.tag : 'template',
          props: parent.props || [],
        },
      }
    }
    return
  }
}

function isInPosition(loc: any, position: vscode.Position) {
  const { start, end } = loc
  const { line: startLine, column: startcharacter } = start
  const { line: endLine, column: endcharacter } = end
  const { line, character } = position
  if (line + 1 === startLine && character < startcharacter)
    return
  if (line + 1 === endLine && character > endcharacter - 1)
    return
  if (line + 1 < startLine)
    return
  if (line + 1 > endLine)
    return
  return true
}

export function parserJSX(code: string, position: vscode.Position) {
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

function jsxDfs(children: any, parent: any, position: vscode.Position) {
  for (const child of children) {
    let { loc, type, openingElement, body: children, argument, declarations, init } = child
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
                ? !!prop.value[0]?.raw
                : prop.value.type === 'JSXExpressionContainer'
                  ? !!prop.value?.expression
                  : !!prop?.value?.value
              : false,
            parent,
            isEvent: prop.type === 'EventHandler' || (prop.type === 'JSXAttribute' && prop.name.name.startsWith('on')),
          }
        }
      }
    }

    if (type === 'JSXElement' || type === 'Element' || (type === 'ReturnStatement' && (argument.type === 'JSXElement' || argument.type === 'JSXFragment')))
      isInTemplate = true

    if (child.children)
      children = child.children
    else if (type === 'ExportNamedDeclaration')
      children = child.declaration.body
    else if (type === 'ObjectExpression')
      children = child.properties
    else if (type === 'Property' && child.value.type === 'FunctionExpression')
      children = child.value.body.body
    else if (type === 'ExportDefaultDeclaration')
      children = child.declaration.arguments
    else if (type === 'VariableDeclaration')
      children = declarations
    else if (type === 'VariableDeclarator')
      children = init
    else if (type === 'ReturnStatement')
      children = argument
    else if (type === 'JSXElement')
      children = child.children
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
      return {
        type: 'props',
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
    if (type === 'VariableDeclaration') {
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

function findRefs(template: SFCTemplateBlock) {
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

export async function findPkgUI(cwd?: string) {
  if (!cwd)
    return
  const pkg = await findUp('package.json', { cwd })
  if (!pkg)
    return
  const p = JSON.parse(await fsp.readFile(pkg, 'utf-8'))
  const { dependencies, devDependencies } = p
  const result = []
  if (dependencies) {
    for (const key in dependencies) {
      if (UINames.includes(key))
        result.push([key, dependencies[key]])
    }
  }
  if (devDependencies) {
    for (const key in devDependencies) {
      if (UINames.includes(key))
        result.push([key, devDependencies[key]])
    }
  }
  return { pkg, uis: result }
}

export function transformTagName(name: string) {
  return name[0].toUpperCase() + name.replace(/(-\w)/g, (match: string) => match[1].toUpperCase()).slice(1)
}

export function isInAttribute(child: any, position: any) {
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
        const offset = getOffsetFromPosition(position)!
        return (startOffset < offset) && (offset <= endOffset)
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

  const offset = getOffsetFromPosition(position)!
  const startOffset = start.offset
  const endOffset = end.offset
  return (startOffset < offset) && (offset < endOffset)
}

export function convertPositionToLoc(data: any) {
  const { start, end } = data
  const document = vscode.window.activeTextEditor!.document
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

export let dispose: vscode.Disposable
export function detectSlots(UiCompletions: any) {
  const children = getTemplateAst(UiCompletions)
  if (!children || !children.length)
    return

  if (dispose)
    dispose.dispose()

  dispose = registerCodeLensProvider(['vue'], {
    provideCodeLenses() {
      const result: vscode.CodeLens[] = []
      children.forEach((m) => {
        const { child, slots } = m
        const range = child.loc
        const filters: string[] = []

        for (const c of Array.from(child.children) as any) {
          if (c.tag === 'template' && c.props) {
            for (const p of c.props) {
              if (p.name === 'slot') {
                const slotName = p.arg.content
                filters.push(slotName)
                break
              }
            }
          }
        }

        slots.filter((s: any) => !filters.includes(s.name)).forEach((s: any, i: number) => {
          const { name, description } = s
          result.push(new vscode.CodeLens(createRange(range.start.line - 1, range.start.column, range.end.line - 1, range.end.column), {
            title: `${i === 0 ? 'Slots: ' : ''}${name}`,
            tooltip: description,
            command: 'common-intellisense.slots',
            arguments: [child, name],
          }))
        })
      })
      return result
    },
  })
}

function getTemplateAst(UiCompletions: any) {
  const code = getActiveText()!
  const {
    descriptor: { template },
  } = parse(code)
  if (!template)
    return
  return findUiTag(template.ast.children, UiCompletions)
}

function findUiTag(children: any, UiCompletions: any, result: any[] = []) {
  for (const child of children) {
    if (!child.tag)
      continue
    const nextChildren = child.children

    if (nextChildren)
      findUiTag(nextChildren, UiCompletions, result)

    const tag = toCamel(`-${child.tag}`)
    const target = UiCompletions[tag]
    if (!target || !target.rawSlots?.length)
      continue
    result.push({
      child,
      slots: target.rawSlots,
    })
  }
  return result
}
