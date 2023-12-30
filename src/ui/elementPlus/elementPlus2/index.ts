import { getLocale } from '@vscode-use/utils'
import { componentsReducer, propsReducer } from '../../utils'
import ElRow from './row.json'
import ElCalendar from './calendar.json'
import ElCol from './col.json'
import ElAlert from './alert.json'
import ElButton from './button.json'
import ElButtonGroup from './buttonGroup.json'
import ElContainer from './container.json'
import ElHeader from './header.json'
import ElAside from './aside.json'
import ElFooter from './footer.json'
import ElLink from './link.json'
import ElSpace from './space.json'
import ElText from './text.json'
import ElRadio from './radio.json'
import ElRadioGroup from './radioGroup.json'
import ElRadioButton from './radioButton.json'
import ElForm from './form.json'
import ElFormItem from './formItem.json'
import ElTable from './table.json'
import ElTableColumn from './tableColumn.json'
import ElCard from './card.json'
import ElInput from './input.json'
import ElInputNumber from './inputNumber.json'
import ElAutocomplete from './autocomplete.json'
import ElSelect from './select.json'
import ElCascader from './cascader.json'
import ElCascaderPanel from './cascaderPanel.json'
import ElCheckbox from './checkbox.json'
import ElCheckboxGroup from './checkboxGroup.json'
import ElCheckboxButton from './checkboxButton.json'
import ElBadge from './badge.json'
import ElBreadcrumb from './breadcrumb.json'
import ElCarousel from './carousel.json'
import ElCarouselItem from './carouselItem.json'
import ElCollapse from './collapse.json'
import ElCollapseItem from './collapseItem.json'
import ElColorPicker from './colorPicker.json'
import ElImage from './image.json'
import ElEmpty from './empty.json'
import ElDropdown from './dropdown.json'
import ElDropdownMenu from './dropdownMenu.json'
import ElDropdownItem from './dropdownItem.json'
import ElDrawer from './drawer.json'
import ElDivider from './divider.json'
import ElDialog from './dialog.json'
import ElDescriptions from './descriptions.json'
import ElDescriptionItem from './descriptionItem.json'
import ElDatePicker from './datePicker.json'
import ElDatetimePicker from './datetimePicker.json'
import ElMain from './main.json'
import ElMenu from './menu.json'
import ElMenuItem from './menuItem.json'
import ElPageHeader from './pageHeader.json'
import ElPagination from './pagination.json'
import ElPopconfirm from './popconfirm.json'
import ElPopover from './popover.json'
import ElProgress from './progress.json'
import ElRate from './rate.json'
import ElResult from './result.json'
import ElSkeleton from './skeleton.json'
import ElSkeletonItem from './skeletonItem.json'
import ElSlider from './slider.json'
import ElStatistic from './statistic.json'
import ElStep from './step.json'
import ElSteps from './steps.json'
import ElSubmenu from './submenu.json'
import ElSwitch from './switch.json'
import ElTabPane from './tabPane.json'
import ElTabs from './tabs.json'
import ElTag from './tag.json'
import ElTimeline from './timeline.json'
import ElTimelineItem from './timelineItem.json'
import ElTimePicker from './timePicker.json'
import ElTimeSelect from './timeSelect.json'
import ElTooltip from './tooltip.json'
import ElTransfer from './transfer.json'
import ElTree from './tree.json'
import ElUpload from './upload.json'
import ElAvatar from './avatar.json'
import ElBacktop from './backtop.json'
import ElOption from './option.json'
import ElOptionGroup from './optionGroup.json'

