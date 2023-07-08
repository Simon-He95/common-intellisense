import { createCompletionItem } from '@vscode-use/utils'

export function vant() {
  const map: any = [
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

        return createCompletionItem({ content: `${key}="${v}"`, documentation: detail.join('\n\n') })
      },
      ))
    })
    if (item.methods) {
      events.push(...item.methods.map((method: any) => {
        const detail = []
        if (method.description)
          detail.push(`*说明:    ${method.description}`)

        if (method.callback)
          detail.push(`*回调参数:    ${method.callback}`)

        return createCompletionItem({ content: `${method.name}=""`, snippet: `${method.name}="$1"`, documentation: detail.join('\n\n') })
      },
      ))
    }

    result[item.name!] = { completions, events }
    return result
  }, {} as any)
}
