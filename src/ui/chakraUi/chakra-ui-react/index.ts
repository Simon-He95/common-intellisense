import { componentsReducer, propsReducer } from '../../utils'
import Accordion from './Accordion.json'
import Alert from './Alert.json'

export function chakraUiReact2() {
  const map: any = [
    Accordion,
    Alert
  ]

  return propsReducer(map)
}

export function chakraUiReact2Components() {
  const map = [
    [Accordion.name, '手风琴', '<Accordion></Accordion>'],
    [Alert.name, '警报', '<Alert status=\'error\'></Alert>'],
  ]
  return componentsReducer(map)
}
