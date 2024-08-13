import { componentsReducer, propsReducer } from '../../utils'
import Accordion from './Accordion.json'

export function chakraUiVue0() {
  const map: any = [
    Accordion,
  ]

  return propsReducer('@chakra-ui/vue', map, '')
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
