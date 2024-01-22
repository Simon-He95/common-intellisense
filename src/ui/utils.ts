import * as vscode from 'vscode'
import { createCompletionItem, getActiveTextEditorLanguageId, getLocale } from '@vscode-use/utils'

declare const global: {
  commonIntellisense: {
    copyDom: string
  }
}

export function propsReducer(uiName: string, map: string[], iconData?: { prefix: string; type: string; icons: any[] }, extensionContext?: any) {
  const result: any = {}
  let icons
  if (iconData) {
    const prefix = iconData.prefix
    icons = iconData.icons.map((icon) => {
      const imagePath = vscode.Uri.file(extensionContext.asAbsolutePath(`images/${iconData.type}/${icon}.svg`))
      const documentation = new vscode.MarkdownString(`![img](${imagePath})`)
      const snippet = `${prefix}-${icon}`
      return createCompletionItem({ content: icon, type: 19, documentation, snippet, params: [uiName] })
    })
    result.icons = icons
  }
  return map.reduce((result: any, item: any) => {
    const completions: any = []
    const events: any = []
    const methods = []
    const slots: any[] = []
    const isZh = getLocale().includes('zh')

    const completionsDeferCallback = (isVue: boolean) => {
      const data = [
        'id',
        isVue ? 'class' : 'className',
      ].map(item => createCompletionItem({ content: item, snippet: `${item}="$1"`, type: 5, params: [] }))

      if (isVue)
        data.push(createCompletionItem({ content: 'style', snippet: 'style="$1"', type: 5, params: [] }))
      else
        data.push(createCompletionItem({ content: 'style', snippet: 'style={$1}', type: 5, params: [] }))

      Object.keys(item.props!).forEach((key) => {
        const value = (item.props as any)[key]
        let type = vscode.CompletionItemKind.Property
        if (typeof value.value === 'string')
          value.value = [value.value]
        else
          type = vscode.CompletionItemKind.Enum

        data.push(...value.value.map((v: string) => {
          const documentation = new vscode.MarkdownString()
          documentation.isTrusted = true
          documentation.supportHtml = true
          const detail = []

          detail.push(`## ${uiName} [${item.name}]`)

          if (value.default !== undefined && value.default !== '')
            detail.push(`#### 💎 ${isZh ? '默认值' : 'default'}:    ***\`${value.default.toString().replace(/`/g, '')}\`***`)

          if (value.description) {
            if (isZh)
              detail.push(`#### 🔦 说明:    ***\`${value.description_zh || value.description}\`***`)
            else
              detail.push(`#### 🔦 description:    ***\`${value.description}\`***`)
          }

          if (value.type)
            detail.push(`#### 💡 ${isZh ? '类型' : 'type'}:    ***\`${value.type.replace(/`/g, '')}\`***`)
          documentation.appendMarkdown(detail.join('\n\n'))

          if (item.typeDetail && Object.keys(item.typeDetail).length) {
            const data = `🌈 类型详情:\n${Object.keys(item.typeDetail).reduce((result, key) => result += key[0] === '$'
              ? `\ntype ${key.slice(1).replace(/-(\w)/g, v => v.toUpperCase())} = \n${item.typeDetail[key].map((typeItem: any) => `${typeItem.name} /*${typeItem.description}*/`).join('\n| ')}\n\n`
              : `\ninterface ${key} {\n  ${item.typeDetail[key].map((typeItem: any) => `${typeItem.name}${typeItem.optional ? '?' : ''}: ${typeItem.type} /*${typeItem.description}${typeItem.default ? ` 默认值: ***${typeItem.default}***` : ''}*/`).join('\n  ')}\n}`, '')}`
            documentation.appendCodeblock(data, 'typescript')
          }

          // command:extension.openDocumentLink?%7B%22link%22%3A%22https%3A%2F%2Fexample.com%2F%22%7D
          if (item.link)
            documentation.appendMarkdown(`[🔗 ${isZh ? '文档链接' : 'Documentation link'}](command:intellisense.openDocument?%7B%22link%22%3A%22${encodeURIComponent(isZh ? item.link_zh : item.link)}%22%7D)\`       \`\n\n[🔗 ${isZh ? '外部文档链接' : 'External document links'}](command:intellisense.openDocumentExternal?%7B%22link%22%3A%22${encodeURIComponent(isZh ? item.link_zh : item.link)}%22%7D)`)

          let content = ''
          let snippet = ''
          if (value.type && value.type.trim() === 'boolean' && value.default === 'false') {
            content = snippet = key
          }
          else if (value.type && value.type.trim() === 'boolean' && value.default === 'true') {
            if (isVue) {
              content = key
              snippet = `:${key}="false"`
            }
            else {
              content = key
              snippet = `${key}={false}`
            }
          }
          else if (key.startsWith(':')) {
            if (!v) {
              if (isVue) {
                const _key = key.replace('v-model', 'model')
                content = `${key.replace(':v-model', 'v-model')}="${getComponentTagName(item.name)}${_key[1].toUpperCase()}${toCamel(_key.slice(2))}"`
                snippet = `${key.replace(':v-model', 'v-model')}="\${1:${getComponentTagName(item.name)}${_key[1].toUpperCase()}${toCamel(_key.slice(2))}}"$2`
              }
              else {
                content = `${key.slice(1)}={${getComponentTagName(item.name)}${key[1].toUpperCase()}${toCamel(key.slice(2))}}`
                snippet = `${key.slice(1)}={\${1:${getComponentTagName(item.name)}${key[1].toUpperCase()}${toCamel(key.slice(2))}}}$2`
              }
            }
            else {
              if (isVue) {
                const _key = key.replace('v-model', 'model')
                content = `${key.replace(':v-model', 'v-model')}="${getComponentTagName(item.name)}${_key[1].toUpperCase()}${toCamel(_key.slice(2))}"`
                snippet = `${key.replace(':v-model', 'v-model')}="\${1:${getComponentTagName(item.name)}${_key[1].toUpperCase()}${toCamel(_key.slice(2))}}"$2`
              }
              else {
                content = `${key.slice(1)}={${v}}`
                snippet = `${key.slice(1)}={\${1:${v}}}$2`
              }
            }
          }
          else {
            content = `${key}="${v}"`
            snippet = `${key}="$\{1:${v}\}$2"`
          }
          content += `  ${isZh ? (value.description_zh || value.description) : value.description}${value.default ? `  ${isZh ? '默认' : 'default'}：${value.default}` : ''}`

          return createCompletionItem({ content, snippet, type, documentation, preselect: true, sortText: 'a', params: [uiName, key.replace(/^:/, '')] })
        },
        ))
      })
      return data
    }

    completions.push(completionsDeferCallback)

    if (!item.events)
      item.events = []

    if (item.events) {
      const deferEventsCall = (isVue: boolean) => {
        const lan = getActiveTextEditorLanguageId()
        const originEvent = [
          {
            name: isVue
              ? 'click'
              : lan === 'svelte'
                ? 'on:click'
                : 'onClick',
            description: isZh ? '点击事件' : 'click event',
            params: [],
          },
        ]

        originEvent.forEach((_event) => {
          if (!item.events.find((event: any) => event.name === _event.name))
            item.events.push(_event)
        })
        return item.events.map((events: any) => {
          const detail = []
          const { name, description, params, description_zh } = events

          detail.push(`## ${uiName} [${item.name}]`)

          if (description) {
            if (isZh)
              detail.push(`#### 🔦 说明:    ***\`${description_zh || description}\`***`)
            else
              detail.push(`#### 🔦 description:    ***\`${description}\`***`)
          }

          if (params)
            detail.push(`#### 🔮 ${isZh ? '回调参数' : 'callback parameters'}:    ***\`${params}\`***`)
          let snippet
          let content
          if (isVue) {
            const _name = name.split(':').map((item: string) =>
              item[0].toUpperCase() + item.slice(1),
            ).join('').replace(/-(\w)/g, (_: string, v: string) => v.toUpperCase())
            snippet = `${name}="\${1:on${_name}}"`
            content = `${name}="on${_name}"`
          }
          else if (lan === 'svelte') {
            snippet = `${name}={\${1:${name.replace(/:(\w)/, (_: string, v: string) => v.toUpperCase())}}}`
            content = `${name}={${name.replace(/:(\w)/, (_: string, v: string) => v.toUpperCase())}}`
          }
          else {
            let _name = name
            if (!_name.startsWith('on'))
              _name = `on${_name[0].toUpperCase()}${_name.slice(1)}`

            snippet = `${_name}={\${1:${_name}}}`
            content = `${_name}={${_name}}`
          }
          content += `  ${isZh ? (description_zh || description) : description}${params ? `  ${isZh ? '参数' : 'params'}：${params}` : ''}`
          const documentation = new vscode.MarkdownString()
          documentation.isTrusted = true
          documentation.supportHtml = true
          documentation.appendMarkdown(detail.join('\n\n'))
          return createCompletionItem({ content, snippet, documentation, type: vscode.CompletionItemKind.Event, sortText: 'b', preselect: true, params: [uiName, name] })
        },
        )
      }
      events.push(deferEventsCall)
    }

    if (item.methods) {
      methods.push(...item.methods.map((method: any) => {
        const documentation = new vscode.MarkdownString()
        documentation.isTrusted = true
        documentation.supportHtml = true
        const detail: any = []
        const { name, description, params, description_zh } = method

        detail.push(`## ${uiName} [${item.name}]`)

        if (name)
          detail.push(`\n#### 💨 ${isZh ? '方法' : 'method'} ${name}:`)

        if (description) {
          if (isZh)
            detail.push(`- 👓 说明:    ***\`${description_zh || description}\`***`)
          else
            detail.push(`- 👓 description:    ***\`${description}\`***`)
        }

        if (params)
          detail.push(`- 🚢 ${isZh ? '参数' : 'params'}:    ***\`${params}\`***`)

        documentation.appendMarkdown(detail.join('\n\n'))
        return createCompletionItem({ content: method.name, snippet: `${name.endsWith('()') ? name : `${name}()`}$1`, documentation, type: 1, preselect: true, sortText: 'b', params: uiName })
      }))
    }

    if (item.slots) {
      item.slots.forEach((slot: any) => {
        const { name, description, description_zh } = slot
        const documentation = new vscode.MarkdownString()
        documentation.isTrusted = true
        documentation.supportHtml = true
        const detail = []
        if (description) {
          if (isZh)
            detail.push(`- 👓 说明:    ***\`${description_zh || description}\`***`)
          else
            detail.push(`- 👓 description:    ***\`${description}\`***`)
        }
        documentation.appendMarkdown(detail.join('\n\n'))

        slots.push(createCompletionItem({ content: `slot="${name}"`, snippet: `slot="${name}"$1`, documentation, type: 1, preselect: true, sortText: 'b', params: uiName }))
      })
    }

    const createTableDocument = () => {
      const documentation = new vscode.MarkdownString()
      documentation.isTrusted = true
      documentation.supportHtml = true
      const details = []

      details.push(`## ${uiName} [${item.name}]\`            \`[🔗 ${isZh ? '文档链接' : 'Documentation link'}](command:intellisense.openDocument?%7B%22link%22%3A%22${encodeURIComponent(isZh ? item.link_zh : item.link)}%22%7D)\`   \`[🔗 ${isZh ? '外部链接' : 'External document links'}](command:intellisense.openDocumentExternal?%7B%22link%22%3A%22${encodeURIComponent(isZh ? item.link_zh : item.link)}%22%7D)`)

      if (item.props) {
        if (isZh)
          details.push('### 参数:')
        else
          details.push('### Props:')

        const tableHeader = `| ${isZh ? '属性名' : 'Name'} | ${isZh ? '描述' : 'Description'} | ${isZh ? '类型' : 'Type'} | ${isZh ? '默认值' : 'Default'} |`
        const tableDivider = '| --- | --- | --- | --- |'

        const tableContent = [
          tableHeader,
          tableDivider,
          ...Object.keys(item.props).map((name) => {
            const { default: defaultValue, type, description, description_zh } = item.props[name]
            return `| ${name} | ${isZh ? description_zh : description} | ${type} | ${defaultValue} |`
          }),
        ].join('\n')

        details.push(tableContent)
      }

      if (item.methods && item.methods.length) {
        if (isZh)
          details.push('## 方法:')
        else
          details.push('## Methods:')

        const tableHeader = `| ${isZh ? '方法名' : 'Method Name'} | ${isZh ? '描述' : 'Description'} | ${isZh ? '参数' : 'Params'} |`
        const tableDivider = '| --- | --- | --- |'

        const tableContent = [
          tableHeader,
          tableDivider,
          ...item.methods.map((m: any) => {
            const { name, params, description, description_zh } = m
            return `| ${name} | ${isZh ? description_zh : description} | ${params} |`
          }),
        ].join('\n')

        details.push(tableContent)
      }

      if (item.events && item.events.length) {
        if (isZh)
          details.push('## 事件:')
        else
          details.push('## Events:')

        const tableHeader = `| ${isZh ? '事件名' : 'Event Name'} | ${isZh ? '描述' : 'Description'} | ${isZh ? '参数' : 'Params'} |`
        const tableDivider = '| --- | --- | --- |'

        const tableContent = [
          tableHeader,
          tableDivider,
          ...item.events.map((m: any) => {
            const { name, params, description, description_zh } = m
            return `| ${name} | ${isZh ? description_zh : description} | ${params || '-'} |`
          }),
        ].join('\n')

        details.push(tableContent)
      }

      if (item.link)
        details.push(`[🔗 ${isZh ? '文档链接' : 'Documentation link'}](command:intellisense.openDocument?%7B%22link%22%3A%22${encodeURIComponent(isZh ? item.link_zh : item.link)}%22%7D)\`        \` [🔗 ${isZh ? '外部链接' : 'External document links'}](command:intellisense.openDocumentExternal?%7B%22link%22%3A%22${encodeURIComponent(isZh ? item.link_zh : item.link)}%22%7D)`)

      documentation.appendMarkdown(details.join('\n\n'))
      return documentation
    }
    const tableDocument = createTableDocument()

    result[item.name!] = { completions, events, methods, slots, suggestions: item.suggestions || [], tableDocument, rawSlots: item.slots }
    return result
  }, result)
}

