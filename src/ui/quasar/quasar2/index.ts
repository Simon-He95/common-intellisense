import { componentsReducer, propsReducer } from '../../utils'
import { getComponentMap, getPropsMap } from './mapping'

export function quasar2() {
  return propsReducer({
    uiName: 'quasar2',
    map: getPropsMap(),
    lib: 'quasar',
    prefix: 'q',
  })
}

export function quasar2Components() {
  return componentsReducer({
    map: getComponentMap(),
    isSeperatorByHyphen: true,
    prefix: 'q',
    lib: 'quasar',
    isReact: false,
  })
}
