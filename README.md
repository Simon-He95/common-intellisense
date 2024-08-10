<p align="center">
<img height="200" src="./assets/kv.png" alt="common-intellisense">
</p>
<p align="center"> English | <a href="https://github.com/Simon-He95/vscode-common-intellisense/blob/main/README_zh.md">简体中文</a></p>

This plugin can provide a super powerful smart prompt function, including properties, events, slots and corresponding annotations and types, methods on instances, etc. It supports multiple UI libraries, taking your development efficiency to the next level.

### 🛠️️ How to use
Install the supported ui component library in your project and install the plug-in. If the plug-in does not work, you can restart vscode. If you encounter problems, you can open an issue.

### 🍬 Currently supported
- vant 4
- element 2
- element-plus 2
- antd 1、4、5
- antdv 1、3、4
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
- tiny-vue 3
- nutui 4

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

## Select the specified UI library (resolve multiple UI library naming conflicts)

- `cmd+shift+p` -> Select `Specify the UI library you need to prompt`

## configuration

```
"common-intellisense.showSlots": {
          "type": "boolean",
          "default": true,
          "description": "Whether to show the slots on template completion."
},
"common-intellisense.alias": {
          "type": "object",
          "default": {},
          "description": "If you need to integrate the supported ui library, the secondary encapsulated library, and the prompt to integrate a certain version of the original ui, you can use the alias { \"@xxx/element\": \"elementUi2\" }"
}
```

## How to contribute

This repository is maintained by an individual and needs to be updated with some ui libraries frequently. If you are interested in contributing, you can submit a PR or provide some new ui libraries or some new features. You are welcome to submit [issue](https://github.com/Simon-He95/vscode-common-intellisense/issues/56)
By referring to the files in other directories, you can easily add new ui libraries, such as new library names and corresponding version numbers. Do not manually fill in json by referring to the document. Please write a script to automatically generate it. Refer to `xx.browser.js` under script, execute the function on the browser side, generate `json`, then create a json file and copy it in. Finally, you can use `scripts/generateIndex` to configure the directory to directly generate the corresponding `index.ts` file, and then import it into `ui/index`. If it is a new ui library, you need to enter `src/constants.ts` to configure it ~

## :coffee:

[buy me a cup of coffee](https://github.com/Simon-He95/sponsor)

## License

[MIT](./license)

## Sponsors

<p align="center">
  <a href="https://cdn.jsdelivr.net/gh/Simon-He95/sponsor@main/sponsors.svg">
    <img src="https://cdn.jsdelivr.net/gh/Simon-He95/sponsor@main/sponsors.png"/>
  </a>
</p>
