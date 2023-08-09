import { componentsReducer, propsReducer } from '../../utils'
import button from './button.json'
import card from './card.json'
import cardItem from './cardItem.json'
import cardTitle from './cardTitle.json'
import cardSubtitle from './cardSubtitle.json'
import cardText from './cardText.json'
import chip from './chip.json'
import dialog from './dialog.json'
import divider from './divider.json'
import expansionPanel from './expansionPanel.json'
import expansionPanels from './expansionPanels.json'
import expansionPanelText from './expansionPanelText.json'
import expansionPanelTitle from './expansionPanelTitle.json'
import list from './list.json'
import listItem from './listItem.json'
import listGroup from './listGroup.json'
import listImg from './listImg.json'
import listItemAction from './listItemAction.json'
import listItemMedia from './listItemMedia.json'
import listSubheader from './listSubheader.json'
import menu from './menu.json'
import overlay from './overlay.json'
import sheet from './sheet.json'

export function vuetify3() {
  const map: any = [
    button,
    card,
    chip,
    dialog,
    divider,
    expansionPanel,
    expansionPanels,
    expansionPanelText,
    expansionPanelTitle,
    cardItem,
    cardTitle,
    cardSubtitle,
    cardText,
    list,
    listItem,
    listSubheader,
    listGroup,
    listImg,
    listItemAction,
    listItemMedia,
    menu,
    overlay,
    sheet,
  ]

  return propsReducer(map)
}

export function vuetify3Components() {
  const map: any[] = [
    ['v-button', '按钮', '<v-btn>Button</v-btn>'],
    ['v-card', '卡片', '<v-card text="..."></v-card>'],
    ['v-card-item', '卡片', '<v-card-item></v-card-item>'],
    ['v-sheet', '工作区', '<v-sheet :height="200" :width="200"></v-sheet>'],
    ['v-card-text', '卡片', '<v-card-text></v-card-text>'],
    ['v-card-title', '卡片', '<v-card-title></v-card-title>'],
    ['v-card-subtitle', '卡片', '<v-card-subtitle></v-card-subtitle>'],
    ['v-card-actions', '卡片', '<v-card-actions></v-card-actions>'],
    ['v-chip', '纸片', '<v-chip>Chip</v-chip'],
    ['v-dialog', '对话框', `<v-dialog
  v-model="dialog"
  activator="parent"
  width="auto"
></v-dialog`],
    ['v-divider', '组件用于分隔列表或布局的各个部分', '<v-divider></v-divider>'],
    ['v-expansion-panels', '扩展面板 组件有助于减少大量信息的垂直空间占用。 组件默认仅显示一个扩展面板；但你可以使用 multiple 属性后，扩展面板可以保持打开，直到主动关闭', '<v-expansion-panels></v-expansion-panels>'],
    ['v-expansion-panel', '扩展面板 用于包裹 v-expansion-panel-text 和 v-expansion-panel-title 的子组件', `<v-expansion-panel  title="Title"
  text="Lorem"
></v-expansion-panel>`],
    ['v-expansion-title', '高级版扩展面板 用于展示可扩展面板的标题的子组件。 也可以包裹在 #title 插槽内', '<v-expansion-panel-title></v-expansion-panel-title>'],
    ['v-expansion-text', '高级版扩展面板 用于展示可扩展面板的内容的子组件。 也可以包裹在 #text 插槽内', '<v-expansion-panel-text></v-expansion-panel-text>'],
    ['v-list', '列表 简单地用于表明某几个元素属于同一个集合。 列表为同组的文字和图像提供了了相同的样式', '<v-list lines="one"></v-list>'],
    ['v-list-group', '列表 可以使用 v-list-group 组件创建列表的子列表。', '<v-list-group></v-list-group>'],
    ['v-list-img', '列表', '<v-list-img></v-list-img>'],
    ['v-list-subheader', '列表', '<v-list-subheader></v-list-subheader>'],
    ['v-list-item', '导航列表', '<v-list-item></v-list-item>'],
    ['v-list-item-title', '导航列表', '<v-list-item-title></v-list-item-title>'],
    ['v-list-item-subtitle', '导航列表', '<v-list-item-subtitle></v-list-item-subtitle>'],
    ['v-list-item-action', '导航列表', '<v-list-item-action></v-list-item-action>'],
    ['v-list-item-media', '导航列表', '<v-list-item-media></v-list-item-media>'],
    ['v-menu', '菜单 可以在某个激活菜单的元素位置显示一个菜单。', '<v-menu></v-menu>'],
    ['v-overlay', '遮罩层', '<v-overlay v-model="overlay"></v-overlay>'],
  ]
  return componentsReducer(map)
}
