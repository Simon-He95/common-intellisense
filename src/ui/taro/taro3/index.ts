import { componentsReducer, propsReducer } from '../../utils'
import { getComponentMap, getPropsMap } from './mapping'

export function taro3() {
  return propsReducer({
    uiName: '@tarojs/components3',
    map: getPropsMap(),
    lib: '@tarojs/components',
  })
}

export function taro3Components() {
  return componentsReducer({
    map: getComponentMap(),
    isSeperatorByHyphen: false,
    prefix: '',
    lib: '@tarojs/components',
  })
}