export function componentsReducer(map: any[][], isSeperatorByHyphen = true, prefix = '', lib: string, isReact = false) {
  const isZh = getLocale().includes('zh')

  return {
    prefix,
    data: () => map.map(([content, detail, demo]) => {
      const lan = getActiveTextEditorLanguageId()
      const isVue = lan === 'vue'
      let snippet = ''
      let _content = ''
      if (typeof content === 'object') {
        let [requiredProps, index] = getRequireProp(content, 0, isVue)
        const tag = isSeperatorByHyphen ? hyphenate(content.name) : content.name
        if (requiredProps.length) {
          if (content?.suggestions?.length === 1) {
            const suggestionTag = content.suggestions[0]
            const suggestion = findTargetMap(map, suggestionTag)
            if (suggestion) {
              const [childRequiredProps, _index] = getRequireProp(suggestion, index, isVue)
              index = _index
              snippet = `<${tag}${requiredProps.length ? ` ${requiredProps.join(' ')}` : ''}>\n  <${suggestionTag}${childRequiredProps.length ? ` ${childRequiredProps.join(' ')}` : ''}>\$${++index}</${suggestionTag}>\n</${tag}>`
            }
            else {
              snippet = `<${tag}>\$${++index}</${tag}>`
            }
          }
          else {
            snippet = `<${tag}${requiredProps.length ? ` ${requiredProps.join(' ')}` : ''}>$${++index}</${tag}>`
          }
        }
        else {
          if (content?.suggestions?.length === 1) {
            const suggestionTag = content.suggestions[0]
            const suggestion = findTargetMap(map, suggestionTag)
            if (suggestion) {
              const [childRequiredProps, _index] = getRequireProp(suggestion, index, isVue)
              index = _index
              snippet = `<${tag}>\n  <${suggestionTag}${childRequiredProps.length ? ` ${childRequiredProps.join(' ')}` : ''}>\$${++index}</${suggestionTag}>\n</${tag}>`
            }
            else {
              snippet = `<${tag}>$1</${tag}>`
            }
          }
          else { snippet = `<${tag}>$1</${tag}>` }
        }
        _content = `${tag}  ${detail}`
      }
      else {
        snippet = `<${content}>$1</${content}>`
        _content = `${content}  ${detail}`
      }
      if (!demo)
        demo = snippet
      const documentation = new vscode.MarkdownString()
      documentation.isTrusted = true
      documentation.supportHtml = true
      documentation.appendMarkdown(`#### 🍀 ${detail}\n`)
      if (demo) {
        global.commonIntellisense.copyDom = demo
        const copyIcon = '<img width="12" height="12" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxZW0iIGhlaWdodD0iMWVtIiB2aWV3Qm94PSIwIDAgMjQgMjQiPjxnIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2UyOWNkMCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2Utd2lkdGg9IjEuNSI+PHBhdGggZD0iTTIwLjk5OCAxMGMtLjAxMi0yLjE3NS0uMTA4LTMuMzUzLS44NzctNC4xMjFDMTkuMjQzIDUgMTcuODI4IDUgMTUgNWgtM2MtMi44MjggMC00LjI0MyAwLTUuMTIxLjg3OUM2IDYuNzU3IDYgOC4xNzIgNiAxMXY1YzAgMi44MjggMCA0LjI0My44NzkgNS4xMjFDNy43NTcgMjIgOS4xNzIgMjIgMTIgMjJoM2MyLjgyOCAwIDQuMjQzIDAgNS4xMjEtLjg3OUMyMSAyMC4yNDMgMjEgMTguODI4IDIxIDE2di0xIi8+PHBhdGggZD0iTTMgMTB2NmEzIDMgMCAwIDAgMyAzTTE4IDVhMyAzIDAgMCAwLTMtM2gtNEM3LjIyOSAyIDUuMzQzIDIgNC4xNzIgMy4xNzJDMy41MTggMy44MjUgMy4yMjkgNC43IDMuMTAyIDYiLz48L2c+PC9zdmc+" />'
        documentation.appendMarkdown(`#### 🌰 ${isZh ? '例子' : 'example'}\n`)
        documentation.appendCodeblock(demo, 'html')
        documentation.appendMarkdown(`\n<a href="command:intellisense.copyDemo">${copyIcon}</a>\n`)
      }

      return createCompletionItem({ content: _content, snippet, documentation, type: vscode.CompletionItemKind.TypeParameter, sortText: 'a', params: [content, lib, isReact], nihao: '122' })
    }),
  }
}

