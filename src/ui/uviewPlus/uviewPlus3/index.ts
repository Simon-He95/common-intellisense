import { componentsReducer, propsReducer } from '../../utils'
import { getComponentMap, getPropsMap } from './mapping'

export function uviewPlus3() {
  return propsReducer({
    uiName: 'uviewPlus3',
    map: getPropsMap(),
    lib: 'uview-plus',
    prefix: 'up',
  })
}

export function uviewPlus3Components() {
  return componentsReducer({
    map: getComponentMap(),
    isSeperatorByHyphen: true,
    prefix: 'up',
    lib: 'uview-plus',
  })
}
