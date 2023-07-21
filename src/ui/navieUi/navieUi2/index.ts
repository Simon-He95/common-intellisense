import { componentsReducer, propsReducer } from '../../utils'

export function navieUi2(extensionContext: any) {
  const map: any = [

  ]

  return propsReducer(map)
}

export function navieUi2Components() {
  const map = [
    ['n-avatar', '头像', ` <n-avatar
  round
  size="small"
  src="https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg"
/>`],
  ]
  return componentsReducer(map)
}
