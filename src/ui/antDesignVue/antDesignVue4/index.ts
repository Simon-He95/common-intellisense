import { componentsReducer, propsReducer } from '../../utils'
import Affix from './Affix.json'
import Alert from './Alert.json'
import Anchor from './Anchor.json'
import AutoComplete from './AutoComplete.json'
import Avatar from './Avatar.json'
import AvatarGroup from './AvatarGroup.json'
import BackTop from './BackTop.json'
import Badge from './Badge.json'
import BadgeRibbon from './BadgeRibbon.json'
import Breadcrumb from './Breadcrumb.json'
import BreadcrumbItem from './BreadcrumbItem.json'
import BreadcrumbSeparator from './BreadcrumbSeparator.json'
import Button from './Button.json'
import Calendar from './Calendar.json'
import Card from './Card.json'
import CardMeta from './CardMeta.json'
import Carousel from './Carousel.json'
import Cascader from './Cascader.json'
import CheckableTag from './CheckableTag.json'
import Checkbox from './Checkbox.json'
import CheckboxGroup from './CheckboxGroup.json'
import Col from './Col.json'
import Collapse from './Collapse.json'
import CollapsePanel from './CollapsePanel.json'
import Comment from './Comment.json'
import ConfigProvider from './ConfigProvider.json'
import DatePicker from './DatePicker.json'
import Descriptions from './Descriptions.json'
import DescriptionsItem from './DescriptionsItem.json'
import Divider from './Divider.json'
import Drawer from './Drawer.json'
import Dropdown from './Dropdown.json'
import DropdownButton from './DropdownButton.json'
import Empty from './Empty.json'
import FloatButton from './FloatButton.json'
import FloatButtonGroup from './FloatButtonGroup.json'
import Form from './Form.json'
import FormItem from './FormItem.json'
import Image from './Image.json'
import Input from './Input.json'
import InputGroup from './InputGroup.json'
import InputNumber from './InputNumber.json'
import InputPassword from './InputPassword.json'
import InputSearch from './InputSearch.json'
import Layout from './Layout.json'
import LayoutContent from './LayoutContent.json'
import LayoutFooter from './LayoutFooter.json'
import LayoutHeader from './LayoutHeader.json'
import LayoutSider from './LayoutSider.json'
import List from './List.json'
import ListItem from './ListItem.json'
import ListItemMeta from './ListItemMeta.json'
import Mentions from './Mentions.json'
import Menu from './Menu.json'
import Modal from './Modal.json'
import PageHeader from './PageHeader.json'
import Pagination from './Pagination.json'
import Popconfirm from './Popconfirm.json'
import Popover from './Popover.json'
import Progress from './Progress.json'
import Qrcode from './Qrcode.json'
import Radio from './Radio.json'
import RadioButton from './RadioButton.json'
import RadioGroup from './RadioGroup.json'
import RangePicker from './RangePicker.json'
import Rate from './Rate.json'
import Result from './Result.json'
import Row from './Row.json'
import Segmented from './Segmented.json'
import Select from './Select.json'
import SelectOption from './SelectOption.json'
import SelectOptionGroup from './SelectOptionGroup.json'
import Skeleton from './Skeleton.json'
import Slider from './Slider.json'
import Space from './Space.json'
import SpaceCompact from './SpaceCompact.json'
import Spin from './Spin.json'
import Statistic from './Statistic.json'
import StatisticCountdown from './StatisticCountdown.json'
import Steps from './Steps.json'
import Switch from './Switch.json'
import TabPane from './TabPane.json'
import Table from './Table.json'
import TableColumn from './TableColumn.json'
import Tabs from './Tabs.json'
import Tag from './Tag.json'
import Textarea from './Textarea.json'
import TimePicker from './TimePicker.json'
import Timeline from './Timeline.json'
import TimelineItem from './TimelineItem.json'
import Tooltip from './Tooltip.json'
import Tour from './Tour.json'
import Transfer from './Transfer.json'
import Tree from './Tree.json'
import TreeSelect from './TreeSelect.json'
import Typography from './Typography.json'
import TypographyLink from './TypographyLink.json'
import TypographyParagraph from './TypographyParagraph.json'
import TypographyText from './TypographyText.json'
import TypographyTitle from './TypographyTitle.json'
import Upload from './Upload.json'
import Watermark from './Watermark.json'

