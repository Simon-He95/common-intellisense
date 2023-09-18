import { componentsReducer, propsReducer } from '../../utils'
import anchor from './anchor.json'
import popconfirm from './popconfirm.json'
import step from './step.json'
import steps from './steps.json'
import timePicker from './timePicker.json'
import button from './button.json'
import buttonGroup from './buttonGroup.json'
import avatar from './avatar.json'
import avatarGroup from './avatarGroup.json'
import badge from './badge.json'
import breadcrumb from './breadcrumb.json'
import breadcrumbItem from './breadcrumbItem.json'
import carousel from './carousel.json'
import cascader from './cascader.json'
import countdown from './countdown.json'
import checkbox from './checkbox.json'
import checkboxGroup from './checkboxGroup.json'
import dialog from './dialog.json'
import datePicker from './datePicker.json'
import modal from './modal.json'
import mention from './mention.json'
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
import image from './image.json'
import input from './input.json'
import inputNumber from './inputNumber.json'
import layout from './layout.json'
import layoutSider from './layoutSider.json'
import layoutContent from './layoutContent.json'
import layoutHeader from './layoutHeader.json'
import layoutFooter from './layoutFooter.json'
import loadingBarProvider from './loadingBarProvider.json'
import log from './log.json'
import menu from './menu.json'
import messageProvider from './messageProvider.json'
import notificationProvider from './notificationProvider.json'
import numberAnimation from './numberAnimation.json'
import rate from './rate.json'
import result from './result.json'
import scrollbar from './scrollbar.json'
import skeleton from './skeleton.json'
import slider from './slider.json'
import space from './space.json'
import spin from './spin.json'
import statistic from './statistic.json'
import tag from './tag.json'
import thing from './thing.json'
import time from './time.json'
import timeline from './timeline.json'
import timelineItem from './timelineItem.json'
import transfer from './transfer.json'
import tree from './tree.json'
import treeSelect from './treeSelect.json'
import text from './text.json'
import h1 from './h1.json'
import h2 from './h2.json'
import h3 from './h3.json'
import h4 from './h4.json'
import h5 from './h5.json'
import h6 from './h6.json'
import o1 from './o1.json'
import u1 from './u1.json'
import watermark from './watermark.json'
import dropdown from './dropdown.json'
import imageGroup from './imageGroup.json'
import popselect from './popselect.json'

export function naiveUi2() {
  const map: any = [
    anchor,
    timePicker,
    popconfirm,
    step,
    steps,
    avatar,
    avatarGroup,
    badge,
    breadcrumb,
    breadcrumbItem,
    imageGroup,
    popselect,
    button,
    buttonGroup,
    carousel,
    cascader,
    countdown,
    checkbox,
    checkboxGroup,
    dialog,
    modal,
    mention,
    numberAnimation,
    pagination,
    popover,
    radio,
    radioGroup,
    radioButton,
    select,
    nswitch,
    table,
    dataTable,
    datePicker,
    form,
    formItem,
    formItemGi,
    tabs,
    tab,
    tabPane,
    upload,
    autoComplete,
    image,
    input,
    inputNumber,
    dropdown,
    layout,
    layoutSider,
    layoutContent,
    layoutHeader,
    layoutFooter,
    loadingBarProvider,
    log,
    menu,
    messageProvider,
    notificationProvider,
    rate,
    result,
    scrollbar,
    skeleton,
    slider,
    space,
    spin,
    statistic,
    tag,
    thing,
    time,
    timeline,
    timelineItem,
    transfer,
    tree,
    treeSelect,
    text,
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    o1,
    u1,
    watermark,
  ]

  return propsReducer(map)
}

