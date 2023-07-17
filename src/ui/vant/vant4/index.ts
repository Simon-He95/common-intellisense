import { componentsReducer, propsReducer } from '../../utils'
import actionBar from './actionBar.json'
import actionBarButton from './actionBarButton.json'
import actionBarIcon from './actionBarIcon.json'
import actionSheet from './actionSheet.json'
import addressEdit from './addressEdit.json'
import addressList from './addressList.json'
import area from './area.json'
import backTop from './backTop.json'

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
  ]
  return componentsReducer(map)
}
