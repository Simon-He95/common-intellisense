import * as vscode from 'vscode'
import { createCompletionItem } from '@vscode-use/utils'

export function varlet() {
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

export function varletComponents() {
  return [
    ['Row', '布局'],
    ['Col', '布局'],
    ['Content', '内容部分，自带默认样式，其下可嵌套任何元素，只能放在 Layout 中'],
    ['Header', '顶部布局，自带默认样式，其下可嵌套任何元素，只能放在 Layout 中。'],
    ['Sider', '侧边栏，自带默认样式及基本功能，其下可嵌套任何元素，只能放在 Layout 中。'],
    ['Layout', '布局容器，其下可嵌套 Header Sider Content Footer 或 Layout 本身，可以放在任何父容器中。'],
    ['Footer', '底部布局，自带默认样式，其下可嵌套任何元素，只能放在 Layout 中。'],
    ['Button', '按钮'],
    ['Space', '间距'],
    ['Anchor', '锚点'],
    ['radio', '单选框'],
    ['radio-group', '单选框组'],
    ['radio-button', '按钮样式的单选组合'],
    ['checkbox', '多选框'],
    ['checkbox-group', '多选框组'],
    ['checkbox-button', '按钮样式的多选组合'],
    ['input', '输入框'],
    ['input-number', '计数器'],
    ['select', '选择器'],
    ['option', '基础多选'],
    ['option-group', '备选项进行分组展示'],
    ['cascader', '级联选择器'],
    ['switch', '开关'],
    ['slider', '滑块'],
    ['time-select', '时间选择器'],
    ['date-picker', '日期选择器/日期时间选择器'],
    ['upload', '上传'],
    ['rate', '评分'],
    ['color-picker', '颜色选择器'],
    ['transfer', '穿梭框'],
    ['form', '表单'],
    ['form-item', '表单项'],
    ['table', '表格'],
    ['table-column', '表格项'],
    ['tag', '标签'],
    ['progress', '进度条'],
    ['tree', '树形控件'],
    ['pagination', '分页'],
    ['badge', '标记'],
    ['avatar', '头像'],
    ['skeleton', '骨架屏'],
    ['empty', '空状态'],
    ['descriptions', '描述列表'],
    ['descriptions-item', '描述列表项'],
    ['result', '结果'],
    ['statistic', '统计数值'],
    ['alert', '警告'],
    ['menu', '导航菜单'],
    ['submenu', '导航子菜单'],
    ['menu-item', '导航菜单项'],
    ['tabs', '标签页'],
    ['tab-pane', '标签项'],
    ['breadcrumb', '面包屑'],
    ['breadcrumb-item', '面包屑项'],
    ['page-header', '页头'],
    ['dropdown', '下拉菜单'],
    ['dropdown-menu', '下拉菜单列表'],
    ['dropdown-item', '下拉菜单列表项'],
    ['steps', '步骤条'],
    ['dialog', '对话框'],
    ['tooltip', '文字提示'],
    ['popover', '弹出框'],
    ['popconfirm', '气泡确认框'],
    ['card', '卡片'],
    ['carousel', '走马灯'],
    ['carousel-item', '走马灯项'],
    ['collapse', '折叠面板'],
    ['collapse-item', '折叠面板项'],
    ['timeline', '时间线'],
    ['timeline-item', '时间线项'],
    ['divider', '分割线'],
    ['calendar', '日历'],
    ['image', '图片'],
    ['backtop', '回到顶部'],
    ['drawer', '抽屉'],
  ].map(([content, detail]) => {
    const documentation = new vscode.MarkdownString()
    documentation.isTrusted = true
    documentation.supportHtml = true
    documentation.appendMarkdown(`#### ***📖 ${detail}***`)
    return createCompletionItem({ content, snippet: `<${content}>$1</${content}>`, documentation, type: vscode.CompletionItemKind.TypeParameter })
  })
}