function getComponentTagName(str: string) {
  return str.replace(/([a-z])([A-Z])/g, '$1-$2').split('-').slice(-1)[0].toLowerCase()
}

export function hyphenate(s: string): string {
  return s.replace(/([A-Z])/g, '-$1').toLowerCase().replace(/^-/, '')
}

export function toCamel(s: string) {
  return s.replace(/-(\w)/g, (_, v) => v.toUpperCase())
}

export function getRequireProp(content: any, index = 0, isVue: boolean): [string[], number] {
  const requiredProps: string[] = []
  if (!content.props)
    return [requiredProps, index]
  Object.keys(content.props).forEach((key) => {
    const item = content.props[key]
    if (!item.required)
      return
    let attr = ''
    const v = item.value
    if (key.startsWith(':')) {
      const tagName = getComponentTagName(content.name)
      if (item.foreach) {
        if (requiredProps.some(p => p.includes('v-for=')))
          attr = `${key}="item.\${${++index}:${key.slice(1)}}"`
        else
          attr = `v-for="item in \${${++index}:${tagName}Options}" :key="item.\${${++index}:key}" ${key}="item.\${${++index}:${toCamel(key.slice(1))}}"`
      }
      else {
        const _key = key.replace('v-model', 'model')
        key = key.replace(':v-model', 'v-model')
        ++index
        if (!v) {
          if (isVue)
            attr = `${key}="\${${index}:${getComponentTagName(content.name)}${_key[1].toUpperCase()}${toCamel(_key.slice(2))}}"`
          else
            attr = `${key.slice(1)}={\${${index}:${getComponentTagName(content.name)}${_key[1].toUpperCase()}${toCamel(_key.slice(2))}}}`
        }
        else {
          if (isVue)
            attr = `${key}="\${${index}:${getComponentTagName(content.name)}${key[1].toUpperCase()}${toCamel(key.slice(2))}}"`
          else
            attr = `${key.slice(1)}={\${${index}:${v}}}`
        }
      }
    }
    else if (item.type && item.type.includes('boolean') && item.default === 'false') {
      if (isVue)
        attr = key
      else
        attr = `${key}="true"`
    }
    else {
      if (v)
        attr = `${key}="${v}"`
      else
        attr = `${key}="\$${++index}"`
    }
    requiredProps.push(attr)
  })

  return [requiredProps, index]
}

function findTargetMap(maps: any, label: string) {
  label = toCamel(`-${label}`)
  for (const map of maps) {
    if (typeof map[0] === 'object') {
      if (map[0].name === label)
        return map[0]
    }
    else if (map[0] === label) {
      return map
    }
  }
}
