import actionBar from './ActionBar.json'
import actionBarButton from './ActionBarButton.json'
import actionBarIcon from './ActionBarIcon.json'
import actionSheet from './ActionSheet.json'
import addressEdit from './AddressEdit.json'
import addressList from './AddressList.json'
import area from './Area.json'
import backTop from './BackTop.json'
import badge from './Badge.json'
import barrage from './Barrage.json'
import button from './Button.json'
import calendar from './Calendar.json'
import card from './Card.json'
import cascader from './Cascader.json'
import cell from './Cell.json'
import cellGroup from './CellGroup.json'
import checkbox from './Checkbox.json'
import checkboxGroup from './CheckboxGroup.json'
import circle from './Circle.json'
import col from './Col.json'
import collapse from './Collapse.json'
import collapseItem from './CollapseItem.json'
import configProvider from './ConfigProvider.json'
import contactCard from './ContactCard.json'
import contactEdit from './ContactEdit.json'
import contactList from './ContactList.json'
import countDown from './CountDown.json'
import couponCell from './CouponCell.json'
import couponList from './CouponList.json'
import datePicker from './DatePicker.json'
import dialog from './Dialog.json'
import dropdownItem from './DropdownItem.json'
import dropdownMenu from './DropdownMenu.json'
import empty from './Empty.json'
import field from './Field.json'
import floatingBubble from './FloatingBubble.json'
import floatingPanel from './FloatingPanel.json'
import form from './Form.json'
import grid from './Grid.json'
import gridItem from './GridItem.json'
import icon from './Icon.json'
import image from './Image.json'
import imagePreview from './ImagePreview.json'
import indexAnchor from './IndexAnchor.json'
import indexBar from './IndexBar.json'
import list from './List.json'
import loading from './Loading.json'
import navBar from './NavBar.json'
import noticeBar from './NoticeBar.json'
import numberKeyboard from './NumberKeyboard.json'
import overlay from './Overlay.json'
import pagination from './Pagination.json'
import passwordInput from './PasswordInput.json'
import picker from './Picker.json'
import pickerGroup from './PickerGroup.json'
import popover from './Popover.json'
import popup from './Popup.json'
import progress from './Progress.json'
import pullRefresh from './PullRefresh.json'
import radio from './Radio.json'
import radioGroup from './RadioGroup.json'
import rate from './Rate.json'
import rollText from './RollText.json'
import row from './Row.json'
import search from './Search.json'
import shareSheet from './ShareSheet.json'
import sidebar from './Sidebar.json'
import sidebarItem from './SidebarItem.json'
import signature from './Signature.json'
import skeleton from './Skeleton.json'
import skeletonAvatar from './SkeletonAvatar.json'
import skeletonImage from './SkeletonImage.json'
import skeletonParagraph from './SkeletonParagraph.json'
import skeletonTitle from './SkeletonTitle.json'
import slider from './Slider.json'
import space from './Space.json'
import stepper from './Stepper.json'
import steps from './Steps.json'
import sticky from './Sticky.json'
import submitBar from './SubmitBar.json'
import swipe from './Swipe.json'
import swipeCell from './SwipeCell.json'
import swipeItem from './SwipeItem.json'
import vswitch from './Switch.json'
import tab from './Tab.json'
import tabbar from './Tabbar.json'
import tabbarItem from './TabbarItem.json'
import tabs from './Tabs.json'
import tag from './Tag.json'
import textEllipsis from './TextEllipsis.json'
import timePicker from './TimePicker.json'
import treeSelect from './TreeSelect.json'
import uploader from './Uploader.json'
import watermark from './Watermark.json'

