const fsp = require('node:fs/promises')

const root = process.cwd()
const path = require('node:path')

const IMPORT_REG = /import (\w+) from/g
export async function transformJsonName() {
  const url = path.resolve(root, 'src/ui/elementPlus/elementPlus2/index.ts')
  const content = await fsp.readFile(url, 'utf-8')
  const imports = []
  for (const match of content.matchAll(IMPORT_REG))
    imports.push(match[1])

  let newContent = content

  for (const match of content.matchAll(/\['a-([^']+)',/g)) {
    const name = `A${match[1].split('-').map((item: any, i: number) => item[0].toUpperCase() + item.slice(1)).join('')}`
    console.log(name)
    if (imports.includes(name))
      newContent = newContent.replace(match[0], `[${name},`)
  }
  fsp.writeFile(url, newContent)
}

transformJsonName()
