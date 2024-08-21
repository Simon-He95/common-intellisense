import { componentsReducer, propsReducer } from '../../utils'
import { getComponentMap, getPropsMap } from './mapping'

export function antd4() {
  return propsReducer({
    uiName: 'antd4',
    map: getPropsMap(),
    lib: 'antd',
  })
}

export function antd4Components() {
  return componentsReducer({
    map: getComponentMap(),
    isSeperatorByHyphen: false,
    prefix: '',
    lib: 'antd',
    isReact: true,
  })
}
