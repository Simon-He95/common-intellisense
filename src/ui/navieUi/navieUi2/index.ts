import { componentsReducer, propsReducer } from '../../utils'
import button from './button.json'
import buttonGroup from './buttonGroup.json'
import avatar from './avatar.json'
import avatarGroup from './avatarGroup.json'
import badge from './badge.json'
import breadcrumb from './breadcrumb.json'
import breadcrumbItem from './breadcrumbItem.json'

export function navieUi2(extensionContext: any) {
  const map: any = [
    avatar,
    avatarGroup,
    badge,
    breadcrumb,
    breadcrumbItem,
    button,
    buttonGroup,
  ]

  return propsReducer(map)
}

export function navieUi2Components() {
  const map = [
    ['n-avatar', '头像', `<n-avatar
  round
  size="small"
  src="https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg"
/>`],
    ['n-avatar-group', '头像组', '<n-avatar-group :options="options" :size="40" :max="3" />'],
    ['n-badge', '标记', `<n-badge dot type="error">
    <n-avatar />
  </n-badge>`],
    ['n-breadcrumb', '面包屑', `<n-breadcrumb>
  <n-breadcrumb-item>
    <n-icon :component="MdCash" /> 北京总行</n-breadcrumb-item>
  <n-breadcrumb-item>
    <n-icon :component="MdCash" /> 天津分行</n-breadcrumb-item>
  <n-breadcrumb-item>
    <n-icon :component="MdCash" /> 平山道支行</n-breadcrumb-item>
</n-breadcrumb>`],
    ['n-breadcrumb-item', '面包屑', `<n-breadcrumb>
<n-breadcrumb-item>
  <n-icon :component="MdCash" /> 北京总行</n-breadcrumb-item>
<n-breadcrumb-item>
  <n-icon :component="MdCash" /> 天津分行</n-breadcrumb-item>
<n-breadcrumb-item>
  <n-icon :component="MdCash" /> 平山道支行</n-breadcrumb-item>
</n-breadcrumb>`],
    ['n-button', '按钮', '<n-button>Default</n-button>'],
    ['n-button-group', '按钮组', ' <n-button-group vertical><n-button>Default</n-button></n-button-group>'],
  ]
  return componentsReducer(map)
}
