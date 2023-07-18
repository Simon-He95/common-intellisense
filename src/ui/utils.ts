import * as vscode from 'vscode'
import { createCompletionItem } from '@vscode-use/utils'

declare const global: {
  commonIntellisense: {
    copyDom: string
  }
}

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
    completions.push(...[
      'id',
      'style',
      'class',
      'className',
    ].map(item => createCompletionItem({ content: item, snippet: `${item}="$1"`, type: 5 })))
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

        if (item.typeDetail) {
          const data = `🌈 类型详情:\n${Object.keys(item.typeDetail).reduce((result, key) => result += key[0] === '$'
            ? `type ${key.slice(1)} = \n${item.typeDetail[key].map((typeItem: any) => `${typeItem.name} /*${typeItem.description}*/`).join('\n| ')}\n\n`
            : `interface ${key} {\n  ${item.typeDetail[key].map((typeItem: any) => `${typeItem.name}${typeItem.optional ? '?' : ''}: ${typeItem.type} /*${typeItem.description}${typeItem.default ? ` 默认值: ***${typeItem.default}***` : ''}*/`).join('\n  ')}\n}`, '')}`
          documentation.appendCodeblock(data, 'typescript')
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
        return createCompletionItem({ content: `${key}="${v}"`, documentation, snippet: `${key}="$\{1:${v}\}$2"`, type, preselect: true, sortText: '1' })
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
  return map.map(([content, detail, demo]) => {
    const documentation = new vscode.MarkdownString()
    documentation.isTrusted = true
    documentation.supportHtml = true
    documentation.appendMarkdown(`#### 🍀 ${detail}\n`)
    if (demo) {
      global.commonIntellisense.copyDom = demo
      const copyIcon = '<img width="12" height="12" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxZW0iIGhlaWdodD0iMWVtIiB2aWV3Qm94PSIwIDAgMjQgMjQiPjxnIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2UyOWNkMCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2Utd2lkdGg9IjEuNSI+PHBhdGggZD0iTTIwLjk5OCAxMGMtLjAxMi0yLjE3NS0uMTA4LTMuMzUzLS44NzctNC4xMjFDMTkuMjQzIDUgMTcuODI4IDUgMTUgNWgtM2MtMi44MjggMC00LjI0MyAwLTUuMTIxLjg3OUM2IDYuNzU3IDYgOC4xNzIgNiAxMXY1YzAgMi44MjggMCA0LjI0My44NzkgNS4xMjFDNy43NTcgMjIgOS4xNzIgMjIgMTIgMjJoM2MyLjgyOCAwIDQuMjQzIDAgNS4xMjEtLjg3OUMyMSAyMC4yNDMgMjEgMTguODI4IDIxIDE2di0xIi8+PHBhdGggZD0iTTMgMTB2NmEzIDMgMCAwIDAgMyAzTTE4IDVhMyAzIDAgMCAwLTMtM2gtNEM3LjIyOSAyIDUuMzQzIDIgNC4xNzIgMy4xNzJDMy41MTggMy44MjUgMy4yMjkgNC43IDMuMTAyIDYiLz48L2c+PC9zdmc+" />'
      documentation.appendMarkdown('#### 🌰 例子\n')
      documentation.appendCodeblock(demo, 'html')
      documentation.appendMarkdown(`\n<a href="command:intellisense.copyDemo">${copyIcon}</a>\n`)
    }
    return createCompletionItem({ content, snippet: `<${content}>$1</${content}>`, documentation, type: vscode.CompletionItemKind.TypeParameter })
  })
}
