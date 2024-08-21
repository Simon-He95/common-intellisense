import { componentsReducer, propsReducer } from '../../utils'
import { getComponentMap, getPropsMap } from './mapping'

export function arcoDesign2() {
  return propsReducer({
    uiName: '@arco-design/web-react2',
    map: getPropsMap(),
    lib: '@arco-design/web-react',
  })
}

export function arcoDesign2Components() {
  return componentsReducer({
    map: getComponentMap(),
    isSeperatorByHyphen: false,
    prefix: '',
    lib: '@arco-design/web-react',
    isReact: true,
  })
}
