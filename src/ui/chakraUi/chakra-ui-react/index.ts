import { componentsReducer, propsReducer } from '../../utils'
import Accordion from './Accordion.json'
import Alert from './Alert.json'
import Avatar from './Avatar.json'
import AvatarBadge from './AvatarBadge.json'
import AvatarGroup from './AvatarGroup.json'

export function chakraUiReact2() {
  const map: any = [
    Accordion,
    Alert,
    Avatar,
    AvatarBadge,
    AvatarGroup,
  ]

  return propsReducer(map)
}

export function chakraUiReact2Components() {
  const map = [
    [Accordion.name, '手风琴', '<Accordion></Accordion>'],
    [Alert.name, '警报', '<Alert status=\'error\'></Alert>'],
    [Avatar.name, '头像', ' <Avatar name=\'Dan Abrahmov\' src=\'https://bit.ly/dan-abramov\' />'],
    [AvatarBadge.name, '头像徽章', ' <AvatarBadge boxSize=\'1.25em\' bg=\'green.500\' />'],
    [AvatarGroup.name, '头像组', ' <AvatarGroup spacing=\'1rem\'></AvatarGroup>'],
  ]
  return componentsReducer(map)
}
