import { getLocale } from '@vscode-use/utils'
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
import toolbar from './toolbar.json'
import toolbarItem from './toolbarItem.json'
import toolbarTitle from './toolbarTitle.json'
import tooltip from './tooltip.json'
import appBar from './appBar.json'
import appBarNavIcon from './appBarNavIcon.json'
import appBarTitle from './appBarTitle.json'
import bottomNavigation from './bottomNavigation.json'
import breadcrumbs from './breadcrumbs.json'
import breadcrumbsItems from './breadcrumbsItems.json'
import breadcrumbsDivider from './breadcrumbsDivider.json'
import footer from './footer.json'
import navigationDrawer from './navigationDrawer.json'
import navigationItem from './navigationItem.json'
import pagination from './pagination.json'
import systemBar from './systemBar.json'
import tabs from './tabs.json'
import tab from './tab.json'
import autocomplete from './autocomplete.json'
import checkbox from './checkbox.json'
import combobox from './combobox.json'
import fileInput from './fileInput.json'
import form from './form.json'
import input from './input.json'
import radioGroup from './radioGroup.json'
import radio from './radio.json'
import rangeSlider from './rangeSlider.json'
import select from './select.json'
import slider from './slider.json'
import vswitch from './switch.json'
import textField from './textField.json'
import textarea from './textarea.json'
import table from './table.json'
import virtualScroll from './virtualScroll.json'
import container from './container.json'
import row from './row.json'
import col from './col.json'
import spacer from './spacer.json'
import btnToggle from './btnToggle.json'
import buttonGroup from './buttonGroup.json'
import carousel from './carousel.json'
import carouselItem from './carouselItem.json'
import chipGroup from './chipGroup.json'
import item from './item.json'
import itemGroup from './itemGroup.json'
import window from './window.json'
import windowItem from './windowItem.json'
import alert from './alert.json'
import alertTitle from './alertTitle.json'
import badge from './badge.json'
import banner from './banner.json'
import bannerText from './bannerText.json'
import bannerActions from './bannerActions.json'
import hover from './hover.json'
import progressCircular from './progressCircular.json'
import progressLinear from './progressLinear.json'
import rating from './rating.json'
import snackbar from './snackbar.json'
import timeline from './timeline.json'
import timelineItem from './timelineItem.json'
import responsive from './responsive.json'
import img from './img.json'
import lazy from './lazy.json'
import defaultsProvider from './defaultsProvider.json'
import themeProvider from './themeProvider.json'
import localeProvider from './localeProvider.json'
import parallax from './parallax.json'
import icon from './icon.json'
import avatar from './avatar.json'
import colorPicker from './colorPicker.json'

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
    toolbar,
    toolbarItem,
    toolbarTitle,
    tooltip,
    appBar,
    appBarNavIcon,
    appBarTitle,
    bottomNavigation,
    breadcrumbs,
    breadcrumbsItems,
    breadcrumbsDivider,
    footer,
    navigationDrawer,
    navigationItem,
    pagination,
    systemBar,
    tabs,
    tab,
    autocomplete,
    checkbox,
    combobox,
    fileInput,
    form,
    input,
    radioGroup,
    radio,
    rangeSlider,
    select,
    slider,
    vswitch,
    textField,
    textarea,
    table,
    virtualScroll,
    container,
    row,
    col,
    spacer,
    btnToggle,
    buttonGroup,
    carousel,
    carouselItem,
    chipGroup,
    item,
    itemGroup,
    window,
    windowItem,
    alert,
    alertTitle,
    badge,
    banner,
    bannerText,
    bannerActions,
    hover,
    progressCircular,
    progressLinear,
    rating,
    snackbar,
    timeline,
    timelineItem,
    responsive,
    img,
    lazy,
    defaultsProvider,
    themeProvider,
    localeProvider,
    parallax,
    icon,
    avatar,
    colorPicker,
  ]

  return propsReducer(map)
}

