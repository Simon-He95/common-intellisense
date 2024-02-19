import { componentsReducer, propsReducer } from '../../utils'
import formItem from './formItem.json'
import form from './form.json'
import field from './field.json'
import gap from './gap.json'
import grid from './grid.json'
import gridItem from './gridItem.json'
import icon from './icon.json'
import image from './image.json'
import indexList from './indexList.json'
import indexAnchor from './indexAnchor.json'
import indexBar from './indexBar.json'
import input from './input.json'
import keyboard from './keyboard.json'
import line from './line.json'
import lineProgress from './lineProgress.json'
import link from './link.json'
import loadmore from './loadmore.json'
import modal from './modal.json'
import navbar from './navbar.json'
import noNetwork from './noNetwork.json'
import noticeBar from './noticeBar.json'
import numberBox from './numberBox.json'
import parse from './parse.json'
import picker from './picker.json'
import popup from './popup.json'
import radio from './radio.json'
import radioGroup from './radioGroup.json'
import rate from './rate.json'
import readMore from './readMore.json'
import row from './row.json'
import search from './search.json'
import skeleton from './skeleton.json'
import slider from './slider.json'
import steps from './steps.json'
import sticky from './sticky.json'
import subsection from './subsection.json'
import swipeAction from './swipeAction.json'
import swiper from './swiper.json'
import uswitch from './switch.json'
import tabbar from './tabbar.json'
import tabs from './tabs.json'
import tag from './tag.json'
import toast from './toast.json'
import upload from './upload.json'
import text from './text.json'
import cell from './cell.json'
import cellGroup from './cellGroup.json'
import album from './album.json'
import code from './code.json'
import datetimePicker from './datetimePicker.json'
import loadingIcon from './loadingIcon.json'
import loadingPage from './loadingPage.json'
import textarea from './textarea.json'
import alert from './alert.json'
import avatarGroup from './avatarGroup.json'
import codeInput from './codeInput.json'
import list from './list.json'
import listItem from './listItem.json'
import notify from './notify.json'
import overlay from './overlay.json'
import scrollList from './scrollList.json'
import stepsItem from './stepsItem.json'
import swipeActionItem from './swipeActionItem.json'
import tabbarItem from './tabbarItem.json'
import transition from './transition.json'

export function uview2() {
  const map: any = [
    formItem,
    form,
    field,
    gap,
    grid,
    gridItem,
    icon,
    image,
    indexAnchor,
    indexBar,
    input,
    keyboard,
    line,
    lineProgress,
    link,
    loadmore,
    modal,
    navbar,
    noNetwork,
    noticeBar,
    numberBox,
    parse,
    picker,
    popup,
    radio,
    radioGroup,
    rate,
    readMore,
    row,
    search,
    skeleton,
    slider,
    steps,
    sticky,
    subsection,
    swipeAction,
    swiper,
    uswitch,
    tabbar,
    tabs,
    tag,
    toast,
    upload,
    text,
    cell,
    cellGroup,
    album,
    code,
    datetimePicker,
    loadingIcon,
    loadingPage,
    textarea,
    alert,
    avatarGroup,
    codeInput,
    list,
    listItem,
    notify,
    overlay,
    scrollList,
    stepsItem,
    swipeActionItem,
    tabbarItem,
    transition,
  ]

  return propsReducer('uview', map)
}

