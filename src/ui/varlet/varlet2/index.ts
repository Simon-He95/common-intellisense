import { componentsReducer, propsReducer } from '../../utils'
import button from './button.json'
import vswitch from './switch.json'
import buttonGroup from './buttonGroup.json'
import checkbox from './checkbox.json'
import checkboxGroup from './checkboxGroup.json'
import form from './form.json'
import pagination from './pagination.json'
import tab from './tab.json'
import tabItem from './tabItem.json'
import tabs from './tabs.json'
import table from './table.json'

export function varlet2() {
  const map: any = [
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
  ]

  return propsReducer(map)
}

export function varlet2Components() {
  const map = [
    ['var-button', '按钮', '<var-button>默认按钮</var-button>'],
    ['var-switch', '开关', '<var-switch v-model="value" />'],
    ['var-button-group', '按钮组', `<var-button-group type="primary" mode="text">
  <var-button>按钮</var-button>
  <var-button>按钮</var-button>
  <var-button>按钮</var-button>
</var-button-group>`],
    ['var-checkbox', '复选框', '<var-checkbox v-model="value">当前的值: {{ value }}</var-checkbox>'],
    ['var-checkbox-group', '复选框组', `<var-checkbox-group
  v-model="value"
  :rules="[v => v.length === 2 || '请全选']"
>
  <var-checkbox :checked-value="0">吃饭</var-checkbox>
  <var-checkbox :checked-value="1">睡觉</var-checkbox>
</var-checkbox-group>`],
    ['var-form', '表单', `<var-form 
    ref="form" 
    :disabled="disabled"
    :readonly="readonly" 
    scroll-to-error="start"
  ></var-form>`],
    ['var-pagination', '分页', '<var-pagination :current="3" :total="120" />'],
    ['var-tabs', '选项卡组', `<var-tabs
  elevation
  color="var(--color-primary)"
  active-color="#fff"
  inactive-color="hsla(0, 0%, 100%, .6)"
  disabled-color="#aaa"
  v-model:active="active"
>
  <var-tab>选项1</var-tab>
  <var-tab>选项2</var-tab>
  <var-tab disabled>禁用选项</var-tab>
</var-tabs>`],
    ['var-tab', '选项卡', '<var-tab>选项1</var-tab>'],
    ['var-tab-item', '选项卡', '<var-tab-item>选项1</var-tab-item>'],
    ['var-table', '表格', '<var-table>选项1</var-table>'],
  ]
  return componentsReducer(map)
}
