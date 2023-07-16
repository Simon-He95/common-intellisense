import * as vscode from 'vscode'
import { createCompletionItem } from '@vscode-use/utils'
import { componentsReducer } from '../../utils'

export function elementPlus2() {
  const map: any = [
  ]

  return map.reduce((result: any, item: any) => {
    const completions: any = []
    const events: any = []
    Object.keys(item.props!).forEach((key) => {
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

        if (value.type)
          detail.push(`#### ***💡 类型:***    \`${value.type}\``)

        if (value.description)
          detail.push(`#### ***🔦 说明:***    \`${value.description}\``)
        const documentation = new vscode.MarkdownString()
        documentation.isTrusted = true
        documentation.supportHtml = true
        documentation.appendMarkdown(detail.join('\n\n'))
        if (value.type && value.type.includes('boolean') && value.default === 'false')
          return createCompletionItem({ content: key, documentation })
        return createCompletionItem({ content: `${key}="${v}"`, documentation, snippet: `${key}="$\{1:${v}\}$2"`, type })
      },
      ))
    })
    if (item.events) {
      events.push(...item.events.map((events: any) => {
        const detail = []
        const { name, description, params } = events

        if (description)
          detail.push(`#### ***🔦 说明:***    \`${description}\``)

        if (params)
          detail.push(`#### ***🔮 回调参数:***    \`${params}\``)

        const snippet = `${name}="$\{1:handle${name.slice(2)}\}$2"`
        const documentation = new vscode.MarkdownString()
        documentation.isTrusted = true
        documentation.supportHtml = true
        documentation.appendMarkdown(detail.join('\n\n'))
        return createCompletionItem({ content: `${name}="handle${name.slice(2)}"`, snippet, documentation, type: vscode.CompletionItemKind.Event })
      },
      ))
    }

    result[item.name!] = { completions, events }
    return result
  }, {} as any)
}

export function elementPlus2Components() {
  const map = [
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
  ]
  return componentsReducer(map)
}
