const fg = require('fast-glob')
const path = require('node:path')
const root = process.cwd()
const fsp = require('node:fs/promises')

export async function run() {
  const folder = 'src/ui/vuetify'
  const url = path.resolve(root, folder)
  const entry = await fg(['**/*.json'], { dot: true, cwd: url, absolute: true })

  for (const realUrl of entry) {
    let jsonStr = await fsp.readFile(realUrl, 'utf8')
    let changed = false
    try {
      const json = JSON.parse(jsonStr)
      console.log({ json })
      if (Array.isArray(json)) {
        for (const item of json) {
          if (!item.props)
            continue
          for (const k in item.props) {
            const value = item.props[k]
            const type = value.type
            if (!type)
              continue
            if (type.includes('('))
              continue
            if (type.includes('<'))
              continue
            if (type.includes('{'))
              continue
            if (type.includes('['))
              continue
            if (!/^\s*(['`"][^"`']*['`"]\s*\|)+\s*[`'"][^"`']*[`'"]/gm.test(type) && !type.includes('\''))
              continue
            const newType = type.replace(/['`"]/g, '').split('|').filter(Boolean).join(' / ').replace(/\s+/g, ' ')
            value.type = newType
            changed = true
          }
          jsonStr = JSON.stringify(json, null, 2)
        }
      } else {

        if (!json.props)
          continue
        for (const k in json.props) {
          const value = json.props[k]
          const type = value.type
          if (!type)
            continue
          if (type.includes('('))
            continue
          if (type.includes('<'))
            continue
          if (type.includes('{'))
            continue
          if (type.includes('['))
            continue
          if (!/^\s*(['`"][^"`']*['`"]\s*\|)+\s*[`'"][^"`']*[`'"]/gm.test(type) && !type.includes('\''))
            continue
          const newType = type.replace(/['`"]/g, '').split('|').filter(Boolean).join(' / ').replace(/\s+/g, ' ')
          value.type = newType
          changed = true
        }
        jsonStr = JSON.stringify(json, null, 2)
      }

      if (changed)
        fsp.writeFile(realUrl, jsonStr)
    } catch (error) {
      continue
    }
  }
}
run()
