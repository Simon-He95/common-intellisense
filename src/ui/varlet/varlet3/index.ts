import { componentsReducer, propsReducer } from '../../utils'
import directives from '../directives.json'
import { getComponentMap, getPropsMap } from './mapping'

export function varlet3() {
  return propsReducer({
    uiName: 'varlet3',
    map: getPropsMap(),
    lib: 'varlet',
  })
}

export function varlet3Components() {
  return componentsReducer({
    map: getComponentMap(),
    isSeperatorByHyphen: true,
    prefix: 'var',
    lib: 'varlet',
    directives: directives.varlet3,
  })
}
