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
import breadcrumbs from './breadcrumbs.json'
import breadcrumb from './breadcrumb.json'
import card from './card.json'
import cell from './cell.json'
import chip from './chip.json'
import col from './col.json'
import row from './row.json'
import collapse from './collapse.json'
import collapseItem from './collapseItem.json'
import countdown from './countdown.json'

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
    ['var-breadcrumbs', '面包屑', '<var-breadcrumbs></var-breadcrumbs>'],
    ['var-breadcrumb', '面包屑', '<var-breadcrumb></var-breadcrumb>'],
    ['var-card', '卡片', `<var-card
  title="本草纲目"
  description="如果华佗再世,崇洋都被医治,外邦来学汉字,激发我民族意识。马钱子、决明子、苍耳子，还有莲子；黄药子、苦豆子、川楝子，我要面子。用我的方式，改写一部历史。没什么别的事，跟着我念几个字。山药当归枸杞 GO，山药 当归 枸杞 GO，看我抓一把中药，服下一帖骄傲~"
/>`],
    ['var-cell', '单元格', '<var-cell>这是单元格</var-cell>'],
    ['var-chip', '纸片', '<var-chip>默认纸片</var-chip>'],
    ['var-col', '布局 提供 span 属性设置这一列所占的份数，offset 属性设置这一列偏移的份数。', '<var-col :span="8">span: 8</var-col>'],
    ['var-row', '布局 组件把一行平均划分为 24列 栅格( 24份 )', '<var-row></van-row>'],
    ['var-collapse', '折叠面板 可以折叠/展开的内容区域。', '<var-collapse v-model="value" @change="changeHandle"></van-row>'],
    ['var-collapse', '折叠面板 可以折叠/展开的内容区域。', '<var-collapse-item title="标题" name="1">文本</var-collapse-item>'],
    ['var-countdown', '倒计时 用于实时展示倒计时数值，支持毫秒精度。', '<var-countdown :time="time" />'],
  ]
  return componentsReducer(map)
}
