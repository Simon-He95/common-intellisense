const root = process.cwd()
const path = require('path')
const fg = require('fast-glob')
const fsp = require('node:fs/promises')

export async function run() {
  const folder = 'src/ui/arcoDesignVue'
  const name = 'arcoDesignVue2'
  const isHyphen = true /** 生成的模板中的使用是 true ? a-affix : AAfix */
  const url = path.resolve(root, `${folder}/${name}`)
  const entry = await fg(['**/*.json'], { dot: true, cwd: url })
  const imports = entry.map((_url: string) => `import ${_url.split('.')[0]} from './${_url}'`)
  const map = entry.map((_url: string) => {
    return `[${_url.split('.')[0]}, "xx", "<${_url.split('.')[0]}></${_url.split('.')[0]}>"],`
  })
  const template =
    `import { componentsReducer, propsReducer } from '../../utils'
${imports.join('\n')}

export function ${name}() {
  const map: any = [
  ${entry.map((_url: string) => `${_url.split('.')[0]},`).join('\n  ')}
  ]

  return propsReducer(map)
}

export function ${name}Components() {
  const map = [
    ${map.join('\n    ')}
  ]
  return componentsReducer(map, ${isHyphen})
}
`
  fsp.writeFile(path.resolve(root, `${folder}/${name}/index.ts`), template)
}

run()
