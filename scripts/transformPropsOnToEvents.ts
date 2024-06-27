const fg = require('fast-glob')
const path = require('node:path')
const root = process.cwd()
const fsp = require('node:fs/promises')

export async function run() {
  const folder = 'src/ui/bitsUi'
  const url = path.resolve(root, folder)
  const entry = await fg(['**/*.json'], { dot: true, cwd: url })

  for (const relative of entry) {
    const realUrl = path.resolve(url, relative)
    let jsonStr = await fsp.readFile(realUrl, 'utf8')
    try {
      const json = JSON.parse(jsonStr)
      if (!json.props)
        continue
      let changed = false
      const needsDeleteKeys = []
      for (const k in json.props) {
        if (!k.startsWith('on'))
          continue
        needsDeleteKeys.push(k)
        const value = json.props[k]
        const description = value.description
        json.events.push(
          { name: k, description, description_zh: description }
        )
        changed = true
      }
      for (const item of json.events) {
        if (!item.name.startsWith('on')) {
          item.name = 'on'+item.name[0].toUpperCase()+item.name.slice(1)
          changed = true
        }
      }
      if (needsDeleteKeys.length) {
        needsDeleteKeys.forEach(k => delete json.props[k])
      }
      if (changed) {
        jsonStr = JSON.stringify(json, null, 2)
        fsp.writeFile(realUrl, jsonStr)
      }
    } catch (error) {
      continue
    }
  }
}
run()