export function vuetify3Components() {
  const isZh = getLocale().includes('zh')

  const map: any[] = isZh
    ? [
        ['v-no-ssr', '客户端渲染', '<v-no-ssr></v-no-ssr>'],
        ['v-avatar', '头像', '<v-avatar></v-avatar>'],
        ['v-icon', '图标', '<v-icon></v-icon>'],
        ['v-color-picker', '颜色选择器', '<v-color-picker></v-color-picker>'],
        ['v-parallax', '视差', '<v-parallax></v-parallax>'],
        ['v-theme-provider', '主题供应者', '<v-theme-provider></v-theme-provider>'],
        ['v-defaults-provider', '默认供应者', '<v-defaults-provider></v-defaults-provider>'],
        ['v-locale-provider', '本地供应者', '<v-locale-provider></v-locale-provider>'],
        ['v-lazy', '懒加载', '<v-lazy></v-lazy>'],
        ['v-img', '图像', '<v-img></v-img>'],
        ['v-responsive', '长宽比', '<v-responsive></v-responsive>'],
        ['v-timeline', '时间线', '<v-timeline></v-timeline>'],
        ['v-timeline-item', '时间线', '<v-timeline-item></v-timeline-item>'],
        ['v-snackbar', '消息条', '<v-snackbar></v-snackbar>'],
        ['v-rating', '评分', '<v-rating></v-rating>'],
        ['v-progress-linear', '进度条', '<v-progress-linear></v-progress-linear>'],
        ['v-progress-circular', '环状进度', '<v-progress-circular></v-progress-circular>'],
        ['v-hover', '悬停', '<v-hover></v-hover>'],
        ['v-banner', '横幅', '<v-banner></v-banner>'],
        ['v-banner-text', '横幅', '<v-banner-text></v-banner-text>'],
        ['v-banner-actions', '横幅', '<v-banner-actions></v-banner-actions>'],
        ['v-alert', '警告框', '<v-alert></v-alert>'],
        ['v-alert-title', '警告框', '<v-alert-title></v-alert-title>'],
        ['v-window', '窗格', '<v-window></v-window>'],
        ['v-window-item', '窗格', '<v-window-item></v-window-item>'],
        ['v-item', '项目组', '<v-item></v-item>'],
        ['v-item-group', '项目组', '<v-item-group></v-item-group>'],
        ['v-chip-group', '纸片组', '<v-chip-group></v-chip-group>'],
        ['v-carousel-item', '轮播项', '<v-carousel-item></v-carousel-item>'],
        ['v-carousel', '轮播', '<v-carousel></v-carousel>'],
        ['v-btn-group', '按钮组', '<v-btn-group></v-btn-group>'],
        ['v-btn-toggle', '切换按钮', '<v-btn-toggle></v-btn-toggle>'],
        ['v-spacer', '间距组件', '<v-spacer></v-spacer>'],
        ['v-col', '行容器', '<v-col></v-col>'],
        ['v-row', '行容器', '<v-row></v-row>'],
        ['v-container', '容器', '<v-container></v-container>'],
        ['v-virtualScroll', '虚拟滚动列表', '<v-virtualScroll></v-virtualScroll>'],
        ['v-table', '表格', '<v-table></v-table>'],
        ['v-textarea', '多行文本框', '<v-textarea></v-textarea>'],
        ['v-textField', '单行文本框', '<v-textField></v-textField>'],
        ['v-switch', '开关', '<v-switch></v-switch>'],
        ['v-slider', '滑块', '<v-slider></v-slider>'],
        ['v-select', '下拉选择框', '<v-select></v-select>'],
        ['v-range-slider', '范围滑块', '<v-range-slider></v-range-slider>'],
        ['v-radio-group', '单选按钮组', '<v-radio-group></v-radio-group>'],
        ['v-radio', '单选按钮', '<v-radio></v-radio>'],
        ['v-input', '自定义输入框', '<v-input></v-input>'],
        ['v-form', '表单', '<v-form></v-form>'],
        ['v-file-input', '上传文件', '<v-file-input></v-file-input>'],
        ['v-combobox', '组合选择框', '<v-combobox></v-combobox>'],
        ['v-checkbox', '复选框', '<v-checkbox></v-checkbox>'],
        ['v-autocomplete', '自动补全', '<v-autocomplete></v-autocomplete>'],
        ['v-tab', '选项卡', '<v-tab></v-tab>'],
        ['v-tabs', '选项卡', '<v-tabs></v-tabs>'],
        ['v-systemBar', '系统栏', '<v-systemBar></v-systemBar>'],
        ['v-pagination', '分页', '<v-pagination></v-pagination>'],
        ['v-navigation-drawer', '抽屉式导航', '<v-navigation-drawer></v-navigation-drawer>'],
        ['v-navigation-item', '抽屉式导航', '<v-navigation-item></v-navigation-item>'],
        ['v-footer', '底部栏组件', '<v-footer></v-footer>'],
        ['v-footer', '底部栏组件', '<v-footer></v-footer>'],
        ['v-breadcrumbs', '面包屑导航', '<v-breadcrumbs></v-breadcrumbs>'],
        ['v-breadcrumbs-item', '面包屑导航', '<v-breadcrumbs-item></v-breadcrumbs-item>'],
        ['v-breadcrumbs-divider', '面包屑导航', '<v-breadcrumbs-divider></v-breadcrumbs-divider>'],
        ['v-bottom-navigation', '底部导航栏', '<v-bottom-navigation></v-bottom-navigation>'],
        ['v-app-bar', '应用栏', '<v-app-bar></v-app-bar>'],
        ['v-app-bar-nav-icon', '应用栏', '<v-app-bar-nav-icon></v-app-bar-nav-icon>'],
        ['v-app-bar-title', '应用栏', '<v-app-bar-title></v-app-bar-title>'],
        ['v-tooltip', '工具栏', '<v-tooltip></v-tooltip>'],
        ['v-toolbar', '工具栏', '<v-toolbar title="Application"></v-toolbar>'],
        ['v-toolbar-items', '工具栏', '<v-toolbar-items></v-toolbar-items>'],
        ['v-toolbar-title', '工具栏', '<v-toolbar-title></v-toolbar-title>'],
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
    : [
        ['v-no-ssr', 'Client rendering', '<v-no-ssr></v-no-ssr>'],
        ['v-avatar', 'avatar', '<v-avatar></v-avatar>'],
        ['v-icon', 'icon', '<v-icon></v-icon>'],
        ['v-color-picker', 'Color picker', '<v-color-picker></v-color-picker>'],
        ['v-parallax', 'Parallax', '<v-parallax></v-parallax>'],
        ['v-theme-provider', 'theme provider', '<v-theme-provider></v-theme-provider>'],
        ['v-defaults-provider', 'Default provider', '<v-defaults-provider></v-defaults-provider>'],
        ['v-locale-provider', 'Local provider', '<v-locale-provider></v-locale-provider>'],
        ['v-lazy', 'lazy loading', '<v-lazy></v-lazy>'],
        ['v-img', 'image', '<v-img></v-img>'],
        ['v-responsive', 'aspect ratio', '<v-responsive></v-responsive>'],
        ['v-timeline', 'Timeline', '<v-timeline></v-timeline>'],
        ['v-timeline-item', 'Timeline', '<v-timeline-item></v-timeline-item>'],
        ['v-snackbar', 'Message bar', '<v-snackbar></v-snackbar>'],
        ['v-rating', 'rating', '<v-rating></v-rating>'],
        ['v-progress-linear', 'Progress bar', '<v-progress-linear></v-progress-linear>'],
        ['v-progress-circular', 'Circular progress', '<v-progress-circular></v-progress-circular>'],
        ['v-hover', 'hover', '<v-hover></v-hover>'],
        ['v-banner', 'banner', '<v-banner></v-banner>'],
        ['v-banner-text', 'banner', '<v-banner-text></v-banner-text>'],
        ['v-banner-actions', 'banner', '<v-banner-actions></v-banner-actions>'],
        ['v-alert', 'warning box', '<v-alert></v-alert>'],
        ['v-alert-title', 'Alert box', '<v-alert-title></v-alert-title>'],
        ['v-window', 'pane', '<v-window></v-window>'],
        ['v-window-item', 'pane', '<v-window-item></v-window-item>'],
        ['v-item', 'Project team', '<v-item></v-item>'],
        ['v-item-group', 'item group', '<v-item-group></v-item-group>'],
        ['v-chip-group', 'paper group', '<v-chip-group></v-chip-group>'],
        ['v-carousel-item', 'Carousel item', '<v-carousel-item></v-carousel-item>'],
        ['v-carousel', 'carousel', '<v-carousel></v-carousel>'],
        ['v-btn-group', 'Button group', '<v-btn-group></v-btn-group>'],
        ['v-btn-toggle', 'toggle button', '<v-btn-toggle></v-btn-toggle>'],
        ['v-spacer', 'spacing component', '<v-spacer></v-spacer>'],
        ['v-col', 'row container', '<v-col></v-col>'],
        ['v-row', 'row container', '<v-row></v-row>'],
        ['v-container', 'container', '<v-container></v-container>'],
        ['v-virtualScroll', 'Virtual scrolling list', '<v-virtualScroll></v-virtualScroll>'],
        ['v-table', 'table', '<v-table></v-table>'],
        ['v-textarea', 'Multiline text box', '<v-textarea></v-textarea>'],
        ['v-textField', 'Single-line text box', '<v-textField></v-textField>'],
        ['v-switch', 'switch', '<v-switch></v-switch>'],
        ['v-slider', 'Slider', '<v-slider></v-slider>'],
        ['v-select', 'Drop-down selection box', '<v-select></v-select>'],
        ['v-range-slider', 'Range Slider', '<v-range-slider></v-range-slider>'],
        ['v-radio-group', 'Radio button group', '<v-radio-group></v-radio-group>'],
        ['v-radio', 'radio button', '<v-radio></v-radio>'],
        ['v-input', 'Custom input box', '<v-input></v-input>'],
        ['v-form', 'form', '<v-form></v-form>'],
        ['v-fileInput', 'Upload file', '<v-fileInput></v-fileInput>'],
        ['v-combobox', 'Combo selection box', '<v-combobox></v-combobox>'],
        ['v-checkbox', 'checkbox', '<v-checkbox></v-checkbox>'],
        ['v-autocomplete', 'Autocomplete', '<v-autocomplete></v-autocomplete>'],
        ['v-tab', 'tab', '<v-tab></v-tab>'],
        ['v-tabs', 'tabs', '<v-tabs></v-tabs>'],
        ['v-systemBar', 'System Bar', '<v-systemBar></v-systemBar>'],
        ['v-pagination', 'pagination', '<v-pagination></v-pagination>'],
        ['v-navigation-drawer', 'Drawer navigation', '<v-navigation-drawer></v-navigation-drawer>'],
        ['v-navigation-item', 'Drawer navigation', '<v-navigation-item></v-navigation-item>'],
        ['v-footer', 'Bottom bar component', '<v-footer></v-footer>'],
        ['v-breadcrumbs', 'Breadcrumbs', '<v-breadcrumbs></v-breadcrumbs>'],
        ['v-breadcrumbs-item', 'Breadcrumbs', '<v-breadcrumbs-item></v-breadcrumbs-item>'],
        ['v-breadcrumbs-divider', 'Breadcrumbs', '<v-breadcrumbs-divider></v-breadcrumbs-divider>'],
        ['v-bottom-navigation', 'Bottom navigation bar', '<v-bottom-navigation></v-bottom-navigation>'],
        ['v-app-bar', 'Toolbar', '<v-app-bar></v-app-bar>'],
        ['v-app-bar-nav-icon', 'Toolbar', '<v-app-bar-nav-icon></v-app-bar-nav-icon>'],
        ['v-app-bar-title', 'Toolbar', '<v-app-bar-title></v-app-bar-title>'],
        ['v-tooltip', 'Toolbar', '<v-tooltip></v-tooltip>'],
        ['v-toolbar', 'Toolbar', '<v-toolbar title="Application"></v-toolbar>'],
        ['v-toolbar-items', 'Toolbar', '<v-toolbar-items></v-toolbar-items>'],
        ['v-toolbar-title', 'Toolbar', '<v-toolbar-title></v-toolbar-title>'],
        ['v-btn', 'Button', '<v-btn>Button</v-btn>'],
        ['v-card', 'card', '<v-card text="..."></v-card>'],
        ['v-card-item', 'card', '<v-card-item></v-card-item>'],
        ['v-sheet', 'Workspace', '<v-sheet :height="200" :width="200"></v-sheet>'],
        ['v-card-text', 'card', '<v-card-text></v-card-text>'],
        ['v-card-title', 'card', '<v-card-title></v-card-title>'],
        ['v-card-subtitle', 'card', '<v-card-subtitle></v-card-subtitle>'],
        ['v-card-actions', 'card', '<v-card-actions></v-card-actions>'],
        ['v-chip', 'paper', '<v-chip>Chip</v-chip'],
        ['v-dialog', 'Dialog', `<v-dialog
  v-model="dialog"
  activator="parent"
  width="auto"
></v-dialog`],
        ['v-divider', 'Component is used to separate parts of a list or layout', '<v-divider></v-divider>'],
        ['v-expansion-panels', 'Expansion Panels components help reduce the vertical space occupied by large amounts of information. The component only displays one expansion panel by default; but you can use the multiple attribute, and the expansion panel can remain open until it is actively closed', '<v-expansion-panels></v-expansion-panels>'],
        ['v-expansion-panel', 'Expansion panel is used to wrap the subcomponents of v-expansion-panel-text and v-expansion-panel-title', `<v-expansion-panel title="Title"
  text="Lorem"
></v-expansion-panel>`],
        ['v-expansion-title', 'Advanced expansion panel is a subcomponent used to display the title of the expandable panel. Can also be wrapped in the #title slot', '<v-expansion-panel-title></v-expansion-panel-title>'],
        ['v-expansion-text', 'Advanced expansion panel is a subcomponent used to display the content of the expandable panel. Can also be wrapped in the #text slot', '<v-expansion-panel-text></v-expansion-panel-text>'],
        ['v-list', 'List is simply used to indicate that certain elements belong to the same set. Lists provide the same style for text and images in the same group', '<v-list lines="one"></v-list>'],
        ['v-list-group', 'List You can use the v-list-group component to create sublists of a list. ', '<v-list-group></v-list-group>'],
        ['v-list-img', 'list', '<v-list-img></v-list-img>'],
        ['v-list-subheader', 'list', '<v-list-subheader></v-list-subheader>'],
        ['v-list-item', 'Navigation list', '<v-list-item></v-list-item>'],
        ['v-list-item-title', 'Navigation list', '<v-list-item-title></v-list-item-title>'],
        ['v-list-item-subtitle', 'Navigation list', '<v-list-item-subtitle></v-list-item-subtitle>'],
        ['v-list-item-action', 'Navigation list', '<v-list-item-action></v-list-item-action>'],
        ['v-list-item-media', 'Navigation list', '<v-list-item-media></v-list-item-media>'],
        ['v-menu', 'Menu can display a menu at the position of an active menu element. ', '<v-menu></v-menu>'],
        ['v-overlay', 'mask layer', '<v-overlay v-model="overlay"></v-overlay>'],
      ]
  return componentsReducer(map)
}
