import { componentsReducer, propsReducer } from '../../utils'

export function taro3() {
  const map: any = [

  ]

  return propsReducer('@tarojs/components', map)
}

export function taro3Components() {
  const map = [
    [],
  ]
  return componentsReducer(map, true, 'u', '@tarojs/components')
}
