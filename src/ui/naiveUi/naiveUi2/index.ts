import { componentsReducer, propsReducer } from '../../utils'
import { getComponentsMap, getPropsMap } from './mapping'
// import directives from '../directives.json'

export function naiveUi2() {
  return propsReducer({
    uiName: 'naive-ui',
    lib: 'naive-ui',
    map: getPropsMap(),
  })
}

export function naiveUi2Components() {
  return componentsReducer({
    map: getComponentsMap(),
    isSeperatorByHyphen: true,
    prefix: 'n',
    isReact: false,
    lib: 'naive-ui',
    // directives: directives.naiveUi2,
  })
}
