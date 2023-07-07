import { createCompletionItem } from '@vscode-use/utils'

export function elementUI() {
  const map = [
    {
      name: 'ElAlert',
      props: {
        title: {
          value: '',
          description: '标题',
          type: 'string',
        },
        type: {
          value: ['info', 'success', 'warning', 'error'],
          description: '主题',
          default: 'info',
          type: 'string',
        },
        description: {
          value: '',
          description: '辅助性文字。也可通过默认 slot 传入',
          type: 'string',
        },
        closable: {
          value: '',
          description: '是否可关闭',
          default: true,
          type: 'boolean',
        },
        center: {
          value: '',
          description: '文字是否居中',
          default: true,
          type: 'boolean',
        },
        closeText: {
          value: '',
          description: '关闭按钮自定义文本',
          type: 'string',
        },
        showIcon: {
          value: '',
          description: '是否显示图标',
          default: false,
          type: 'boolean',
        },
        effect: {
          value: ['light', 'dark'],
          description: '选择提供的主题',
          default: 'light',
          type: 'string',
        },
        slot: {
          value: 'title',
          description: '标题的内容',
        },
      },
      methods: [
        {
          name: 'close',
          description: '关闭alert时触发的事件',
          callback: '',
        },
      ],
    },
    // {
    //   name: 'ElMenu',
    //   props: {
    //     mode: ['horizontal', 'vertical'],
    //     collapse: [false, true],
    //     'background-color': '',
    //     'text-color': '',
    //     'active-text-color': '',
    //     'default-active': '',
    //     'default-openeds': '[]',
    //     'unique-opened': [false, true],
    //     'menu-trigger': ['hover', 'click'],
    //     router: [false, true],
    //     'collapse-transition': [false, true],
    //   },
    //   methods: ['close', 'open']
    // },
  ]

  return map.reduce((result, item) => {
    const completions: any = []
    const events: any = []
    Object.keys(item.props!).forEach((key) => {
      const value = (item.props as any)[key]
      if (typeof value.value === 'string')
        value.value = [value.value]
      completions.push(...value.value.map((v: string) => {
        const detail = []
        if (value.default)
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
      events.push(...item.methods.map((method) => {
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
