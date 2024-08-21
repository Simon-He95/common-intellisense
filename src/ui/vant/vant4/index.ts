import { componentsReducer, propsReducer } from '../../utils'
import { getComponentMap, getPropsMap } from './mapping'

export function vant4() {
  return propsReducer({
    uiName: 'vant4',
    map: getPropsMap(),
    lib: 'vant',
    prefix: 'van',
  })
}

export function vant4Components() {
  return componentsReducer({
    map: getComponentMap(),
    isSeperatorByHyphen: true,
    prefix: 'van',
    lib: 'vant',
  })
}
