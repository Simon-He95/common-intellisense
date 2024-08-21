import { componentsReducer, propsReducer } from '../../utils'
import { getComponentMap, getPropsMap } from './mapping'

export function arcoDesignVue2() {
  return propsReducer({
    uiName: '@arco-design/web-vue2',
    map: getPropsMap(),
    lib: '@arco-design/web-vue',
  })
}

export function arcoDesignVue2Components() {
  return componentsReducer({
    map: getComponentMap(),
    isSeperatorByHyphen: true,
    prefix: 'a',
    lib: '@arco-design/web-vue',
    isReact: false,
  })
}
