import { getComponentsMap, getPropsMap } from './mapping'
// import directives from '../directives.json'

export function wotDesignUni1() {
  return {
    uiName: 'wot-design-uni',
    lib: 'wot-design-uni',
    map: getPropsMap(),
  }
}

export function wotDesignUni1Components() {
  return {
    map: getComponentsMap(),
    isSeperatorByHyphen: true,
    prefix: 'wd',
    isReact: false,
    lib: 'wot-design-uni',
    // directives: directives.wotDesignUni1,
  }
}
