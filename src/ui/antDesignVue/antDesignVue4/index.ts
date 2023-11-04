import { getLocale } from '@vscode-use/utils'
import { componentsReducer, propsReducer } from '../../utils'
import AAffix from './Affix.json'
import AAlert from './Alert.json'
import AAnchor from './Anchor.json'
import AAutoComplete from './AutoComplete.json'
import AAvatar from './Avatar.json'
import AAvatarGroup from './AvatarGroup.json'
import ABackTop from './BackTop.json'
import ABadge from './Badge.json'
import ABadgeRibbon from './BadgeRibbon.json'
import ABreadcrumb from './Breadcrumb.json'
import ABreadcrumbItem from './BreadcrumbItem.json'
import ABreadcrumbSeparator from './BreadcrumbSeparator.json'
import AButton from './Button.json'
import ACalendar from './Calendar.json'
import ACard from './Card.json'
import ACardMeta from './CardMeta.json'
import ACarousel from './Carousel.json'
import ACascader from './Cascader.json'
import ACheckableTag from './CheckableTag.json'
import ACheckbox from './Checkbox.json'
import ACheckboxGroup from './CheckboxGroup.json'
import ACol from './Col.json'
import ACollapse from './Collapse.json'
import ACollapsePanel from './CollapsePanel.json'
import AComment from './Comment.json'
import AConfigProvider from './ConfigProvider.json'
import ADatePicker from './DatePicker.json'
import ADescriptions from './Descriptions.json'
import ADescriptionsItem from './DescriptionsItem.json'
import ADivider from './Divider.json'
import ADrawer from './Drawer.json'
import ADropdown from './Dropdown.json'
import ADropdownButton from './DropdownButton.json'
import AEmpty from './Empty.json'
import AFloatButton from './FloatButton.json'
import AFloatButtonGroup from './FloatButtonGroup.json'
import AForm from './Form.json'
import AFormItem from './FormItem.json'
import AImage from './Image.json'
import AInput from './Input.json'
import AInputGroup from './InputGroup.json'
import AInputNumber from './InputNumber.json'
import AInputPassword from './InputPassword.json'
import AInputSearch from './InputSearch.json'
import ALayout from './Layout.json'
import ALayoutSider from './LayoutSider.json'
import AList from './List.json'
import AListItem from './ListItem.json'
import AListItemMeta from './ListItemMeta.json'
import AMentions from './Mentions.json'
import AMenu from './Menu.json'
import AModal from './Modal.json'
import APageHeader from './PageHeader.json'
import APagination from './Pagination.json'
import APopconfirm from './Popconfirm.json'
import APopover from './Popover.json'
import AProgress from './Progress.json'
import AQrcode from './Qrcode.json'
import ARadio from './Radio.json'
import ARadioButton from './RadioButton.json'
import ARadioGroup from './RadioGroup.json'
import ARangePicker from './RangePicker.json'
import ARate from './Rate.json'
import AResult from './Result.json'
import ARow from './Row.json'
import ASegmented from './Segmented.json'
import ASelect from './Select.json'
import ASelectOption from './SelectOption.json'
import ASelectOptionGroup from './SelectOptionGroup.json'
import ASkeleton from './Skeleton.json'
import ASlider from './Slider.json'
import ASpace from './Space.json'
import ASpaceCompact from './SpaceCompact.json'
import ASpin from './Spin.json'
import AStatistic from './Statistic.json'
import AStatisticCountdown from './StatisticCountdown.json'
import ASteps from './Steps.json'
import ASwitch from './Switch.json'
import ATable from './Table.json'
import ATableColumn from './TableColumn.json'
import ATabPane from './TabPane.json'
import ATabs from './Tabs.json'
import ATag from './Tag.json'
import ATextarea from './Textarea.json'
import ATimeline from './Timeline.json'
import ATimelineItem from './TimelineItem.json'
import ATimePicker from './TimePicker.json'
import ATooltip from './Tooltip.json'
import ATour from './Tour.json'
import ATransfer from './Transfer.json'
import ATree from './Tree.json'
import ATreeSelect from './TreeSelect.json'
import ATypographyLink from './TypographyLink.json'
import ATypographyParagraph from './TypographyParagraph.json'
import ATypographyText from './TypographyText.json'
import ATypographyTitle from './TypographyTitle.json'
import AUpload from './Upload.json'
import AWatermark from './Watermark.json'
import ALayoutContent from './LayoutContent.json'
import ALayoutFooter from './LayoutFooter.json'
import ALayoutHeader from './LayoutHeader.json'

