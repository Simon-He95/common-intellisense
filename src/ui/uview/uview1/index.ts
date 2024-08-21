import { componentsReducer, propsReducer } from '../../utils'
import { getComponentMap, getPropsMap } from './mapping'

export function uview1() {
  return propsReducer({
    uiName: 'uview1',
    map: getPropsMap(),
    lib: 'uview-ui',
    prefix: 'u',
  })
}

export function uview1Components() {
  return componentsReducer({
    map: getComponentMap(),
    isSeperatorByHyphen: true,
    prefix: 'u',
    lib: 'uview-ui',
  })
}
