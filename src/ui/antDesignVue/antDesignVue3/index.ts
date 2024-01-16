import { componentsReducer, propsReducer } from '../../utils'
import Affix from './affix.json'
import Alert from './alert.json'
import Anchor from './anchor.json'
import AutoComplete from './autoComplete.json'
import Avatar from './avatar.json'
import AvatarGroup from './avatarGroup.json'
import BackTop from './backTop.json'
import Badge from './badge.json'
import Breadcrumb from './breadcrumb.json'
import BreadcrumbItem from './breadcrumbItem.json'
import Button from './button.json'
import Calendar from './calendar.json'
import Card from './card.json'
import CardMeta from './cardMeta.json'
import Carousel from './carousel.json'
import Cascader from './cascader.json'
import Checkbox from './checkbox.json'
import CheckboxGroup from './checkboxGroup.json'
import Col from './col.json'
import Collapse from './collapse.json'
import CollapsePanel from './collapsePanel.json'
import Comment from './comment.json'
import DatePicker from './datePicker.json'
import Descriptions from './descriptions.json'
import DescriptionsItem from './descriptionsItem.json'
import Divider from './divider.json'
import Drawer from './drawer.json'
import Dropdown from './dropdown.json'
import DropdownButton from './dropdownButton.json'
import Empty from './empty.json'
import Form from './form.json'
import FormItem from './formItem.json'
import Input from './input.json'
import InputGroup from './inputGroup.json'
import InputNumber from './inputNumber.json'
import InputPassword from './inputPassword.json'
import InputSearch from './inputSearch.json'
import Layout from './layout.json'
import LayoutFooter from './layoutFooter.json'
import LayoutHeader from './layoutHeader.json'
import LayoutSider from './layoutSider.json'
import List from './list.json'
import ListItem from './listItem.json'
import ListItemMeta from './listItemMeta.json'
import Mentions from './mentions.json'
import Menu from './menu.json'
import Modal from './modal.json'
import PageHeader from './pageHeader.json'
import Pagination from './pagination.json'
import Popconfirm from './popconfirm.json'
import Popover from './popover.json'
import Progress from './progress.json'
import Radio from './radio.json'
import RadioButton from './radioButton.json'
import RadioGroup from './radioGroup.json'
import RangePicker from './rangePicker.json'
import Rate from './rate.json'
import Result from './result.json'
import Row from './row.json'
import Select from './select.json'
import SelectOption from './selectOption.json'
import SelectOptionGroup from './selectOptionGroup.json'
import Skeleton from './skeleton.json'
import Slider from './slider.json'
import Space from './space.json'
import Spin from './spin.json'
import Statistic from './statistic.json'
import StatisticCountdown from './statisticCountdown.json'
import Steps from './steps.json'
import Switch from './switch.json'
import TabPane from './tabPane.json'
import Table from './table.json'
import TableColumn from './tableColumn.json'
import Tabs from './tabs.json'
import Tag from './tag.json'
import Textarea from './textarea.json'
import TimePicker from './timePicker.json'
import Timeline from './timeline.json'
import TimelineItem from './timelineItem.json'
import Tooltip from './tooltip.json'
import Transfer from './transfer.json'
import Tree from './tree.json'
import TreeSelect from './treeSelect.json'
import TypographyParagraph from './typographyParagraph.json'
import TypographyText from './typographyText.json'
import TypographyTitle from './typographyTitle.json'
import Upload from './upload.json'

