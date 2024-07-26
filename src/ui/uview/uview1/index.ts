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
import lazyLoad from './lazyLoad.json'
import line from './line.json'
import lineProgress from './lineProgress.json'
import circleProgress from './circleProgress.json'
import checkbox from './checkbox.json'
import checkboxGroup from './checkboxGroup.json'
import col from './col.json'
import collapse from './collapse.json'
import collapseItem from './collapseItem.json'
import countDown from './countDown.json'
import countTo from './countTo.json'
import divider from './divider.json'
import dropdown from './dropdown.json'
import dropdownItem from './dropdownItem.json'
import empty from './empty.json'
import link from './link.json'
import loading from './loading.json'
import loadmore from './loadmore.json'
import mask from './mask.json'
import messageInput from './messageInput.json'
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
import section from './section.json'
import select from './select.json'
import skeleton from './skeleton.json'
import slider from './slider.json'
import steps from './steps.json'
import sticky from './sticky.json'
import subsection from './subsection.json'
import swipeAction from './swipeAction.json'
import actionSheet from './actionSheet.json'
import alertTips from './alertTips.json'
import avatar from './avatar.json'
import avatarCropper from './avatarCropper.json'
import backTop from './backTop.json'
import badge from './badge.json'
import button from './button.json'
import calendar from './calendar.json'
import card from './card.json'
import swiper from './swiper.json'
import uswitch from './switch.json'
import tabbar from './tabbar.json'
import table from './table.json'
import tabs from './tabs.json'
import tabSwiper from './tabSwiper.json'
import tag from './tag.json'
import td from './td.json'
import tr from './tr.json'
import th from './th.json'
import timeLine from './timeLine.json'
import timeLineItem from './timeLineItem.json'
import toast from './toast.json'
import topTips from './topTips.json'
import upload from './upload.json'
import verificationCode from './verificationCode.json'
import waterfall from './waterfall.json'
import cellItem from './cellItem.json'
import cellGroup from './cellGroup.json'

export function uview1() {
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
    lazyLoad,
    line,
    lineProgress,
    circleProgress,
    checkbox,
    checkboxGroup,
    col,
    collapse,
    collapseItem,
    countDown,
    countTo,
    divider,
    dropdown,
    dropdownItem,
    empty,
    link,
    loading,
    loadmore,
    mask,
    messageInput,
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
    section,
    select,
    skeleton,
    slider,
    steps,
    sticky,
    subsection,
    swipeAction,
    actionSheet,
    alertTips,
    avatar,
    avatarCropper,
    backTop,
    badge,
    button,
    calendar,
    card,
    swiper,
    uswitch,
    tabbar,
    table,
    tabs,
    tabSwiper,
    tag,
    td,
    tr,
    th,
    timeLine,
    timeLineItem,
    toast,
    topTips,
    upload,
    verificationCode,
    waterfall,
    cellItem,
    cellGroup,
  ]

  return propsReducer('uview', map, 'u')
}

