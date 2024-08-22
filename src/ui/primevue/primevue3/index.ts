import { componentsReducer, propsReducer } from '../../utils'
import { getComponentMap, getPropsMap } from './mapping'

export function primevue3() {
  return propsReducer({
    uiName: 'primevue3',
    map: getPropsMap(),
    lib: 'primevue',
  })
}

export function primevue3Components() {
  return componentsReducer({
    map: getComponentMap(),
    isSeperatorByHyphen: false,
    prefix: '',
    lib: 'primevue',
    isReact: false,
  })
}
