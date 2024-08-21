import { componentsReducer, propsReducer } from '../../utils'
import { getComponentMap, getPropsMap } from './mapping'

export function antd5() {
  return propsReducer({
    uiName: 'antd5',
    map: getPropsMap(),
    lib: 'antd',
  })
}

export function antd5Components() {
  return componentsReducer({
    map: getComponentMap(),
    isSeperatorByHyphen: false,
    prefix: '',
    lib: 'antd',
    isReact: true,
  })
}
