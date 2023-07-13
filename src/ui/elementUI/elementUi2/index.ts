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
import ElFormItem from './formItem.json'
import ElTable from './table.json'
import ElTableColumn from './tableColumn.json'
import ElCard from './card.json'
import ElInput from './input.json'
import ElAutocomplete from './autocomplete.json'
import ElSelect from './select.json'
import ElCascader from './cascader.json'
import ElCascaderPanel from './cascaderPanel.json'
import ElCheckbox from './checkbox.json'
import ElCheckboxGroup from './checkboxGroup.json'
import ElCheckboxButton from './checkboxButton.json'
import ElBadge from './badge.json'
import ElBreadcrumb from './breadcrumb.json'
import ElCarousel from './carousel.json'
import ElCarouselItem from './carouselItem.json'
import ElCollapse from './collapse.json'
import ElCollapseItem from './collapseItem.json'

export function elementUi2() {
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
    ElFormItem,
    ElTable,
    ElTableColumn,
    ElCard,
    ElInput,
    ElAutocomplete,
    ElSelect,
    ElCascader,
    ElCascaderPanel,
    ElCheckbox,
    ElCheckboxGroup,
    ElCheckboxButton,
    ElBadge,
    ElBreadcrumb,
    ElCarousel,
    ElCarouselItem,
    ElCollapse,
    ElCollapseItem,
  ]

  return map.reduce((result: any, item: any) => {
    const completions: any = []
    const events: any = []
    Object.keys(item.props!).forEach((key) => {
      const documentation = new vscode.MarkdownString()
      documentation.isTrusted = true
      documentation.supportHtml = true
      const value = (item.props as any)[key]
      let type = vscode.CompletionItemKind.Property
      if (typeof value.value === 'string')
        value.value = [value.value]
      else
        type = vscode.CompletionItemKind.Enum
      completions.push(...value.value.map((v: string) => {
        const detail = []
        if (value.default !== undefined && value.default !== '')
          detail.push(`#### ***💎 默认值:***    \`${value.default}\``)

        if (value.description)
          detail.push(`#### ***🔦 说明:***    \`${value.description}\``)

        if (value.type)
          detail.push(`#### ***💡 类型:***    \`${value.type}\``)
        documentation.appendMarkdown(detail.join('\n\n'))

        if (value.typeDetail)
          documentation.appendCodeblock(`#### ***🌈 类型详情:***\n${Object.keys(value.typeDetail).reduce((result, key) => result += `interface ${key} {\n  ${value.typeDetail[key].map((item: any) => `${item.name}: ${item.type} /*${item.description}*/`).join('\n  ')}\n}`, '')}`, 'typescript')

        if (value.type && value.type.includes('boolean') && value.default === 'false')
          return createCompletionItem({ content: key, documentation })
        return createCompletionItem({ content: `${key}="${v}"`, documentation, snippet: `${key}="$\{1:${v}\}$2"`, type })
      },
      ))
    })
    if (item.events) {
      events.push(...item.events.map((events: any) => {
        const detail = []
        let { name, description, params } = events

        if (description)
          detail.push(`#### ***🔦 说明:***    \`${description}\``)

        if (params)
          detail.push(`#### ***🔮 回调参数:***    \`${params}\``)
        name = name.replace(/-(\w)/g, (_: string, v: string) => v.toUpperCase())
        const snippet = `${name}="$\{1:on${name[0].toUpperCase()}${name.slice(1)}\}$2"`
        const documentation = new vscode.MarkdownString()
        documentation.isTrusted = true
        documentation.supportHtml = true
        documentation.appendMarkdown(detail.join('\n\n'))
        return createCompletionItem({ content: `${name}="on${name[0].toUpperCase()}${name.slice(1)}"`, snippet, documentation, type: vscode.CompletionItemKind.Event })
      },
      ))
    }

    result[item.name!] = { completions, events }
    return result
  }, {} as any)
}

export function elementUi2Components() {
  return [
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
    ['el-cascader-panel', '级联面板'],
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
    ['el-autocomplete', '远程搜索'],
  ].map(([content, detail]) => {
    const documentation = new vscode.MarkdownString()
    documentation.isTrusted = true
    documentation.supportHtml = true
    documentation.appendMarkdown(`#### ***📖 ${detail}***`)
    return createCompletionItem({ content, snippet: `<${content}>$1</${content}>`, documentation, type: vscode.CompletionItemKind.TypeParameter })
  })
}