export function getPropsMap() {
  return [
    actionBar,
    actionBarButton,
    actionBarIcon,
    actionSheet,
    addressEdit,
    addressList,
    area,
    backTop,
    badge,
    barrage,
    button,
    calendar,
    card,
    cascader,
    cell,
    cellGroup,
    checkbox,
    checkboxGroup,
    circle,
    col,
    row,
    collapse,
    collapseItem,
    configProvider,
    contactCard,
    contactEdit,
    contactList,
    countDown,
    couponCell,
    couponList,
    datePicker,
    dialog,
    dropdownItem,
    dropdownMenu,
    empty,
    field,
    floatingBubble,
    floatingPanel,
    form,
    grid,
    gridItem,
    icon,
    image,
    imagePreview,
    indexBar,
    indexAnchor,
    list,
    loading,
    navBar,
    noticeBar,
    numberKeyboard,
    overlay,
    pagination,
    passwordInput,
    picker,
    pickerGroup,
    popover,
    popup,
    progress,
    pullRefresh,
    radio,
    radioGroup,
    rate,
    rollText,
    search,
    shareSheet,
    sidebar,
    sidebarItem,
    signature,
    skeleton,
    skeletonParagraph,
    skeletonAvatar,
    skeletonImage,
    skeletonTitle,
    slider,
    space,
    stepper,
    steps,
    sticky,
    submitBar,
    swipe,
    swipeItem,
    swipeCell,
    vswitch,
    tabs,
    tab,
    tabbar,
    tabbarItem,
    tag,
    textEllipsis,
    timePicker,
    treeSelect,
    uploader,
    watermark,
  ]
}

