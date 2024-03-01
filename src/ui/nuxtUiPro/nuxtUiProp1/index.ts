import { componentsReducer, propsReducer } from '../../utils'
import Aside from './Aside.json'

export function nuxtuiPro1() {
  const map: any = [
    Aside,
  ]

  return propsReducer('@nuxt/ui-pro', map)
}

export function nuxtuiPro1Components() {
  const map = [
    [
      Aside,
      Aside.name,
      `<${Aside.name}></${Aside.name}>`,
    ],
  ]
  return componentsReducer(map, false, '', '@nuxt/ui-pro')
}