export function antDesignVue4() {
  const map: any = [
    AAffix,
    AAlert,
    AAnchor,
    AAutoComplete,
    AAvatar,
    AAvatarGroup,
    ABackTop,
    ABadge,
    ABadgeRibbon,
    ABreadcrumb,
    ABreadcrumbItem,
    ABreadcrumbSeparator,
    AButton,
    ACalendar,
    ACard,
    ACardMeta,
    ACarousel,
    ACascader,
    ACheckableTag,
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
    AInput,
    AInputGroup,
    AInputNumber,
    AInputPassword,
    AInputSearch,
    ALayout,
    ALayoutSider,
    AList,
    AListItem,
    AListItemMeta,
    AMentions,
    AMenu,
    AModal,
    APageHeader,
    APagination,
    APopconfirm,
    APopover,
    AProgress,
    AQrcode,
    ARadio,
    ARadioButton,
    ARadioGroup,
    ARangePicker,
    ARate,
    AResult,
    ARow,
    ASegmented,
    ASelect,
    ASelectOption,
    ASelectOptionGroup,
    ASkeleton,
    ASlider,
    ASpace,
    ASpaceCompact,
    ASpin,
    AStatistic,
    AStatisticCountdown,
    ASteps,
    ASwitch,
    ATable,
    ATableColumn,
    ATabPane,
    ATabs,
    ATag,
    ATextarea,
    ATimeline,
    ATimelineItem,
    ATimePicker,
    ATooltip,
    ATour,
    ATransfer,
    ATree,
    ATreeSelect,
    ATypographyLink,
    ATypographyParagraph,
    ATypographyText,
    ATypographyTitle,
    AUpload,
    AWatermark,
    ALayoutContent,
    ALayoutFooter,
    ALayoutHeader,
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
        [ALayoutContent, '内容部分，自带默认样式，其下可嵌套任何元素，只能放在 Layout 中'],
        [ALayoutHeader, '顶部布局，自带默认样式，其下可嵌套任何元素，只能放在 Layout 中。'],
        [ALayoutSider, '侧边栏，自带默认样式及基本功能，其下可嵌套任何元素，只能放在 Layout 中。'],
        [ALayout, '布局容器，其下可嵌套 Header Sider Content Footer 或 Layout 本身，可以放在任何父容器中。'],
        [ALayoutFooter, '底部布局，自带默认样式，其下可嵌套任何元素，只能放在 Layout 中。'],
        [AButton, '按钮'],
        [ASpace, '间距 设置组件之间的间距'],
        [ASpaceCompact, '紧凑布局组合 使用 Space.Compact 让表单组件之间紧凑连接且合并边框'],
        [AAnchor, '锚点'],
        [AAutoComplete, '输入字段的自动完成功能'],
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
        [ATypographyLink, '排版超链接'],
        [ASelectOptionGroup, '备选项进行分组展示'],
        [ACascader, '级联选择器'],
        [ACheckableTag, '进行标记和分类的小标签。'],
        [ASwitch, '开关'],
        [ASlider, '滑块'],
        [ATimePicker, '时间选择器'],
        [ARangePicker, '时间范围选择器'],
        [ADatePicker, '日期选择器/日期时间选择器'],
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
        [ATreeSelect, '树型选择控件。'],
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
        [AStatisticCountdown, '统计数值'],
        [AAlert, '警告'],
        [AMenu, '导航菜单'],
        [ATabs, '标签页'],
        [ATabPane, '标签项'],
        [ABreadcrumb, '面包屑'],
        [ABreadcrumbItem, '面包屑项'],
        [ABreadcrumbSeparator, '可以自定义分隔符的面包屑项'],
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
        [ALayoutContent, 'The content part has its own default style. Any elements can be nested under it and can only be placed in Layout'],
        [ALayoutHeader, 'The top layout has its own default style. Any element can be nested under it and can only be placed in Layout. '],
        [ALayoutSider, 'Sidebar has its own default style and basic functions. Any element can be nested under it and can only be placed in Layout. '],
        [ALayout, 'Layout container, under which Header Sider Content Footer or Layout itself can be nested, and can be placed in any parent container. '],
        [ALayoutFooter, 'Bottom layout, with its own default style, any element can be nested under it, and can only be placed in Layout. '],
        [AButton, 'button'],
        [ASpace, 'Spacing sets the spacing between components'],
        [ASpaceCompact, 'Compact layout combination uses Space.Compact to compactly connect form components and merge borders'],
        [AAnchor, 'anchor'],
        [AAutoComplete, 'Autocomplete function of input field.'],
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
        [ATypographyLink, 'typography hyperlink'],
        [ASelectOptionGroup, 'Alternative options are displayed in groups'],
        [ACascader, 'cascading selector'],
        [ACheckableTag, 'Tag for categorizing or markup.'],
        [ASwitch, 'switch'],
        [ASlider, 'slider'],
        [ATimePicker, 'time picker'],
        [ARangePicker, 'time range picker'],
        [ADatePicker, 'Date picker/date time picker'],
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
        [ATreeSelect, 'Tree selection control.'],
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
        [AStatisticCountdown, 'statistical value'],
        [AAlert, 'warning'],
        [AMenu, 'Navigation menu'],
        [ATabs, 'tabs'],
        [ATabPane, 'tab item'],
        [ABreadcrumb, 'breadcrumb'],
        [ABreadcrumbItem, 'breadcrumb item'],
        [ABreadcrumbSeparator, 'Breadcrumb items with customizable separators'],
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