export function uview2Components() {
  const map = [
    [formItem, formItem.name, `<${formItem.name}></${formItem.name}>`],
    [form, form.name, `<${form.name}></${form.name}>`],
    [field, field.name, `<${field.name}></${field.name}>`],
    [gap, gap.name, `<${gap.name}></${gap.name}>`],
    [grid, grid.name, `<${grid.name}></${grid.name}>`],
    [gridItem, gridItem.name, `<${gridItem.name}></${gridItem.name}>`],
    [icon, icon.name, `<${icon.name}></${icon.name}>`],
    [image, image.name, `<${image.name}></${image.name}>`],
    [indexAnchor, indexAnchor.name, `<${indexAnchor.name}></${indexAnchor.name}>`],
    [indexList, indexList.name, `<${indexList.name}></${indexList.name}>`],
    [indexBar, indexBar.name, `<${indexBar.name}></${indexBar.name}>`],
    [input, input.name, `<${input.name}></${input.name}>`],
    [keyboard, keyboard.name, `<${keyboard.name}></${keyboard.name}>`],
    [line, line.name, `<${line.name}></${line.name}>`],
    [lineProgress, lineProgress.name, `<${lineProgress.name}></${lineProgress.name}>`],
    [link, link.name, `<${link.name}></${link.name}>`],
    [loadmore, loadmore.name, `<${loadmore.name}></${loadmore.name}>`],
    [modal, modal.name, `<${modal.name}></${modal.name}>`],
    [navbar, navbar.name, `<${navbar.name}></${navbar.name}>`],
    [noNetwork, noNetwork.name, `<${noNetwork.name}></${noNetwork.name}>`],
    [noticeBar, noticeBar.name, `<${noticeBar.name}></${noticeBar.name}>`],
    [numberBox, numberBox.name, `<${numberBox.name}></${numberBox.name}>`],
    [parse, parse.name, `<${parse.name}></${parse.name}>`],
    [picker, picker.name, `<${picker.name}></${picker.name}>`],
    [popup, popup.name, `<${popup.name}></${popup.name}>`],
    [radio, radio.name, `<${radio.name}></${radio.name}>`],
    [radioGroup, radioGroup.name, `<${radioGroup.name}></${radioGroup.name}>`],
    [rate, rate.name, `<${rate.name}></${rate.name}>`],
    [readMore, readMore.name, `<${readMore.name}></${readMore.name}>`],
    [row, row.name, `<${row.name}></${row.name}>`],
    [search, search.name, `<${search.name}></${search.name}>`],
    [skeleton, skeleton.name, `<${skeleton.name}></${skeleton.name}>`],
    [slider, slider.name, `<${slider.name}></${slider.name}>`],
    [steps, steps.name, `<${steps.name}></${steps.name}>`],
    [sticky, sticky.name, `<${sticky.name}></${sticky.name}>`],
    [subsection, subsection.name, `<${subsection.name}></${subsection.name}>`],
    [swipeAction, swipeAction.name, `<${swipeAction.name}></${swipeAction.name}>`],
    [swiper, swiper.name, `<${swiper.name}></${swiper.name}>`],
    [uswitch, uswitch.name, `<${uswitch.name}></${uswitch.name}>`],
    [tabbar, tabbar.name, `<${tabbar.name}></${tabbar.name}>`],
    [tabs, tabs.name, `<${tabs.name}></${tabs.name}>`],
    [tag, tag.name, `<${tag.name}></${tag.name}>`],
    [toast, toast.name, `<${toast.name}></${toast.name}>`],
    [upload, upload.name, `<${upload.name}></${upload.name}>`],
    [text, text.name, `<${text.name}></${text.name}>`],
    [cell, cell.name, `<${cell.name}></${cell.name}>`],
    [cellGroup, cellGroup.name, `<${cellGroup.name}></${cellGroup.name}>`],
    [album, album.name, `<${album.name}></${album.name}>`],
    [code, code.name, `<${code.name}></${code.name}>`],
    [datetimePicker, datetimePicker.name, `<${datetimePicker.name}></${datetimePicker.name}>`],
    [loadingIcon, loadingIcon.name, `<${loadingIcon.name}></${loadingIcon.name}>`],
    [loadingPage, loadingPage.name, `<${loadingPage.name}></${loadingPage.name}>`],
    [textarea, textarea.name, `<${textarea.name}></${textarea.name}>`],
    [alert, alert.name, `<${alert.name}></${alert.name}>`],
    [avatarGroup, avatarGroup.name, `<${avatarGroup.name}></${avatarGroup.name}>`],
    [codeInput, codeInput.name, `<${codeInput.name}></${codeInput.name}>`],
    [list, list.name, `<${list.name}></${list.name}>`],
    [listItem, listItem.name, `<${listItem.name}></${listItem.name}>`],
    [notify, notify.name, `<${notify.name}></${notify.name}>`],
    [overlay, overlay.name, `<${overlay.name}></${overlay.name}>`],
    [scrollList, scrollList.name, `<${scrollList.name}></${scrollList.name}>`],
    [stepsItem, stepsItem.name, `<${stepsItem.name}></${stepsItem.name}>`],
    [swipeActionItem, swipeActionItem.name, `<${swipeActionItem.name}></${swipeActionItem.name}>`],
    [tabbarItem, tabbarItem.name, `<${tabbarItem.name}></${tabbarItem.name}>`],
    [transition, transition.name, `<${transition.name}></${transition.name}>`],
  ]
  return componentsReducer(map, true, 'u', 'uview-ui')
}
