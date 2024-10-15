import directives from '../directives.json'
import { getComponentMap, getPropsMap } from './mapping'

export function vuetify3() {
  return {
    uiName: 'vuetify3',
    map: getPropsMap(),
    lib: 'vuetify',
    prefix: 'v',
  }
}

export function vuetify3Components(isZh: boolean) {
  return {
    map: getComponentMap(isZh),
    isSeperatorByHyphen: true,
    prefix: 'v',
    lib: 'vuetify',
    directives: directives.vuetify3,
  }
}