export function antDesignVue4() {
  const map: any = [
    Affix,
    Alert,
    Anchor,
    AutoComplete,
    Avatar,
    AvatarGroup,
    BackTop,
    Badge,
    BadgeRibbon,
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbSeparator,
    Button,
    Calendar,
    Card,
    CardMeta,
    Carousel,
    Cascader,
    CheckableTag,
    Checkbox,
    CheckboxGroup,
    Col,
    Collapse,
    CollapsePanel,
    Comment,
    ConfigProvider,
    DatePicker,
    Descriptions,
    DescriptionsItem,
    Divider,
    Drawer,
    Dropdown,
    DropdownButton,
    Empty,
    FloatButton,
    FloatButtonGroup,
    Form,
    FormItem,
    Image,
    Input,
    InputGroup,
    InputNumber,
    InputPassword,
    InputSearch,
    Layout,
    LayoutContent,
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
    Qrcode,
    Radio,
    RadioButton,
    RadioGroup,
    RangePicker,
    Rate,
    Result,
    Row,
    Segmented,
    Select,
    SelectOption,
    SelectOptionGroup,
    Skeleton,
    Slider,
    Space,
    SpaceCompact,
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
    Tour,
    Transfer,
    Tree,
    TreeSelect,
    Typography,
    TypographyLink,
    TypographyParagraph,
    TypographyText,
    TypographyTitle,
    Upload,
    Watermark,
  ]

  return propsReducer('ant-design-vue', map)
}

