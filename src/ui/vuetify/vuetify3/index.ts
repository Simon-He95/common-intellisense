import { getLocale } from '@vscode-use/utils'
import { componentsReducer, hyphenate, propsReducer } from '../../utils'
import app from './app.json'
import bottomSheet from './bottomSheet.json'
import calendar from './calendar.json'
import calendarDay from './calendarDay.json'
import calendarHeader from './calendarHeader.json'
import calendarInterval from './calendarInterval.json'
import calendarIntervalEvent from './calendarIntervalEvent.json'
import calendarMonthDay from './calendarMonthDay.json'
import cardActions from './cardActions.json'
import checkboxBtn from './checkboxBtn.json'
import classIcon from './classIcon.json'
import code from './code.json'
import componentIcon from './componentIcon.json'
import confirmEdit from './confirmEdit.json'
import counter from './counter.json'
import dataIterator from './dataIterator.json'
import dataTable from './dataTable.json'
import dataTableFooter from './dataTableFooter.json'
import dataTableRow from './dataTableRow.json'
import dataTableRows from './dataTableRows.json'
import dataTableServer from './dataTableServer.json'
import dataTableVirtual from './dataTableVirtual.json'
import datePicker from './datePicker.json'
import datePickerControls from './datePickerControls.json'
import datePickerHeader from './datePickerHeader.json'
import datePickerMonth from './datePickerMonth.json'
import datePickerMonths from './datePickerMonths.json'
import datePickerYears from './datePickerYears.json'
import dialogBottomTransition from './dialogBottomTransition.json'
import dialogTopTransition from './dialogTopTransition.json'
import dialogTransition from './dialogTransition.json'
import expandTransition from './expandTransition.json'
import expandXTransition from './expandXTransition.json'
import fabTransition from './fabTransition.json'
import fadeTransition from './fadeTransition.json'
import field from './field.json'
import fieldLabel from './fieldLabel.json'
import infiniteScroll from './infiniteScroll.json'
import kbd from './kbd.json'
import label from './label.json'
import layout from './layout.json'
import layoutItem from './layoutItem.json'
import ligatureIcon from './ligatureIcon.json'
import main from './main.json'
import messages from './messages.json'
import noSsr from './noSsr.json'
import otpInput from './otpInput.json'
import picker from './picker.json'
import pickerTitle from './pickerTitle.json'
import scaleTransition from './scaleTransition.json'
import scrollXReverseTransition from './scrollXReverseTransition.json'
import scrollXTransition from './scrollXTransition.json'
import scrollYReverseTransition from './scrollYReverseTransition.json'
import scrollYTransition from './scrollYTransition.json'
import selectionControl from './selectionControl.json'
import selectionControlGroup from './selectionControlGroup.json'
import skeletonLoader from './skeletonLoader.json'
import slideGroup from './slideGroup.json'
import slideGroupItem from './slideGroupItem.json'
import slideXReverseTransition from './slideXReverseTransition.json'
import slideXTransition from './slideXTransition.json'
import slideYTransition from './slideYTransition.json'
import slideYReverseTransition from './slideYReverseTransition.json'
import stepper from './stepper.json'
import stepperActions from './stepperActions.json'
import stepperHeader from './stepperHeader.json'
import stepperItem from './stepperItem.json'
import stepperWindow from './stepperWindow.json'
import stepperWindowItem from './stepperWindowItem.json'
import svgIcon from './svgIcon.json'
import validation from './validation.json'
import btn from './btn.json'
import card from './card.json'
import cardItem from './cardItem.json'
import cardTitle from './cardTitle.json'
import cardSubtitle from './cardSubtitle.json'
import cardText from './cardText.json'
import chip from './chip.json'
import dialog from './dialog.json'
import divider from './divider.json'
import expansionPanel from './expansionPanel.json'
import expansionPanels from './expansionPanels.json'
import expansionPanelText from './expansionPanelText.json'
import expansionPanelTitle from './expansionPanelTitle.json'
import list from './list.json'
import listItem from './listItem.json'
import listItemTitle from './listItemTitle.json'
import listGroup from './listGroup.json'
import listImg from './listImg.json'
import listItemAction from './listItemAction.json'
import listItemSubtitle from './listItemSubtitle.json'
import listItemMedia from './listItemMedia.json'
import listSubheader from './listSubheader.json'
import menu from './menu.json'
import overlay from './overlay.json'
import sheet from './sheet.json'
import toolbar from './toolbar.json'
import toolbarItems from './toolbarItems.json'
import toolbarTitle from './toolbarTitle.json'
import tooltip from './tooltip.json'
import appBar from './appBar.json'
import appBarNavIcon from './appBarNavIcon.json'
import appBarTitle from './appBarTitle.json'
import bottomNavigation from './bottomNavigation.json'
import breadcrumbs from './breadcrumbs.json'
import breadcrumbsItem from './breadcrumbsItem.json'
import breadcrumbsDivider from './breadcrumbsDivider.json'
import footer from './footer.json'
import navigationDrawer from './navigationDrawer.json'
import navigationItem from './navigationItem.json'
import pagination from './pagination.json'
import systemBar from './systemBar.json'
import tabs from './tabs.json'
import tab from './tab.json'
import autocomplete from './autocomplete.json'
import checkbox from './checkbox.json'
import combobox from './combobox.json'
import fileInput from './fileInput.json'
import form from './form.json'
import input from './input.json'
import radioGroup from './radioGroup.json'
import radio from './radio.json'
import rangeSlider from './rangeSlider.json'
import select from './select.json'
import slider from './slider.json'
import vswitch from './switch.json'
import textField from './textField.json'
import textarea from './textarea.json'
import table from './table.json'
import virtualScroll from './virtualScroll.json'
import container from './container.json'
import row from './row.json'
import col from './col.json'
import spacer from './spacer.json'
import btnToggle from './btnToggle.json'
import buttonGroup from './buttonGroup.json'
import carousel from './carousel.json'
import carouselItem from './carouselItem.json'
import chipGroup from './chipGroup.json'
import item from './item.json'
import itemGroup from './itemGroup.json'
import window from './window.json'
import windowItem from './windowItem.json'
import alert from './alert.json'
import alertTitle from './alertTitle.json'
import badge from './badge.json'
import banner from './banner.json'
import bannerText from './bannerText.json'
import bannerActions from './bannerActions.json'
import hover from './hover.json'
import progressCircular from './progressCircular.json'
import progressLinear from './progressLinear.json'
import rating from './rating.json'
import snackbar from './snackbar.json'
import timeline from './timeline.json'
import timelineItem from './timelineItem.json'
import responsive from './responsive.json'
import img from './img.json'
import lazy from './lazy.json'
import defaultsProvider from './defaultsProvider.json'
import themeProvider from './themeProvider.json'
import localeProvider from './localeProvider.json'
import parallax from './parallax.json'
import icon from './icon.json'
import avatar from './avatar.json'
import colorPicker from './colorPicker.json'

