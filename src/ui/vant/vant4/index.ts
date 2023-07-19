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
  ]
  return componentsReducer(map)
}