export function elementPlus2() {
  const map: any = [
    ElRow,
    ElCol,
    ElCalendar,
    ElAlert,
    ElButton,
    ElButtonGroup,
    ElContainer,
    ElHeader,
    ElAside,
    ElFooter,
    ElLink,
    ElSpace,
    ElText,
    ElRadio,
    ElRadioGroup,
    ElRadioButton,
    ElForm,
    ElFormItem,
    ElTable,
    ElTableColumn,
    ElCard,
    ElInput,
    ElInputNumber,
    ElAutocomplete,
    ElSelect,
    ElCascader,
    ElCascaderPanel,
    ElCheckbox,
    ElCheckboxGroup,
    ElCheckboxButton,
    ElBadge,
    ElBreadcrumb,
    ElCarousel,
    ElCarouselItem,
    ElCollapse,
    ElCollapseItem,
    ElColorPicker,
    ElImage,
    ElEmpty,
    ElDropdown,
    ElDropdownMenu,
    ElDropdownItem,
    ElDrawer,
    ElDivider,
    ElDialog,
    ElDescriptions,
    ElDescriptionItem,
    ElDatePicker,
    ElDatetimePicker,
    ElMain,
    ElMenu,
    ElMenuItem,
    ElPageHeader,
    ElPagination,
    ElPopconfirm,
    ElPopover,
    ElProgress,
    ElRate,
    ElResult,
    ElSkeleton,
    ElSkeletonItem,
    ElSlider,
    ElStatistic,
    ElStep,
    ElSteps,
    ElSubmenu,
    ElSwitch,
    ElTabPane,
    ElTabs,
    ElTag,
    ElTimeline,
    ElTimelineItem,
    ElTimePicker,
    ElTimeSelect,
    ElTooltip,
    ElTransfer,
    ElTree,
    ElUpload,
    ElAvatar,
    ElBacktop,
    ElOption,
    ElOptionGroup,
  ]

  return propsReducer('element-plus', map)
}

