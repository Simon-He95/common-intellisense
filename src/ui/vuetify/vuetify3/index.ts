import { componentsReducer, propsReducer } from '../../utils'
import button from './button.json'
import card from './card.json'
import chip from './chip.json'

export function vuetify3() {
  const map: any = [
    button,
    card,
    chip,
  ]

  return propsReducer(map)
}

export function vuetify3Components() {
  const map: any[] = [
    ['v-button', '按钮', '<v-btn>Button</v-btn>'],
    ['v-card', '卡片', '<v-card text="..."></v-card>'],
    ['v-chip', '纸片', '<v-chip>Chip</v-chip'],
  ]
  return componentsReducer(map)
}
