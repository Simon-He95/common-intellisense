import { componentsReducer, propsReducer } from '../../utils'
import { getComponentMap, getPropsMap } from './mapping'

export function nextui2() {
  return propsReducer({
    uiName: '@nextui-org/react2',
    map: getPropsMap(),
    lib: '@nextui-org/react',
  })
}

export function nextui2Components() {
  return componentsReducer({
    map: getComponentMap(),
    isSeperatorByHyphen: false,
    prefix: '',
    lib: '@nextui-org/react',
    isReact: true,
  })
}
