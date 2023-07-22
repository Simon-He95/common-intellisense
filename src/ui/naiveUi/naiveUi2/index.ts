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
import popover from './popover.json'
import radio from './radio.json'
import radioButton from './radioButton.json'
import radioGroup from './radioGroup.json'
import select from './select.json'
import nswitch from './switch.json'
import table from './table.json'
import dataTable from './dataTable.json'
import form from './form.json'
import formItem from './formItem.json'
import formItemGi from './formItemGi.json'
import tabs from './tabs.json'
import tab from './tab.json'
import tabPane from './tabPane.json'
import upload from './upload.json'
import autoComplete from './autoComplete.json'

export function naiveUi2() {
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
    popover,
    radio,
    radioGroup,
    radioButton,
    select,
    nswitch,
    table,
    dataTable,
    form,
    formItem,
    formItemGi,
    tabs,
    tab,
    tabPane,
    upload,
    autoComplete,
  ]

  return propsReducer(map)
}

export function naiveUi2Components() {
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
    ['n-popover', '弹出信息', `<n-popover trigger="hover">
  <template #trigger>
    <n-button>悬浮</n-button>
  </template>
  <span>或许不想知道你的花园长得咋样</span>
</n-popover>`],
    ['n-radio', '单选', `<n-radio
  :checked="checkedValue === 'Definitely Maybe'"
  value="Definitely Maybe"
  name="basic-demo"
  @change="handleChange"
  >
  Definitely Maybe
</n-radio>`],
    ['n-radio-button', '单选', `<n-radio-button
:checked="checkedValue === 'Definitely Maybe'"
value="Definitely Maybe"
name="basic-demo"
@change="handleChange"
>
Definitely Maybe
</n-radio-button>`],
    ['n-radio-group', '单选组', `  <n-radio-group v-model:value="value" name="radiogroup">
  <n-space>
    <n-radio v-for="song in songs" :key="song.value" :value="song.value">
      {{ song.label }}
    </n-radio>
  </n-space>
</n-radio-group>`],
    ['n-select', '选择器', '<n-select v-model:value="value" :options="options" />'],
    ['n-switch', '开关', '<n-switch v-model:value="active" />'],
    ['n-table', '开关', `<n-table>
  <thead>
    <tr>
      <th>Abandon</th>
      <th>Abnormal</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>...</td>
      <td>...</td>
    </tr>
  </tbody>
</n-table>`],
    ['n-data-table', '数据表格', `<n-data-table
  :columns="columns"
  :data="data"
  :pagination="pagination"
  :bordered="false"
/>`],
    ['n-form', '表单', `<n-form
  ref="formRef"
  inline
  :label-width="80"
  :model="formValue"
  :rules="rules"
  :size="size"
></n-form>`],
    ['n-form-item', '表单', ` <n-form-item label="姓名" path="user.name">
    <n-input v-model:value="formValue.user.name" placeholder="输入姓名" />
  </n-form-item>`],
    ['n-form-item-gi', '表单', `<n-form-item-gi :span="12" label="Input" path="inputValue">
  <n-input v-model:value="model.inputValue" placeholder="Input" />
</n-form-item-gi>`],
    ['n-tabs', '标签页', `<n-tabs
  v-model:value="name"
  type="card"
  closable
  tab-style="min-width: 80px;"
  @close="handleClose"
>
  <n-tab-pane
    v-for="panel in panels"
    :key="panel"
    :tab="panel.toString()"
    :name="panel"
  >
    {{ panel }}
  </n-tab-pane>
</n-tabs>`],
    ['n-tab', '标签页'],
    ['n-tabPane', '标签页'],
    ['n-upload', '上传', `<n-upload
  action="https://www.mocky.io/v2/5e4bafc63100007100d8b70f"
  :headers="{
    'naive-info': 'hello!'
  }"
  :data="{
    'naive-data': 'cool! naive!'
  }"
>
  <n-button>上传文件</n-button>
</n-upload>`],
    ['n-auto-complete', '自动填充', `<n-auto-complete
  v-model:value="value"
  :input-props="{
    autocomplete: 'disabled'
  }"
  :options="options"
  placeholder="邮箱"
/>`],
  ]
  return componentsReducer(map)
}
