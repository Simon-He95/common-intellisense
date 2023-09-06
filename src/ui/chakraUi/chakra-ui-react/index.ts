import { componentsReducer, propsReducer } from '../../utils'
import Accordion from './Accordion.json'
import Alert from './Alert.json'
import Avatar from './Avatar.json'
import AvatarBadge from './AvatarBadge.json'
import AvatarGroup from './AvatarGroup.json'
import Breadcrumb from './Breadcrumb.json'
import BreadcrumbItem from './BreadcrumbItem.json'
import BreadcrumbLink from './BreadcrumbLink.json'
import BreadcrumbSeparator from './BreadcrumbSeparator.json'

export function chakraUiReact2() {
  const map: any = [
    Accordion,
    Alert,
    Avatar,
    AvatarBadge,
    AvatarGroup,
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbSeparator,
  ]

  return propsReducer(map)
}

export function chakraUiReact2Components() {
  const map = [
    [Accordion.name, '手风琴', '<Accordion></Accordion>'],
    [Alert.name, '警报', '<Alert status=\'error\'></Alert>'],
    [Avatar.name, '头像', '<Avatar name=\'Dan Abrahmov\' src=\'https://bit.ly/dan-abramov\' />'],
    [AvatarBadge.name, '头像徽章', '<AvatarBadge boxSize=\'1.25em\' bg=\'green.500\' />'],
    [AvatarGroup.name, '头像组', '<AvatarGroup spacing=\'1rem\'></AvatarGroup>'],
    [Breadcrumb.name, '面包屑', '<Breadcrumb></Breadcrumb>'],
    [BreadcrumbItem.name, '面包屑项', '<BreadcrumbItem></BreadcrumbItem>'],
    [BreadcrumbLink.name, '面包屑链接', '<BreadcrumbLink></BreadcrumbLink>'],
    [BreadcrumbSeparator.name, '每个面包屑之间的视觉分隔符', '<BreadcrumbSeparator />'],
  ]
  return componentsReducer(map)
}
