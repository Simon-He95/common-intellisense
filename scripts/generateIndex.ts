const root = process.cwd()
const path = require('node:path')
const fsp = require('node:fs/promises')
const fg = require('fast-glob')

export async function run() {
  const folder = 'src/ui/nuxtUiPro'
  const lib = 'nuxtUiPro1'
  const name = 'nuxtUiPro1'
  const isHyphen = false /** 生成的模板中的使用是 true ? a-affix : AAfix */
  const url = path.resolve(root, `${folder}/${name}`)
  const entry = await fg(['**/*.json'], { dot: true, cwd: url })
  const imports = entry.map((_url: string) => `import ${_url.split('.')[0]} from './${_url}'`)
  let prefix = ''
  const map = entry.map((_url: string) => {
    let tagName = `${_url.split('.')[0]}`
    if (isHyphen) {
      tagName = hyphenate(tagName)
      prefix = `'${tagName.split('-')[0]}'`
    }
    return `[${_url.split('.')[0]}, ${_url.split('.')[0]}.name, \`<\${${tagName}.name}></\${${tagName}.name}\`],`
  })
  const template
    = `import { componentsReducer, propsReducer } from '../../utils'
${imports.join('\n')}

export function ${name}() {
  const map: any = [
  ${entry.map((_url: string) => `${_url.split('.')[0]},`).join('\n  ')}
  ]

  return propsReducer('${lib}', map, '${prefix}')
}

export function ${name}Components() {
  const map = [
    ${map.join('\n    ')}
  ]
  return componentsReducer(map, ${isHyphen}, '${prefix}', '${lib}')
}
`
  fsp.writeFile(path.resolve(root, `${folder}/${name}/index.ts`), template)
}

run()

function hyphenate(s: string): string {
  return s.replace(/([A-Z])/g, '-$1').toLowerCase().replace(/^-/, '')
}