export function naiveUi2Components() {
  const map = [
    ['n-anchor', '侧边导航', '<n-anchor :show-rail="showRail" :show-background="showBackground"></n-anchor>'],
    ['n-popconfirm', '弹出确认', '<n-popconfirm></n-popconfirm>'],
    ['n-timePicker', '时间选择器', '<n-timePicker></n-timePicker>'],
    ['n-step', '步骤', '<n-step></n-step>'],
    ['n-step', '步骤', '<n-steps></n-steps>'],
    ['n-anchor-link', '侧边导航', '<n-anchor-link title="演示" href="#演示"></n-anchor-link>'],
    ['n-countdown', '倒计时', '<n-countdown :duration="5000" :active="active" />'],
    ['n-image-group', '照片组', '<n-image-group />'],
    ['n-popselect', '弹出选择', `<n-popselect v-model:value="value" :options="options" trigger="click">
  <n-button>{{ value || '弹出选择' }}</n-button>
</n-popselect>`],
    ['n-dropdown', '下拉菜单', `<n-dropdown trigger="hover" :options="options" @select="handleSelect">
  <n-button>找个地方休息</n-button>
</n-dropdown>`],
    ['n-number-animation', '数值动画', '<n-number-animation ref="numberAnimationInstRef" :from="0" :to="12039" />'],
    ['n-mention', '提及', '<n-mention :options="options" default-value="@" />'],
    ['n-carousel', '轮播图', '<n-carousel></n-carousel>'],
    ['n-log', '日志', `<n-log
  :log="log"
  :loading="loading"
  trim
  @require-more="handleRequireMore"
  @reach-top="handleReachTop"
  @reach-bottom="handleReachBottom"
/>`],
    ['n-date-picker', '日期选择器', '<n-date-picker v-model:value="timestamp" type="date" />'],
    ['n-cascader', '级联选择', `<n-cascader
  v-model:value="value"
  placeholder="没啥用的值"
  :expand-trigger="hoverTrigger ? 'hover' : 'click'"
  :options="options"
  :check-strategy="checkStrategyIsChild ? 'child' : 'all'"
  :show-path="showPath"
  :filterable="filterable"
  @update:value="handleUpdateValue"
/>`],
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
    ['n-image', '图像', `<n-image
  width="100"
  src="https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg"
/>`],
    ['n-input', '文本输入', '<n-input v-model:value="value" type="text" placeholder="基本的 Input" />'],
    ['n-input-number', '数字输入', '<n-input-number v-model:value="value" clearable />'],
    ['n-layout', '布局', '<n-layout></n-layout>'],
    ['n-layout-sider', '布局', '<n-layout-sider content-style="padding: 24px;">海淀桥</n-layout-sider>'],
    ['n-layout-header', '布局', '<n-layout-header content-style="padding: 24px;">海淀桥</n-layout-header>'],
    ['n-layout-content', '布局', '<n-layout-content content-style="padding: 24px;">海淀桥</n-layout-content>'],
    ['n-layout-footer', '布局', '<n-layout-footer content-style="padding: 24px;">海淀桥</n-layout-footer>'],
    ['n-loading-bar-provider', '加载条', `<n-loading-bar-provider>
  <content />
</n-loading-bar-provider>`],
    ['n-menu', '菜单', '<n-menu v-model:value="activeKey" mode="horizontal" :options="menuOptions" />'],
    ['n-message-provider', '信息', `<n-message-provider>
  <content />
</n-message-provider>`],
    ['n-notification-provider', '通知', `<n-notification-provider>
  <content />
</n-notification-provider>`],
    ['n-rate', '评分', '<n-rate />'],
    ['n-result', '结果页', `<n-result status="404" title="404 资源不存在" description="生活总归带点荒谬">
  <template #footer>
    <n-button>找点乐子吧</n-button>
  </template>
</n-result>`],
    ['n-scrollbar', '滚动条', '<n-scrollbar style="max-height: 120px"></n-scrollbar>'],
    ['n-skeleton', '骨架屏', '<n-skeleton text :repeat="2" /> <n-skeleton text style="width: 60%" />'],
    ['n-slider', '滑动选择', '<n-slider v-model:value="value" :step="10" />'],
    ['n-space', '间距', `<n-space>
  <n-button>Oops!</n-button>
  <n-button>Oops!</n-button>
  <n-button>Oops!</n-button>
  <n-button>Long! Long! Cross the line!</n-button>
</n-space>`],
    ['n-spin', '加载', '<n-spin size="small" />'],
    ['n-statistic', '统计数据', '<n-statistic label="统计数据" :value="99"></n-statistic'],
    ['n-steps', '步骤', `<n-steps
  size="small"
  :current="(current as number)"
  :status="currentStatus"
></n-steps>`],
    ['n-step', '步骤', `<n-step
  title="Come Together"
  description="Here come old flat top He come grooving up slowly"
/>`],
    ['n-tag', '标签', '<n-tag> 爱在西元前 </n-tag>'],
    ['n-thing', '东西', '<n-thing></n-thing>'],
    ['n-time', '时间', '<n-time :time="0" />'],
    ['n-timeline', '时间线', '<n-timeline></n-timeline>'],
    ['n-timeline-item', '时间线', '<n-timeline-item content="啊" />'],
    ['n-transfer', '穿梭框', '<n-transfer ref="transfer" v-model:value="value" :options="options" />'],
    ['n-tree', '树', `<n-tree
    block-line
    :data="data"
    :default-expanded-keys="defaultExpandedKeys"
    checkable
    expand-on-click
    selectable
  />`],
    ['n-treeSelect', '树型选择', `<n-tree-select
  :options="options"
  default-value="Drive My Car"
  @update:value="handleUpdateValue"
/>`],
    ['n-text', '排印', `<n-text type="primary">
  sin(x)
</n-text>`],
    ['n-h1', '排印', '<n-h1></n-h1>'],
    ['n-h2', '排印', '<n-h2></n-h2>'],
    ['n-h3', '排印', '<n-h3></n-h3>'],
    ['n-h4', '排印', '<n-h4></n-h4>'],
    ['n-h5', '排印', '<n-h5></n-h5>'],
    ['n-h6', '排印', '<n-h6></n-h6>'],
    ['n-u1', '排印', '<n-u1></n-u1>'],
    ['n-o1', '排印', '<n-o1></n-o1>'],
    ['n-watermark', '水印', `<n-watermark
  content="核心机密"
  cross
  selectable
  :font-size="16"
  :line-height="16"
  :width="192"
  :height="128"
  :x-offset="12"
  :y-offset="28"
  :rotate="-15"
>`],
  ]
  return componentsReducer(map)
}
