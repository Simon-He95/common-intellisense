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
  ]
  return componentsReducer(map)
}
