import * as vscode from 'vscode'
import { createCompletionItem } from '@vscode-use/utils'

export function propsReducer(map: string[], iconData?: { prefix: string; type: string; icons: any[] }, extensionContext?: any) {
  const result: any = {}
  let icons
  if (iconData) {
    const prefix = iconData.prefix
    icons = iconData.icons.map((icon) => {
      const imagePath = vscode.Uri.file(extensionContext.asAbsolutePath(`images/${iconData.type}/${icon}.svg`))
      const documentation = new vscode.MarkdownString(`![img](${imagePath})`)
      const snippet = `${prefix}-${icon}`
      return createCompletionItem({ content: icon, type: 19, documentation, snippet })
    })
    result.icons = icons
  }
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
        const documentation = new vscode.MarkdownString()
        documentation.isTrusted = true
        documentation.supportHtml = true
        const detail = []
        if (value.default !== undefined && value.default !== '')
          detail.push(`#### 💎 默认值:    ***\`${value.default.toString().replace(/`/g, '')}\`***`)

        if (value.description)
          detail.push(`#### 🔦 说明:    ***\`${value.description}\`***`)

        if (value.type)
          detail.push(`#### 💡 类型:    ***\`${value.type.replace(/`/g, '')}\`***`)
        documentation.appendMarkdown(detail.join('\n\n'))

        if (value.typeDetail) {
          documentation.appendCodeblock(`#### 🌈 类型详情:\n${Object.keys(value.typeDetail).reduce((result, key) => result += key.slice(0) === '$'
            ? `type ${key.slice(1)} = ${value.typeDtail[key].map((item: any) => `${item.name} /*${item.description}*/`).join(' | ')} `
            : `interface ${key} {\n  ${value.typeDetail[key].map((item: any) => `${item.name}${item.optional ? '?' : ''}: ${item.type} /*${item.description}${item.default ? ` 默认值: ***${item.default}***` : ''}*/`).join('\n  ')}\n}`, '')}`, 'typescript')
        }

        // if (item.methods && item.methods.length) {
        //   item.methods.forEach((methods: any) => {
        //     const detail = []
        //     const { name, description, params } = methods
        //     if (name)
        //       detail.push(`\n#### 💨 方法 ${name}:`)

        //     if (description)
        //       detail.push(`- 👓 说明:    ***\`${description}\`***`)

        //     if (params)
        //       detail.push(`- 🚢 参数:    ***\`${params}\`***`)
        //     documentation.appendMarkdown(detail.join('\n'))
        //   })
        // }

        if (item.link)
          documentation.appendMarkdown(`\n\n[🔗 文档链接](${item.link})`)

        if (value.type && value.type.includes('boolean') && value.default === 'false')
          return createCompletionItem({ content: key, documentation })
        return createCompletionItem({ content: `${key}="${v}"`, documentation, snippet: `${key}="$\{1:${v}\}$2"`, type, preselect: true, sortText: '99' })
      },
      ))
    })

    if (item.events) {
      events.push(...item.events.map((events: any) => {
        const detail = []
        let { name, description, params } = events

        if (description)
          detail.push(`#### 🔦 说明:    ***\`${description}\`***`)

        if (params)
          detail.push(`#### 🔮 回调参数:    ***\`${params}\`***`)
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
  }, result)
}

export function componentsReducer(map: string[][]) {
  return map.map(([content, detail]) => {
    const documentation = new vscode.MarkdownString()
    documentation.isTrusted = true
    documentation.supportHtml = true
    documentation.appendMarkdown(`#### 🍀 ${detail}`)
    return createCompletionItem({ content, snippet: `<${content}>$1</${content}>`, documentation, type: vscode.CompletionItemKind.TypeParameter })
  })
}
