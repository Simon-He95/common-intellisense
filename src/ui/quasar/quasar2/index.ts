import directives from '../directives.json'
import { getComponentMap, getPropsMap } from './mapping'

export function quasar2() {
  return {
    uiName: 'quasar2',
    map: getPropsMap(),
    lib: 'quasar',
    prefix: 'q',
  }
}

export function quasar2Components() {
  return {
    map: getComponentMap(),
    isSeperatorByHyphen: true,
    prefix: 'q',
    lib: 'quasar',
    isReact: false,
    directives: directives.quasar2,
  }
}
