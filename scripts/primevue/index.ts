import fsp from 'node:fs/promises'
import data from './data.json'

function transform(componentName: string) {
  try {
    const obj = data[componentName.toLowerCase()].interfaces.values
    const _props = obj[`${componentName}Props`]?.props || []
    const _events = obj[`${componentName}Emits`]?.methods || []
    const props: any = {}
    const events: any = []
    _props.forEach((p: any) => {
      const { name, type, default: _default, description } = p
      props[name] = {
        default: _default,
        description,
        type,
        value: '',
      }
    })
    _events.forEach((e: any) => {
      const { name, parameters, description, returnType } = e
      events.push({
        name,
        description,
        params: parameters.length
          ? `(${parameters.map((item) => {
            return `${item.name}${item.optional ? '?' : ''}: ${item.type}`
          }).join(', ')}) => ${returnType}`
          : `() => ${returnType}`,
      })
    })
    return {
      name: componentName,
      props,
      events,
      link: `https://primevue.org/${componentName.toLowerCase()}/`,
    }
  }
  catch (error) {
    console.log(componentName, error)
  }
}

const list = [
  'AutoComplete',
  'Calendar',
  'CascadeSelect',
  'Checkbox',
  'Chips',
  'ColorPicker',
  'Dropdown',
  'Editor',
  'InputMask',
  'InputNumber',
  'InputSwitch',
  'InputText',
  'Knob',
  'Listbox',
  'MultiSelect',
  'Password',
  'RadioButton',
  'Rating',
  'SelectButton',
  'Slider',
  'Textarea',
  'ToggleButton',
  'TreeSelect',
  'TriStateCheckbox',
  'Button',
  'SpeedDial',
  'SplitButton',
  'DataTable',
  'DataView',
  'OrderList',
  'OrganizationChart',
  'Paginator',
  'PickList',
  'Tree',
  'TreeTable',
  'Timeline',
  'VirtualScroller',
  'Accordion',
  'Card',
  'Divider',
  'Fieldset',
  'Panel',
  'ScrollPanel',
  'Splitter',
  'TabView',
  'Toolbar',
  'ConfirmDialog',
  'ConfirmPopup',
  'Dialog',
  'DynamicDialog',
  'OverlayPanel',
  'Sidebar',
  'FileUpload',
  'Breadcrumb',
  'ContextMenu',
  'Dock',
  'Menu',
  'Menubar',
  'MegaMenu',
  'PanelMenu',
  'Steps',
  'TabMenu',
  'TieredMenu',
  'Chart',
  'Message',
  'InlineMessage',
  'Toast',
  'Carousel',
  'Galleria',
  'Image',
  'Avatar',
  'Badge',
  'BlockUI',
  'Chip',
  'Inplace',
  'ScrollTop',
  'Skeleton',
  'ProgressBar',
  'ProgressSpinner',
  'Tag',
  'Terminal',
]

const base = process.cwd()
const primevue3ComponentsMap: string[][] = []
const primevue3Map: string[] = []
const primevue3Importers: string[] = []

function run() {
  list.forEach((name: string) => fsp.writeFile(`${base}/src/ui/primevue/primevue3/${name}.json`, JSON.stringify(transform(name), null, 2)))
  list.forEach((name) => {
    primevue3Importers.push(`import ${name} from './${name}.json'`)
    primevue3Map.push(name)
    primevue3ComponentsMap.push([name, name, `<${name}></${name}>`])
  })
  generateIndex()
  console.log('primevue generate done!')
}

function generateIndex() {
  const indexTemplate = `import { componentsReducer, propsReducer } from '../../utils'
  ${primevue3Importers.join('\n')}
  
export function primevue3() {
  const map: any = ${JSON.stringify(primevue3Map, null, 4).replace(/"/g, '')}

  return propsReducer(map)
}
  
export function primevue3Components() {
  const map = ${JSON.stringify(primevue3ComponentsMap, null, 4)}
  return componentsReducer(map)
}
  `
  fsp.writeFile(`${base}/src/ui/primevue/primevue3/index.ts`, indexTemplate)
}

export default run
