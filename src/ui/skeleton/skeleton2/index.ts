import { componentsReducer, propsReducer } from '../../utils'
import Accordion from './Accordion.json'

export function skeleton2() {
  const map: any = [
    Accordion,
  ]

  return propsReducer('skeleton2', map, '')
}

export function skeleton2Components() {
  const map = [
    [Accordion.name, '手风琴', '<Accordion autocollapse></Accordion>'],
  ]
  return componentsReducer({
    map,
    isSeperatorByHyphen: false,
    prefix: '',
    lib: 'skeleton',
  })
}
