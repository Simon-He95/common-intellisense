import fsp from 'node:fs/promises'
import * as vscode from 'vscode'
import { parse } from '@vue/compiler-sfc'
import type { SFCTemplateBlock } from '@vue/compiler-sfc'
import { parse as tsParser } from '@typescript-eslint/typescript-estree'
import { findUp } from 'find-up'

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
  return dfs(ast.children, position)
}

function dfs(children: any, position: vscode.Position) {
  for (const child of children) {
    const { loc, tag, props, children } = child
    if (!isInPosition(loc, position))
      continue
    if (props && props.length) {
      for (const prop of props) {
        if (isInPosition(prop.loc, position)) {
          if (!isStartTag(child.loc, position, child.tag.length))
            return false
          return {
            tag,
            propName: prop.name,
            props,
            type: 'props',
            isInTemplate: true,
          }
        }
      }
    }
    if (children && children.length) {
      const result = dfs(children, position) as any
      if (result)
        return result
    }
    if (child.tag) {
      if (!child.isSelfClosing && !isStartTag(child.loc, position, child.tag.length))
        return false
      return {
        type: 'props',
        tag: child.tag,
        props,
        isInTemplate: true,
      }
    }
    if (child.type === 2) {
      return {
        type: 'text',
        isInTemplate: true,
        props,
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
  const result = jsxDfs(children, position)
  const map = findJsxRefs(children)
  if (result)
    return Object.assign(result, map)

  return {
    type: 'script',
    ...map,
  }
}

function jsxDfs(children: any, position: vscode.Position) {
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
            tag: openingElement.name.name,
            propName: typeof prop.name === 'string' ? prop.type === 'EventHandler' ? 'on' : prop.name : prop.name.name,
            props: openingElement.attributes,
            propType: prop.type,
            type: 'props',
            isInTemplate,
          }
        }
      }
    }

    if (type === 'JSXElement' || type === 'Element' || (type === 'ReturnStatement' && argument.type === 'JSXElement'))
      isInTemplate = true

    if (child.children)
      children = child.children

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
      const result = jsxDfs(children, position) as any
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
          tag: openingElement.name.name,
          props: openingElement.attributes,
          propName: typeof target.name === 'string'
            ? target.type === 'EventHandler' ? 'on' : target.name
            : target.name.name,
          propType: target.type,
          isInTemplate,
        }
      }
      return {
        type: 'props',
        tag: openingElement.name.name,
        props: openingElement.attributes,
        isInTemplate,
      }
    }

    if (type === 'JSXText' || type === 'Text') {
      return {
        isInTemplate,
        type: 'text',
        props: openingElement?.attributes,
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
  const result = jsxDfs([html], position)
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

const UINames = ['element-ui', 'element-plus', 'antd', 'ant-design-vue', '@varlet/ui', 'vant', 'naive-ui', 'vuetify', '@chakra-ui/react', '@chakra-ui/vue', '@skeletonlabs/skeleton', 'primevue', 'quasar', '@nextui-org/react', '@nuxt/ui', 'shadcn-vue', 'radix-vue']
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

export function isStartTag(loc: any, position: vscode.Position, tagLen: number) {
  const posLine = position.line + 1
  const posCharacter = position.character + 3 + tagLen
  if (loc.start.line === posLine) {
    if (loc.end.line !== posLine)
      return true
    return loc.end.column >= posCharacter
  }
  return false
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
