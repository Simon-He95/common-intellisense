import { componentsReducer, propsReducer } from '../../utils'
import directives from '../directives.json'
import { getComponentMap, getPropsMap } from './mapping'

export function tinyVue3() {
  return propsReducer({
    uiName: '@opentiny/vue3',
    map: getPropsMap(),
    lib: '@opentiny/vue',
    prefix: 'tiny',
  })
}

export function tinyVue3Components() {
  return componentsReducer({
    map: getComponentMap(),
    isSeperatorByHyphen: true,
    prefix: 'tiny',
    lib: '@opentiny/vue',
    directives: directives.tinyVue3,
  })
}
