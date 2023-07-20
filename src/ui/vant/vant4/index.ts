import { componentsReducer, propsReducer } from '../../utils'
import actionBar from './actionBar.json'
import actionBarButton from './actionBarButton.json'
import actionBarIcon from './actionBarIcon.json'
import actionSheet from './actionSheet.json'
import addressEdit from './addressEdit.json'
import addressList from './addressList.json'
import area from './area.json'
import backTop from './backTop.json'
import badge from './badge.json'
import barrage from './barrage.json'
import button from './button.json'
import calendar from './calendar.json'
import card from './card.json'
import cascader from './cascader.json'
import cell from './cell.json'
import cellGroup from './cellGroup.json'
import checkbox from './checkbox.json'
import checkboxGroup from './checkboxGroup.json'
import circle from './circle.json'
import col from './col.json'
import row from './row.json'
import collapse from './collapse.json'
import collapseItem from './collapseItem.json'
import configProvider from './configProvider.json'
import contactCard from './contactCard.json'
import contactEdit from './contactEdit.json'
import contactList from './contactList.json'
import countDown from './countDown.json'
import couponCell from './couponCell.json'
import couponList from './couponList.json'
import datePicker from './datePicker.json'
import dialog from './dialog.json'
import dropdownItem from './dropdownItem.json'
import dropdownMenu from './dropdownMenu.json'
import empty from './empty.json'
import field from './field.json'
import floatingBubble from './floatingBubble.json'
import floatingPanel from './floatingPanel.json'
import form from './form.json'
import grid from './grid.json'
import gridItem from './gridItem.json'
import icon from './icon.json'
import image from './image.json'
import imagePreview from './imagePreview.json'
import indexBar from './indexBar.json'
import indexAnchor from './indexAnchor.json'
import list from './list.json'
import loading from './loading.json'
import navBar from './navBar.json'
import noticeBar from './noticeBar.json'
import numberKeyboard from './numberKeyboard.json'
import overlay from './overlay.json'
import pagination from './pagination.json'
import passwordInput from './passwordInput.json'
import picker from './picker.json'
import pickerGroup from './pickerGroup.json'
import popover from './popover.json'
import popup from './popup.json'
import progress from './progress.json'
import pullRefresh from './pullRefresh.json'
import radio from './radio.json'
import radioGroup from './radioGroup.json'
import rate from './rate.json'
import rollText from './rollText.json'
import search from './search.json'
import shareSheet from './shareSheet.json'
import sidebar from './sidebar.json'
import sidebarItem from './sidebarItem.json'
import signature from './signature.json'
import skeleton from './skeleton.json'
import skeletonParagraph from './skeletonParagraph.json'
import skeletonAvatar from './skeletonAvatar.json'
import skeletonImage from './skeletonImage.json'
import skeletonTitle from './skeletonTitle.json'
import slider from './slider.json'
import space from './space.json'
import stepper from './stepper.json'
import steps from './steps.json'
import sticky from './sticky.json'
import submitBar from './submitBar.json'
import swipe from './swipe.json'
import swipeItem from './swipeItem.json'
import swipeCell from './swipeCell.json'
import vswitch from './switch.json'
import tab from './tab.json'
import tabs from './tabs.json'
import tabbar from './tabbar.json'
import tabbarItem from './tabbarItem.json'
import tag from './tag.json'
import textEllipsis from './textEllipsis.json'
import timePicker from './timePicker.json'
import treeSelect from './treeSelect.json'
import uploader from './uploader.json'
import watermark from './watermark.json'