export function antDesignVue4Components() {
  const map = [
    [Affix, Affix.name, '<a-affix></a-affix>'],
    [Alert, Alert.name, '<a-alert></a-alert>'],
    [Anchor, Anchor.name, '<a-anchor></a-anchor>'],
    [AutoComplete, AutoComplete.name, '<a-auto-complete></a-auto-complete>'],
    [Avatar, Avatar.name, '<a-avatar></a-avatar>'],
    [AvatarGroup, AvatarGroup.name, '<a-avatar-group></a-avatar-group>'],
    [BackTop, BackTop.name, '<a-back-top></a-back-top>'],
    [Badge, Badge.name, '<a-badge></a-badge>'],
    [BadgeRibbon, BadgeRibbon.name, '<a-badge-ribbon></a-badge-ribbon>'],
    [Breadcrumb, Breadcrumb.name, '<a-breadcrumb></a-breadcrumb>'],
    [BreadcrumbItem, BreadcrumbItem.name, '<a-breadcrumb-item></a-breadcrumb-item>'],
    [BreadcrumbSeparator, BreadcrumbSeparator.name, '<a-breadcrumb-separator></a-breadcrumb-separator>'],
    [Button, Button.name, '<a-button></a-button>'],
    [Calendar, Calendar.name, '<a-calendar></a-calendar>'],
    [Card, Card.name, '<a-card></a-card>'],
    [CardMeta, CardMeta.name, '<a-card-meta></a-card-meta>'],
    [Carousel, Carousel.name, '<a-carousel></a-carousel>'],
    [Cascader, Cascader.name, '<a-cascader></a-cascader>'],
    [CheckableTag, CheckableTag.name, '<a-checkable-tag></a-checkable-tag>'],
    [Checkbox, Checkbox.name, '<a-checkbox></a-checkbox>'],
    [CheckboxGroup, CheckboxGroup.name, '<a-checkbox-group></a-checkbox-group>'],
    [Col, Col.name, '<a-col></a-col>'],
    [Collapse, Collapse.name, '<a-collapse></a-collapse>'],
    [CollapsePanel, CollapsePanel.name, '<a-collapse-panel></a-collapse-panel>'],
    [Comment, Comment.name, '<a-comment></a-comment>'],
    [ConfigProvider, ConfigProvider.name, '<a-config-provider></a-config-provider>'],
    [DatePicker, DatePicker.name, '<a-date-picker></a-date-picker>'],
    [Descriptions, Descriptions.name, '<a-descriptions></a-descriptions>'],
    [DescriptionsItem, DescriptionsItem.name, '<a-descriptions-item></a-descriptions-item>'],
    [Divider, Divider.name, '<a-divider></a-divider>'],
    [Drawer, Drawer.name, '<a-drawer></a-drawer>'],
    [Dropdown, Dropdown.name, '<a-dropdown></a-dropdown>'],
    [DropdownButton, DropdownButton.name, '<a-dropdown-button></a-dropdown-button>'],
    [Empty, Empty.name, '<a-empty></a-empty>'],
    [FloatButton, FloatButton.name, '<a-float-button></a-float-button>'],
    [FloatButtonGroup, FloatButtonGroup.name, '<a-float-button-group></a-float-button-group>'],
    [Form, Form.name, '<a-form></a-form>'],
    [FormItem, FormItem.name, '<a-form-item></a-form-item>'],
    [Image, Image.name, '<a-image></a-image>'],
    [Input, Input.name, '<a-input></a-input>'],
    [InputGroup, InputGroup.name, '<a-input-group></a-input-group>'],
    [InputNumber, InputNumber.name, '<a-input-number></a-input-number>'],
    [InputPassword, InputPassword.name, '<a-input-password></a-input-password>'],
    [InputSearch, InputSearch.name, '<a-input-search></a-input-search>'],
    [Layout, Layout.name, '<a-layout></a-layout>'],
    [LayoutContent, LayoutContent.name, '<a-layout-content></a-layout-content>'],
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
    [Qrcode, Qrcode.name, '<a-qrcode></a-qrcode>'],
    [Radio, Radio.name, '<a-radio></a-radio>'],
    [RadioButton, RadioButton.name, '<a-radio-button></a-radio-button>'],
    [RadioGroup, RadioGroup.name, '<a-radio-group></a-radio-group>'],
    [RangePicker, RangePicker.name, '<a-range-picker></a-range-picker>'],
    [Rate, Rate.name, '<a-rate></a-rate>'],
    [Result, Result.name, '<a-result></a-result>'],
    [Row, Row.name, '<a-row></a-row>'],
    [Segmented, Segmented.name, '<a-segmented></a-segmented>'],
    [Select, Select.name, '<a-select></a-select>'],
    [SelectOption, SelectOption.name, '<a-select-option></a-select-option>'],
    [SelectOptionGroup, SelectOptionGroup.name, '<a-select-option-group></a-select-option-group>'],
    [Skeleton, Skeleton.name, '<a-skeleton></a-skeleton>'],
    [Slider, Slider.name, '<a-slider></a-slider>'],
    [Space, Space.name, '<a-space></a-space>'],
    [SpaceCompact, SpaceCompact.name, '<a-space-compact></a-space-compact>'],
    [Spin, Spin.name, '<a-spin></a-spin>'],
    [Statistic, Statistic.name, '<a-statistic></a-statistic>'],
    [StatisticCountdown, StatisticCountdown.name, '<a-statistic-countdown></a-statistic-countdown>'],
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
    [Tour, Tour.name, '<a-tour></a-tour>'],
    [Transfer, Transfer.name, '<a-transfer></a-transfer>'],
    [Tree, Tree.name, '<a-tree></a-tree>'],
    [TreeSelect, TreeSelect.name, '<a-tree-select></a-tree-select>'],
    [Typography, Typography.name, '<a-typography></a-typography>'],
    [TypographyLink, TypographyLink.name, '<a-typography-link></a-typography-link>'],
    [TypographyParagraph, TypographyParagraph.name, '<a-typography-paragraph></a-typography-paragraph>'],
    [TypographyText, TypographyText.name, '<a-typography-text></a-typography-text>'],
    [TypographyTitle, TypographyTitle.name, '<a-typography-title></a-typography-title>'],
    [Upload, Upload.name, '<a-upload></a-upload>'],
    [Watermark, Watermark.name, '<a-watermark></a-watermark>'],
  ]
  return componentsReducer(map, true, 'a')
}
