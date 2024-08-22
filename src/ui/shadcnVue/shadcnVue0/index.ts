import { componentsReducer, propsReducer } from '../../utils'
import { getComponentMap, getPropsMap } from './mapping'

export function shadcnVue0() {
  return propsReducer({
    uiName: 'shadcn-vue0',
    map: getPropsMap(),
    lib: 'shadcn-vue',
  })
}

export function shadcnVue0Components() {
  return componentsReducer({
    map: getComponentMap(),
    isSeperatorByHyphen: false,
    prefix: '',
    lib: 'shadcn-vue',
  })
}