export function antDesignVue3() {
  const map: any = [
    Affix,
    Alert,
    Anchor,
    AutoComplete,
    Avatar,
    AvatarGroup,
    BackTop,
    Badge,
    Breadcrumb,
    BreadcrumbItem,
    Button,
    Calendar,
    Card,
    CardMeta,
    Carousel,
    Cascader,
    Checkbox,
    CheckboxGroup,
    Col,
    Collapse,
    CollapsePanel,
    Comment,
    DatePicker,
    Descriptions,
    DescriptionsItem,
    Divider,
    Drawer,
    Dropdown,
    DropdownButton,
    Empty,
    Form,
    FormItem,
    Input,
    InputGroup,
    InputNumber,
    InputPassword,
    InputSearch,
    Layout,
    LayoutFooter,
    LayoutHeader,
    LayoutSider,
    List,
    ListItem,
    ListItemMeta,
    Mentions,
    Menu,
    Modal,
    PageHeader,
    Pagination,
    Popconfirm,
    Popover,
    Progress,
    Radio,
    RadioButton,
    RadioGroup,
    RangePicker,
    Rate,
    Result,
    Row,
    Select,
    SelectOption,
    SelectOptionGroup,
    Skeleton,
    Slider,
    Space,
    Spin,
    Statistic,
    StatisticCountdown,
    Steps,
    Switch,
    TabPane,
    Table,
    TableColumn,
    Tabs,
    Tag,
    Textarea,
    TimePicker,
    Timeline,
    TimelineItem,
    Tooltip,
    Transfer,
    Tree,
    TreeSelect,
    TypographyParagraph,
    TypographyText,
    TypographyTitle,
    Upload,
  ]

  return propsReducer('ant-design-vue3', map)
}

