import { componentsReducer, propsReducer } from '../../utils'
import UAccordion from './UAccordion.json'
import UAlert from './UAlert.json'
import UAvatar from './UAvatar.json'
import UBadge from './UBadge.json'
import UButton from './UButton.json'
import UDropdown from './UDropdown.json'

export function nuxtui2() {
  const map: any = [
    UAccordion,
    UAlert,
    UAvatar,
    UBadge,
    UButton,
    UDropdown,
  ]

  return propsReducer(map)
}

export function nuxtui2Components() {
  const map = [
    [
      UAccordion.name,
      UAccordion.name,
      `<${UAccordion.name}></${UAccordion.name}>`,
    ],
    [
      UAlert.name,
      UAlert.name,
      `<${UAlert.name}></${UAlert.name}>`,
    ],
    [
      UAvatar.name,
      UAvatar.name,
      `<${UAvatar.name}></${UAvatar.name}>`,
    ],
    [
      UBadge.name,
      UBadge.name,
      `<${UBadge.name}></${UBadge.name}>`,
    ],
    [
      UButton.name,
      UButton.name,
      `<${UButton.name}></${UButton.name}>`,
    ],
    [
      UDropdown.name,
      UDropdown.name,
      `<${UDropdown.name}></${UDropdown.name}>`,
    ],

  ]
  return componentsReducer(map)
}
