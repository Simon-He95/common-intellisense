import { componentsReducer, propsReducer } from '../../utils'
import { getComponentMap, getPropsMap } from './mapping'

export function shadcnUi0() {
  return propsReducer({
    uiName: 'shadcn-Ui0',
    map: getPropsMap(),
    lib: 'shadcn-Ui',
  })
}

export function shadcnUi0Components() {
  return componentsReducer({
    map: getComponentMap(),
    isSeperatorByHyphen: false,
    prefix: '',
    lib: 'shadcn-Ui0',
    isReact: true,
    dynamicLib: '@/components/ui/${name}',
  })
}
