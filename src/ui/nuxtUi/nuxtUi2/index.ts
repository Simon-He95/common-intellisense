import { componentsReducer, propsReducer } from '../../utils'
import UAccordion from './UAccordion.json'
import UAlert from './UAlert.json'
import UAvatar from './UAvatar.json'
import UBadge from './UBadge.json'
import UButton from './UButton.json'
import UDropdown from './UDropdown.json'
import UIcon from './UIcon.json'
import UKbd from './UKbd.json'
import ULink from './ULink.json'
import UInput from './UInput.json'
import UTextarea from './UTextarea.json'
import USelect from './USelect.json'
import USelectMenu from './USelectMenu.json'
import UCheckbox from './UCheckbox.json'
import URadio from './URadio.json'
import UToggle from './UToggle.json'
import URange from './URange.json'
import UFormGroup from './UFormGroup.json'

export function nuxtui2() {
  const map: any = [
    UAccordion,
    UAlert,
    UAvatar,
    UBadge,
    UButton,
    UDropdown,
    UIcon,
    UKbd,
    UInput,
    UTextarea,
    USelect,
    USelectMenu,
    UCheckbox,
    URadio,
    UToggle,
    URange,
    UFormGroup,
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
    [
      UIcon.name,
      UIcon.name,
      `<${UIcon.name}></${UIcon.name}>`,
    ],
    [
      UKbd.name,
      UKbd.name,
      `<${UKbd.name}></${UKbd.name}>`,
    ],
    [
      ULink.name,
      ULink.name,
      `<${ULink.name}></${ULink.name}>`,
    ],
    [
      UInput.name,
      UInput.name,
      `<${UInput.name}></${UInput.name}>`,
    ],
    [
      UTextarea.name,
      UTextarea.name,
      `<${UTextarea.name}></${UTextarea.name}>`,
    ],
    [
      USelect.name,
      USelect.name,
      `<${USelect.name}></${USelect.name}>`,
    ],
    [
      USelectMenu.name,
      USelectMenu.name,
      `<${USelectMenu.name}></${USelectMenu.name}>`,
    ],
    [
      UCheckbox.name,
      UCheckbox.name,
      `<${UCheckbox.name}></${UCheckbox.name}>`,
    ],
    [
      URadio.name,
      URadio.name,
      `<${URadio.name}></${URadio.name}>`,
    ],
    [
      UToggle.name,
      UToggle.name,
      `<${UToggle.name}></${UToggle.name}>`,
    ],
    [
      URange.name,
      URange.name,
      `<${URange.name}></${URange.name}>`,
    ],
    [
      UFormGroup.name,
      UFormGroup.name,
      `<${UFormGroup.name}></${UFormGroup.name}>`,
    ],

  ]
  return componentsReducer(map)
}
