import { componentsReducer, propsReducer } from '../../utils'
import { getComponentMap, getPropsMap } from './mapping'

export function antDesignVue3() {
  return propsReducer({
    uiName: 'ant-design-vue3',
    map: getPropsMap(),
    lib: 'ant-design-vue',
    prefix: 'a',
  })
}

export function antDesignVue3Components() {
  return componentsReducer({
    map: getComponentMap(),
    isSeperatorByHyphen: true,
    prefix: 'a',
    lib: 'ant-design-vue',
    isReact: false,
  })
}
