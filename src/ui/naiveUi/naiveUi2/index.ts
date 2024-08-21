import { componentsReducer, propsReducer } from '../../utils'
import { getComponentMap, getPropsMap } from './mapping'

export function naiveUi2() {
  return propsReducer({
    uiName: 'naive-ui2',
    map: getPropsMap(),
    lib: 'naive-ui',
    prefix: 'n',
  })
}

export function naiveUi2Components() {
  return componentsReducer({
    map: getComponentMap(),
    isSeperatorByHyphen: true,
    prefix: 'n',
    lib: 'naive-ui',
    isReact: false,
  })
}
