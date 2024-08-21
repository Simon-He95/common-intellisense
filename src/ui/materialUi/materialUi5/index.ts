import { componentsReducer, propsReducer } from '../../utils'
import { getComponentMap, getPropsMap } from './mapping'

export function materialUi5() {
  return propsReducer({
    uiName: 'materialUi5',
    map: getPropsMap(),
    lib: '@mui/material',
  })
}

export function materialUi5Components() {
  return componentsReducer({
    map: getComponentMap(),
    isSeperatorByHyphen: false,
    prefix: '',
    lib: '@mui/material',
    isReact: true,
  })
}
