import { getLocale } from '@vscode-use/utils'
import { componentsReducer, propsReducer } from '../../utils'
import AAffix from './affix.json'
import AAlert from './alert.json'
import AAnchor from './anchor.json'
import AAutoComplete from './autoComplete.json'
import AAvatar from './avatar.json'
import AAvatarGroup from './avatarGroup.json'
import ABacktop from './backTop.json'
import ABadge from './badge.json'
import ABadgeRibbon from './badgeRibbon.json'
import ABreadcrumb from './breadcrumb.json'
import ABreadcrumbItem from './breadcrumbItem.json'
import AButton from './button.json'
import ACalendar from './calendar.json'
import ACard from './card.json'
import ACardMeta from './cardMeta.json'
import ACarousel from './carousel.json'
import ACheckbox from './checkbox.json'
import ACheckboxGroup from './checkboxGroup.json'
import ACol from './col.json'
import ACollapse from './collapse.json'
import ACollapsePanel from './collapsePanel.json'
import AComment from './comment.json'
import AConfigProvider from './configProvider.json'
import ADatePicker from './datePicker.json'
import ADescriptions from './descriptions.json'
import ADescriptionsItem from './descriptionsItem.json'
import ADivider from './divider.json'
import ADrawer from './drawer.json'
import ADropdown from './dropdown.json'
import ADropdownButton from './dropdownButton.json'
import AEmpty from './empty.json'
import AFloatButton from './floatButton.json'
import AFloatButtonGroup from './floatButtonGroup.json'
import AForm from './form.json'
import AFormItem from './formItem.json'
import AImage from './image.json'
import AIput from './input.json'
import AIputGroup from './inputGroup.json'
import AInputNumber from './inputNumber.json'
import AInputPassword from './inputPassword.json'
import AInputSearch from './inputSearch.json'
import ALayout from './layout.json'
import ALayoutSider from './layoutSider.json'
import AList from './list.json'
import AListItem from './listItem.json'
import AListItemMeta from './listItemMeta.json'
import AMetions from './mentions.json'
import AMenu from './menu.json'
import ARangePicker from './rangePicker.json'
import ARow from './row.json'
import ATextarea from './textarea.json'

export function antDesignVue4() {
  const map: any = [
    AAffix,
    AAlert,
    AAnchor,
    AAutoComplete,
    AAvatar,
    AAvatarGroup,
    ABacktop,
    ABadge,
    ABadgeRibbon,
    ABreadcrumb,
    ABreadcrumbItem,
    AButton,
    ACalendar,
    ACard,
    ACardMeta,
    ACarousel,
    ACheckbox,
    ACheckboxGroup,
    ACol,
    ACollapse,
    ACollapsePanel,
    AComment,
    AConfigProvider,
    ADatePicker,
    ADescriptions,
    ADescriptionsItem,
    ADivider,
    ADrawer,
    ADropdown,
    ADropdownButton,
    AEmpty,
    AFloatButton,
    AFloatButtonGroup,
    AForm,
    AFormItem,
    AImage,
    AIput,
    AIputGroup,
    AInputNumber,
    AInputPassword,
    AInputSearch,
    ALayout,
    ALayoutSider,
    AList,
    AListItem,
    AListItemMeta,
    AMetions,
    AMenu,
    ARangePicker,
    ARow,
    ATextarea,
  ]

  return propsReducer(map)
}

