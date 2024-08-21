import { componentsReducer, propsReducer } from '../../utils'
import Accordion from './Accordion.json'

export function chakraUiVue0() {
  const map: any = [
    Accordion,
  ]

  return propsReducer({
    uiName: '@chakra-ui/vue',
    map,
    lib: '@chakra-ui/vue',
  })
}

export function chakraUiVue0Components() {
  const map = [
    ['Accordion', '手风琴', '<Accordion></Accordion>'],
  ]
  return componentsReducer({
    map,
    isSeperatorByHyphen: false,
    prefix: '',
    lib: '@chakra-ui/vue',
    isReact: false,
  })
}
