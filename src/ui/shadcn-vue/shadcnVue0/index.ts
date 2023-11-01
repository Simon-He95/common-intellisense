import { componentsReducer, propsReducer } from '../../utils'
import AccordionContent from './AccordionContent.json'
import AccordionHeader from './AccordionHeader.json'
import AccordionItem from './AccordionItem.json'
import AccordionRoot from './AccordionRoot.json'
import AccordionTrigger from './AccordionTrigger.json'

export function shadcnVue0() {
  const map: any = [
    AccordionContent,
    AccordionHeader,
    AccordionItem,
    AccordionRoot,
    AccordionTrigger,
  ]

  return propsReducer(map)
}

export function shadcnVue0Components() {
  const map = [
    [AccordionContent.name, '手风琴 内容', '<AccordionContent></AccordionContent>'],
    [AccordionHeader.name, '手风琴 页眉', '<AccordionHeader></AccordionHeader>'],
    [AccordionItem.name, '手风琴 项目', '<AccordionItem></AccordionItem>'],
    [AccordionRoot.name, '手风琴 根', '<AccordionRoot></AccordionRoot>'],
    [AccordionTrigger.name, '手风琴 触发', '<AccordionTrigger></AccordionTrigger>'],
  ]
  return componentsReducer(map)
}

