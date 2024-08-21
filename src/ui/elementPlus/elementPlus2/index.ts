import { componentsReducer, propsReducer } from '../../utils'
import { getComponentMap, getPropsMap } from './mapping'

export function elementPlus2() {
  return propsReducer({
    uiName: 'element-plus2',
    map: getPropsMap(),
    lib: 'element-plus',
    prefix: 'el',
  })
}

export function elementPlus2Components() {
  return componentsReducer({
    map: getComponentMap(),
    isSeperatorByHyphen: true,
    prefix: 'el',
    lib: 'element-plus',
    isReact: false,
  })
}
