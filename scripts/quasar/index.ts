const fg = require('fast-glob')
const path = require('node:path')

const base = process.cwd()
const fsp = require('node:fs/promises')

const cwd = path.resolve(base, 'scripts/quasar')

const quasar2ComponentsMap: string[][] = []
const quasar2Map: string[] = []
const quasar2Importers: string[] = []

const extendsMap: any = {
  color: {
    type: 'String',
    description: 'Color name for component from the Quasar Color Palette',
    value: '',
    default: '',
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
    const { props: _props, methods: _methods, events: _events, meta, slots: _slots } = json
    const props: any = {}
    const methods: any = []
    const events: any = []
    const slots = []

    if (_props) {
      Object.keys(_props).forEach((key) => {
        const value = _props[key]
        if (value.extends) {
          if (value.type && Array.isArray(value.type))
            value.type = value.type.join(' | ')

          props[key] = Object.assign(extendsMap[value.extends]
            || {
            value: '',
            type: 'String',
            description: '',
            description_zh: '',
            default: '',
            version: value.addedIn,
            required: value.required || false,
          }, value)
        }
        else {
          const type = value.type || value.tsType || 'String'
          props[key] = {
            value: '',
            type: Array.isArray(type) ? type.join(' | ') : type,
            description: value.desc,
            description_zh: value.desc,
            default: value.default !== undefined ? value.default : type === 'Boolean' ? 'false' : '',
            version: value.addedIn,
            required: value.required || false,
          }
        }
      })
    }

    if (_methods) {
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
          description_zh: value.desc,
          params,
        })
      })
    }

    if (_events) {
      Object.keys(_events).forEach((key) => {
        const value = _events[key]
        const params = value.params
          ? `(${Object.keys(value.params).map((k) => {
            const val = value.params[k]
            return `${k}: ${val.type}`
          }).join(', ')}) => ${value?.returns?.type || 'void'}`
          : ''
        events.push({
          name: key,
          description: value.desc || '',
          description_zh: value.desc || '',
          params,
        })
      })
    }
    if (_slots) {
      for (const key in _slots) {
        if (key === '...')
          continue
        slots.push({
          name: key,
          description: _slots[key].desc,
          description_zh: _slots[key].desc
        })
      }
    }
    const newJson = {
      name,
      methods,
      events,
      props,
      link: meta?.docsUrl,
      link_zh: meta?.docsUrl,
      slots
    }
    fsp.writeFile(path.resolve(base, `src/ui/quasar/quasar2/${item}`), JSON.stringify(newJson, null, 2), 'utf-8')
  })

  generateIndex()
  generateMapping()
  console.log('quasar generate done!')
}

function generateMapping(){
  const indexTemplate = `${quasar2Importers.join('\n')}
  
  export function getPropsMap() {
    return ${JSON.stringify(quasar2Map, null, 4).replace(/"/g, '')}
  }
  
  export function getComponentMap() {
    return ${JSON.stringify(quasar2ComponentsMap, null, 4)}
  }
    `
    fsp.writeFile(`${base}/src/ui/quasar/quasar2/mapping.ts`, indexTemplate)
}

function generateIndex() {
  const indexTemplate = `import { getComponentMap, getPropsMap } from './mapping'

export function quasar2() {
  return {
    uiName: 'quasar2',
    map: getPropsMap(),
    lib: 'quasar',
    prefix: 'q',
  }
}

export function quasar2Components() {
  return {
    map: getComponentMap(),
    isSeperatorByHyphen: true,
    prefix: 'q',
    lib: 'quasar',
    isReact: false,
  }
}
  `
  fsp.writeFile(`${base}/src/ui/quasar/quasar2/index.ts`, indexTemplate)
}
run()

export default run
