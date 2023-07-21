import { componentsReducer, propsReducer } from '../../utils'
import button from './button.json'
import buttonGroup from './buttonGroup.json'
import avatar from './avatar.json'
import avatarGroup from './avatarGroup.json'
import badge from './badge.json'
import breadcrumb from './breadcrumb.json'
import breadcrumbItem from './breadcrumbItem.json'
import checkbox from './checkbox.json'
import checkboxGroup from './checkboxGroup.json'
import dialog from './dialog.json'
import modal from './modal.json'
import pagination from './pagination.json'

export function navieUi2(extensionContext: any) {
  const map: any = [
    avatar,
    avatarGroup,
    badge,
    breadcrumb,
    breadcrumbItem,
    button,
    buttonGroup,
    checkbox,
    checkboxGroup,
    dialog,
    modal,
    pagination,
  ]

  return propsReducer(map)
}

export function navieUi2Components() {
  const map = [
    ['n-avatar', '头像', `<n-avatar
  round
  size="small"
  src="https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg"
/>`],
    ['n-avatar-group', '头像组', '<n-avatar-group :options="options" :size="40" :max="3" />'],
    ['n-badge', '标记', `<n-badge dot type="error">
    <n-avatar />
  </n-badge>`],
    ['n-breadcrumb', '面包屑', `<n-breadcrumb>
  <n-breadcrumb-item>
    <n-icon :component="MdCash" /> 北京总行</n-breadcrumb-item>
  <n-breadcrumb-item>
    <n-icon :component="MdCash" /> 天津分行</n-breadcrumb-item>
  <n-breadcrumb-item>
    <n-icon :component="MdCash" /> 平山道支行</n-breadcrumb-item>
</n-breadcrumb>`],
    ['n-breadcrumb-item', '面包屑', `<n-breadcrumb>
<n-breadcrumb-item>
  <n-icon :component="MdCash" /> 北京总行</n-breadcrumb-item>
<n-breadcrumb-item>
  <n-icon :component="MdCash" /> 天津分行</n-breadcrumb-item>
<n-breadcrumb-item>
  <n-icon :component="MdCash" /> 平山道支行</n-breadcrumb-item>
</n-breadcrumb>`],
    ['n-button', '按钮', '<n-button>Default</n-button>'],
    ['n-button-group', '按钮组', '<n-button-group vertical><n-button>Default</n-button></n-button-group>'],
    ['n-checkbox', '复选框', ` <n-checkbox v-model:checked="value">
  复选框
</n-checkbox>`],
    ['n-checkbox-group', '复选框组', `  <n-checkbox-group v-model:value="cities">
  <n-space item-style="display: flex;">
    <n-checkbox value="Beijing" label="北京" />
    <n-checkbox value="Shanghai" label="上海" />
    <n-checkbox value="Guangzhou" label="广州" />
    <n-checkbox value="Shenzen" label="深圳" />
  </n-space>
</n-checkbox-group>`],
    ['n-dialog', '对话框', `<n-dialog
  title="确认"
  content="你确定"
  negative-text="不确认"
  positive-text="确认"
  @positive-click="handlePositiveClick"
  @negative-click="handleNegativeClick"
/>`],
    ['n-modal', '模态框', `<n-modal
  v-model:show="showModal"
  preset="dialog"
  title="确认"
  content="你确认?"
  positive-text="确认"
  negative-text="算了"
  @positive-click="submitCallback"
  @negative-click="cancelCallback"
/>`],
    ['n-pagination', '分页', '<n-pagination v-model:page="page" :page-count="100" />'],
  ]
  return componentsReducer(map)
}
