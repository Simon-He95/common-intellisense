import { componentsReducer, propsReducer } from '../../utils'
import Accordion from './Accordion.json'

export function chakraUiReact2() {
  const map: any = [
    Accordion
  ]

  return propsReducer(map)
}

export function chakraUiReact2Components() {
  const map = [
    ['Accordion', '<Accordion></Accordion>'],
  ]
  return componentsReducer(map)
}
