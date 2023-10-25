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
import UForm from './UForm.json'
import UTable from './UTable.json'
import UVerticalNavigation from './UVerticalNavigation.json'
import UCommandPalette from './UCommandPalette.json'
import UPagination from './UPagination.json'
import UTabs from './UTabs.json'
import UModal from './UModal.json'
import USlideover from './USlideover.json'
import UPopover from './UPopover.json'

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
    UForm,
    UTable,
    UVerticalNavigation,
    UCommandPalette,
    UPagination,
    UTabs,
    UModal,
    USlideover,
    UPopover,
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
    [
      UForm.name,
      UForm.name,
      `<${UForm.name}></${UForm.name}>`,
    ],
    [
      UTable.name,
      UTable.name,
      `<${UTable.name}></${UTable.name}>`,
    ],
    [
      UVerticalNavigation.name,
      UVerticalNavigation.name,
      `<${UVerticalNavigation.name}></${UVerticalNavigation.name}>`,
    ],
    [
      UCommandPalette.name,
      UCommandPalette.name,
      `<${UCommandPalette.name}></${UCommandPalette.name}>`,
    ],
    [
      UPagination.name,
      UPagination.name,
      `<${UPagination.name}></${UPagination.name}>`,
    ],
    [
      UTabs.name,
      UTabs.name,
      `<${UTabs.name}></${UTabs.name}>`,
    ],
    [
      UModal.name,
      UModal.name,
      `<${UModal.name}></${UModal.name}>`,
    ],
    [
      USlideover.name,
      USlideover.name,
      `<${USlideover.name}></${USlideover.name}>`,
    ],
    [
      UPopover.name,
      UPopover.name,
      `<${UPopover.name}></${UPopover.name}>`,
    ],

  ]
  return componentsReducer(map)
}
