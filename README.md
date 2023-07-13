<p align="center">
<img height="200" src="./assets/kv.png" alt="common-intellisense">
</p>
<p align="center"> English | <a href="./README_zh.md">简体中文</a></p>

>WIP: PR welcome

Provide a quick reminder of some common words to help improve coding efficiency in the development stage


### PR
The reference ui directory structure corresponds to the ui library hump name plus the major version number, such as elment ui2 -> element-ui 2.x version
Create a json format for the data structure corresponding to the component, for example, button.json

```json
{
  "name": "Button",
  "props": {
    "block": {
      "value": "",
      "description": "将按钮宽度调整为其父宽度的选项",
      "default": "false",
      "type": "boolean"
    },
    "classNames": {
      "value": "",
      "description": "语义化结构 class",
      "default": "—",
      "type": "Record<SemanticDOM, string>"
    },
    "danger": {
      "value": "",
      "description": "设置危险按钮",
      "default": "false",
      "type": "boolean"
    },
    "disabled": {
      "value": "",
      "description": "设置按钮失效状态",
      "default": "false",
      "type": "boolean"
    },
    "ghost": {
      "value": "",
      "description": "幽灵属性，使按钮背景透明",
      "default": "false",
      "type": "boolean"
    },
    "href": {
      "value": "",
      "description": "点击跳转的地址，指定此属性 button 的行为和 a 链接一致",
      "default": "—",
      "type": "string"
    },
    "htmlType": {
      "value": "",
      "description": "设置 button 原生的 type 值，可选值请参考 HTML 标准",
      "default": "button",
      "type": "string"
    },
    "icon": {
      "value": "",
      "description": "设置按钮的图标组件",
      "default": "—",
      "type": "ReactNode"
    },
    "loading": {
      "value": "",
      "description": "设置按钮载入状态",
      "default": "false",
      "type": "boolean | { delay: number }"
    },
    "shape": {
      "value": [
        "default",
        "circle",
        "round"
      ],
      "description": "设置按钮形状",
      "default": "default",
      "type": "default | circle | round"
    },
    "size": {
      "value": [
        "large",
        "middle",
        "small"
      ],
      "description": "设置按钮大小",
      "default": "middle",
      "type": "large | middle | small"
    },
    "styles": {
      "value": "",
      "description": "语义化结构 style",
      "default": "—",
      "type": "Record<SemanticDOM, CSSProperties>"
    },
    "target": {
      "value": "",
      "description": "相当于 a 链接的 target 属性，href 存在时生效",
      "default": "—",
      "type": "string"
    },
    "type": {
      "value": [
        "primary",
        "ghost",
        "dashed",
        "link",
        "text",
        "default"
      ],
      "description": "设置按钮类型",
      "default": "default",
      "type": "primary | ghost | dashed | link | text | default"
    }
  },
  "events": [
    {
      "name": "onClick",
      "description": "点击按钮时的回调",
      "params": "(event: MouseEvent) => void"
    }
  ],
  "link":"https://element.eleme.cn/#/zh-CN/component/collapse"
}

```


![demo](assets/demo.gif)

## :coffee:

[buy me a cup of coffee](https://github.com/Simon-He95/sponsor)

## License

[MIT](./license)
