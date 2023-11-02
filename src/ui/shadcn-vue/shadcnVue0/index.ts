import { componentsReducer, propsReducer } from '../../utils'
import AccordionContent from './AccordionContent.json'
import AccordionHeader from './AccordionHeader.json'
import AccordionItem from './AccordionItem.json'
import AccordionRoot from './AccordionRoot.json'
import AccordionTrigger from './AccordionTrigger.json'
import AlertDialogAction from './AlertDialogAction.json'
import AlertDialogCancel from './AlertDialogCancel.json'
import AlertDialogContent from './AlertDialogContent.json'
import AlertDialogDescription from './AlertDialogDescription.json'
import AlertDialogOverlay from './AlertDialogOverlay.json'
import AlertDialogPortal from './AlertDialogPortal.json'
import AlertDialogRoot from './AlertDialogRoot.json'
import AlertDialogTitle from './AlertDialogTitle.json'
import AlertDialogTrigger from './AlertDialogTrigger.json'
import AspectRatio from './AspectRatio.json'
import AvatarFallback from './AvatarFallback.json'
import AvatarImage from './AvatarImage.json'
import AvatarRoot from './AvatarRoot.json'
import CheckboxIndicator from './CheckboxIndicator.json'
import CheckboxRoot from './CheckboxRoot.json'
import CollapsibleContent from './CollapsibleContent.json'
import CollapsibleRoot from './CollapsibleRoot.json'
import CollapsibleTrigger from './CollapsibleTrigger.json'

export function shadcnVue0() {
  const map: any = [
    AccordionContent,
    AccordionHeader,
    AccordionItem,
    AccordionRoot,
    AccordionTrigger,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogOverlay,
    AlertDialogPortal,
    AlertDialogRoot,
    AlertDialogTitle,
    AlertDialogTrigger,
    AspectRatio,
    AvatarFallback,
    AvatarImage,
    AvatarRoot,
    CheckboxIndicator,
    CheckboxRoot,
    CollapsibleContent,
    CollapsibleRoot,
    CollapsibleTrigger,
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
    [AlertDialogAction.name, '警报对话框', '<AlertDialogAction></AlertDialogAction>'],
    [AlertDialogCancel.name, '警报对话框', '<AlertDialogCancel></AlertDialogCancel>'],
    [AlertDialogContent.name, '警报对话框', '<AlertDialogContent></AlertDialogContent>'],
    [AlertDialogDescription.name, '警报对话框', '<AlertDialogDescription></AlertDialogDescription>'],
    [AlertDialogOverlay.name, '警报对话框', '<AlertDialogOverlay></AlertDialogOverlay>'],
    [AlertDialogPortal.name, '警报对话框', '<AlertDialogPortal></AlertDialogPortal>'],
    [AlertDialogRoot.name, '警报对话框', '<AlertDialogRoot></AlertDialogRoot>'],
    [AlertDialogTitle.name, '警报对话框', '<AlertDialogTitle></AlertDialogTitle>'],
    [AlertDialogTrigger.name, '警报对话框', '<AlertDialogTrigger></AlertDialogTrigger>'],
    [AspectRatio.name, '纵横比', '<AspectRatio></AspectRatio>'],
    [AvatarFallback.name, '图像元素', '<AvatarFallback></AvatarFallback>'],
    [AvatarImage.name, '图像元素', '<AvatarImage></AvatarImage>'],
    [AvatarRoot.name, '图像元素', '<AvatarRoot></AvatarRoot>'],
    [CheckboxIndicator.name, '复选框', '<CheckboxIndicator></CheckboxIndicator>'],
    [CheckboxRoot.name, '复选框', '<CheckboxRoot></CheckboxRoot>'],
    [CollapsibleContent.name, '折叠面板', '<CollapsibleContent></CollapsibleContent>'],
    [CollapsibleRoot.name, '折叠面板', '<CollapsibleRoot></CollapsibleRoot>'],
    [CollapsibleTrigger.name, '折叠面板', '<CollapsibleTrigger></CollapsibleTrigger>'],
  ]
  return componentsReducer(map)
}
