const root = process.cwd()
const path = require('node:path')
const fsp = require('node:fs/promises')
const fg = require('fast-glob')

export async function run() {
  const folder = 'src/ui/dcloudioUniApp'
  const lib = '@dcloudio/uni-app'
  const name = 'dcloudioUniApp3'
  const isHyphen = false /** 生成的模板中的使用是 true ? a-affix : AAfix */
  const isReact = false
  const url = path.resolve(root, `${folder}/${name}`)
  const entry = await fg(['**/*.json'], { dot: true, cwd: url })
  const imports = entry.map((_url: string) => `import ${toCamel(_url.split('.')[0])} from './${_url}'`)
  let prefix = 'uni'
  const map = entry.map((_url: string) => {
    let tagName = `${toCamel(_url.split('.')[0])}`
    const importName = tagName
    if (isHyphen) {
      tagName = hyphenate(tagName)
      // prefix = `'${tagName.split('-')[0]}'`
      return `[${importName}, ${importName}.name, \`<${prefix ? prefix + '-' : ''}${tagName}></${prefix ? prefix + '-' : ''}${tagName}>\`],`

    }
    return `[${importName}, ${importName}.name, \`<\${${tagName}.name}></\${${tagName}.name}\`],`
  })
  const template
    = `import { componentsReducer, propsReducer } from '../../utils'
import { getComponentsMap, getPropsMap } from './mapping'
// import directives from '../directives.json'

export function ${name}() {
  return propsReducer({
    uiName: '${lib}',
    lib: '${lib}',
    map: getPropsMap(),
  })
}

export function ${name}Components() {
  return componentsReducer({
    map: getComponentsMap(),
    isSeperatorByHyphen: ${isHyphen},
    prefix: '${prefix}',
    isReact: ${isReact},
    lib: '${lib}',
    // directives: directives.${name},
  })
}
`
// 生成 index.ts
  fsp.writeFile(path.resolve(root, `${folder}/${name}/index.ts`), template)
  // 生成 mapping.ts
  fsp.writeFile(path.resolve(root, `${folder}/${name}/mapping.ts`), `${imports.join('\n')}

export function getPropsMap() {
  return [
    ${entry.map((_url: string) => `${toCamel(_url.split('.')[0])},`).join('\n    ')}
  ]
}

export function getComponentsMap() {
  return [
    ${map.join('\n    ')}
  ]
}`)
}

run()

function hyphenate(s: string): string {
  return s.replace(/([A-Z])/g, '-$1').toLowerCase().replace(/^-/, '')
}

export function toCamel(s: string) {
  return s.replace(/-(\w)/g, (_, v) => v.toUpperCase())
}