export function elementPlus2Components() {
  const isZh = getLocale().includes('zh')

  const map = isZh
    ? [
        [
          ElRow,
          '行布局',
          '<el-row></el-row>',
        ],
        [
          ElCol,
          '列布局',
          '<el-col></el-col>',
        ],
        [
          ElContainer,
          '布局容器',
          '<el-container></el-container>',
        ],
        [
          ElHeader,
          '顶栏容器',
          '<el-header></el-header>',
        ],
        [
          ElAside,
          '侧边栏容器',
          '<el-aside></el-aside>',
        ],
        [
          'el-main',
          '主要区域容器',
          '<el-main></el-main>',
        ],
        [
          ElFooter,
          '底栏容器',
          '<el-footer></el-footer>',
        ],
        [
          ElButton,
          '按钮',
          '<el-button></el-button>',
        ],
        [
          ElButtonGroup,
          '按钮组',
          '<el-button-group></el-button-group>',
        ],
        [
          ElSpace,
          '间距',
          '<el-space></el-space>',
        ],
        [
          ElText,
          '文本的常见操作',
          '<el-text></el-text>',
        ],
        [
          ElLink,
          '文字链接',
          '<el-link></el-link>',
        ],
        [
          ElRadio,
          '单选框',
          '<el-radio></el-radio>',
        ],
        [
          ElRadioGroup,
          '单选框组',
          '<el-radio-group></el-radio-group>',
        ],
        [
          ElRadioButton,
          '按钮样式的单选组合',
          '<el-radio-button></el-radio-button>',
        ],
        [
          ElCheckbox,
          '多选框',
          '<el-checkbox></el-checkbox>',
        ],
        [
          ElCheckboxGroup,
          '多选框组',
          '<el-checkbox-group></el-checkbox-group>',
        ],
        [
          ElCheckboxButton,
          '按钮样式的多选组合',
          '<el-checkbox-button></el-checkbox-button>',
        ],
        [
          ElInput,
          '输入框',
          '<el-input></el-input>',
        ],
        [
          ElInputNumber,
          '计数器',
          '<el-input-number></el-input-number>',
        ],
        [
          ElSelect,
          '选择器',
          '<el-select></el-select>',
        ],
        [
          ElOption,
          '基础多选',
          '<el-option></el-option>',
        ],
        [
          ElOptionGroup,
          '备选项进行分组展示',
          '<el-option-group></el-option-group>',
        ],
        [
          ElCascader,
          '级联选择器',
          '<el-cascader></el-cascader>',
        ],
        [
          ElCascaderPanel,
          '级联面板',
          '<el-cascader-panel></el-cascader-panel>',
        ],
        [
          ElSwitch,
          '开关',
          '<el-switch></el-switch>',
        ],
        [
          ElSlider,
          '滑块',
          '<el-slider></el-slider>',
        ],
        [
          ElTimeSelect,
          '时间选择器',
          '<el-time-select></el-time-select>',
        ],
        [
          ElDatePicker,
          '日期选择器/日期时间选择器',
          '<el-date-picker></el-date-picker>',
        ],
        [
          ElUpload,
          '上传',
          '<el-upload></el-upload>',
        ],
        [
          ElRate,
          '评分',
          '<el-rate></el-rate>',
        ],
        [
          ElColorPicker,
          '颜色选择器',
          '<el-color-picker></el-color-picker>',
        ],
        [
          ElTransfer,
          '穿梭框',
          '<el-transfer></el-transfer>',
        ],
        [
          ElForm,
          '表单',
          '<el-form></el-form>',
        ],
        [
          ElFormItem,
          '表单项',
          '<el-form-item></el-form-item>',
        ],
        [
          ElTable,
          '表格',
          '<el-table></el-table>',
        ],
        [
          ElTableColumn,
          '表格项',
          '<el-table-column></el-table-column>',
        ],
        [
          ElTag,
          '标签',
          '<el-tag></el-tag>',
        ],
        [
          ElProgress,
          '进度条',
          '<el-progress></el-progress>',
        ],
        [
          ElTree,
          '树形控件',
          '<el-tree></el-tree>',
        ],
        [
          ElPagination,
          '分页',
          '<el-pagination></el-pagination>',
        ],
        [
          ElBadge,
          '标记',
          '<el-badge></el-badge>',
        ],
        [
          ElAvatar,
          '头像',
          '<el-avatar></el-avatar>',
        ],
        [
          ElSkeleton,
          '骨架屏',
          '<el-skeleton></el-skeleton>',
        ],
        [
          ElEmpty,
          '空状态',
          '<el-empty></el-empty>',
        ],
        [
          ElDescriptions,
          '描述列表',
          '<el-descriptions></el-descriptions>',
        ],
        [
          ElDescriptionItem,
          '描述列表',
          '<el-description-item></el-description-item>',
        ],
        [
          'el-descriptions-item',
          '描述列表项',
          '<el-descriptions-item></el-descriptions-item>',
        ],
        [
          ElResult,
          '结果',
          '<el-result></el-result>',
        ],
        [
          ElStatistic,
          '统计数值',
          '<el-statistic></el-statistic>',
        ],
        [
          ElAlert,
          '警告',
          '<el-alert></el-alert>',
        ],

        [
          ElMain,
          '主要区域容器',
          '<el-main></el-main>',
        ],
        [
          ElMenu,
          '导航菜单',
          '<el-menu></el-menu>',
        ],
        [
          ElSubmenu,
          '导航子菜单',
          '<el-submenu></el-submenu>',
        ],
        [
          ElMenuItem,
          '导航菜单项',
          '<el-menu-item></el-menu-item>',
        ],
        [
          ElTabs,
          '标签页',
          '<el-tabs></el-tabs>',
        ],
        [
          ElTabPane,
          '标签项',
          '<el-tab-pane></el-tab-pane>',
        ],
        [
          ElBreadcrumb,
          '面包屑',
          '<el-breadcrumb></el-breadcrumb>',
        ],
        [
          'el-breadcrumb-item',
          '面包屑项',
          '<el-breadcrumb-item></el-breadcrumb-item>',
        ],
        [
          ElPageHeader,
          '页头',
          '<el-page-header></el-page-header>',
        ],
        [
          ElDropdown,
          '下拉菜单',
          '<el-dropdown></el-dropdown>',
        ],
        [
          ElDropdownMenu,
          '下拉菜单列表',
          '<el-dropdown-menu></el-dropdown-menu>',
        ],
        [
          ElDropdownItem,
          '下拉菜单列表项',
          '<el-dropdown-item></el-dropdown-item>',
        ],
        [
          ElSteps,
          '步骤条',
          '<el-steps></el-steps>',
        ],
        [
          ElDialog,
          '对话框',
          '<el-dialog></el-dialog>',
        ],
        [
          ElTooltip,
          '文字提示',
          '<el-tooltip></el-tooltip>',
        ],
        [
          ElPopover,
          '弹出框',
          '<el-popover></el-popover>',
        ],
        [
          ElPopconfirm,
          '气泡确认框',
          '<el-popconfirm></el-popconfirm>',
        ],
        [
          ElCard,
          '卡片',
          '<el-card></el-card>',
        ],
        [
          ElCarousel,
          '走马灯',
          '<el-carousel></el-carousel>',
        ],
        [
          ElCarouselItem,
          '走马灯项',
          '<el-carousel-item></el-carousel-item>',
        ],
        [
          ElCollapse,
          '折叠面板',
          '<el-collapse></el-collapse>',
        ],
        [
          ElCollapseItem,
          '折叠面板项',
          '<el-collapse-item></el-collapse-item>',
        ],
        [
          ElTimeline,
          '时间线',
          '<el-timeline></el-timeline>',
        ],
        [
          ElTimelineItem,
          '时间线项',
          '<el-timeline-item></el-timeline-item>',
        ],
        [
          ElDivider,
          '分割线',
          '<el-divider></el-divider>',
        ],
        [
          ElCalendar,
          '日历',
          '<el-calendar></el-calendar>',
        ],
        [
          ElImage,
          '图片',
          '<el-image></el-image>',
        ],
        [
          ElBacktop,
          '回到顶部',
          '<el-backtop></el-backtop>',
        ],
        [
          ElDrawer,
          '抽屉',
          '<el-drawer></el-drawer>',
        ],
        [
          ElAutocomplete,
          '远程搜索',
          '<el-autocomplete></el-autocomplete>',
        ],
      ]
    : [
        [
          ElRow,
          'Row layout',
          '<el-row></el-row>',
        ],
        [
          ElCol,
          'Column layout',
          '<el-col></el-col>',
        ],
        [
          ElContainer,
          'Layout container',
          '<el-container></el-container>',
        ],
        [
          ElHeader,
          'Top bar container',
          '<el-header></el-header>',
        ],
        [
          ElAside,
          'Sidebar container',
          '<el-aside></el-aside>',
        ],
        [
          'el-main',
          'Main area container',
          '<el-main></el-main>',
        ],
        [
          ElFooter,
          'Bottom column container',
          '<el-footer></el-footer>',
        ],
        [
          ElButton,
          'button',
          '<el-button></el-button>',
        ],
        [
          ElButtonGroup,
          'button group',
          '<el-button-group></el-button-group>',
        ],
        [
          ElLink,
          'Text link',
          '<el-link></el-link>',
        ],
        [
          ElRadio,
          'Single box',
          '<el-radio></el-radio>',
        ],
        [
          ElRadioGroup,
          'Radio button group',
          '<el-radio-group></el-radio-group>',
        ],
        [
          ElRadioButton,
          'Radio combination of button styles',
          '<el-radio-button></el-radio-button>',
        ],
        [
          ElCheckbox,
          'Checkbox',
          '<el-checkbox></el-checkbox>',
        ],
        [
          ElCheckboxGroup,
          'Multiple selection box group',
          '<el-checkbox-group></el-checkbox-group>',
        ],
        [
          ElCheckboxButton,
          'Multi-select combination of button styles',
          '<el-checkbox-button></el-checkbox-button>',
        ],
        [
          ElInput,
          'Input box',
          '<el-input></el-input>',
        ],
        [
          ElInputNumber,
          'counter',
          '<el-input-number></el-input-number>',
        ],
        [
          ElSelect,
          'Selector',
          '<el-select></el-select>',
        ],
        [
          ElOption,
          'Basic multiple selection',
          '<el-option></el-option>',
        ],
        [
          ElOptionGroup,
          'Alternatives are displayed in groups',
          '<el-option-group></el-option-group>',
        ],
        [
          ElCascader,
          'Cascade selector',
          '<el-cascader></el-cascader>',
        ],
        [
          ElCascaderPanel,
          'Cascading Panel',
          '<el-cascader-panel></el-cascader-panel>',
        ],
        [
          ElSwitch,
          'switch',
          '<el-switch></el-switch>',
        ],
        [
          ElSlider,
          'slider',
          '<el-slider></el-slider>',
        ],
        [
          ElTimeSelect,
          'Time picker',
          '<el-time-select></el-time-select>',
        ],
        [
          ElDatePicker,
          'Date picker/date time picker',
          '<el-date-picker></el-date-picker>',
        ],
        [
          ElUpload,
          'Upload',
          '<el-upload></el-upload>',
        ],
        [
          ElRate,
          'score',
          '<el-rate></el-rate>',
        ],
        [
          ElColorPicker,
          'Color picker',
          '<el-color-picker></el-color-picker>',
        ],
        [
          ElTransfer,
          'Shuttle box',
          '<el-transfer></el-transfer>',
        ],
        [
          ElForm,
          'form',
          '<el-form></el-form>',
        ],
        [
          ElFormItem,
          'Form item',
          '<el-form-item></el-form-item>',
        ],
        [
          ElTable,
          'sheet',
          '<el-table></el-table>',
        ],
        [
          ElTableColumn,
          'Table item',
          '<el-table-column></el-table-column>',
        ],
        [
          ElTag,
          'Label',
          '<el-tag></el-tag>',
        ],
        [
          ElProgress,
          'progress bar',
          '<el-progress></el-progress>',
        ],
        [
          ElTree,
          'Tree control',
          '<el-tree></el-tree>',
        ],
        [
          ElPagination,
          'pagination',
          '<el-pagination></el-pagination>',
        ],
        [
          ElBadge,
          'mark',
          '<el-badge></el-badge>',
        ],
        [
          ElAvatar,
          'avatar',
          '<el-avatar></el-avatar>',
        ],
        [
          ElSkeleton,
          'Skeleton screen',
          '<el-skeleton></el-skeleton>',
        ],
        [
          ElEmpty,
          'Empty state',
          '<el-empty></el-empty>',
        ],
        [
          ElDescriptions,
          'Description list',
          '<el-descriptions></el-descriptions>',
        ],
        [
          ElDropdownItem,
          'Describe list item',
          '<el-descriptions-item></el-descriptions-item>',
        ],
        [
          ElResult,
          'result',
          '<el-result></el-result>',
        ],
        [
          ElStatistic,
          'statistical value',
          '<el-statistic></el-statistic>',
        ],
        [
          ElAlert,
          'warn',
          '<el-alert></el-alert>',
        ],
        [
          ElMenu,
          'Navigation menu',
          '<el-menu></el-menu>',
        ],
        [
          ElSubmenu,
          'Navigation submenu',
          '<el-submenu></el-submenu>',
        ],
        [
          ElMenuItem,
          'Navigation menu item',
          '<el-menu-item></el-menu-item>',
        ],
        [
          ElTabs,
          'Bookmark page',
          '<el-tabs></el-tabs>',
        ],
        [
          ElTabPane,
          'Tag item',
          '<el-tab-pane></el-tab-pane>',
        ],
        [
          ElBreadcrumb,
          'Bread crumbs',
          '<el-breadcrumb></el-breadcrumb>',
        ],
        [
          'el-breadcrumb-item',
          'Breadcrumb item',
          '<el-breadcrumb-item></el-breadcrumb-item>',
        ],
        [
          ElPageHeader,
          'Header',
          '<el-page-header></el-page-header>',
        ],
        [
          ElDropdown,
          'Drop-down menu',
          '<el-dropdown></el-dropdown>',
        ],
        [
          ElDropdownMenu,
          'Drop-down menu list',
          '<el-dropdown-menu></el-dropdown-menu>',
        ],
        [
          ElDropdownItem,
          'Drop-down menu list item',
          '<el-dropdown-item></el-dropdown-item>',
        ],
        [
          ElSteps,
          'step bar',
          '<el-steps></el-steps>',
        ],
        [
          ElDialog,
          'Dialog',
          '<el-dialog></el-dialog>',
        ],
        [
          ElTooltip,
          'Text prompt',
          '<el-tooltip></el-tooltip>',
        ],
        [
          ElPopover,
          'Pop-up box',
          '<el-popover></el-popover>',
        ],
        [
          ElPopconfirm,
          'Bubble confirmation box',
          '<el-popconfirm></el-popconfirm>',
        ],
        [
          ElCard,
          'card',
          '<el-card></el-card>',
        ],
        [
          ElCarousel,
          'Revolving Lantern',
          '<el-carousel></el-carousel>',
        ],
        [
          ElCarouselItem,
          'Revolving Lantern',
          '<el-carousel-item></el-carousel-item>',
        ],
        [
          ElCollapse,
          'Collapse panel',
          '<el-collapse></el-collapse>',
        ],
        [
          ElCollapseItem,
          'Collapse panel item',
          '<el-collapse-item></el-collapse-item>',
        ],
        [
          ElTimeline,
          'timeline',
          '<el-timeline></el-timeline>',
        ],
        [
          ElTimelineItem,
          'Timeline item',
          '<el-timeline-item></el-timeline-item>',
        ],
        [
          ElDivider,
          'Dividing line',
          '<el-divider></el-divider>',
        ],
        [
          ElCalendar,
          'calendar',
          '<el-calendar></el-calendar>',
        ],
        [
          ElImage,
          'picture',
          '<el-image></el-image>',
        ],
        [
          ElBacktop,
          'back to the top',
          '<el-backtop></el-backtop>',
        ],
        [
          ElDrawer,
          'drawer',
          '<el-drawer></el-drawer>',
        ],
        [
          ElAutocomplete,
          'Remote search',
          '<el-autocomplete></el-autocomplete>',
        ],
      ]
  return componentsReducer(map, true, 'el')
}