export function vuetify3() {
  const map: any = [
    app,
    bottomSheet,
    calendar,
    calendarDay,
    calendarHeader,
    calendarInterval,
    calendarIntervalEvent,
    calendarMonthDay,
    cardActions,
    checkboxBtn,
    classIcon,
    code,
    componentIcon,
    confirmEdit,
    counter,
    dataIterator,
    dataTable,
    dataTableFooter,
    dataTableRow,
    dataTableRows,
    dataTableServer,
    dataTableVirtual,
    datePicker,
    datePickerControls,
    datePickerHeader,
    datePickerMonth,
    datePickerMonths,
    datePickerYears,
    dialogBottomTransition,
    dialogTopTransition,
    dialogTransition,
    expandTransition,
    expandXTransition,
    fabTransition,
    fadeTransition,
    field,
    fieldLabel,
    infiniteScroll,
    kbd,
    label,
    layout,
    layoutItem,
    ligatureIcon,
    main,
    messages,
    noSsr,
    otpInput,
    picker,
    pickerTitle,
    scaleTransition,
    scrollXReverseTransition,
    scrollXTransition,
    scrollYReverseTransition,
    scrollYTransition,
    selectionControl,
    selectionControlGroup,
    skeletonLoader,
    slideGroup,
    slideGroupItem,
    slideXReverseTransition,
    slideXTransition,
    slideYTransition,
    slideYReverseTransition,
    stepper,
    stepperActions,
    stepperHeader,
    stepperItem,
    stepperWindow,
    stepperWindowItem,
    svgIcon,
    validation,
    btn,
    card,
    chip,
    dialog,
    divider,
    expansionPanel,
    expansionPanels,
    expansionPanelText,
    expansionPanelTitle,
    cardItem,
    cardTitle,
    cardSubtitle,
    cardText,
    list,
    listItem,
    listSubheader,
    listGroup,
    listImg,
    listItemAction,
    listItemMedia,
    menu,
    overlay,
    sheet,
    toolbar,
    toolbarItems,
    toolbarTitle,
    tooltip,
    appBar,
    appBarNavIcon,
    appBarTitle,
    bottomNavigation,
    breadcrumbs,
    breadcrumbsItem,
    breadcrumbsDivider,
    footer,
    navigationDrawer,
    navigationItem,
    pagination,
    systemBar,
    tabs,
    tab,
    autocomplete,
    checkbox,
    combobox,
    fileInput,
    form,
    input,
    radioGroup,
    radio,
    rangeSlider,
    select,
    slider,
    vswitch,
    textField,
    textarea,
    table,
    virtualScroll,
    container,
    row,
    col,
    spacer,
    btnToggle,
    buttonGroup,
    carousel,
    carouselItem,
    chipGroup,
    item,
    itemGroup,
    window,
    windowItem,
    alert,
    alertTitle,
    badge,
    banner,
    bannerText,
    bannerActions,
    hover,
    progressCircular,
    progressLinear,
    rating,
    snackbar,
    timeline,
    timelineItem,
    responsive,
    img,
    lazy,
    defaultsProvider,
    themeProvider,
    localeProvider,
    parallax,
    icon,
    avatar,
    colorPicker,
    listItemTitle,
    listItemSubtitle,
  ]

  return propsReducer('vuetify', map)
}

