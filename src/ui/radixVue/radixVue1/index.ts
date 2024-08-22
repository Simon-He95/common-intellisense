import { componentsReducer, propsReducer } from '../../utils'
import { getComponentMap, getPropsMap } from './mapping'

export function radixVue1() {
  return propsReducer({
    uiName: 'radix-vue1',
    map: getPropsMap(),
    lib: 'radix-vue',
  })
}

export function radixVue1Components() {
  return componentsReducer({
    map: getComponentMap(),
    isSeperatorByHyphen: false,
    prefix: '',
    lib: 'radix-vue',
    isReact: true,
  })
}