export function vant4() {
  const map: any = [
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

  return propsReducer(map)
}

export function vant4Components() {
  const map = [
    ['van-action-bar', '动作栏 用于为页面相关操作提供便捷交互'],
    ['van-action-bar-icon', '徽标提示 在 ActionBarIcon 组件上设置 dot 属性后，会在图标右上角展示一个小红点；设置 badge 属性后，会在图标右上角展示相应的徽标'],
    ['van-action-bar-button', '自定义按钮颜色 通过 ActionBarButton 的 color 属性可以自定义按钮的颜色，支持传入 linear-gradient 渐变色。'],
    ['van-action-sheet', '动作面板 底部弹起的模态面板，包含与当前情境相关的多个选项。'],
    ['van-address-edit', '地址编辑 展示地址信息列表。'],
    ['van-area', '省市区选择 省市区三级联动选择，通常与弹出层组件配合使用。'],
    ['van-back-top', '回到顶部 返回页面顶部的操作按钮。'],
    ['van-badge', '徽标 在右上角展示徽标数字或小红点。'],
    ['van-barrage', '弹幕 实现观看视频时弹出的评论性字幕功能。请升级 vant 到 >= 4.4.0 版本来使用该组件。'],
    ['van-button', '按钮 按钮用于触发一个操作，如提交表单。'],
    ['van-calendar', '日历 日历组件用于选择日期或日期区间。'],
    ['van-card', '卡片 商品卡片，用于展示商品的图片、价格等信息。'],
    ['van-cascader', '级联选择 级联选择框，用于多层级数据的选择，典型场景为省市区选择。'],
    ['van-cell', '单元格 单元格为列表中的单个展示项。'],
    ['van-cell-group', '单元格组 单元格为列表中的单个展示项。'],
    ['van-checkbox', '复选框 在一组备选项中进行多选。'],
    ['van-checkbox-group', '复选框组 在一组备选项中进行多选。'],
    ['van-circle', '环形进度条 圆环形的进度条组件，支持进度渐变动画。'],
    ['van-col', '布局 Layout 组件提供了 24列栅格，通过在 Col 上添加 span 属性设置列所占的宽度百分比。此外，添加 offset 属性可以设置列的偏移宽度，计算方式与 span 相同。'],
    ['van-row', '布局 <van-row justify="center"><van-col span="6">span: 6</van-col></van-row>'],
    ['van-collapse', '折叠面板 将一组内容放置在多个折叠面板中，点击面板的标题可以展开或收缩其内容。'],
    ['van-collapse-item', '折叠面板项 将一组内容放置在多个折叠面板中，点击面板的标题可以展开或收缩其内容。'],
    ['van-config-provider', '全局配置 用于全局配置 Vant 组件，提供深色模式、主题定制等能力。'],
    ['van-contact-card', '联系人卡片 以卡片的形式展示联系人信息。'],
    ['van-contact-edit', '联系人编辑 编辑并保存联系人信息。'],
    ['van-contact-list', '联系人列表 展示联系人列表。'],
    ['van-count-down', '倒计时 用于实时展示倒计时数值，支持毫秒精度。'],
    ['van-coupon-cell', '优惠券选择器 用于优惠券的兑换和选择。'],
    ['van-coupon-list', '优惠券选择器 用于优惠券的兑换和选择。'],
    ['van-date-picker', '日期选择 日期选择器，用于选择年、月、日，通常与弹出层组件配合使用。', `<van-date-picker
  v-model="currentDate"
  title="选择日期"
  :min-date="minDate"
  :max-date="maxDate"
/>`],
    ['van-dialog', '弹出框 弹出模态框，常用于消息提示、消息确认，或在当前页面内完成特定的交互操作。支持组件调用和函数调用两种方式。', `<van-dialog v-model:show="show" title="标题" show-cancel-button>
  <img src="https://fastly.jsdelivr.net/npm/@vant/assets/apple-3.jpeg" />
</van-dialog>`],
    ['van-divider', '分割线 用于将内容分隔为多个区域。', '<van-divider>文本</van-divider>'],
    ['van-dropdown-item', '下拉菜单 向下弹出的菜单列表。', `<van-dropdown-menu>
  <van-dropdown-item v-model="value1" :options="option1" />
  <van-dropdown-item v-model="value2" :options="option2" />
</van-dropdown-menu>`],
    ['van-dropdown-menu', '下拉菜单 向下弹出的菜单列表。', `<van-dropdown-menu>
  <van-dropdown-item v-model="value1" :options="option1" />
  <van-dropdown-item v-model="value2" :options="option2" />
</van-dropdown-menu>`],
    ['van-empty', '空状态 空状态时的占位提示。', '<van-empty description="描述文字" />'],
    ['van-field', '输入框 用户可以在文本框内输入或编辑文字。', `<van-cell-group inset>
  <van-field v-model="value" label="文本" placeholder="请输入用户名" />
</van-cell-group>`],
    ['van-floating-bubble', '浮动气泡 悬浮在页面边缘的可点击气泡。请升级 vant 到 >= 4.6.0 版本来使用该组件。', '<van-floating-bubble icon="chat" @click="onClick" />'],
    ['van-floating-bubble', '浮动面板 浮动在页面底部的面板，可以上下拖动来浏览内容，常用于提供额外的功能或信息。请升级 vant 到 >= 4.5.0 版本来使用该组件。', `<van-floating-panel v-model:height="height" :anchors="anchors">
  <div style="text-align: center; padding: 15px">
    <p>面板显示高度 {{ height.toFixed(0) }} px</p>
  </div>
</van-floating-panel>`],
    ['van-form', '表单 用于数据录入、校验，支持输入框、单选框、复选框、文件上传等类型，需要与 Field 输入框 组件搭配使用。', '<van-form @submit="onSubmit"></van-form>'],
    ['van-grid', '宫格 宫格可以在水平方向上把页面分隔成等宽度的区块，用于展示内容或进行页面导航。', `<van-grid :column-num="3">
  <van-grid-item v-for="value in 6" :key="value" icon="photo-o" text="文字" />
</van-grid>`],
    ['van-grid-item', '宫格 宫格可以在水平方向上把页面分隔成等宽度的区块，用于展示内容或进行页面导航。', `<van-grid :column-num="3">
<van-grid-item v-for="value in 6" :key="value" icon="photo-o" text="文字" />
</van-grid>`],
    ['van-icon', '图标 基于字体的图标集，可以通过 Icon 组件使用，也可以在其他组件中通过 icon 属性引用。', '<van-icon name="chat-o" />'],
    ['van-image', '图片 增强版的 img 标签，提供多种图片填充模式，支持图片懒加载、加载中提示、加载失败提示。', `<van-image
  width="100"
  height="100"
  src="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg"
/>`],
    ['van-image-preview', '图片预览 图片放大预览，支持组件调用和函数调用两种方式。', `<van-image-preview v-model:show="show" :images="images" @change="onChange">
  <template v-slot:index>第{{ index + 1 }}页</template>
</van-image-preview>`],
    ['van-index-anchor', '索引栏 为页面提供导航功能，常用于页面顶部。', '<van-index-anchor index="A" />'],
    ['van-index-bar', '索引栏 为页面提供导航功能，常用于页面顶部。', '<van-index-bar />'],
    ['van-list', '列表 瀑布流滚动加载，用于展示长列表，当列表即将滚动到底部时，会触发事件并加载更多列表项。', `<van-list
  v-model:loading="loading"
  :finished="finished"
  finished-text="没有更多了"
  @load="onLoad"
>
  <van-cell v-for="item in list" :key="item" :title="item" />
</van-list>`],
    ['van-loading', '加载 加载图标，用于表示加载中的过渡状态。', '<van-loading type="spinner" />'],
    ['van-nav-bar', '导航栏 为页面提供导航功能，常用于页面顶部。', '<van-nav-bar title="标题" />'],
    ['van-notice-bar', '通知栏 用于循环播放展示一组消息通知。', '<van-notice-bar scrollable text="米袋虽空——樱花开哉！" />'],
    ['van-number-keyboard', '数字 虚拟数字键盘，可以配合密码输入框组件或自定义的输入框组件使用。', `<van-number-keyboard
  :show="show"
  @blur="show = false"
  @input="onInput"
  @delete="onDelete"
/>`],
    ['van-overlay', '遮罩层 创建一个遮罩层，用于强调特定的页面元素，并阻止用户进行其他操作。', '<van-overlay :show="show" @click="show = false" />'],
    ['van-pagination', '分页 数据量过多时，采用分页的形式将数据分隔，每次只加载一个页面。', '<van-pagination v-model="currentPage" :total-items="24" :items-per-page="5" />'],
    ['van-password-input', '密码输入框 带网格的输入框组件，可以用于输入密码、短信验证码等场景，通常与数字键盘组件配合使用。', `<van-password-input
  :value="value"
  :focused="showKeyboard"
  @focus="showKeyboard = true"
/>`],
    ['van-picker', '选择器 提供多个选项集合供用户选择，支持单列选择、多列选择和级联选择，通常与弹出层组件配合使用。', `<van-picker
  title="标题"
  :columns="columns"
  @confirm="onConfirm"
  @cancel="onCancel"
  @change="onChange"
/>`],
    ['van-picker-group', '选择器组 用于结合多个 Picker 选择器组件，在一次交互中完成多个值的选择。', `<van-picker-group
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
    ['van-popover', '气泡弹出框 弹出式的气泡菜单。', `<van-popover v-model:show="showPopover" :actions="actions" @select="onSelect">
  <template #reference>
    <van-button type="primary">浅色风格</van-button>
  </template>
</van-popover>
`],
    ['van-popup', '弹出层 弹出层容器，用于展示弹窗、信息提示等内容，支持多个弹出层叠加展示。', '<van-popup v-model:show="show" :style="{ padding: \'64px\' }">内容</van-popup>'],
    ['van-progress', '进度条 用于展示操作的当前进度。', '<van-progress :percentage="50" />'],
    ['van-pull-refresh', '下拉刷新 用于提供下拉刷新的交互操作。', `<van-pull-refresh v-model="loading" @refresh="onRefresh">
  <p>刷新次数: {{ count }}</p>
</van-pull-refresh>`],
    ['van-radio', '单选框 在一组备选项中进行单选。', '<van-radio name="1">单选框 1</van-radio>'],
    ['van-radio-group', '单选框 在一组备选项中进行单选。', `<van-radio-group v-model="checked">
  <van-radio name="1">单选框 1</van-radio>
  <van-radio name="2">单选框 2</van-radio>
</van-radio-group>`],
    ['van-rate', '评分 用于对事物进行评级操作。', '<van-rate v-model="value" />'],
    ['van-rolling-text', '翻滚文本 文本翻滚动效，可以翻滚数字和其他类型文本。请升级 vant 到 >= 4.6.0 版本来使用该组件。', '<van-rolling-text :start-num="0" :target-num="123" />'],
    ['van-search', '搜索 用于搜索场景的输入框组件。', '<van-search v-model="value" placeholder="请输入搜索关键词" />'],
    ['van-share-sheet', '分享面板 底部弹起的分享面板，用于展示各分享渠道对应的操作按钮，不含具体的分享逻辑。', `<van-share-sheet
  v-model:show="showShare"
  title="立即分享给好友"
  :options="options"
  @select="onSelect"
/>`],
    ['van-sidebar', '侧边导航 垂直展示的导航栏，用于在不同的内容区域之间进行切换。', `<van-sidebar v-model="active">
  <van-sidebar-item title="标签名称" />
  <van-sidebar-item title="标签名称" />
  <van-sidebar-item title="标签名称" />
</van-sidebar>`],
    ['van-sidebar-item', '侧边导航 垂直展示的导航栏，用于在不同的内容区域之间进行切换。', `<van-sidebar v-model="active">
<van-sidebar-item title="标签名称" />
<van-sidebar-item title="标签名称" />
<van-sidebar-item title="标签名称" />
</van-sidebar>`],
    ['van-signature', '签名 用于签名场景的组件，基于 Canvas 实现。请升级 vant 到 >= 4.3.0 版本来使用该组件。', '<van-signature @submit="onSubmit" @clear="onClear" />'],
    ['van-skeleton', '骨架屏 用于在内容加载过程中展示一组占位图形。', '<van-skeleton title :row="3" />'],
    ['van-skeleton-title', '骨架屏 用于在内容加载过程中展示一组占位图形。', '<van-skeleton-title />'],
    ['van-skeleton-paragraph', '骨架屏 用于在内容加载过程中展示一组占位图形。', '<van-skeleton-paragraph />'],
    ['van-skeleton-avatar', '骨架屏 用于在内容加载过程中展示一组占位图形。', '<van-skeleton-avatar />'],
    ['van-skeleton-image', '骨架屏 用于在内容加载过程中展示一组占位图形。', '<van-skeleton-image />'],
    ['van-slider', '滑块 滑动输入条，用于在给定的范围内选择一个值。', '<van-slider v-model="value" @change="onChange" />'],
    ['van-space', '间距 设置元素之间的间距。', '<van-space direction="vertical" fill></van-space>'],
    ['van-stepper', '步进器 步进器由增加按钮、减少按钮和输入框组成，用于在一定范围内输入、调整数字。', '<van-stepper v-model="value" />'],
    ['van-steps', '步骤 用于展示操作流程的各个环节，让用户了解当前的操作在整体流程中的位置。', `<van-steps :active="active">
  <van-step>买家下单</van-step>
  <van-step>商家接单</van-step>
  <van-step>买家提货</van-step>
  <van-step>交易完成</van-step>
</van-steps>`],
    ['van-sticky', '粘性布局 Sticky 组件与 CSS 中 position: sticky 属性实现的效果一致，当组件在屏幕范围内时，会按照正常的布局排列，当组件滚出屏幕范围时，始终会固定在屏幕顶部。', `<van-sticky>
  <van-button type="primary">基础用法</van-button>
</van-sticky>`],
    ['van-submit-bar', '提交订单栏 用于展示订单金额与提交订单。', '<van-submit-bar :price="3050" button-text="提交订单" @submit="onSubmit" />'],
    ['van-swipe', '轮播 用于循环播放一组图片或内容。', `<van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
  <van-swipe-item>1</van-swipe-item>
  <van-swipe-item>2</van-swipe-item>
  <van-swipe-item>3</van-swipe-item>
  <van-swipe-item>4</van-swipe-item>
</van-swipe>`],
    ['van-swipe-item', '轮播 用于循环播放一组图片或内容。', `<van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
<van-swipe-item>1</van-swipe-item>
<van-swipe-item>2</van-swipe-item>
<van-swipe-item>3</van-swipe-item>
<van-swipe-item>4</van-swipe-item>
</van-swipe>`],
    ['van-swipe-cell', '滑动单元格 可以左右滑动来展示操作按钮的单元格组件。', `<van-swipe-cell>
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
    ['van-tab', '标签页 选项卡组件，用于在不同的内容区域之间进行切换。', `<van-tabs v-model:active="active">
  <van-tab title="标签 1">内容 1</van-tab>
  <van-tab title="标签 2">内容 2</van-tab>
  <van-tab title="标签 3">内容 3</van-tab>
  <van-tab title="标签 4">内容 4</van-tab>
</van-tabs>`],
    ['van-tabs', '标签页 选项卡组件，用于在不同的内容区域之间进行切换。', `<van-tabs v-model:active="active">
  <van-tab title="标签 1">内容 1</van-tab>
  <van-tab title="标签 2">内容 2</van-tab>
  <van-tab title="标签 3">内容 3</van-tab>
  <van-tab title="标签 4">内容 4</van-tab>
</van-tabs>`],
    ['van-tabbar', '标签栏 底部导航栏，用于在不同页面之间进行切换。', `<van-tabbar v-model="active">
  <van-tabbar-item icon="home-o">标签</van-tabbar-item>
  <van-tabbar-item icon="search">标签</van-tabbar-item>
  <van-tabbar-item icon="friends-o">标签</van-tabbar-item>
  <van-tabbar-item icon="setting-o">标签</van-tabbar-item>
</van-tabbar>`],
    ['van-tabbar-item', '标签栏 底部导航栏，用于在不同页面之间进行切换。', `<van-tabbar v-model="active">
<van-tabbar-item icon="home-o">标签</van-tabbar-item>
<van-tabbar-item icon="search">标签</van-tabbar-item>
<van-tabbar-item icon="friends-o">标签</van-tabbar-item>
<van-tabbar-item icon="setting-o">标签</van-tabbar-item>
</van-tabbar>`],
    ['van-tag', '标签 用于标记关键词和概括主要内容。', '<van-tag type="primary">标签</van-tag>'],
    ['van-text-ellipsis', '文本省略 对长文本进行省略，支持展开/收起。请升级 vant 到 >= 4.1.0 版本来使用该组件。', '<van-text-ellipsis :content="text" />'],
    ['van-time-picker', '时间选择 时间选择器，通常与弹出层组件配合使用。', '<van-time-picker v-model="currentTime" title="选择时间" />'],
    ['van-tree-select', '分类选择 用于从一组相关联的数据集合中进行选择。', `<van-tree-select
  v-model:active-id="activeId"
  v-model:main-active-index="activeIndex"
  :items="items"
/>`],
    ['van-uploader', '文件上传 用于将本地的图片或文件上传至服务器，并在上传过程中展示预览图和上传进度。目前 Uploader 组件不包含将文件上传至服务器的接口逻辑，该步骤需要自行实现。', '<van-uploader :after-read="afterRead" />'],
    ['van-watermark', '水印 在页面上添加特定的文字或图案作为水印，可用于防止信息盗用。请升级 vant 到 >= 4.2.0 版本来使用该组件。', '<van-watermark content="Vant" />'],
  ]
  return componentsReducer(map)
}
