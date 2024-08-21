import { componentsReducer, propsReducer } from '../../utils'
import { getComponentMap, getPropsMap } from './mapping'

export function uview2() {
  return propsReducer({
    uiName: 'uview2',
    map: getPropsMap(),
    lib: 'uview-ui',
    prefix: 'u',
  })
}

export function uview2Components() {
  return componentsReducer({
    map: getComponentMap(),
    isSeperatorByHyphen: true,
    prefix: 'u',
    lib: 'uview-ui',
  })
}
