import { getLocale } from '@vscode-use/utils'
import { componentsReducer, propsReducer } from '../../utils'
import AAffix from './affix.json'
import AAlert from './alert.json'
import AAnchor from './anchor.json'
import AAutoComplete from './autoComplete.json'
import AAvatar from './avatar.json'
import AAvatarGroup from './avatarGroup.json'
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
import AInputNumber from './inputNumber.json'
import AInputPassword from './inputPassword.json'
import AInputSearch from './inputSearch.json'
import ALayout from './layout.json'
import ALayoutSider from './layoutSider.json'
import AList from './list.json'
import AListItem from './listItem.json'
import AListItemMeta from './listItemMeta.json'
import AMenu from './menu.json'
import ARangePicker from './rangePicker.json'
import ARow from './row.json'
import ATextarea from './textarea.json'
import AQrcode from './qrcode.json'
import ASpace from './space.json'
import ARadio from './radio.json'
import ARadioGroup from './radioGroup.json'
import ARadioButton from './radioButton.json'
import ASpaceCompact from './spaceCompact.json'
import AInput from './input.json'
import AInputGroup from './inputGroup.json'
import ASelect from './select.json'
import ASelectOption from './selectOption.json'
import ASelectOptionGroup from './selectOptionGroup.json'
import ATypographyText from './typographyText.json'
import ATypographyParagraph from './typographyParagraph.json'
import ATypographyTitle from './typographyTitle.json'
import ACascader from './cascader.json'
import ASegmented from './segmented.json'
import ASwitch from './switch.json'
import ASlider from './slider.json'
import ATimePicker from './timePicker.json'
import AUpload from './upload.json'
import ASpin from './spin.json'
import ARate from './rate.json'
import ABackTop from './backTop.json'
import AWatermark from './watermark.json'
import ATransfer from './transfer.json'
import ATable from './table.json'
import ATableColumn from './tableColumn.json'
import ATag from './tag.json'
import AProgress from './progress.json'
import ATree from './tree.json'
import APagination from './pagination.json'
import ASkeleton from './skeleton.json'
import AResult from './result.json'
import AStatistic from './statistic.json'
import ATabs from './tabs.json'
import ATabPane from './tabPane.json'
import APageHeader from './pageHeader.json'
import ASteps from './steps.json'
import ATooltip from './tooltip.json'
import APopover from './popover.json'
import APopconfirm from './popconfirm.json'
import ATour from './tour.json'
import ATimeline from './timeline.json'
import ATimelineItem from './timelineItem.json'
import AModal from './modal.json'
import AMentions from './mentions.json'

export function antDesignVue4() {
  const map: any = [
    AAffix,
    AAlert,
    AAnchor,
    AAutoComplete,
    AAvatar,
    AAvatarGroup,
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
    AInputNumber,
    AInputPassword,
    AInputSearch,
    ALayout,
    ALayoutSider,
    AList,
    AListItem,
    AListItemMeta,
    AMenu,
    ARangePicker,
    ARow,
    ATextarea,
    AQrcode,
    ASpace,
    ARadio,
    ARadioGroup,
    ARadioButton,
    ASpaceCompact,
    AInput,
    AInputGroup,
    ASelect,
    ASelectOption,
    ASelectOptionGroup,
    ATypographyText,
    ATypographyParagraph,
    ATypographyTitle,
    ACascader,
    ASegmented,
    ASwitch,
    ASlider,
    ATimePicker,
    AUpload,
    ASpin,
    ARate,
    ABackTop,
    AWatermark,
    ATransfer,
    ATable,
    ATableColumn,
    ATag,
    AProgress,
    ATree,
    APagination,
    ASkeleton,
    AResult,
    AStatistic,
    ATabs,
    ATabPane,
    APageHeader,
    ASteps,
    ATooltip,
    APopover,
    APopconfirm,
    ATour,
    ATimeline,
    ATimelineItem,
    AModal,
    AMentions,
  ]

  return propsReducer(map)
}

