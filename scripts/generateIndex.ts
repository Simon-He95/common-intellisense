const root = process.cwd()
const path = require('path')
const fg = require('fast-glob')
const fsp = require('node:fs/promises')

export async function run() {
  const url = path.resolve(root, 'src/ui/arcoDesign/arcoDesign2')
  console.log(url)
  const entry = await fg(['**/*.json'], { dot: true, cwd: url })
  console.log(entry)
  const imports = entry.map((_url: string) => `import ${_url.split('.')[0]} from './${_url}'`)
  const map = entry.map((_url: string) => {
    return `[${_url.split('.')[0]}, xx, "<${_url.split('.')[0]}></${_url.split('.')[0]}>"],`
  })
  const template =
    `import { componentsReducer, propsReducer } from '../../utils'
${imports.join('\n')}

export function arcoDesign20() {
  const map: any = [
  ${entry.map((_url: string) => `${_url.split('.')[0]},`).join('\n')}
  ]

  return propsReducer(map)
}

export function arcoDesign2Components() {
  const map = [
    ${map.join('\n')}
  ]
  return componentsReducer(map, false)
}
`
  fsp.writeFile(path.resolve(root, 'src/ui/arcoDesign/arcoDesign2/index.ts'), template)
}

run()
