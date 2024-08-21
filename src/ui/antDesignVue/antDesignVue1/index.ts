import { componentsReducer, propsReducer } from '../../utils'
import { getComponentMap, getPropsMap } from './mapping'

export function antDesignVue1() {
  return propsReducer({
    uiName: 'ant-design-vue1',
    map: getPropsMap(),
    lib: 'ant-design-vue',
    prefix: 'a',
  })
}

export function antDesignVue1Components() {
  return componentsReducer({
    map: getComponentMap(),
    isSeperatorByHyphen: true,
    prefix: 'a',
    lib: 'ant-design-vue',
    isReact: false,
  })
}
