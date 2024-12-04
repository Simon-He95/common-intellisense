import { componentsReducer, propsReducer } from '../../utils'
import { getComponentsMap, getPropsMap } from './mapping'
// import directives from '../directives.json'

export function arkVue4() {
  return propsReducer({
    uiName: '@ark-ui/vue4',
    lib: '@ark-ui/vue',
    map: getPropsMap(),
  })
}

export function arkVue4Components() {
  return componentsReducer({
    map: getComponentsMap(),
    isSeperatorByHyphen: false,
    prefix: '',
    isReact: true,
    lib: '@ark-ui/vue',
    dynamicLib: '@ark-ui/vue/${name}',
    // directives: directives.arkVue4,
  })
}
