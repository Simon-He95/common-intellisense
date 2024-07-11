<p align="center">
<img height="200" src="./assets/kv.png" alt="common-intellisense">
</p>
<p align="center"> <a href="https://github.com/Simon-He95/vscode-common-intellisense/blob/main/README.md">English</a> | 简体中文</p>

此插件能够提供超级强大的智能提示功能，包含属性、事件、插槽以及对应的注释和类型，实例上的方法等等，支持多个UI库，让你的开发效率更上一层楼。

### 🛠️️ 如何使用
在你的项目中安装已支持的ui组件库并安装此插件即可。如果插件不能生效，可以重启vscode，如遇到问题可以打开一个issue

### 🍬 目前支持
- vant 4
- element-ui 2
- element-plus 2
- antd 1、4、5
- antdv 3、4
- antd-mobile 5
- varlet 2、3
- naive 2
- primevue 3
- quasar 2
- @nextui-org/react 2
- @nuxt/ui 2
- @nuxt/ui-pro 1
- vuetify 3
- radix-vue 1
- next-ui 2
- arco-design/react 2
- arco-design/vue 2
- uview-ui 1、2
- uview-plus 3
- taro 3
- shacn-svelte 0
- bits-ui 0
- material-ui 5
- shadcn-ui 0

### [antdv demo](assets/antdv.gif)

### [varlet demo](assets/varlet.gif)

### [vant demo](assets/vant.gif)

### [antd demo](assets/antd.gif)

### [element-ui demo](assets/element.gif)

### [naive-ui demo](assets/naive.gif)

### [nuxt-ui demo](assets/nuxt-ui.gif)

### [vuetify demo](assets/vuetify.gif)

### [radix-vue demo](assets/radix-vue.gif)

### [next-ui demo](assets/next-ui.gif)

### [arco-design/react demo](assets/arco-design.gif)

### [arco-design/vue demo](assets/acro-design-vue.gif)

### [shadcn-svelte demo](assets/shadcn-svelte.gif)

### [bits-ui demo](assets/shadcn-svelte.gif)

## 选择指定的 UI 库（解决多个UI库命名冲突）

- `cmd+shift+p` -> 选择 `Specify the UI library you need to prompt`

## configuration 设置

```
"common-intellisense.showSlots": {
          "type": "boolean",
          "default": true,
          "description": "控制是否要展示 slots 节点"
},
"common-intellisense.alias": {
          "type": "object",
          "default": {},
          "description": "如果你需要将基于支持的 ui 库，二次封装的库，集成原本 ui 某一个版本的提示，可以使用别名 { \"@xxx/element\": \"elementUi2\" }"
}
```

## 如何参与贡献

此仓库是个人维护, 需要经常同步一些 ui 库的更新,如果你有兴趣参与贡献,可以提交 PR 或者提供一些新的 ui 库,或者提供一些新的功能,欢迎提交 [issue](https://github.com/Simon-He95/vscode-common-intellisense/issues/56)
参考其他目录下的文件, 你可以很容易的添加新的 ui 库, 比如新的的库名和对应版本号, 千万不要自己去手动对照文档填写 json, 请编写一个脚本去自动化生成, 参考 script 下的 `xx.browser.js`, 在浏览器端执行函数, 生成 `json`, 再创建 json 文件, 将其复制进来, 最后可以通过 `scripts/generateIndex`, 配置目录直接生成对应的 `index.ts` 文件, 再将其导入到 `ui/index`, 如果是新的 ui 库, 需要进入到 `src/constants.ts` 配置一下 ~

## :coffee:

[请我喝一杯咖啡](https://github.com/Simon-He95/sponsor)

## License

[MIT](./license)

## Sponsors

<p align="center">
  <a href="https://cdn.jsdelivr.net/gh/Simon-He95/sponsor@main/sponsors.svg">
    <img src="https://cdn.jsdelivr.net/gh/Simon-He95/sponsor@main/sponsors.png"/>
  </a>
</p>