export function getComponentMap() {
  return [
    [actionBar, '动作栏 用于为页面相关操作提供便捷交互'],
    [actionBarIcon, '徽标提示 在 ActionBarIcon 组件上设置 dot 属性后，会在图标右上角展示一个小红点；设置 badge 属性后，会在图标右上角展示相应的徽标'],
    [actionBarButton, '自定义按钮颜色 通过 ActionBarButton 的 color 属性可以自定义按钮的颜色，支持传入 linear-gradient 渐变色。'],
    [actionSheet, '动作面板 底部弹起的模态面板，包含与当前情境相关的多个选项。'],
    [addressEdit, '地址编辑 展示地址信息列表。'],
    [area, '省市区选择 省市区三级联动选择，通常与弹出层组件配合使用。'],
    [backTop, '回到顶部 返回页面顶部的操作按钮。'],
    [badge, '徽标 在右上角展示徽标数字或小红点。'],
    [barrage, '弹幕 实现观看视频时弹出的评论性字幕功能。请升级 vant 到 >= 4.4.0 版本来使用该组件。'],
    [button, '按钮 按钮用于触发一个操作，如提交表单。'],
    [calendar, '日历 日历组件用于选择日期或日期区间。'],
    [card, '卡片 商品卡片，用于展示商品的图片、价格等信息。'],
    [cascader, '级联选择 级联选择框，用于多层级数据的选择，典型场景为省市区选择。'],
    [cell, '单元格 单元格为列表中的单个展示项。'],
    [cellGroup, '单元格组 单元格为列表中的单个展示项。'],
    [checkbox, '复选框 在一组备选项中进行多选。'],
    [checkboxGroup, '复选框组 在一组备选项中进行多选。'],
    [circle, '环形进度条 圆环形的进度条组件，支持进度渐变动画。'],
    [col, '布局 Layout 组件提供了 24列栅格，通过在 Col 上添加 span 属性设置列所占的宽度百分比。此外，添加 offset 属性可以设置列的偏移宽度，计算方式与 span 相同。'],
    [row, '布局 <van-row justify="center"><van-col span="6">span: 6</van-col></van-row>'],
    [collapse, '折叠面板 将一组内容放置在多个折叠面板中，点击面板的标题可以展开或收缩其内容。'],
    [collapseItem, '折叠面板项 将一组内容放置在多个折叠面板中，点击面板的标题可以展开或收缩其内容。'],
    [configProvider, '全局配置 用于全局配置 Vant 组件，提供深色模式、主题定制等能力。'],
    [contactCard, '联系人卡片 以卡片的形式展示联系人信息。'],
    [contactEdit, '联系人编辑 编辑并保存联系人信息。'],
    [contactList, '联系人列表 展示联系人列表。'],
    [countDown, '倒计时 用于实时展示倒计时数值，支持毫秒精度。'],
    [couponCell, '优惠券选择器 用于优惠券的兑换和选择。'],
    [couponList, '优惠券选择器 用于优惠券的兑换和选择。'],
    [datePicker, '日期选择 日期选择器，用于选择年、月、日，通常与弹出层组件配合使用。', `<van-date-picker
  v-model="currentDate"
  title="选择日期"
  :min-date="minDate"
  :max-date="maxDate"
/>`],
    [dialog, '弹出框 弹出模态框，常用于消息提示、消息确认，或在当前页面内完成特定的交互操作。支持组件调用和函数调用两种方式。', `<van-dialog v-model:show="show" title="标题" show-cancel-button>
  <img src="https://fastly.jsdelivr.net/npm/@vant/assets/apple-3.jpeg" />
</van-dialog>`],
    ['van-divider', '分割线 用于将内容分隔为多个区域。', '<van-divider>文本</van-divider>'],
    [dropdownItem, '下拉菜单 向下弹出的菜单列表。', `<van-dropdown-menu>
  <van-dropdown-item v-model="value1" :options="option1" />
  <van-dropdown-item v-model="value2" :options="option2" />
</van-dropdown-menu>`],
    [dropdownMenu, '下拉菜单 向下弹出的菜单列表。', `<van-dropdown-menu>
  <van-dropdown-item v-model="value1" :options="option1" />
  <van-dropdown-item v-model="value2" :options="option2" />
</van-dropdown-menu>`],
    [empty, '空状态 空状态时的占位提示。', '<van-empty description="描述文字" />'],
    [field, '输入框 用户可以在文本框内输入或编辑文字。', `<van-cell-group inset>
  <van-field v-model="value" label="文本" placeholder="请输入用户名" />
</van-cell-group>`],
    [floatingBubble, '浮动气泡 悬浮在页面边缘的可点击气泡。请升级 vant 到 >= 4.6.0 版本来使用该组件。', '<van-floating-bubble icon="chat" @click="onClick" />'],
    [floatingBubble, '浮动面板 浮动在页面底部的面板，可以上下拖动来浏览内容，常用于提供额外的功能或信息。请升级 vant 到 >= 4.5.0 版本来使用该组件。', `<van-floating-panel v-model:height="height" :anchors="anchors">
  <div style="text-align: center; padding: 15px">
    <p>面板显示高度 {{ height.toFixed(0) }} px</p>
  </div>
</van-floating-panel>`],
    [form, '表单 用于数据录入、校验，支持输入框、单选框、复选框、文件上传等类型，需要与 Field 输入框 组件搭配使用。', '<van-form @submit="onSubmit"></van-form>'],
    [grid, '宫格 宫格可以在水平方向上把页面分隔成等宽度的区块，用于展示内容或进行页面导航。', `<van-grid :column-num="3">
  <van-grid-item v-for="value in 6" :key="value" icon="photo-o" text="文字" />
</van-grid>`],
    [gridItem, '宫格 宫格可以在水平方向上把页面分隔成等宽度的区块，用于展示内容或进行页面导航。', `<van-grid :column-num="3">
<van-grid-item v-for="value in 6" :key="value" icon="photo-o" text="文字" />
</van-grid>`],
    [icon, '图标 基于字体的图标集，可以通过 Icon 组件使用，也可以在其他组件中通过 icon 属性引用。', '<van-icon name="chat-o" />'],
    [image, '图片 增强版的 img 标签，提供多种图片填充模式，支持图片懒加载、加载中提示、加载失败提示。', `<van-image
  width="100"
  height="100"
  src="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg"
/>`],
    [imagePreview, '图片预览 图片放大预览，支持组件调用和函数调用两种方式。', `<van-image-preview v-model:show="show" :images="images" @change="onChange">
  <template v-slot:index>第{{ index + 1 }}页</template>
</van-image-preview>`],
    [indexAnchor, '索引栏 为页面提供导航功能，常用于页面顶部。', '<van-index-anchor index="A" />'],
    [indexBar, '索引栏 为页面提供导航功能，常用于页面顶部。', '<van-index-bar />'],
    [list, '列表 瀑布流滚动加载，用于展示长列表，当列表即将滚动到底部时，会触发事件并加载更多列表项。', `<van-list
  v-model:loading="loading"
  :finished="finished"
  finished-text="没有更多了"
  @load="onLoad"
>
  <van-cell v-for="item in list" :key="item" :title="item" />
</van-list>`],
    [loading, '加载 加载图标，用于表示加载中的过渡状态。', '<van-loading type="spinner" />'],
    [navBar, '导航栏 为页面提供导航功能，常用于页面顶部。', '<van-nav-bar title="标题" />'],
    [noticeBar, '通知栏 用于循环播放展示一组消息通知。', '<van-notice-bar scrollable text="米袋虽空——樱花开哉！" />'],
    [numberKeyboard, '数字 虚拟数字键盘，可以配合密码输入框组件或自定义的输入框组件使用。', `<van-number-keyboard
  :show="show"
  @blur="show = false"
  @input="onInput"
  @delete="onDelete"
/>`],
    [overlay, '遮罩层 创建一个遮罩层，用于强调特定的页面元素，并阻止用户进行其他操作。', '<van-overlay :show="show" @click="show = false" />'],
    [pagination, '分页 数据量过多时，采用分页的形式将数据分隔，每次只加载一个页面。', '<van-pagination v-model="currentPage" :total-items="24" :items-per-page="5" />'],
    [passwordInput, '密码输入框 带网格的输入框组件，可以用于输入密码、短信验证码等场景，通常与数字键盘组件配合使用。', `<van-password-input
  :value="value"
  :focused="showKeyboard"
  @focus="showKeyboard = true"
/>`],
    [picker, '选择器 提供多个选项集合供用户选择，支持单列选择、多列选择和级联选择，通常与弹出层组件配合使用。', `<van-picker
  title="标题"
  :columns="columns"
  @confirm="onConfirm"
  @cancel="onCancel"
  @change="onChange"
/>`],
    [pickerGroup, '选择器组 用于结合多个 Picker 选择器组件，在一次交互中完成多个值的选择。', `<van-picker-group
  title="预约日期"
  :tabs="['选择日期', '选择时间']"
  next-step-text="下一步"
  @confirm="onConfirm"
  @cancel="onCancel"
  >
  <van-date-picker
    v-model="currentDate"
    :min-date="minDate"
    :max-date="maxDate"
  />
  <van-time-picker v-model="currentTime" />
</van-picker-group>`],
    [popover, '气泡弹出框 弹出式的气泡菜单。', `<van-popover v-model:show="showPopover" :actions="actions" @select="onSelect">
  <template #reference>
    <van-button type="primary">浅色风格</van-button>
  </template>
</van-popover>
`],
    [popup, '弹出层 弹出层容器，用于展示弹窗、信息提示等内容，支持多个弹出层叠加展示。', '<van-popup v-model:show="show" :style="{ padding: \'64px\' }">内容</van-popup>'],
    [progress, '进度条 用于展示操作的当前进度。', '<van-progress :percentage="50" />'],
    [pullRefresh, '下拉刷新 用于提供下拉刷新的交互操作。', `<van-pull-refresh v-model="loading" @refresh="onRefresh">
  <p>刷新次数: {{ count }}</p>
</van-pull-refresh>`],
    [radio, '单选框 在一组备选项中进行单选。', '<van-radio name="1">单选框 1</van-radio>'],
    [radioGroup, '单选框 在一组备选项中进行单选。', `<van-radio-group v-model="checked">
  <van-radio name="1">单选框 1</van-radio>
  <van-radio name="2">单选框 2</van-radio>
</van-radio-group>`],
    [rate, '评分 用于对事物进行评级操作。', '<van-rate v-model="value" />'],
    ['van-rolling-text', '翻滚文本 文本翻滚动效，可以翻滚数字和其他类型文本。请升级 vant 到 >= 4.6.0 版本来使用该组件。', '<van-rolling-text :start-num="0" :target-num="123" />'],
    [search, '搜索 用于搜索场景的输入框组件。', '<van-search v-model="value" placeholder="请输入搜索关键词" />'],
    [shareSheet, '分享面板 底部弹起的分享面板，用于展示各分享渠道对应的操作按钮，不含具体的分享逻辑。', `<van-share-sheet
  v-model:show="showShare"
  title="立即分享给好友"
  :options="options"
  @select="onSelect"
/>`],
    [sidebar, '侧边导航 垂直展示的导航栏，用于在不同的内容区域之间进行切换。', `<van-sidebar v-model="active">
  <van-sidebar-item title="标签名称" />
  <van-sidebar-item title="标签名称" />
  <van-sidebar-item title="标签名称" />
</van-sidebar>`],
    [sidebarItem, '侧边导航 垂直展示的导航栏，用于在不同的内容区域之间进行切换。', `<van-sidebar v-model="active">
<van-sidebar-item title="标签名称" />
<van-sidebar-item title="标签名称" />
<van-sidebar-item title="标签名称" />
</van-sidebar>`],
    [signature, '签名 用于签名场景的组件，基于 Canvas 实现。请升级 vant 到 >= 4.3.0 版本来使用该组件。', '<van-signature @submit="onSubmit" @clear="onClear" />'],
    [skeleton, '骨架屏 用于在内容加载过程中展示一组占位图形。', '<van-skeleton title :row="3" />'],
    [skeletonTitle, '骨架屏 用于在内容加载过程中展示一组占位图形。', '<van-skeleton-title />'],
    [skeletonParagraph, '骨架屏 用于在内容加载过程中展示一组占位图形。', '<van-skeleton-paragraph />'],
    [skeletonAvatar, '骨架屏 用于在内容加载过程中展示一组占位图形。', '<van-skeleton-avatar />'],
    [skeletonImage, '骨架屏 用于在内容加载过程中展示一组占位图形。', '<van-skeleton-image />'],
    [slider, '滑块 滑动输入条，用于在给定的范围内选择一个值。', '<van-slider v-model="value" @change="onChange" />'],
    [space, '间距 设置元素之间的间距。', '<van-space direction="vertical" fill></van-space>'],
    [stepper, '步进器 步进器由增加按钮、减少按钮和输入框组成，用于在一定范围内输入、调整数字。', '<van-stepper v-model="value" />'],
    [steps, '步骤 用于展示操作流程的各个环节，让用户了解当前的操作在整体流程中的位置。', `<van-steps :active="active">
  <van-step>买家下单</van-step>
  <van-step>商家接单</van-step>
  <van-step>买家提货</van-step>
  <van-step>交易完成</van-step>
</van-steps>`],
    [sticky, '粘性布局 Sticky 组件与 CSS 中 position: sticky 属性实现的效果一致，当组件在屏幕范围内时，会按照正常的布局排列，当组件滚出屏幕范围时，始终会固定在屏幕顶部。', `<van-sticky>
  <van-button type="primary">基础用法</van-button>
</van-sticky>`],
    [submitBar, '提交订单栏 用于展示订单金额与提交订单。', '<van-submit-bar :price="3050" button-text="提交订单" @submit="onSubmit" />'],
    [swipe, '轮播 用于循环播放一组图片或内容。', `<van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
  <van-swipe-item>1</van-swipe-item>
  <van-swipe-item>2</van-swipe-item>
  <van-swipe-item>3</van-swipe-item>
  <van-swipe-item>4</van-swipe-item>
</van-swipe>`],
    [swipeItem, '轮播 用于循环播放一组图片或内容。', `<van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
<van-swipe-item>1</van-swipe-item>
<van-swipe-item>2</van-swipe-item>
<van-swipe-item>3</van-swipe-item>
<van-swipe-item>4</van-swipe-item>
</van-swipe>`],
    [swipeCell, '滑动单元格 可以左右滑动来展示操作按钮的单元格组件。', `<van-swipe-cell>
  <van-card
    num="2"
    price="2.00"
    desc="描述信息"
    title="商品标题"
    class="goods-card"
    thumb="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg"
  />
  <template #right>
    <van-button square text="删除" type="danger" class="delete-button" />
  </template>
</van-swipe-cell>`],
    [tab, '标签页 选项卡组件，用于在不同的内容区域之间进行切换。', `<van-tabs v-model:active="active">
  <van-tab title="标签 1">内容 1</van-tab>
  <van-tab title="标签 2">内容 2</van-tab>
  <van-tab title="标签 3">内容 3</van-tab>
  <van-tab title="标签 4">内容 4</van-tab>
</van-tabs>`],
    [tabs, '标签页 选项卡组件，用于在不同的内容区域之间进行切换。', `<van-tabs v-model:active="active">
  <van-tab title="标签 1">内容 1</van-tab>
  <van-tab title="标签 2">内容 2</van-tab>
  <van-tab title="标签 3">内容 3</van-tab>
  <van-tab title="标签 4">内容 4</van-tab>
</van-tabs>`],
    [tabbar, '标签栏 底部导航栏，用于在不同页面之间进行切换。', `<van-tabbar v-model="active">
  <van-tabbar-item icon="home-o">标签</van-tabbar-item>
  <van-tabbar-item icon="search">标签</van-tabbar-item>
  <van-tabbar-item icon="friends-o">标签</van-tabbar-item>
  <van-tabbar-item icon="setting-o">标签</van-tabbar-item>
</van-tabbar>`],
    [tabbarItem, '标签栏 底部导航栏，用于在不同页面之间进行切换。', `<van-tabbar v-model="active">
<van-tabbar-item icon="home-o">标签</van-tabbar-item>
<van-tabbar-item icon="search">标签</van-tabbar-item>
<van-tabbar-item icon="friends-o">标签</van-tabbar-item>
<van-tabbar-item icon="setting-o">标签</van-tabbar-item>
</van-tabbar>`],
    [tag, '标签 用于标记关键词和概括主要内容。', '<van-tag type="primary">标签</van-tag>'],
    [textEllipsis, '文本省略 对长文本进行省略，支持展开/收起。请升级 vant 到 >= 4.1.0 版本来使用该组件。', '<van-text-ellipsis :content="text" />'],
    [timePicker, '时间选择 时间选择器，通常与弹出层组件配合使用。', '<van-time-picker v-model="currentTime" title="选择时间" />'],
    [treeSelect, '分类选择 用于从一组相关联的数据集合中进行选择。', `<van-tree-select
  v-model:active-id="activeId"
  v-model:main-active-index="activeIndex"
  :items="items"
/>`],
    [uploader, '文件上传 用于将本地的图片或文件上传至服务器，并在上传过程中展示预览图和上传进度。目前 Uploader 组件不包含将文件上传至服务器的接口逻辑，该步骤需要自行实现。', '<van-uploader :after-read="afterRead" />'],
    [watermark, '水印 在页面上添加特定的文字或图案作为水印，可用于防止信息盗用。请升级 vant 到 >= 4.2.0 版本来使用该组件。', '<van-watermark content="Vant" />'],
  ]
}
