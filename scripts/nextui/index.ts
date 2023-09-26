const fg = require('fast-glob')
const path = require('node:path')

const base = process.cwd()
const fsp = require('node:fs/promises')

const cwd = path.resolve(base, 'scripts/nextui')

const quasar2ComponentsMap: string[][] = []
const quasar2Map: string[] = []
const quasar2Importers: string[] = []

const extendsMap: any = {
  color: {
    type: 'String',
    description: 'Color name for component from the Quasar Color Palette',
    value: '',
    default: ''
  },
}
async function run() {
  const entry = await fg(['*.json'], { dot: true, cwd })
  entry.forEach(async (item: any) => {
    const name = item.slice(0, -5)
    quasar2Importers.push(`import ${name} from './${name}.json'`)
    quasar2Map.push(name)
    quasar2ComponentsMap.push([name, name, `<${name}></${name}>`])

    const json = JSON.parse(await fsp.readFile(path.resolve(cwd, item), 'utf-8'))
    const { props: _props, methods: _methods, events: _events, link } = json
    const props: any = {}
    const methods: any = []
    const events: any = []

    if (_props && _props.length) {
      _props.forEach((p: any) => {
        props[p.Attribute] = {
          type: p.Type,
          default: p.Default,
          description: p.Description
        }
      })
    }

    if (_methods) {
      debugger
      Object.keys(_methods).forEach((key) => {
        const value = _methods[key]
        const params = value.params
          ? `(${Object.keys(value.params).map((k) => {
            const val = value.params[k]
            return `${k}: ${val.type}`
          }).join(', ')}) => ${value?.returns?.type || 'void'}`
          : ''
        methods.push({
          name: key,
          description: value.desc,
          params,
        })
      })
    }

    if (_events && _events.length) {
      _events.forEach((e: any) => {
        events.push({
          name: e.Attribute,
          description: e.Description,
          params: e.Type
        })
      })
    }
    const newJson = {
      name,
      methods,
      events,
      props,
      link,
    }
    fsp.writeFile(path.resolve(base, `src/ui/nextui/nextui2/${item}`), JSON.stringify(newJson, null, 2), 'utf-8')

  })

  generateIndex()
  console.log('nextui generate done!')
}

function generateIndex() {
  const indexTemplate = `import { componentsReducer, propsReducer } from '../../utils'
${quasar2Importers.join('\n')}

export function quasar2() {
  const map: any = ${JSON.stringify(quasar2Map, null, 4).replace(/"/g, '')}

  return propsReducer(map)
}

export function quasar2Components() {
  const map = ${JSON.stringify(quasar2ComponentsMap, null, 4)}
  return componentsReducer(map)
}
  `
  fsp.writeFile(`${base}/src/ui/nextui/nextui2/index.ts`, indexTemplate)
}

run()
export default run
