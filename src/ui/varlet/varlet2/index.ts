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
import counter from './counter.json'
import datePicker from './datePicker.json'
import divider from './divider.json'
import drag from './drag.json'
import ellipsis from './ellipsis.json'
import fab from './fab.json'
import formDetails from './formDetails.json'
import imagePreview from './imagePreview.json'
import indexBar from './indexBar.json'
import indexAnchor from './indexAnchor.json'
import input from './input.json'

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
    ['var-counter', '计数器', '<var-counter v-model="value"/>'],
    ['var-date-picker', '日期选择器 用于选择日期或日期范围。', '<var-date-picker v-model="date" />'],
    ['var-divider', '分割线 用于分隔列表或布局的各个部分。', '<var-divider />'],
    ['var-drag', '拖拽 使元素可以自由拖拽。', `<var-drag>
  <var-button type="primary">基本使用</var-button>
</var-drag>`],
    ['var-ellipsis', '文本省略 主要用于省略单行文字和多行文字。', `<var-ellipsis style="max-width: 170px">
  其实没有什么事情是不可能的，我都拿到世界冠军了，真的没有什么事情是不可能的。
</var-ellipsis>`],
    ['var-fab', '悬浮动作按钮 悬浮动作按钮组件，按下可显示一组动作按钮。', '<var-fab :type="type" />'],
    ['var-form-details', '表单 提供了对所有表单组件进行控制的能力。', '<var-form-details :error-message="errorMessage" :extra-message="extraMessage" />'],
    ['var-image-preview', '图片预览 图片放大预览，支持双击倍数放大，支持函数调用和组件调用两种方式。', '<var-image-preview :images="images" v-model:show="show" />'],
    ['var-index-bar', '索引栏 用于跳转到页面指定位置。', '<var-index-bar duration="300" @change="change"></var-index-bar>'],
    ['var-index-anchor', '索引栏 用于跳转到页面指定位置。', `<var-index-anchor :index="item" class="anchor">
  标题 {{ item }}
</var-index-anchor>`],
    ['var-input', '输入框 输入框的行为和基本原生一致，用户输入时始终获得一个符合 type 规则的字符串，可选择 standard 和 outlined 两种风格，默认为 standard。', '<var-input placeholder="请输入文本" v-model="value" />'],

  ]
  return componentsReducer(map)
}