export function antDesignVue3Components() {
  const map = [
    [Affix, Affix.name, '<a-affix></a-affix>'],
    [Alert, Alert.name, '<a-alert></a-alert>'],
    [Anchor, Anchor.name, '<a-anchor></a-anchor>'],
    [AutoComplete, AutoComplete.name, '<a-auto-complete></a-auto-complete>'],
    [Avatar, Avatar.name, '<a-avatar></a-avatar>'],
    [AvatarGroup, AvatarGroup.name, '<a-avatar-group></a-avatar-group>'],
    [BackTop, BackTop.name, '<a-back-top></a-back-top>'],
    [Badge, Badge.name, '<a-badge></a-badge>'],
    [Breadcrumb, Breadcrumb.name, '<a-breadcrumb></a-breadcrumb>'],
    [
      BreadcrumbItem,
      BreadcrumbItem.name,
      '<a-breadcrumb-item></a-breadcrumb-item>',
    ],
    [Button, Button.name, '<a-button></a-button>'],
    [Calendar, Calendar.name, '<a-calendar></a-calendar>'],
    [Card, Card.name, '<a-card></a-card>'],
    [CardMeta, CardMeta.name, '<a-card-meta></a-card-meta>'],
    [Carousel, Carousel.name, '<a-carousel></a-carousel>'],
    [Cascader, Cascader.name, '<a-cascader></a-cascader>'],
    [Checkbox, Checkbox.name, '<a-checkbox></a-checkbox>'],
    [
      CheckboxGroup,
      CheckboxGroup.name,
      '<a-checkbox-group></a-checkbox-group>',
    ],
    [Col, Col.name, '<a-col></a-col>'],
    [Collapse, Collapse.name, '<a-collapse></a-collapse>'],
    [
      CollapsePanel,
      CollapsePanel.name,
      '<a-collapse-panel></a-collapse-panel>',
    ],
    [Comment, Comment.name, '<a-comment></a-comment>'],
    [DatePicker, DatePicker.name, '<a-date-picker></a-date-picker>'],
    [Descriptions, Descriptions.name, '<a-descriptions></a-descriptions>'],
    [
      DescriptionsItem,
      DescriptionsItem.name,
      '<a-descriptions-item></a-descriptions-item>',
    ],
    [Divider, Divider.name, '<a-divider></a-divider>'],
    [Drawer, Drawer.name, '<a-drawer></a-drawer>'],
    [Dropdown, Dropdown.name, '<a-dropdown></a-dropdown>'],
    [
      DropdownButton,
      DropdownButton.name,
      '<a-dropdown-button></a-dropdown-button>',
    ],
    [Empty, Empty.name, '<a-empty></a-empty>'],
    [Form, Form.name, '<a-form></a-form>'],
    [FormItem, FormItem.name, '<a-form-item></a-form-item>'],
    [Input, Input.name, '<a-input></a-input>'],
    [InputGroup, InputGroup.name, '<a-input-group></a-input-group>'],
    [InputNumber, InputNumber.name, '<a-input-number></a-input-number>'],
    [
      InputPassword,
      InputPassword.name,
      '<a-input-password></a-input-password>',
    ],
    [InputSearch, InputSearch.name, '<a-input-search></a-input-search>'],
    [Layout, Layout.name, '<a-layout></a-layout>'],
    [LayoutFooter, LayoutFooter.name, '<a-layout-footer></a-layout-footer>'],
    [LayoutHeader, LayoutHeader.name, '<a-layout-header></a-layout-header>'],
    [LayoutSider, LayoutSider.name, '<a-layout-sider></a-layout-sider>'],
    [List, List.name, '<a-list></a-list>'],
    [ListItem, ListItem.name, '<a-list-item></a-list-item>'],
    [ListItemMeta, ListItemMeta.name, '<a-list-item-meta></a-list-item-meta>'],
    [Mentions, Mentions.name, '<a-mentions></a-mentions>'],
    [Menu, Menu.name, '<a-menu></a-menu>'],
    [Modal, Modal.name, '<a-modal></a-modal>'],
    [PageHeader, PageHeader.name, '<a-page-header></a-page-header>'],
    [Pagination, Pagination.name, '<a-pagination></a-pagination>'],
    [Popconfirm, Popconfirm.name, '<a-popconfirm></a-popconfirm>'],
    [Popover, Popover.name, '<a-popover></a-popover>'],
    [Progress, Progress.name, '<a-progress></a-progress>'],
    [Radio, Radio.name, '<a-radio></a-radio>'],
    [RadioButton, RadioButton.name, '<a-radio-button></a-radio-button>'],
    [RadioGroup, RadioGroup.name, '<a-radio-group></a-radio-group>'],
    [RangePicker, RangePicker.name, '<a-range-picker></a-range-picker>'],
    [Rate, Rate.name, '<a-rate></a-rate>'],
    [Result, Result.name, '<a-result></a-result>'],
    [Row, Row.name, '<a-row></a-row>'],
    [Select, Select.name, '<a-select></a-select>'],
    [SelectOption, SelectOption.name, '<a-select-option></a-select-option>'],
    [
      SelectOptionGroup,
      SelectOptionGroup.name,
      '<a-select-option-group></a-select-option-group>',
    ],
    [Skeleton, Skeleton.name, '<a-skeleton></a-skeleton>'],
    [Slider, Slider.name, '<a-slider></a-slider>'],
    [Space, Space.name, '<a-space></a-space>'],
    [Spin, Spin.name, '<a-spin></a-spin>'],
    [Statistic, Statistic.name, '<a-statistic></a-statistic>'],
    [
      StatisticCountdown,
      StatisticCountdown.name,
      '<a-statistic-countdown></a-statistic-countdown>',
    ],
    [Steps, Steps.name, '<a-steps></a-steps>'],
    [Switch, Switch.name, '<a-switch></a-switch>'],
    [TabPane, TabPane.name, '<a-tab-pane></a-tab-pane>'],
    [Table, Table.name, '<a-table></a-table>'],
    [TableColumn, TableColumn.name, '<a-table-column></a-table-column>'],
    [Tabs, Tabs.name, '<a-tabs></a-tabs>'],
    [Tag, Tag.name, '<a-tag></a-tag>'],
    [Textarea, Textarea.name, '<a-textarea></a-textarea>'],
    [TimePicker, TimePicker.name, '<a-time-picker></a-time-picker>'],
    [Timeline, Timeline.name, '<a-timeline></a-timeline>'],
    [TimelineItem, TimelineItem.name, '<a-timeline-item></a-timeline-item>'],
    [Tooltip, Tooltip.name, '<a-tooltip></a-tooltip>'],
    [Transfer, Transfer.name, '<a-transfer></a-transfer>'],
    [Tree, Tree.name, '<a-tree></a-tree>'],
    [TreeSelect, TreeSelect.name, '<a-tree-select></a-tree-select>'],
    [
      TypographyParagraph,
      TypographyParagraph.name,
      '<a-typography-paragraph></a-typography-paragraph>',
    ],
    [
      TypographyText,
      TypographyText.name,
      '<a-typography-text></a-typography-text>',
    ],
    [
      TypographyTitle,
      TypographyTitle.name,
      '<a-typography-title></a-typography-title>',
    ],
    [Upload, Upload.name, '<a-upload></a-upload>'],
  ]
  return componentsReducer(map, true, 'a', 'ant-design-vue3')
}
