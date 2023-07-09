import { createCompletionItem } from '@vscode-use/utils'
import * as vscode from 'vscode'
import ElRow from './row.json'
import ElCol from './col.json'
import ElAlert from './alert.json'
import ElButton from './button.json'
import ElContainer from './container.json'
import ElHeader from './header.json'
import ElAside from './aside.json'
import ElFooter from './footer.json'
import ElLink from './link.json'
import ElRadio from './radio.json'
import ElRadioGroup from './radioGroup.json'
import ElRadioButton from './radioButton.json'

export function elementUI() {
  const map: any = [
    ElRow,
    ElCol,
    ElAlert,
    ElButton,
    ElContainer,
    ElHeader,
    ElAside,
    ElFooter,
    ElLink,
    ElRadio,
    ElRadioGroup,
    ElRadioButton,
  ]

  return map.reduce((result: any, item: any) => {
    const completions: any = []
    const events: any = []
    Object.keys(item.props!).forEach((key) => {
      const value = (item.props as any)[key]
      if (typeof value.value === 'string')
        value.value = [value.value]
      completions.push(...value.value.map((v: string) => {
        const detail = []
        if (value.default !== undefined && value.default !== '')
          detail.push(`*默认值:    ${value.default}`)

        if (value.type)
          detail.push(`*类型:    ${value.type}`)

        if (value.description)
          detail.push(`*说明:    ${value.description}`)

        return createCompletionItem({ content: `${key}="${v}"`, documentation: detail.join('\n\n'), snippet: `${key}="$\{1:${v}\}$2"` })
      },
      ))
    })
    if (item.methods) {
      events.push(...item.methods.map((method: any) => {
        const detail = []
        let { name, description, callback } = method
        if (description)
          detail.push(`*说明:    ${method.description}`)

        if (callback)
          detail.push(`*回调参数:    ${method.callback}`)
        name = name.replace(/-(\w)/g, (_: string, v: string) => v.toUpperCase())
        const snippet = `${name}="$\{1:on${name[0].toUpperCase()}${method.name.slice(1)}\}$2"`
        return createCompletionItem({ content: `${method.name}="on${name[0].toUpperCase()}${method.name.slice(1)}"`, snippet, documentation: detail.join('\n\n') })
      },
      ))
    }

    result[item.name!] = { completions, events }
    return result
  }, {} as any)
}

export const elementUIComponents = [
  'el-row',
  'el-col',
  'el-container',
  'el-header',
  'el-aside',
  'el-footer',
  'el-button',
  'el-link',
  'el-radio',
  'el-radio-group',
  'el-radio-button',
  'el-checkbox',
  'el-checkbox-group',
  'el-input',
  'el-input-number',
  'el-select',
  'el-option',
  'el-cascader',
  'el-switch',
  'el-slider',
  'el-time-select',
  'el-date-picker',
  'el-upload',
  'el-rate',
  'el-color-picker',
  'el-transfer',
  'el-form',
  'el-form-item',
  'el-table',
  'el-table-column',
  'el-tag',
  'el-progress',
  'el-tree',
  'el-pagination',
  'el-badge',
  'el-avatar',
  'el-skeleton',
  'el-empty',
  'el-descriptions',
  'el-descriptions-item',
  'el-result',
  'el-statistic',
  'el-alert',
  'el-menu',
  'el-submenu',
  'el-menu-item',
  'el-tabs',
  'el-tab-pane',
  'el-breadcrumb',
  'el-breadcrumb-item',
  'el-page-header',
  'el-dropdown',
  'el-dropdown-menu',
  'el-dropdown-item',
  'el-steps',
  'el-dialog',
  'el-tooltip',
  'el-popover',
  'el-popconfirm',
  'el-card',
  'el-carousel',
  'el-carousel-item',
  'el-collapse',
  'el-collapse-item',
  'el-timeline',
  'el-timeline-item',
  'el-divider',
  'el-calendar',
  'el-image',
  'el-backtop',
  'el-drawer',
].map(name => createCompletionItem({ content: name, snippet: `<${name}>$1</${name}>`, type: vscode.CompletionItemKind.TypeParameter }))
