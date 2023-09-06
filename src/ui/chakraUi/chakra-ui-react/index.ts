import { componentsReducer, propsReducer } from '../../utils'
import Accordion from './Accordion.json'
import Alert from './Alert.json'
import Avatar from './Avatar.json'

export function chakraUiReact2() {
  const map: any = [
    Accordion,
    Alert,
    Avatar,
  ]

  return propsReducer(map)
}

export function chakraUiReact2Components() {
  const map = [
    [Accordion.name, '手风琴', '<Accordion></Accordion>'],
    [Alert.name, '警报', '<Alert status=\'error\'></Alert>'],
    [Avatar.name, '警报', ' <Avatar name=\'Dan Abrahmov\' src=\'https://bit.ly/dan-abramov\' />'],
  ]
  return componentsReducer(map)
}
