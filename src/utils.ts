import fsp from 'node:fs/promises'
import * as vscode from 'vscode'
import { parse } from '@vue/compiler-sfc'
import { parse as tsParser } from '@typescript-eslint/typescript-estree'
import { findUp } from 'find-up'

// 引入vue-parser只在template中才处理一些逻辑
export function parser(code: string, position: vscode.Position) {
  const entry = vscode.window.activeTextEditor?.document.uri.fsPath
  if (!entry)
    return
  const suffix = entry.slice(entry.lastIndexOf('.') + 1)
  if (!suffix)
    return
  if (suffix === 'vue')
    return transformVue(code, position)
  if (/ts|js|jsx|tsx/.test(suffix))
    return parserJSX(code, position)

  return true
}

export function transformVue(code: string, position: vscode.Position) {
  const {
    descriptor: { template },
    errors,
  } = parse(code)
  if (errors.length || !template)
    return
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
          return {
            tag,
            propName: prop.name,
            props,
            type: 'props',
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
      return {
        type: 'props',
        tag: child.tag,
      }
    }
    return {
      type: 'text',
    }
  }
}

function isInPosition(loc: any, position: vscode.Position) {
  const { start, end } = loc
  const { line: startLine, column: startcharacter } = start
  const { line: endLine, column: endcharacter } = end
  const { line, character } = position
  if (line + 1 === startLine && character < startcharacter)
    return
  if (line + 1 === endLine && character > endcharacter)
    return
  if (line + 1 < startLine)
    return
  if (line + 1 > endLine)
    return
  return true
}

export function parserJSX(code: string, position: vscode.Position) {
  const ast = tsParser(code, { jsx: true, loc: true })
  return jsxDfs(ast.body, position)
}

function jsxDfs(children: any, position: vscode.Position) {
  for (const child of children) {
    let { loc, type, openingElement, body: children, argument, declarations, init } = child
    if (!isInPosition(loc, position))
      continue
    if (openingElement && openingElement.attributes.length) {
      for (const prop of openingElement.attributes) {
        if (isInPosition(prop.loc, position)) {
          return {
            tag: openingElement.name.name,
            propName: prop.name.name,
            props: openingElement.attributes,
            type: 'props',
          }
        }
      }
    }

    if (type === 'VariableDeclaration')
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
    if (type === 'JSXElement') {
      return {
        type: 'props',
        tag: openingElement.name.name,
      }
    }
    return {
      type: 'text',
    }
  }
}

const UINames = ['element-ui', 'element-plus', 'antd', 'ant-design-vue', 'varlet', 'vant']
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
