import { componentsReducer, propsReducer } from '../../utils'
import directives from '../directives.json'
import { getComponentMap, getPropsMap } from './mapping'

export function vuetify3() {
  return propsReducer({
    uiName: 'vuetify3',
    map: getPropsMap(),
    lib: 'vuetify',
    prefix: 'v',
  })
}

export function vuetify3Components() {
  return componentsReducer({
    map: getComponentMap(),
    isSeperatorByHyphen: true,
    prefix: 'v',
    lib: 'vuetify',
    directives: directives.vuetify3,
  })
}
