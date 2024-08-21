import { componentsReducer, propsReducer } from '../../utils'
import { getComponentMap, getPropsMap } from './mapping'

export function nuxtUiPro1() {
  return propsReducer({
    uiName: '@nuxt/ui-pro1',
    map: getPropsMap(),
    lib: '@nuxt/ui-pro',
    prefix: 'U',
  })
}

export function nuxtUiPro1Components() {
  return componentsReducer({
    map: getComponentMap(),
    isSeperatorByHyphen: false,
    prefix: 'U',
    lib: '@nuxt/ui-pro',
    isReact: false,
  })
}