export function vuetify3Components() {
  const isZh = getLocale().includes('zh')

  const map: any[] = isZh
    ? [
        [app, 'app', `<${hyphenate(app.name).slice(1)}></${hyphenate(app.name).slice(1)}>`],
        [bottomSheet, 'bottomSheet', `<${hyphenate(bottomSheet.name).slice(1)}></${hyphenate(bottomSheet.name).slice(1)}>`],
        [calendar, 'calendar', `<${hyphenate(calendar.name).slice(1)}></${hyphenate(calendar.name).slice(1)}>`],
        [calendarDay, 'calendarDay', `<${hyphenate(calendarDay.name).slice(1)}></${hyphenate(calendarDay.name).slice(1)}>`],
        [calendarHeader, 'calendarHeader', `<${hyphenate(calendarHeader.name).slice(1)}></${hyphenate(calendarHeader.name).slice(1)}>`],
        [calendarInterval, 'calendarInterval', `<${hyphenate(calendarInterval.name).slice(1)}></${hyphenate(calendarInterval.name).slice(1)}>`],
        [calendarIntervalEvent, 'calendarIntervalEvent', `<${hyphenate(calendarIntervalEvent.name).slice(1)}></${hyphenate(calendarIntervalEvent.name).slice(1)}>`],
        [calendarMonthDay, 'calendarMonthDay', `<${hyphenate(calendarMonthDay.name).slice(1)}></${hyphenate(calendarMonthDay.name).slice(1)}>`],
        [cardActions, 'cardActions', `<${hyphenate(cardActions.name).slice(1)}></${hyphenate(cardActions.name).slice(1)}>`],
        [checkboxBtn, 'checkboxBtn', `<${hyphenate(checkboxBtn.name).slice(1)}></${hyphenate(checkboxBtn.name).slice(1)}>`],
        [classIcon, 'classIcon', `<${hyphenate(classIcon.name).slice(1)}></${hyphenate(classIcon.name).slice(1)}>`],
        [code, 'code', `<${hyphenate(code.name).slice(1)}></${hyphenate(code.name).slice(1)}>`],
        [componentIcon, 'componentIcon', `<${hyphenate(componentIcon.name).slice(1)}></${hyphenate(componentIcon.name).slice(1)}>`],
        [confirmEdit, 'confirmEdit', `<${hyphenate(confirmEdit.name).slice(1)}></${hyphenate(confirmEdit.name).slice(1)}>`],
        [counter, 'counter', `<${hyphenate(counter.name).slice(1)}></${hyphenate(counter.name).slice(1)}>`],
        [dataIterator, 'dataIterator', `<${hyphenate(dataIterator.name).slice(1)}></${hyphenate(dataIterator.name).slice(1)}>`],
        [dataTable, 'dataTable', `<${hyphenate(dataTable.name).slice(1)}></${hyphenate(dataTable.name).slice(1)}>`],
        [dataTableFooter, 'dataTableFooter', `<${hyphenate(dataTableFooter.name).slice(1)}></${hyphenate(dataTableFooter.name).slice(1)}>`],
        [dataTableRow, 'dataTableRow', `<${hyphenate(dataTableRow.name).slice(1)}></${hyphenate(dataTableRow.name).slice(1)}>`],
        [dataTableRows, 'dataTableRows', `<${hyphenate(dataTableRows.name).slice(1)}></${hyphenate(dataTableRows.name).slice(1)}>`],
        [dataTableServer, 'dataTableServer', `<${hyphenate(dataTableServer.name).slice(1)}></${hyphenate(dataTableServer.name).slice(1)}>`],
        [dataTableVirtual, 'dataTableVirtual', `<${hyphenate(dataTableVirtual.name).slice(1)}></${hyphenate(dataTableVirtual.name).slice(1)}>`],
        [datePicker, 'datePicker', `<${hyphenate(datePicker.name).slice(1)}></${hyphenate(datePicker.name).slice(1)}>`],
        [datePickerControls, 'datePickerControls', `<${hyphenate(datePickerControls.name).slice(1)}></${hyphenate(datePickerControls.name).slice(1)}>`],
        [datePickerHeader, 'datePickerHeader', `<${hyphenate(datePickerHeader.name).slice(1)}></${hyphenate(datePickerHeader.name).slice(1)}>`],
        [datePickerMonth, 'datePickerMonth', `<${hyphenate(datePickerMonth.name).slice(1)}></${hyphenate(datePickerMonth.name).slice(1)}>`],
        [datePickerMonths, 'datePickerMonths', `<${hyphenate(datePickerMonths.name).slice(1)}></${hyphenate(datePickerMonths.name).slice(1)}>`],
        [datePickerYears, 'datePickerYears', `<${hyphenate(datePickerYears.name).slice(1)}></${hyphenate(datePickerYears.name).slice(1)}>`],
        [dialogBottomTransition, 'dialogBottomTransition', `<${hyphenate(dialogBottomTransition.name).slice(1)}></${hyphenate(dialogBottomTransition.name).slice(1)}>`],
        [dialogTopTransition, 'dialogTopTransition', `<${hyphenate(dialogTopTransition.name).slice(1)}></${hyphenate(dialogTopTransition.name).slice(1)}>`],
        [dialogTransition, 'dialogTransition', `<${hyphenate(dialogTransition.name).slice(1)}></${hyphenate(dialogTransition.name).slice(1)}>`],
        [expandTransition, 'expandTransition', `<${hyphenate(expandTransition.name).slice(1)}></${hyphenate(expandTransition.name).slice(1)}>`],
        [expandXTransition, 'expandXTransition', `<${hyphenate(expandXTransition.name).slice(1)}></${hyphenate(expandXTransition.name).slice(1)}>`],
        [fabTransition, 'fabTransition', `<${hyphenate(fabTransition.name).slice(1)}></${hyphenate(fabTransition.name).slice(1)}>`],
        [fadeTransition, 'fadeTransition', `<${hyphenate(fadeTransition.name).slice(1)}></${hyphenate(fadeTransition.name).slice(1)}>`],
        [field, 'field', `<${hyphenate(field.name).slice(1)}></${hyphenate(field.name).slice(1)}>`],
        [fieldLabel, 'fieldLabel', `<${hyphenate(fieldLabel.name).slice(1)}></${hyphenate(fieldLabel.name).slice(1)}>`],
        [infiniteScroll, 'infiniteScroll', `<${hyphenate(infiniteScroll.name).slice(1)}></${hyphenate(infiniteScroll.name).slice(1)}>`],
        [kbd, 'kbd', `<${hyphenate(kbd.name).slice(1)}></${hyphenate(kbd.name).slice(1)}>`],
        [label, 'label', `<${hyphenate(label.name).slice(1)}></${hyphenate(label.name).slice(1)}>`],
        [layout, 'layout', `<${hyphenate(layout.name).slice(1)}></${hyphenate(layout.name).slice(1)}>`],
        [layoutItem, 'layoutItem', `<${hyphenate(layoutItem.name).slice(1)}></${hyphenate(layoutItem.name).slice(1)}>`],
        [ligatureIcon, 'ligatureIcon', `<${hyphenate(ligatureIcon.name).slice(1)}></${hyphenate(ligatureIcon.name).slice(1)}>`],
        [main, 'main', `<${hyphenate(main.name).slice(1)}></${hyphenate(main.name).slice(1)}>`],
        [messages, 'messages', `<${hyphenate(messages.name).slice(1)}></${hyphenate(messages.name).slice(1)}>`],
        [noSsr, 'noSsr', `<${hyphenate(noSsr.name).slice(1)}></${hyphenate(noSsr.name).slice(1)}>`],
        [otpInput, 'otpInput', `<${hyphenate(otpInput.name).slice(1)}></${hyphenate(otpInput.name).slice(1)}>`],
        [picker, 'picker', `<${hyphenate(picker.name).slice(1)}></${hyphenate(picker.name).slice(1)}>`],
        [pickerTitle, 'pickerTitle', `<${hyphenate(pickerTitle.name).slice(1)}></${hyphenate(pickerTitle.name).slice(1)}>`],
        [scaleTransition, 'scaleTransition', `<${hyphenate(scaleTransition.name).slice(1)}></${hyphenate(scaleTransition.name).slice(1)}>`],
        [scrollXReverseTransition, 'scrollXReverseTransition', `<${hyphenate(scrollXReverseTransition.name).slice(1)}></${hyphenate(scrollXReverseTransition.name).slice(1)}>`],
        [scrollXTransition, 'scrollXTransition', `<${hyphenate(scrollXTransition.name).slice(1)}></${hyphenate(scrollXTransition.name).slice(1)}>`],
        [scrollYReverseTransition, 'scrollYReverseTransition', `<${hyphenate(scrollYReverseTransition.name).slice(1)}></${hyphenate(scrollYReverseTransition.name).slice(1)}>`],
        [scrollYTransition, 'scrollYTransition', `<${hyphenate(scrollYTransition.name).slice(1)}></${hyphenate(scrollYTransition.name).slice(1)}>`],
        [selectionControl, 'selectionControl', `<${hyphenate(selectionControl.name).slice(1)}></${hyphenate(selectionControl.name).slice(1)}>`],
        [selectionControlGroup, 'selectionControlGroup', `<${hyphenate(selectionControlGroup.name).slice(1)}></${hyphenate(selectionControlGroup.name).slice(1)}>`],
        [skeletonLoader, 'skeletonLoader', `<${hyphenate(skeletonLoader.name).slice(1)}></${hyphenate(skeletonLoader.name).slice(1)}>`],
        [slideGroup, 'slideGroup', `<${hyphenate(slideGroup.name).slice(1)}></${hyphenate(slideGroup.name).slice(1)}>`],
        [slideGroupItem, 'slideGroupItem', `<${hyphenate(slideGroupItem.name).slice(1)}></${hyphenate(slideGroupItem.name).slice(1)}>`],
        [slideXReverseTransition, 'slideXReverseTransition', `<${hyphenate(slideXReverseTransition.name).slice(1)}></${hyphenate(slideXReverseTransition.name).slice(1)}>`],
        [slideXTransition, 'slideXTransition', `<${hyphenate(slideXTransition.name).slice(1)}></${hyphenate(slideXTransition.name).slice(1)}>`],
        [slideYTransition, 'slideYTransition', `<${hyphenate(slideYTransition.name).slice(1)}></${hyphenate(slideYTransition.name).slice(1)}>`],
        [slideYReverseTransition, 'slideYReverseTransition', `<${hyphenate(slideYReverseTransition.name).slice(1)}></${hyphenate(slideYReverseTransition.name).slice(1)}>`],
        [stepper, 'stepper', `<${hyphenate(stepper.name).slice(1)}></${hyphenate(stepper.name).slice(1)}>`],
        [stepperActions, 'stepperActions', `<${hyphenate(stepperActions.name).slice(1)}></${hyphenate(stepperActions.name).slice(1)}>`],
        [stepperHeader, 'stepperHeader', `<${hyphenate(stepperHeader.name).slice(1)}></${hyphenate(stepperHeader.name).slice(1)}>`],
        [stepperItem, 'stepperItem', `<${hyphenate(stepperItem.name).slice(1)}></${hyphenate(stepperItem.name).slice(1)}>`],
        [stepperWindow, 'stepperWindow', `<${hyphenate(stepperWindow.name).slice(1)}></${hyphenate(stepperWindow.name).slice(1)}>`],
        [stepperWindowItem, 'stepperWindowItem', `<${hyphenate(stepperWindowItem.name).slice(1)}></${hyphenate(stepperWindowItem.name).slice(1)}>`],
        [svgIcon, 'svgIcon', `<${hyphenate(svgIcon.name).slice(1)}></${hyphenate(svgIcon.name).slice(1)}>`],
        [validation, 'validation', `<${hyphenate(validation.name).slice(1)}></${hyphenate(validation.name).slice(1)}>`],
        [avatar, '头像', '<v-avatar></v-avatar>'],
        [icon, '图标', '<v-icon></v-icon>'],
        [colorPicker, '颜色选择器', '<v-color-picker></v-color-picker>'],
        [parallax, '视差', '<v-parallax></v-parallax>'],
        [themeProvider, '主题供应者', '<v-theme-provider></v-theme-provider>'],
        [defaultsProvider, '默认供应者', '<v-defaults-provider></v-defaults-provider>'],
        [localeProvider, '本地供应者', '<v-locale-provider></v-locale-provider>'],
        [lazy, '懒加载', '<v-lazy></v-lazy>'],
        [img, '图像', '<v-img></v-img>'],
        [responsive, '长宽比', '<v-responsive></v-responsive>'],
        [timeline, '时间线', '<v-timeline></v-timeline>'],
        [timelineItem, '时间线', '<v-timeline-item></v-timeline-item>'],
        [snackbar, '消息条', '<v-snackbar></v-snackbar>'],
        [rating, '评分', '<v-rating></v-rating>'],
        [progressLinear, '进度条', '<v-progress-linear></v-progress-linear>'],
        [progressCircular, '环状进度', '<v-progress-circular></v-progress-circular>'],
        [hover, '悬停', '<v-hover></v-hover>'],
        [banner, '横幅', '<v-banner></v-banner>'],
        [bannerText, '横幅', '<v-banner-text></v-banner-text>'],
        [bannerActions, '横幅', '<v-banner-actions></v-banner-actions>'],
        [alert, '警告框', '<v-alert></v-alert>'],
        [alertTitle, '警告框', '<v-alert-title></v-alert-title>'],
        [window, '窗格', '<v-window></v-window>'],
        [windowItem, '窗格', '<v-window-item></v-window-item>'],
        [item, '项目组', '<v-item></v-item>'],
        [itemGroup, '项目组', '<v-item-group></v-item-group>'],
        [chipGroup, '纸片组', '<v-chip-group></v-chip-group>'],
        [carouselItem, '轮播项', '<v-carousel-item></v-carousel-item>'],
        [carousel, '轮播', '<v-carousel></v-carousel>'],
        [buttonGroup, '按钮组', '<v-btn-group></v-btn-group>'],
        [btnToggle, '切换按钮', '<v-btn-toggle></v-btn-toggle>'],
        [spacer, '间距组件', '<v-spacer></v-spacer>'],
        [col, '行容器', '<v-col></v-col>'],
        [row, '行容器', '<v-row></v-row>'],
        [container, '容器', '<v-container></v-container>'],
        [virtualScroll, '虚拟滚动列表', '<v-virtualScroll></v-virtualScroll>'],
        [table, '表格', '<v-table></v-table>'],
        [textarea, '多行文本框', '<v-textarea></v-textarea>'],
        [textField, '单行文本框', '<v-textField></v-textField>'],
        [vswitch, '开关', '<v-switch></v-switch>'],
        [slider, '滑块', '<v-slider></v-slider>'],
        [select, '下拉选择框', '<v-select></v-select>'],
        [rangeSlider, '范围滑块', '<v-range-slider></v-range-slider>'],
        [radioGroup, '单选按钮组', '<v-radio-group></v-radio-group>'],
        [radio, '单选按钮', '<v-radio></v-radio>'],
        [input, '自定义输入框', '<v-input></v-input>'],
        [form, '表单', '<v-form></v-form>'],
        [fileInput, '上传文件', '<v-file-input></v-file-input>'],
        [combobox, '组合选择框', '<v-combobox></v-combobox>'],
        [checkbox, '复选框', '<v-checkbox></v-checkbox>'],
        [autocomplete, '自动补全', '<v-autocomplete></v-autocomplete>'],
        [tab, '选项卡', '<v-tab></v-tab>'],
        [tabs, '选项卡', '<v-tabs></v-tabs>'],
        [systemBar, '系统栏', '<v-systemBar></v-systemBar>'],
        [pagination, '分页', '<v-pagination></v-pagination>'],
        [navigationDrawer, '抽屉式导航', '<v-navigation-drawer></v-navigation-drawer>'],
        [navigationItem, '抽屉式导航', '<v-navigation-item></v-navigation-item>'],
        [footer, '底部栏组件', '<v-footer></v-footer>'],
        [footer, '底部栏组件', '<v-footer></v-footer>'],
        [breadcrumbs, '面包屑导航', '<v-breadcrumbs></v-breadcrumbs>'],
        [breadcrumbsItem, '面包屑导航', '<v-breadcrumbs-item></v-breadcrumbs-item>'],
        [breadcrumbsDivider, '面包屑导航', '<v-breadcrumbs-divider></v-breadcrumbs-divider>'],
        [bottomNavigation, '底部导航栏', '<v-bottom-navigation></v-bottom-navigation>'],
        [appBar, '应用栏', '<v-app-bar></v-app-bar>'],
        [appBarNavIcon, '应用栏', '<v-app-bar-nav-icon></v-app-bar-nav-icon>'],
        [appBarTitle, '应用栏', '<v-app-bar-title></v-app-bar-title>'],
        [tooltip, '工具栏', '<v-tooltip></v-tooltip>'],
        [toolbar, '工具栏', '<v-toolbar title="Application"></v-toolbar>'],
        [toolbarItems, '工具栏', '<v-toolbar-items></v-toolbar-items>'],
        [toolbarTitle, '工具栏', '<v-toolbar-title></v-toolbar-title>'],
        [btn, '按钮', '<v-btn>Button</v-btn>'],
        [card, '卡片', '<v-card text="..."></v-card>'],
        [cardItem, '卡片', '<v-card-item></v-card-item>'],
        [sheet, '工作区', '<v-sheet :height="200" :width="200"></v-sheet>'],
        [cardText, '卡片', '<v-card-text></v-card-text>'],
        [cardTitle, '卡片', '<v-card-title></v-card-title>'],
        [cardSubtitle, '卡片', '<v-card-subtitle></v-card-subtitle>'],
        ['v-card-actions', '卡片', '<v-card-actions></v-card-actions>'],
        [chip, '纸片', '<v-chip>Chip</v-chip'],
        [dialog, '对话框', `<v-dialog
  v-model="dialog"
  activator="parent"
  width="auto"
></v-dialog`],
        [divider, '组件用于分隔列表或布局的各个部分', '<v-divider></v-divider>'],
        [expansionPanels, '扩展面板 组件有助于减少大量信息的垂直空间占用。 组件默认仅显示一个扩展面板；但你可以使用 multiple 属性后，扩展面板可以保持打开，直到主动关闭', '<v-expansion-panels></v-expansion-panels>'],
        [expansionPanel, '扩展面板 用于包裹 v-expansion-panel-text 和 v-expansion-panel-title 的子组件', `<v-expansion-panel  title="Title"
  text="Lorem"
></v-expansion-panel>`],
        [expansionPanelTitle, '高级版扩展面板 用于展示可扩展面板的标题的子组件。 也可以包裹在 #title 插槽内', '<v-expansion-panel-title></v-expansion-panel-title>'],
        [expansionPanelText, '高级版扩展面板 用于展示可扩展面板的内容的子组件。 也可以包裹在 #text 插槽内', '<v-expansion-panel-text></v-expansion-panel-text>'],
        [list, '列表 简单地用于表明某几个元素属于同一个集合。 列表为同组的文字和图像提供了了相同的样式', '<v-list lines="one"></v-list>'],
        [listGroup, '列表 可以使用 v-list-group 组件创建列表的子列表。', '<v-list-group></v-list-group>'],
        [listImg, '列表', '<v-list-img></v-list-img>'],
        [listSubheader, '列表', '<v-list-subheader></v-list-subheader>'],
        [listItem, '导航列表', '<v-list-item></v-list-item>'],
        [listItemTitle, '导航列表', '<v-list-item-title></v-list-item-title>'],
        [listItemSubtitle, '导航列表', '<v-list-item-subtitle></v-list-item-subtitle>'],
        [listItemAction, '导航列表', '<v-list-item-action></v-list-item-action>'],
        [listItemMedia, '导航列表', '<v-list-item-media></v-list-item-media>'],
        [menu, '菜单 可以在某个激活菜单的元素位置显示一个菜单。', '<v-menu></v-menu>'],
        [overlay, '遮罩层', '<v-overlay v-model="overlay"></v-overlay>'],
      ]
    : [
        [app, 'app', `<${hyphenate(app.name).slice(1)}></${hyphenate(app.name).slice(1)}>`],
        [bottomSheet, 'bottomSheet', `<${hyphenate(bottomSheet.name).slice(1)}></${hyphenate(bottomSheet.name).slice(1)}>`],
        [calendar, 'calendar', `<${hyphenate(calendar.name).slice(1)}></${hyphenate(calendar.name).slice(1)}>`],
        [calendarDay, 'calendarDay', `<${hyphenate(calendarDay.name).slice(1)}></${hyphenate(calendarDay.name).slice(1)}>`],
        [calendarHeader, 'calendarHeader', `<${hyphenate(calendarHeader.name).slice(1)}></${hyphenate(calendarHeader.name).slice(1)}>`],
        [calendarInterval, 'calendarInterval', `<${hyphenate(calendarInterval.name).slice(1)}></${hyphenate(calendarInterval.name).slice(1)}>`],
        [calendarIntervalEvent, 'calendarIntervalEvent', `<${hyphenate(calendarIntervalEvent.name).slice(1)}></${hyphenate(calendarIntervalEvent.name).slice(1)}>`],
        [calendarMonthDay, 'calendarMonthDay', `<${hyphenate(calendarMonthDay.name).slice(1)}></${hyphenate(calendarMonthDay.name).slice(1)}>`],
        [cardActions, 'cardActions', `<${hyphenate(cardActions.name).slice(1)}></${hyphenate(cardActions.name).slice(1)}>`],
        [checkboxBtn, 'checkboxBtn', `<${hyphenate(checkboxBtn.name).slice(1)}></${hyphenate(checkboxBtn.name).slice(1)}>`],
        [classIcon, 'classIcon', `<${hyphenate(classIcon.name).slice(1)}></${hyphenate(classIcon.name).slice(1)}>`],
        [code, 'code', `<${hyphenate(code.name).slice(1)}></${hyphenate(code.name).slice(1)}>`],
        [componentIcon, 'componentIcon', `<${hyphenate(componentIcon.name).slice(1)}></${hyphenate(componentIcon.name).slice(1)}>`],
        [confirmEdit, 'confirmEdit', `<${hyphenate(confirmEdit.name).slice(1)}></${hyphenate(confirmEdit.name).slice(1)}>`],
        [counter, 'counter', `<${hyphenate(counter.name).slice(1)}></${hyphenate(counter.name).slice(1)}>`],
        [dataIterator, 'dataIterator', `<${hyphenate(dataIterator.name).slice(1)}></${hyphenate(dataIterator.name).slice(1)}>`],
        [dataTable, 'dataTable', `<${hyphenate(dataTable.name).slice(1)}></${hyphenate(dataTable.name).slice(1)}>`],
        [dataTableFooter, 'dataTableFooter', `<${hyphenate(dataTableFooter.name).slice(1)}></${hyphenate(dataTableFooter.name).slice(1)}>`],
        [dataTableRow, 'dataTableRow', `<${hyphenate(dataTableRow.name).slice(1)}></${hyphenate(dataTableRow.name).slice(1)}>`],
        [dataTableRows, 'dataTableRows', `<${hyphenate(dataTableRows.name).slice(1)}></${hyphenate(dataTableRows.name).slice(1)}>`],
        [dataTableServer, 'dataTableServer', `<${hyphenate(dataTableServer.name).slice(1)}></${hyphenate(dataTableServer.name).slice(1)}>`],
        [dataTableVirtual, 'dataTableVirtual', `<${hyphenate(dataTableVirtual.name).slice(1)}></${hyphenate(dataTableVirtual.name).slice(1)}>`],
        [datePicker, 'datePicker', `<${hyphenate(datePicker.name).slice(1)}></${hyphenate(datePicker.name).slice(1)}>`],
        [datePickerControls, 'datePickerControls', `<${hyphenate(datePickerControls.name).slice(1)}></${hyphenate(datePickerControls.name).slice(1)}>`],
        [datePickerHeader, 'datePickerHeader', `<${hyphenate(datePickerHeader.name).slice(1)}></${hyphenate(datePickerHeader.name).slice(1)}>`],
        [datePickerMonth, 'datePickerMonth', `<${hyphenate(datePickerMonth.name).slice(1)}></${hyphenate(datePickerMonth.name).slice(1)}>`],
        [datePickerMonths, 'datePickerMonths', `<${hyphenate(datePickerMonths.name).slice(1)}></${hyphenate(datePickerMonths.name).slice(1)}>`],
        [datePickerYears, 'datePickerYears', `<${hyphenate(datePickerYears.name).slice(1)}></${hyphenate(datePickerYears.name).slice(1)}>`],
        [dialogBottomTransition, 'dialogBottomTransition', `<${hyphenate(dialogBottomTransition.name).slice(1)}></${hyphenate(dialogBottomTransition.name).slice(1)}>`],
        [dialogTopTransition, 'dialogTopTransition', `<${hyphenate(dialogTopTransition.name).slice(1)}></${hyphenate(dialogTopTransition.name).slice(1)}>`],
        [dialogTransition, 'dialogTransition', `<${hyphenate(dialogTransition.name).slice(1)}></${hyphenate(dialogTransition.name).slice(1)}>`],
        [expandTransition, 'expandTransition', `<${hyphenate(expandTransition.name).slice(1)}></${hyphenate(expandTransition.name).slice(1)}>`],
        [expandXTransition, 'expandXTransition', `<${hyphenate(expandXTransition.name).slice(1)}></${hyphenate(expandXTransition.name).slice(1)}>`],
        [fabTransition, 'fabTransition', `<${hyphenate(fabTransition.name).slice(1)}></${hyphenate(fabTransition.name).slice(1)}>`],
        [fadeTransition, 'fadeTransition', `<${hyphenate(fadeTransition.name).slice(1)}></${hyphenate(fadeTransition.name).slice(1)}>`],
        [field, 'field', `<${hyphenate(field.name).slice(1)}></${hyphenate(field.name).slice(1)}>`],
        [fieldLabel, 'fieldLabel', `<${hyphenate(fieldLabel.name).slice(1)}></${hyphenate(fieldLabel.name).slice(1)}>`],
        [infiniteScroll, 'infiniteScroll', `<${hyphenate(infiniteScroll.name).slice(1)}></${hyphenate(infiniteScroll.name).slice(1)}>`],
        [kbd, 'kbd', `<${hyphenate(kbd.name).slice(1)}></${hyphenate(kbd.name).slice(1)}>`],
        [label, 'label', `<${hyphenate(label.name).slice(1)}></${hyphenate(label.name).slice(1)}>`],
        [layout, 'layout', `<${hyphenate(layout.name).slice(1)}></${hyphenate(layout.name).slice(1)}>`],
        [layoutItem, 'layoutItem', `<${hyphenate(layoutItem.name).slice(1)}></${hyphenate(layoutItem.name).slice(1)}>`],
        [ligatureIcon, 'ligatureIcon', `<${hyphenate(ligatureIcon.name).slice(1)}></${hyphenate(ligatureIcon.name).slice(1)}>`],
        [main, 'main', `<${hyphenate(main.name).slice(1)}></${hyphenate(main.name).slice(1)}>`],
        [messages, 'messages', `<${hyphenate(messages.name).slice(1)}></${hyphenate(messages.name).slice(1)}>`],
        [noSsr, 'noSsr', `<${hyphenate(noSsr.name).slice(1)}></${hyphenate(noSsr.name).slice(1)}>`],
        [otpInput, 'otpInput', `<${hyphenate(otpInput.name).slice(1)}></${hyphenate(otpInput.name).slice(1)}>`],
        [picker, 'picker', `<${hyphenate(picker.name).slice(1)}></${hyphenate(picker.name).slice(1)}>`],
        [pickerTitle, 'pickerTitle', `<${hyphenate(pickerTitle.name).slice(1)}></${hyphenate(pickerTitle.name).slice(1)}>`],
        [scaleTransition, 'scaleTransition', `<${hyphenate(scaleTransition.name).slice(1)}></${hyphenate(scaleTransition.name).slice(1)}>`],
        [scrollXReverseTransition, 'scrollXReverseTransition', `<${hyphenate(scrollXReverseTransition.name).slice(1)}></${hyphenate(scrollXReverseTransition.name).slice(1)}>`],
        [scrollXTransition, 'scrollXTransition', `<${hyphenate(scrollXTransition.name).slice(1)}></${hyphenate(scrollXTransition.name).slice(1)}>`],
        [scrollYReverseTransition, 'scrollYReverseTransition', `<${hyphenate(scrollYReverseTransition.name).slice(1)}></${hyphenate(scrollYReverseTransition.name).slice(1)}>`],
        [scrollYTransition, 'scrollYTransition', `<${hyphenate(scrollYTransition.name).slice(1)}></${hyphenate(scrollYTransition.name).slice(1)}>`],
        [selectionControl, 'selectionControl', `<${hyphenate(selectionControl.name).slice(1)}></${hyphenate(selectionControl.name).slice(1)}>`],
        [selectionControlGroup, 'selectionControlGroup', `<${hyphenate(selectionControlGroup.name).slice(1)}></${hyphenate(selectionControlGroup.name).slice(1)}>`],
        [skeletonLoader, 'skeletonLoader', `<${hyphenate(skeletonLoader.name).slice(1)}></${hyphenate(skeletonLoader.name).slice(1)}>`],
        [slideGroup, 'slideGroup', `<${hyphenate(slideGroup.name).slice(1)}></${hyphenate(slideGroup.name).slice(1)}>`],
        [slideGroupItem, 'slideGroupItem', `<${hyphenate(slideGroupItem.name).slice(1)}></${hyphenate(slideGroupItem.name).slice(1)}>`],
        [slideXReverseTransition, 'slideXReverseTransition', `<${hyphenate(slideXReverseTransition.name).slice(1)}></${hyphenate(slideXReverseTransition.name).slice(1)}>`],
        [slideXTransition, 'slideXTransition', `<${hyphenate(slideXTransition.name).slice(1)}></${hyphenate(slideXTransition.name).slice(1)}>`],
        [slideYTransition, 'slideYTransition', `<${hyphenate(slideYTransition.name).slice(1)}></${hyphenate(slideYTransition.name).slice(1)}>`],
        [slideYReverseTransition, 'slideYReverseTransition', `<${hyphenate(slideYReverseTransition.name).slice(1)}></${hyphenate(slideYReverseTransition.name).slice(1)}>`],
        [stepper, 'stepper', `<${hyphenate(stepper.name).slice(1)}></${hyphenate(stepper.name).slice(1)}>`],
        [stepperActions, 'stepperActions', `<${hyphenate(stepperActions.name).slice(1)}></${hyphenate(stepperActions.name).slice(1)}>`],
        [stepperHeader, 'stepperHeader', `<${hyphenate(stepperHeader.name).slice(1)}></${hyphenate(stepperHeader.name).slice(1)}>`],
        [stepperItem, 'stepperItem', `<${hyphenate(stepperItem.name).slice(1)}></${hyphenate(stepperItem.name).slice(1)}>`],
        [stepperWindow, 'stepperWindow', `<${hyphenate(stepperWindow.name).slice(1)}></${hyphenate(stepperWindow.name).slice(1)}>`],
        [stepperWindowItem, 'stepperWindowItem', `<${hyphenate(stepperWindowItem.name).slice(1)}></${hyphenate(stepperWindowItem.name).slice(1)}>`],
        [svgIcon, 'svgIcon', `<${hyphenate(svgIcon.name).slice(1)}></${hyphenate(svgIcon.name).slice(1)}>`],
        [validation, 'validation', `<${hyphenate(validation.name).slice(1)}></${hyphenate(validation.name).slice(1)}>`],
        [avatar, 'avatar', '<v-avatar></v-avatar>'],
        [icon, 'icon', '<v-icon></v-icon>'],
        [colorPicker, 'Color picker', '<v-color-picker></v-color-picker>'],
        [parallax, 'Parallax', '<v-parallax></v-parallax>'],
        [themeProvider, 'theme provider', '<v-theme-provider></v-theme-provider>'],
        [defaultsProvider, 'Default provider', '<v-defaults-provider></v-defaults-provider>'],
        [localeProvider, 'Local provider', '<v-locale-provider></v-locale-provider>'],
        [lazy, 'lazy loading', '<v-lazy></v-lazy>'],
        [img, 'image', '<v-img></v-img>'],
        [responsive, 'aspect ratio', '<v-responsive></v-responsive>'],
        [timeline, 'Timeline', '<v-timeline></v-timeline>'],
        [timelineItem, 'Timeline', '<v-timeline-item></v-timeline-item>'],
        [snackbar, 'Message bar', '<v-snackbar></v-snackbar>'],
        [rating, 'rating', '<v-rating></v-rating>'],
        [progressLinear, 'Progress bar', '<v-progress-linear></v-progress-linear>'],
        [progressCircular, 'Circular progress', '<v-progress-circular></v-progress-circular>'],
        [hover, 'hover', '<v-hover></v-hover>'],
        [banner, 'banner', '<v-banner></v-banner>'],
        [bannerText, 'banner', '<v-banner-text></v-banner-text>'],
        [bannerActions, 'banner', '<v-banner-actions></v-banner-actions>'],
        [alert, 'warning box', '<v-alert></v-alert>'],
        [alertTitle, 'Alert box', '<v-alert-title></v-alert-title>'],
        [window, 'pane', '<v-window></v-window>'],
        [windowItem, 'pane', '<v-window-item></v-window-item>'],
        [item, 'Project team', '<v-item></v-item>'],
        [itemGroup, 'item group', '<v-item-group></v-item-group>'],
        [chipGroup, 'paper group', '<v-chip-group></v-chip-group>'],
        [carouselItem, 'Carousel item', '<v-carousel-item></v-carousel-item>'],
        [carousel, 'carousel', '<v-carousel></v-carousel>'],
        [buttonGroup, 'Button group', '<v-btn-group></v-btn-group>'],
        [btnToggle, 'toggle button', '<v-btn-toggle></v-btn-toggle>'],
        [spacer, 'spacing component', '<v-spacer></v-spacer>'],
        [col, 'row container', '<v-col></v-col>'],
        [row, 'row container', '<v-row></v-row>'],
        [container, 'container', '<v-container></v-container>'],
        [virtualScroll, 'Virtual scrolling list', '<v-virtualScroll></v-virtualScroll>'],
        [table, 'table', '<v-table></v-table>'],
        [textarea, 'Multiline text box', '<v-textarea></v-textarea>'],
        [textField, 'Single-line text box', '<v-textField></v-textField>'],
        [vswitch, 'switch', '<v-switch></v-switch>'],
        [slider, 'Slider', '<v-slider></v-slider>'],
        [select, 'Drop-down selection box', '<v-select></v-select>'],
        [rangeSlider, 'Range Slider', '<v-range-slider></v-range-slider>'],
        [radioGroup, 'Radio button group', '<v-radio-group></v-radio-group>'],
        [radio, 'radio button', '<v-radio></v-radio>'],
        [input, 'Custom input box', '<v-input></v-input>'],
        [form, 'form', '<v-form></v-form>'],
        [fileInput, 'Upload file', '<v-fileInput></v-fileInput>'],
        [combobox, 'Combo selection box', '<v-combobox></v-combobox>'],
        [checkbox, 'checkbox', '<v-checkbox></v-checkbox>'],
        [autocomplete, 'Autocomplete', '<v-autocomplete></v-autocomplete>'],
        [tab, 'tab', '<v-tab></v-tab>'],
        [tabs, 'tabs', '<v-tabs></v-tabs>'],
        [systemBar, 'System Bar', '<v-systemBar></v-systemBar>'],
        [pagination, 'pagination', '<v-pagination></v-pagination>'],
        [navigationDrawer, 'Drawer navigation', '<v-navigation-drawer></v-navigation-drawer>'],
        [navigationItem, 'Drawer navigation', '<v-navigation-item></v-navigation-item>'],
        [footer, 'Bottom bar component', '<v-footer></v-footer>'],
        [breadcrumbs, 'Breadcrumbs', '<v-breadcrumbs></v-breadcrumbs>'],
        [breadcrumbsItem, 'Breadcrumbs', '<v-breadcrumbs-item></v-breadcrumbs-item>'],
        [breadcrumbsDivider, 'Breadcrumbs', '<v-breadcrumbs-divider></v-breadcrumbs-divider>'],
        [bottomNavigation, 'Bottom navigation bar', '<v-bottom-navigation></v-bottom-navigation>'],
        [appBar, 'Toolbar', '<v-app-bar></v-app-bar>'],
        [appBarNavIcon, 'Toolbar', '<v-app-bar-nav-icon></v-app-bar-nav-icon>'],
        [appBarTitle, 'Toolbar', '<v-app-bar-title></v-app-bar-title>'],
        [tooltip, 'Toolbar', '<v-tooltip></v-tooltip>'],
        [toolbar, 'Toolbar', '<v-toolbar title="Application"></v-toolbar>'],
        [toolbarItems, 'Toolbar', '<v-toolbar-items></v-toolbar-items>'],
        [toolbarTitle, 'Toolbar', '<v-toolbar-title></v-toolbar-title>'],
        [btn, 'Button', '<v-btn>Button</v-btn>'],
        [card, 'card', '<v-card text="..."></v-card>'],
        [cardItem, 'card', '<v-card-item></v-card-item>'],
        [sheet, 'Workspace', '<v-sheet :height="200" :width="200"></v-sheet>'],
        [cardText, 'card', '<v-card-text></v-card-text>'],
        [cardTitle, 'card', '<v-card-title></v-card-title>'],
        [cardSubtitle, 'card', '<v-card-subtitle></v-card-subtitle>'],
        ['v-card-actions', 'card', '<v-card-actions></v-card-actions>'],
        [chip, 'paper', '<v-chip>Chip</v-chip'],
        [dialog, 'Dialog', `<v-dialog
  v-model="dialog"
  activator="parent"
  width="auto"
></v-dialog`],
        [divider, 'Component is used to separate parts of a list or layout', '<v-divider></v-divider>'],
        [expansionPanels, 'Expansion Panels components help reduce the vertical space occupied by large amounts of information. The component only displays one expansion panel by default; but you can use the multiple attribute, and the expansion panel can remain open until it is actively closed', '<v-expansion-panels></v-expansion-panels>'],
        [expansionPanel, 'Expansion panel is used to wrap the subcomponents of v-expansion-panel-text and v-expansion-panel-title', `<v-expansion-panel title="Title"
  text="Lorem"
></v-expansion-panel>`],
        [expansionPanelTitle, 'Advanced expansion panel is a subcomponent used to display the title of the expandable panel. Can also be wrapped in the #title slot', '<v-expansion-panel-title></v-expansion-panel-title>'],
        [expansionPanelText, 'Advanced expansion panel is a subcomponent used to display the content of the expandable panel. Can also be wrapped in the #text slot', '<v-expansion-panel-text></v-expansion-panel-text>'],
        [list, 'List is simply used to indicate that certain elements belong to the same set. Lists provide the same style for text and images in the same group', '<v-list lines="one"></v-list>'],
        [listGroup, 'List You can use the v-list-group component to create sublists of a list. ', '<v-list-group></v-list-group>'],
        [listImg, 'list', '<v-list-img></v-list-img>'],
        [listSubheader, 'list', '<v-list-subheader></v-list-subheader>'],
        [listItem, 'Navigation list', '<v-list-item></v-list-item>'],
        [listItemTitle, 'Navigation list', '<v-list-item-title></v-list-item-title>'],
        [listItemSubtitle, 'Navigation list', '<v-list-item-subtitle></v-list-item-subtitle>'],
        [listItemAction, 'Navigation list', '<v-list-item-action></v-list-item-action>'],
        [listItemMedia, 'Navigation list', '<v-list-item-media></v-list-item-media>'],
        [menu, 'Menu can display a menu at the position of an active menu element. ', '<v-menu></v-menu>'],
        [overlay, 'mask layer', '<v-overlay v-model="overlay"></v-overlay>'],
      ]
  return componentsReducer(map, true, 'v', 'vuetify')
}
