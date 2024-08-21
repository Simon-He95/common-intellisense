import { componentsReducer, propsReducer } from '../../utils'
import { getComponentMap, getPropsMap } from './mapping'

export function nuxtui2() {
  return propsReducer({
    uiName: '@nuxt/ui2',
    map: getPropsMap(),
    lib: '@nuxt/ui',
    prefix: 'U',
  })
}

export function nuxtui2Components() {
  return componentsReducer({
    map: getComponentMap(),
    isSeperatorByHyphen: false,
    prefix: 'U',
    lib: '@nuxt/ui',
    isReact: false,
  })
}
