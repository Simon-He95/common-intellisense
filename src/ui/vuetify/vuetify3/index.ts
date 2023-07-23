import { componentsReducer, propsReducer } from '../../utils'
import button from './button.json'

export function vuetify3() {
  const map: any = [
    button,
  ]

  return propsReducer(map)
}

export function vuetify3Components() {
  const map: any[] = [
    ['v-button', '按钮', '<v-btn>Button</v-btn>'],
  ]
  return componentsReducer(map)
}