export function uview1Components() {
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
    [lazyLoad, lazyLoad.name, `<${lazyLoad.name}></${lazyLoad.name}>`],
    [line, line.name, `<${line.name}></${line.name}>`],
    [lineProgress, lineProgress.name, `<${lineProgress.name}></${lineProgress.name}>`],
    [circleProgress, circleProgress.name, `<${circleProgress.name}></${circleProgress.name}>`],
    [checkbox, checkbox.name, `<${checkbox.name}></${checkbox.name}>`],
    [checkboxGroup, checkboxGroup.name, `<${checkboxGroup.name}></${checkboxGroup.name}>`],
    [col, col.name, `<${col.name}></${col.name}>`],
    [collapse, collapse.name, `<${collapse.name}></${collapse.name}>`],
    [collapseItem, collapseItem.name, `<${collapseItem.name}></${collapseItem.name}>`],
    [countDown, countDown.name, `<${countDown.name}></${countDown.name}>`],
    [countTo, countTo.name, `<${countTo.name}></${countTo.name}>`],
    [divider, divider.name, `<${divider.name}></${divider.name}>`],
    [dropdown, dropdown.name, `<${dropdown.name}></${dropdown.name}>`],
    [dropdownItem, dropdownItem.name, `<${dropdownItem.name}></${dropdownItem.name}>`],
    [empty, empty.name, `<${empty.name}></${empty.name}>`],
    [link, link.name, `<${link.name}></${link.name}>`],
    [loading, loading.name, `<${loading.name}></${loading.name}>`],
    [loadmore, loadmore.name, `<${loadmore.name}></${loadmore.name}>`],
    [mask, mask.name, `<${mask.name}></${mask.name}>`],
    [messageInput, messageInput.name, `<${messageInput.name}></${messageInput.name}>`],
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
    [section, section.name, `<${section.name}></${section.name}>`],
    [select, select.name, `<${select.name}></${select.name}>`],
    [skeleton, skeleton.name, `<${skeleton.name}></${skeleton.name}>`],
    [slider, slider.name, `<${slider.name}></${slider.name}>`],
    [steps, steps.name, `<${steps.name}></${steps.name}>`],
    [sticky, sticky.name, `<${sticky.name}></${sticky.name}>`],
    [subsection, subsection.name, `<${subsection.name}></${subsection.name}>`],
    [swipeAction, swipeAction.name, `<${swipeAction.name}></${swipeAction.name}>`],
    [actionSheet, actionSheet.name, `<${actionSheet.name}></${actionSheet.name}>`],
    [alertTips, alertTips.name, `<${alertTips.name}></${alertTips.name}>`],
    [avatar, avatar.name, `<${avatar.name}></${avatar.name}>`],
    [avatarCropper, avatarCropper.name, `<${avatarCropper.name}></${avatarCropper.name}>`],
    [backTop, backTop.name, `<${backTop.name}></${backTop.name}>`],
    [badge, badge.name, `<${badge.name}></${badge.name}>`],
    [button, button.name, `<${button.name}></${button.name}>`],
    [calendar, calendar.name, `<${calendar.name}></${calendar.name}>`],
    [card, card.name, `<${card.name}></${card.name}>`],
    [swiper, swiper.name, `<${swiper.name}></${swiper.name}>`],
    [uswitch, uswitch.name, `<${uswitch.name}></${uswitch.name}>`],
    [tabbar, tabbar.name, `<${tabbar.name}></${tabbar.name}>`],
    [table, table.name, `<${table.name}></${table.name}>`],
    [tabs, tabs.name, `<${tabs.name}></${tabs.name}>`],
    [tabSwiper, tabSwiper.name, `<${tabSwiper.name}></${tabSwiper.name}>`],
    [tag, tag.name, `<${tag.name}></${tag.name}>`],
    [td, td.name, `<${td.name}></${td.name}>`],
    [tr, tr.name, `<${tr.name}></${tr.name}>`],
    [th, th.name, `<${th.name}></${th.name}>`],
    [timeLine, timeLine.name, `<${timeLine.name}></${timeLine.name}>`],
    [timeLineItem, timeLineItem.name, `<${timeLineItem.name}></${timeLineItem.name}>`],
    [toast, toast.name, `<${toast.name}></${toast.name}>`],
    [topTips, topTips.name, `<${topTips.name}></${topTips.name}>`],
    [upload, upload.name, `<${upload.name}></${upload.name}>`],
    [verificationCode, verificationCode.name, `<${verificationCode.name}></${verificationCode.name}>`],
    [waterfall, waterfall.name, `<${waterfall.name}></${waterfall.name}>`],
    [cellItem, cellItem.name, `<${cellItem.name}></${cellItem.name}>`],
    [cellGroup, cellGroup.name, `<${cellGroup.name}></${cellGroup.name}>`],
  ]
  return componentsReducer({
    map,
    isSeperatorByHyphen: true,
    prefix: 'u',
    lib: 'uview-ui',
  })
}