export function antDesignVue4Components() {
  const isZh = getLocale().includes('zh')

  const map = isZh
    ? [
        [ARow, '栅格布局'],
        [AQrcode, '二维码'],
        [ACol, '栅格布局'],
        ['a-layout-content', '内容部分，自带默认样式，其下可嵌套任何元素，只能放在 Layout 中'],
        ['a-layout-header', '顶部布局，自带默认样式，其下可嵌套任何元素，只能放在 Layout 中。'],
        [ALayoutSider, '侧边栏，自带默认样式及基本功能，其下可嵌套任何元素，只能放在 Layout 中。'],
        [ALayout, '布局容器，其下可嵌套 Header Sider Content Footer 或 Layout 本身，可以放在任何父容器中。'],
        ['a-layout-footer', '底部布局，自带默认样式，其下可嵌套任何元素，只能放在 Layout 中。'],
        [AButton, '按钮'],
        [ASpace, '间距 设置组件之间的间距'],
        [ASpaceCompact, '紧凑布局组合 使用 Space.Compact 让表单组件之间紧凑连接且合并边框'],
        [AAnchor, '锚点'],
        [ARadio, '单选框'],
        [ARadioGroup, '单选框组'],
        [ARadioButton, '按钮样式的单选组合'],
        [ACheckbox, '多选框'],
        [ACheckboxGroup, '多选框组'],
        [AInput, '输入框'],
        [AInputPassword, '密码框'],
        [AInputSearch, '搜索框 带有搜索按钮的输入框'],
        [AInputGroup, '输入框组 Input.Group 中所有的 Input 的大小，可选 large default small'],
        [AInputNumber, '计数器'],
        [ASelect, '选择器'],
        [ASelectOption, '基础多选'],
        [ASegmented, '分段控制器 用于展示多个选项并允许用户选择其中单个选项'],
        [ATypographyParagraph, '排版段落'],
        [ATypographyText, '排版文本'],
        [ATypographyTitle, '排版标题'],
        ['a-typography-link', '排版超链接'],
        [ASelectOptionGroup, '备选项进行分组展示'],
        [ACascader, '级联选择器'],
        [ASwitch, '开关'],
        [ASlider, '滑块'],
        [ATimePicker, '时间选择器'],
        ['a-time-range-picker', '时间范围选择器'],
        [ADatePicker, '日期选择器/日期时间选择器'],
        [ARangePicker, '通过设置 picker 属性，指定日期范围选择器类型'],
        [AUpload, '上传'],
        [ASpin, '加载中 用于页面和区块的加载中状态'],
        [ARate, '评分'],
        [AAffix, '固钉 将页面元素钉在可视范围'],
        [AConfigProvider, '全局化配置 为组件提供统一的全局化配置'],
        [AFloatButton, '悬浮按钮 自 4.0.0 版本开始提供该组件'],
        [AFloatButtonGroup, '浮动按钮组 自 4.0.0 版本开始提供该组件'],
        [ABackTop, '回到顶部'],
        [ATextarea, '适应文本高度的文本域'],
        [AWatermark, '水印 给页面的某个区域加上水印'],
        [ATransfer, '穿梭框'],
        [AForm, '表单'],
        [AFormItem, '表单项'],
        [ATable, '表格'],
        [ATableColumn, '表格项'],
        [ATag, '标签'],
        [AProgress, '进度条'],
        [ATree, '树形控件'],
        [APagination, '分页'],
        [ABadge, '标记'],
        [ABadgeRibbon, '缎带型的徽标'],
        [AAvatar, '头像'],
        [AAvatarGroup, '头像组合展现'],
        [ASkeleton, '骨架屏'],
        [AEmpty, '空状态'],
        [ADescriptions, '描述列表'],
        [ADescriptionsItem, '描述列表项'],
        [AResult, '结果'],
        [AStatistic, '统计数值'],
        [AAlert, '警告'],
        [AMenu, '导航菜单'],
        [ATabs, '标签页'],
        [ATabPane, '标签项'],
        [ABreadcrumb, '面包屑'],
        [ABreadcrumbItem, '面包屑项'],
        ['a-breadcrumb-separator', '可以自定义分隔符的面包屑项'],
        [APageHeader, '页头'],
        [ADropdown, '下拉菜单'],
        [ADropdownButton, '带下拉框的按钮'],
        [ASteps, '步骤条'],
        [ATooltip, '文字提示'],
        [APopover, '弹出框'],
        [APopconfirm, '气泡确认框'],
        [ATour, '漫游式引导 常用于引导用户了解产品功能'],
        [ACard, '卡片'],
        [ACardMeta, '卡片 可以利用 Card.Meta 支持更灵活的内容'],
        [ACarousel, '走马灯'],
        [ACollapse, '折叠面板'],
        [ACollapsePanel, '折叠面板项'],
        [ATimeline, '时间线'],
        [ATimelineItem, '时间线项'],
        [ADivider, '分割线 区隔内容的分割线'],
        [ACalendar, '日历'],
        [AImage, '图片'],
        [ADrawer, '抽屉'],
        [AModal, '对话框'],
        [AMentions, '提及 用于在输入中提及某人或某事，常用于发布、聊天或评论功能'],
        [AComment, '评论 对网站内容的反馈、评价和讨论'],
        [AList, '列表 最基础的列表展示，可承载文字、列表、图片、段落，常用于后台数据展示页面'],
        [AListItem, '列表项'],
        [AListItemMeta, '列表元素图'],
      ]
    : [
        [ARow, 'grid layout'],
        [AQrcode, 'QR code'],
        [ACol, 'Grid layout'],
        ['a-layout-content', 'The content part has its own default style. Any elements can be nested under it and can only be placed in Layout'],
        ['a-layout-header', 'The top layout has its own default style. Any element can be nested under it and can only be placed in Layout. '],
        [ALayoutSider, 'Sidebar has its own default style and basic functions. Any element can be nested under it and can only be placed in Layout. '],
        [ALayout, 'Layout container, under which Header Sider Content Footer or Layout itself can be nested, and can be placed in any parent container. '],
        ['a-layout-footer', 'Bottom layout, with its own default style, any element can be nested under it, and can only be placed in Layout. '],
        [AButton, 'button'],
        [ASpace, 'Spacing sets the spacing between components'],
        [ASpaceCompact, 'Compact layout combination uses Space.Compact to compactly connect form components and merge borders'],
        [AAnchor, 'anchor'],
        [ARadio, 'radio button'],
        [ARadioGroup, 'Radio group'],
        [ARadioButton, 'Radio combination of button styles'],
        [ACheckbox, 'Multiple checkbox'],
        [ACheckboxGroup, 'Multiple checkbox group'],
        [AInput, 'input box'],
        [AInputPassword, 'password box'],
        [AInputSearch, 'Search box input box with search button'],
        [AInputGroup, 'The size of all Inputs in the input box group Input.Group, optional large default small'],
        [AInputNumber, 'counter'],
        [ASelect, 'selector'],
        [ASelectOption, 'Basic multiple selection'],
        [ASegmented, 'Segmented controller is used to display multiple options and allow the user to select a single option'],
        [ATypographyParagraph, 'typography paragraph'],
        [ATypographyText, 'typography text'],
        [ATypographyTitle, 'typography title'],
        ['a-typography-link', 'typography hyperlink'],
        [ASelectOptionGroup, 'Alternative options are displayed in groups'],
        [ACascader, 'cascading selector'],
        [ASwitch, 'switch'],
        [ASlider, 'slider'],
        [ATimePicker, 'time picker'],
        ['a-time-range-picker', 'time range picker'],
        [ADatePicker, 'Date picker/date time picker'],
        [ARangePicker, 'Specify the date range picker type by setting the picker attribute'],
        [AUpload, 'upload'],
        [ASpin, 'Loading'],
        [ARate, 'rating'],
        [AAffix, 'Pin the page element to the visible range'],
        [AConfigProvider, 'Global configuration provides unified global configuration for components'],
        [AFloatButton, 'Floating button is available since version 4.0.0'],
        [AFloatButtonGroup, 'Float button group is available since version 4.0.0'],
        [ABackTop, 'back to top'],
        [ATextarea, 'Text area that adapts to text height'],
        [AWatermark, 'Watermark adds watermark to a certain area of the page'],
        [ATransfer, 'shuttle box'],
        [AForm, 'form'],
        [AFormItem, 'form item'],
        [ATable, 'table'],
        [ATableColumn, 'table item'],
        [ATag, 'tag'],
        [AProgress, 'progress bar'],
        [ATree, 'Tree control'],
        [APagination, 'pagination'],
        [ABadge, 'mark'],
        [ABadgeRibbon, 'ribbon-shaped logo'],
        [AAvatar, 'avatar'],
        [AAvatarGroup, 'Avatar group display'],
        [ASkeleton, 'skeleton screen'],
        [AEmpty, 'empty state'],
        [ADescriptions, 'description list'],
        [ADescriptionsItem, 'Description list item'],
        [AResult, 'result'],
        [AStatistic, 'statistical value'],
        [AAlert, 'warning'],
        [AMenu, 'Navigation menu'],
        [ATabs, 'tabs'],
        [ATabPane, 'tab item'],
        [ABreadcrumb, 'breadcrumb'],
        [ABreadcrumbItem, 'breadcrumb item'],
        ['a-breadcrumb-separator', 'Breadcrumb items with customizable separators'],
        [APageHeader, 'page header'],
        [ADropdown, 'drop-down menu'],
        [ADropdownButton, 'Button with dropdown box'],
        [ASteps, 'step bar'],
        [ATooltip, 'Text tip'],
        [APopover, 'pop-up box'],
        [APopconfirm, 'Bubble confirmation box'],
        [ATour, 'Roaming guide is often used to guide users to understand product functions'],
        [ACard, 'card'],
        [ACardMeta, 'Cards can use Card.Meta to support more flexible content'],
        [ACarousel, 'carousel'],
        [ACollapse, 'collapse panel'],
        [ACollapsePanel, 'collapse panel item'],
        [ATimeline, 'timeline'],
        [ATimelineItem, 'Timeline item'],
        [ADivider, 'Divider line The dividing line that separates content'],
        [ACalendar, 'calendar'],
        [AImage, 'image'],
        [ADrawer, 'drawer'],
        [AModal, 'dialog'],
        [AMentions, 'Mentions are used to mention someone or something in the input, often used in publishing, chat or comment functions'],
        [AComment, 'Comment Feedback, evaluation and discussion of website content'],
        [AList, 'List is the most basic list display, which can carry text, lists, pictures, paragraphs, and is often used in background data display pages'],
        [AListItem, 'list item'],
        [AListItemMeta, 'List element graph'],
      ]
  return componentsReducer(map)
}