export function antDesignVue4Components() {
  const isZh = getLocale().includes('zh')

  const map = isZh
    ? [
        ['a-row', '栅格布局'],
        ['a-qrcode', '二维码'],
        ['a-col', '栅格布局'],
        ['a-layout-content', '内容部分，自带默认样式，其下可嵌套任何元素，只能放在 Layout 中'],
        ['a-layout-header', '顶部布局，自带默认样式，其下可嵌套任何元素，只能放在 Layout 中。'],
        ['a-layout-sider', '侧边栏，自带默认样式及基本功能，其下可嵌套任何元素，只能放在 Layout 中。'],
        ['a-layout', '布局容器，其下可嵌套 Header Sider Content Footer 或 Layout 本身，可以放在任何父容器中。'],
        ['a-layout-footer', '底部布局，自带默认样式，其下可嵌套任何元素，只能放在 Layout 中。'],
        ['a-button', '按钮'],
        ['a-space', '间距 设置组件之间的间距'],
        ['a-space-compact', '紧凑布局组合 使用 Space.Compact 让表单组件之间紧凑连接且合并边框'],
        ['a-anchor', '锚点'],
        ['a-radio', '单选框'],
        ['a-radio-group', '单选框组'],
        ['a-radio-button', '按钮样式的单选组合'],
        ['a-checkbox', '多选框'],
        ['a-checkbox-group', '多选框组'],
        ['a-checkbox-button', '按钮样式的多选组合'],
        ['a-input', '输入框'],
        ['a-input-password', '密码框'],
        ['a-input-search', '搜索框 带有搜索按钮的输入框'],
        ['a-input-group', '输入框组 Input.Group 中所有的 Input 的大小，可选 large default small'],
        ['a-input-number', '计数器'],
        ['a-select', '选择器'],
        ['a-option', '基础多选'],
        ['a-typography', '排版'],
        ['a-segmented', '分段控制器 用于展示多个选项并允许用户选择其中单个选项'],
        ['a-typography-paragraph', '排版段落'],
        ['a-typography-text', '排版文本'],
        ['a-typography-title', '排版标题'],
        ['a-typography-link', '排版超链接'],
        ['a-option-group', '备选项进行分组展示'],
        ['a-cascader', '级联选择器'],
        ['a-switch', '开关'],
        ['a-slider', '滑块'],
        ['a-time-picker', '时间选择器'],
        ['a-time-range-picker', '时间范围选择器'],
        ['a-date-picker', '日期选择器/日期时间选择器'],
        ['a-range-picker', '通过设置 picker 属性，指定日期范围选择器类型'],
        ['a-upload', '上传'],
        ['a-spin', '加载中 用于页面和区块的加载中状态'],
        ['a-rate', '评分'],
        ['a-affix', '固钉 将页面元素钉在可视范围'],
        ['a-config-provider', '全局化配置 为组件提供统一的全局化配置'],
        ['a-float-button', '悬浮按钮 自 4.0.0 版本开始提供该组件'],
        ['a-float-button-group', '浮动按钮组 自 4.0.0 版本开始提供该组件'],
        ['a-back-top', '回到顶部'],
        ['a-textarea', '适应文本高度的文本域'],
        ['a-watermark', '水印 给页面的某个区域加上水印'],
        ['a-transfer', '穿梭框'],
        ['a-form', '表单'],
        ['a-form-item', '表单项'],
        ['a-table', '表格'],
        ['a-table-column', '表格项'],
        ['a-tag', '标签'],
        ['a-progress', '进度条'],
        ['a-tree', '树形控件'],
        ['a-pagination', '分页'],
        ['a-badge', '标记'],
        ['a-badge-ribbon', '缎带型的徽标'],
        ['a-avatar', '头像'],
        ['a-avatar-group', '头像组合展现'],
        ['a-skeleton', '骨架屏'],
        ['a-empty', '空状态'],
        ['a-descriptions', '描述列表'],
        ['a-descriptions-item', '描述列表项'],
        ['a-result', '结果'],
        ['a-statistic', '统计数值'],
        ['a-alert', '警告'],
        ['a-menu', '导航菜单'],
        ['a-tabs', '标签页'],
        ['a-tab-pane', '标签项'],
        ['a-breadcrumb', '面包屑'],
        ['a-breadcrumb-item', '面包屑项'],
        ['a-breadcrumb-separator', '可以自定义分隔符的面包屑项'],
        ['a-page-header', '页头'],
        ['a-dropdown', '下拉菜单'],
        ['a-dropdown-button', '带下拉框的按钮'],
        ['a-steps', '步骤条'],
        ['a-tooltip', '文字提示'],
        ['a-popover', '弹出框'],
        ['a-popconfirm', '气泡确认框'],
        ['a-tour', '漫游式引导 常用于引导用户了解产品功能'],
        ['a-card', '卡片'],
        ['a-card-meta', '卡片 可以利用 Card.Meta 支持更灵活的内容'],
        ['a-carousel', '走马灯'],
        ['a-collapse', '折叠面板'],
        ['a-collapse-panel', '折叠面板项'],
        ['a-timeline', '时间线'],
        ['a-timeline-item', '时间线项'],
        ['a-divider', '分割线 区隔内容的分割线'],
        ['a-calendar', '日历'],
        ['a-image', '图片'],
        ['a-drawer', '抽屉'],
        ['a-modal', '对话框'],
        ['a-mentions', '提及 用于在输入中提及某人或某事，常用于发布、聊天或评论功能'],
        ['a-comment', '评论 对网站内容的反馈、评价和讨论'],
        ['a-list', '列表 最基础的列表展示，可承载文字、列表、图片、段落，常用于后台数据展示页面'],
        ['a-list-item', '列表项'],
        ['a-list-item-meta', '列表元素图'],
      ]
    : [
        ['a-row', 'grid layout'],
        ['a-qrcode', 'QR code'],
        ['a-col', 'Grid layout'],
        ['a-layout-content', 'The content part has its own default style. Any elements can be nested under it and can only be placed in Layout'],
        ['a-layout-header', 'The top layout has its own default style. Any element can be nested under it and can only be placed in Layout. '],
        ['a-layout-sider', 'Sidebar has its own default style and basic functions. Any element can be nested under it and can only be placed in Layout. '],
        ['a-layout', 'Layout container, under which Header Sider Content Footer or Layout itself can be nested, and can be placed in any parent container. '],
        ['a-layout-footer', 'Bottom layout, with its own default style, any element can be nested under it, and can only be placed in Layout. '],
        ['a-button', 'button'],
        ['a-space', 'Spacing sets the spacing between components'],
        ['a-space-compact', 'Compact layout combination uses Space.Compact to compactly connect form components and merge borders'],
        ['a-anchor', 'anchor'],
        ['a-radio', 'radio button'],
        ['a-radio-group', 'Radio group'],
        ['a-radio-button', 'Radio combination of button styles'],
        ['a-checkbox', 'Multiple checkbox'],
        ['a-checkbox-group', 'Multiple checkbox group'],
        ['a-checkbox-button', 'Multiple selection combination of button styles'],
        ['a-input', 'input box'],
        ['a-input-password', 'password box'],
        ['a-input-search', 'Search box input box with search button'],
        ['a-input-group', 'The size of all Inputs in the input box group Input.Group, optional large default small'],
        ['a-input-number', 'counter'],
        ['a-select', 'selector'],
        ['a-option', 'Basic multiple selection'],
        ['a-typography', 'typography'],
        ['a-segmented', 'Segmented controller is used to display multiple options and allow the user to select a single option'],
        ['a-typography-paragraph', 'typography paragraph'],
        ['a-typography-text', 'typography text'],
        ['a-typography-title', 'typography title'],
        ['a-typography-link', 'typography hyperlink'],
        ['a-option-group', 'Alternative options are displayed in groups'],
        ['a-cascader', 'cascading selector'],
        ['a-switch', 'switch'],
        ['a-slider', 'slider'],
        ['a-time-picker', 'time picker'],
        ['a-time-range-picker', 'time range picker'],
        ['a-date-picker', 'Date picker/date time picker'],
        ['a-range-picker', 'Specify the date range picker type by setting the picker attribute'],
        ['a-upload', 'upload'],
        ['a-spin', 'Loading'],
        ['a-rate', 'rating'],
        ['a-affix', 'Pin the page element to the visible range'],
        ['a-config-provider', 'Global configuration provides unified global configuration for components'],
        ['a-float-button', 'Floating button is available since version 4.0.0'],
        ['a-float-button-group', 'Float button group is available since version 4.0.0'],
        ['a-back-top', 'back to top'],
        ['a-textarea', 'Text area that adapts to text height'],
        ['a-watermark', 'Watermark adds watermark to a certain area of the page'],
        ['a-transfer', 'shuttle box'],
        ['a-form', 'form'],
        ['a-form-item', 'form item'],
        ['a-table', 'table'],
        ['a-table-column', 'table item'],
        ['a-tag', 'tag'],
        ['a-progress', 'progress bar'],
        ['a-tree', 'Tree control'],
        ['a-pagination', 'pagination'],
        ['a-badge', 'mark'],
        ['a-badge-ribbon', 'ribbon-shaped logo'],
        ['a-avatar', 'avatar'],
        ['a-avatar-group', 'Avatar group display'],
        ['a-skeleton', 'skeleton screen'],
        ['a-empty', 'empty state'],
        ['a-descriptions', 'description list'],
        ['a-descriptions-item', 'Description list item'],
        ['a-result', 'result'],
        ['a-statistic', 'statistical value'],
        ['a-alert', 'warning'],
        ['a-menu', 'Navigation menu'],
        ['a-tabs', 'tabs'],
        ['a-tab-pane', 'tab item'],
        ['a-breadcrumb', 'breadcrumb'],
        ['a-breadcrumb-item', 'breadcrumb item'],
        ['a-breadcrumb-separator', 'Breadcrumb items with customizable separators'],
        ['a-page-header', 'page header'],
        ['a-dropdown', 'drop-down menu'],
        ['a-dropdown-button', 'Button with dropdown box'],
        ['a-steps', 'step bar'],
        ['a-tooltip', 'Text tip'],
        ['a-popover', 'pop-up box'],
        ['a-popconfirm', 'Bubble confirmation box'],
        ['a-tour', 'Roaming guide is often used to guide users to understand product functions'],
        ['a-card', 'card'],
        ['a-card-meta', 'Cards can use Card.Meta to support more flexible content'],
        ['a-carousel', 'carousel'],
        ['a-collapse', 'collapse panel'],
        ['a-collapse-panel', 'collapse panel item'],
        ['a-timeline', 'timeline'],
        ['a-timeline-item', 'Timeline item'],
        ['a-divider', 'Divider line The dividing line that separates content'],
        ['a-calendar', 'calendar'],
        ['a-image', 'image'],
        ['a-drawer', 'drawer'],
        ['a-modal', 'dialog'],
        ['a-mentions', 'Mentions are used to mention someone or something in the input, often used in publishing, chat or comment functions'],
        ['a-comment', 'Comment Feedback, evaluation and discussion of website content'],
        ['a-list', 'List is the most basic list display, which can carry text, lists, pictures, paragraphs, and is often used in background data display pages'],
        ['a-list-item', 'list item'],
        ['a-list-item-meta', 'List element graph'],
      ]
  return componentsReducer(map)
}
