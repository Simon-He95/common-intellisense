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
import ElForm from './form.json'

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
    ElForm,
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
    if (item.events) {
      events.push(...item.events.map((events: any) => {
        const detail = []
        let { name, description, callback } = events
        if (description)
          detail.push(`*说明:    ${description}`)

        if (callback)
          detail.push(`*回调参数:    ${callback}`)
        name = name.replace(/-(\w)/g, (_: string, v: string) => v.toUpperCase())
        const snippet = `${name}="$\{1:on${name[0].toUpperCase()}${name.slice(1)}\}$2"`
        return createCompletionItem({ content: `${name}="on${name[0].toUpperCase()}${name.slice(1)}"`, snippet, documentation: detail.join('\n\n') })
      },
      ))
    }

    result[item.name!] = { completions, events }
    return result
  }, {} as any)
}

export const elementUIComponents = [
  ['el-row', '布局'],
  ['el-col', '布局'],
  ['el-container', '布局容器'],
  ['el-header', '顶栏容器'],
  ['el-aside', '侧边栏容器'],
  ['el-main', '主要区域容器'],
  ['el-footer', '底栏容器'],
  ['el-button', '按钮'],
  ['el-link', '文字链接'],
  ['el-radio', '单选框'],
  ['el-radio-group', '单选框组'],
  ['el-radio-button', '按钮样式的单选组合'],
  ['el-checkbox', '多选框'],
  ['el-checkbox-group', '多选框组'],
  ['el-checkbox-button', '按钮样式的多选组合'],
  ['el-input', '输入框'],
  ['el-input-number', '计数器'],
  ['el-select', '选择器'],
  ['el-option', '基础多选'],
  ['el-option-group', '备选项进行分组展示'],
  ['el-cascader', '级联选择器'],
  ['el-switch', '开关'],
  ['el-slider', '滑块'],
  ['el-time-select', '时间选择器'],
  ['el-date-picker', '日期选择器/日期时间选择器'],
  ['el-upload', '上传'],
  ['el-rate', '评分'],
  ['el-color-picker', '颜色选择器'],
  ['el-transfer', '穿梭框'],
  ['el-form', '表单'],
  ['el-form-item', '表单项'],
  ['el-table', '表格'],
  ['el-table-column', '表格项'],
  ['el-tag', '标签'],
  ['el-progress', '进度条'],
  ['el-tree', '树形控件'],
  ['el-pagination', '分页'],
  ['el-badge', '标记'],
  ['el-avatar', '头像'],
  ['el-skeleton', '骨架屏'],
  ['el-empty', '空状态'],
  ['el-descriptions', '描述列表'],
  ['el-descriptions-item', '描述列表项'],
  ['el-result', '结果'],
  ['el-statistic', '统计数值'],
  ['el-alert', '警告'],
  ['el-menu', '导航菜单'],
  ['el-submenu', '导航子菜单'],
  ['el-menu-item', '导航菜单项'],
  ['el-tabs', '标签页'],
  ['el-tab-pane', '标签项'],
  ['el-breadcrumb', '面包屑'],
  ['el-breadcrumb-item', '面包屑项'],
  ['el-page-header', '页头'],
  ['el-dropdown', '下拉菜单'],
  ['el-dropdown-menu', '下拉菜单列表'],
  ['el-dropdown-item', '下拉菜单列表项'],
  ['el-steps', '步骤条'],
  ['el-dialog', '对话框'],
  ['el-tooltip', '文字提示'],
  ['el-popover', '弹出框'],
  ['el-popconfirm', '气泡确认框'],
  ['el-card', '卡片'],
  ['el-carousel', '走马灯'],
  ['el-carousel-item', '走马灯项'],
  ['el-collapse', '折叠面板'],
  ['el-collapse-item', '折叠面板项'],
  ['el-timeline', '时间线'],
  ['el-timeline-item', '时间线项'],
  ['el-divider', '分割线'],
  ['el-calendar', '日历'],
  ['el-image', '图片'],
  ['el-backtop', '回到顶部'],
  ['el-drawer', '抽屉'],
].map(([content, detail]) => createCompletionItem({ content, snippet: `<${content}>$1</${content}>`, detail, type: vscode.CompletionItemKind.TypeParameter }))
