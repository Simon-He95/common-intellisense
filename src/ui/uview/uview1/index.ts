import { componentsReducer, propsReducer } from '../../utils'
import actionSheet from './actionSheet.json'

export function uview2() {
  const map: any = [
    actionSheet,
    button,
    vswitch,
    buttonGroup,
    checkbox,
    checkboxGroup,
    form,
    pagination,
    tab,
    tabItem,
    tabs,
    table,
    breadcrumbs,
    breadcrumb,
    card,
    cell,
    chip,
    col,
    row,
    collapse,
    collapseItem,
    countdown,
    counter,
    datePicker,
    divider,
    drag,
    ellipsis,
    fab,
    formDetails,
    imagePreview,
    indexBar,
    indexAnchor,
    input,
    link,
    list,
    loading,
    menu,
    overlay,
    paper,
    picker,
    popup,
    progress,
    pullRefresh,
    rate,
    result,
    select,
    skeleton,
    slider,
    snackbar,
    space,
    step,
    steps,
    sticky,
    swipe,
    swipeItem,
    tabsItems,
    timePicker,
    tooltip,
    uploader,
    dialog,
    radio,
    radioGroup,
  ]

  return propsReducer(map)
}

export function uview2Components() {
  const map = [
    ['u-action-sheet', '操作菜单', '<u-action-sheet :actions="list" :title="title" :show="show"></u-action-sheet>'],
  ]
  return componentsReducer(map, true, 'u', 'uview-ui')
}
