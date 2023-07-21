import { componentsReducer, propsReducer } from '../../utils'
import avatar from './avatar.json'
import avatarGroup from './avatarGroup.json'

export function navieUi2(extensionContext: any) {
  const map: any = [
    avatar,
    avatarGroup,
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
  ]
  return componentsReducer(map)
}
