import { componentsReducer, propsReducer } from '../../utils'
import directives from '../directives.json'
import { getComponentMap, getPropsMap } from './mapping'

export function varlet2() {
  return propsReducer({
    uiName: 'varlet2',
    map: getPropsMap(),
    lib: 'varlet2',
    prefix: 'var',
  })
}

export function varlet2Components() {
  return componentsReducer({
    map: getComponentMap(),
    isSeperatorByHyphen: true,
    prefix: 'var',
    lib: 'varlet',
    directives: directives.varlet2,
  })
}
