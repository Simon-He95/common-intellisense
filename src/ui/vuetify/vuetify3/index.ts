import { componentsReducer, propsReducer } from '../../utils'
import button from './button.json'
import card from './card.json'
import chip from './chip.json'
import dialog from './dialog.json'

export function vuetify3() {
  const map: any = [
    button,
    card,
    chip,
    dialog,
  ]

  return propsReducer(map)
}

export function vuetify3Components() {
  const map: any[] = [
    ['v-button', '按钮', '<v-btn>Button</v-btn>'],
    ['v-card', '卡片', '<v-card text="..."></v-card>'],
    ['v-chip', '纸片', '<v-chip>Chip</v-chip'],
    ['v-dialog', '对话框', `<v-dialog
  v-model="dialog"
  activator="parent"
  width="auto"
></v-dialog`],
  ]
  return componentsReducer(map)
}
