import { componentsReducer, propsReducer } from '../../utils'
// import Affix from './affix.json'
// import Alert from './alert.json'
// import Anchor from './anchor.json'
// import AutoComplete from './autoComplete.json'
// import Avatar from './avatar.json'
// import AvatarGroup from './avatarGroup.json'
// import BackTop from './backTop.json'
// import Badge from './badge.json'
// import BadgeRibbon from './badgeRibbon.json'
// import Breadcrumb from './breadcrumb.json'
// import BreadcrumbItem from './breadcrumbItem.json'
// import BreadcrumbSeparator from './breadcrumbSeparator.json'
import Button from './button.json'
import ButtonGroup from './buttonGroup.json'
// import Calendar from './calendar.json'
// import Card from './card.json'
// import CardMeta from './cardMeta.json'
// import Carousel from './carousel.json'
// import Cascader from './cascader.json'
// import CheckableTag from './checkableTag.json'
// import Checkbox from './checkbox.json'
// import CheckboxGroup from './checkboxGroup.json'
// import Col from './col.json'
// import Collapse from './collapse.json'
// import CollapsePanel from './collapsePanel.json'
// import Comment from './comment.json'
// import ConfigProvider from './configProvider.json'
// import DatePicker from './datePicker.json'
// import Descriptions from './descriptions.json'
// import DescriptionsItem from './descriptionsItem.json'
// import Divider from './divider.json'
// import Drawer from './drawer.json'
// import Dropdown from './dropdown.json'
// import DropdownButton from './dropdownButton.json'
// import Empty from './empty.json'
// import Flex from './flex.json'
// import Form from './form.json'
// import FormItem from './formItem.json'
// import Image from './image.json'
// import Input from './input.json'
// import InputGroup from './inputGroup.json'
// import InputNumber from './inputNumber.json'
// import InputPassword from './inputPassword.json'
// import InputSearch from './inputSearch.json'
// import Layout from './layout.json'
// import LayoutContent from './layoutContent.json'
// import LayoutFooter from './layoutFooter.json'
// import LayoutHeader from './layoutHeader.json'
// import LayoutSider from './layoutSider.json'
// import List from './list.json'
// import ListItem from './listItem.json'
// import ListItemMeta from './listItemMeta.json'
// import Mentions from './mentions.json'
// import Menu from './menu.json'
// import Modal from './modal.json'
// import PageHeader from './pageHeader.json'
// import Pagination from './pagination.json'
// import Popconfirm from './popconfirm.json'
// import Popover from './popover.json'
// import Progress from './progress.json'
// import Radio from './radio.json'
// import RadioButton from './radioButton.json'
// import RadioGroup from './radioGroup.json'
// import RangePicker from './rangePicker.json'
// import Rate from './rate.json'
// import Result from './result.json'
// import Row from './row.json'
// import Segmented from './segmented.json'
// import Select from './select.json'
// import SelectOption from './selectOption.json'
// import SelectOptionGroup from './selectOptionGroup.json'
// import Skeleton from './skeleton.json'
// import Slider from './slider.json'
// import Space from './space.json'
// import SpaceCompact from './spaceCompact.json'
// import Spin from './spin.json'
// import Statistic from './statistic.json'
// import StatisticCountdown from './statisticCountdown.json'
// import Steps from './steps.json'
// import Switch from './switch.json'
// import TabPane from './tabPane.json'
// import Table from './table.json'
// import TableColumn from './tableColumn.json'
// import Tabs from './tabs.json'
// import Tag from './tag.json'
// import Textarea from './textarea.json'
// import TimePicker from './timePicker.json'
// import Timeline from './timeline.json'
// import TimelineItem from './timelineItem.json'
// import Tooltip from './tooltip.json'
// import Tour from './tour.json'
// import Transfer from './transfer.json'
// import Tree from './tree.json'
// import TreeSelect from './treeSelect.json'
// import Typography from './typography.json'
// import TypographyLink from './typographyLink.json'
// import TypographyParagraph from './typographyParagraph.json'
// import TypographyText from './typographyText.json'
// import TypographyTitle from './typographyTitle.json'
// import Upload from './upload.json'
// import Watermark from './watermark.json'

export function elementPlus2() {
  const map: any = [
    // Affix,
    // Alert,
    // Anchor,
    // AutoComplete,
    // Avatar,
    // AvatarGroup,
    // BackTop,
    // Badge,
    // BadgeRibbon,
    // Breadcrumb,
    // BreadcrumbItem,
    // BreadcrumbSeparator,
    Button,
    ButtonGroup,
    // Calendar,
    // Card,
    // CardMeta,
    // Carousel,
    // Cascader,
    // CheckableTag,
    // Checkbox,
    // CheckboxGroup,
    // Col,
    // Collapse,
    // CollapsePanel,
    // Comment,
    // ConfigProvider,
    // DatePicker,
    // Descriptions,
    // DescriptionsItem,
    // Divider,
    // Drawer,
    // Dropdown,
    // DropdownButton,
    // Empty,
    // Flex,
    // Form,
    // FormItem,
    // Image,
    // Input,
    // InputGroup,
    // InputNumber,
    // InputPassword,
    // InputSearch,
    // Layout,
    // LayoutContent,
    // LayoutFooter,
    // LayoutHeader,
    // LayoutSider,
    // List,
    // ListItem,
    // ListItemMeta,
    // Mentions,
    // Menu,
    // Modal,
    // PageHeader,
    // Pagination,
    // Popconfirm,
    // Popover,
    // Progress,
    // Radio,
    // RadioButton,
    // RadioGroup,
    // RangePicker,
    // Rate,
    // Result,
    // Row,
    // Segmented,
    // Select,
    // SelectOption,
    // SelectOptionGroup,
    // Skeleton,
    // Slider,
    // Space,
    // SpaceCompact,
    // Spin,
    // Statistic,
    // StatisticCountdown,
    // Steps,
    // Switch,
    // TabPane,
    // Table,
    // TableColumn,
    // Tabs,
    // Tag,
    // Textarea,
    // TimePicker,
    // Timeline,
    // TimelineItem,
    // Tooltip,
    // Tour,
    // Transfer,
    // Tree,
    // TreeSelect,
    // Typography,
    // TypographyLink,
    // TypographyParagraph,
    // TypographyText,
    // TypographyTitle,
    // Upload,
    // Watermark,
  ]

  return propsReducer('element-plus', map)
}

export function elementPlus2Components() {
  const map = [
    // [Affix, Affix.name, '<el-affix></el-affix>'],
    // [Alert, Alert.name, '<el-alert></el-alert>'],
    // [Anchor, Anchor.name, '<el-anchor></el-anchor>'],
    // [AutoComplete, AutoComplete.name, '<el-auto-complete></el-auto-complete>'],
    // [Avatar, Avatar.name, '<el-avatar></el-avatar>'],
    // [AvatarGroup, AvatarGroup.name, '<el-avatar-group></el-avatar-group>'],
    // [BackTop, BackTop.name, '<el-back-top></el-back-top>'],
    // [Badge, Badge.name, '<el-badge></el-badge>'],
    // [BadgeRibbon, BadgeRibbon.name, '<el-badge-ribbon></el-badge-ribbon>'],
    // [Breadcrumb, Breadcrumb.name, '<el-breadcrumb></el-breadcrumb>'],
    // [BreadcrumbItem, BreadcrumbItem.name, '<el-breadcrumb-item></el-breadcrumb-item>'],
    // [BreadcrumbSeparator, BreadcrumbSeparator.name, '<el-breadcrumb-separator></el-breadcrumb-separator>'],
    [Button, Button.name, '<el-button></el-button>'],
    [ButtonGroup, ButtonGroup.name, '<el-button-group></el-button-group>'],
    // [Calendar, Calendar.name, '<el-calendar></el-calendar>'],
    // [Card, Card.name, '<el-card></el-card>'],
    // [CardMeta, CardMeta.name, '<el-card-meta></el-card-meta>'],
    // [Carousel, Carousel.name, '<el-carousel></el-carousel>'],
    // [Cascader, Cascader.name, '<el-cascader></el-cascader>'],
    // [CheckableTag, CheckableTag.name, '<el-checkable-tag></el-checkable-tag>'],
    // [Checkbox, Checkbox.name, '<el-checkbox></el-checkbox>'],
    // [CheckboxGroup, CheckboxGroup.name, '<el-checkbox-group></el-checkbox-group>'],
    // [Col, Col.name, '<el-col></el-col>'],
    // [Collapse, Collapse.name, '<el-collapse></el-collapse>'],
    // [CollapsePanel, CollapsePanel.name, '<el-collapse-panel></el-collapse-panel>'],
    // [Comment, Comment.name, '<el-comment></el-comment>'],
    // [ConfigProvider, ConfigProvider.name, '<el-config-provider></el-config-provider>'],
    // [DatePicker, DatePicker.name, '<el-date-picker></el-date-picker>'],
    // [Descriptions, Descriptions.name, '<el-descriptions></el-descriptions>'],
    // [DescriptionsItem, DescriptionsItem.name, '<el-descriptions-item></el-descriptions-item>'],
    // [Divider, Divider.name, '<el-divider></el-divider>'],
    // [Drawer, Drawer.name, '<el-drawer></el-drawer>'],
    // [Dropdown, Dropdown.name, '<el-dropdown></el-dropdown>'],
    // [DropdownButton, DropdownButton.name, '<el-dropdown-button></el-dropdown-button>'],
    // [Empty, Empty.name, '<el-empty></el-empty>'],
    // [Flex, Flex.name, '<el-flex></el-flex>'],
    // [Form, Form.name, '<el-form></el-form>'],
    // [FormItem, FormItem.name, '<el-form-item></el-form-item>'],
    // [Image, Image.name, '<el-image></el-image>'],
    // [Input, Input.name, '<el-input></el-input>'],
    // [InputGroup, InputGroup.name, '<el-input-group></el-input-group>'],
    // [InputNumber, InputNumber.name, '<el-input-number></el-input-number>'],
    // [InputPassword, InputPassword.name, '<el-input-password></el-input-password>'],
    // [InputSearch, InputSearch.name, '<el-input-search></el-input-search>'],
    // [Layout, Layout.name, '<el-layout></el-layout>'],
    // [LayoutContent, LayoutContent.name, '<el-layout-content></el-layout-content>'],
    // [LayoutFooter, LayoutFooter.name, '<el-layout-footer></el-layout-footer>'],
    // [LayoutHeader, LayoutHeader.name, '<el-layout-header></el-layout-header>'],
    // [LayoutSider, LayoutSider.name, '<el-layout-sider></el-layout-sider>'],
    // [List, List.name, '<el-list></el-list>'],
    // [ListItem, ListItem.name, '<el-list-item></el-list-item>'],
    // [ListItemMeta, ListItemMeta.name, '<el-list-item-meta></el-list-item-meta>'],
    // [Mentions, Mentions.name, '<el-mentions></el-mentions>'],
    // [Menu, Menu.name, '<el-menu></el-menu>'],
    // [Modal, Modal.name, '<el-modal></el-modal>'],
    // [PageHeader, PageHeader.name, '<el-page-header></el-page-header>'],
    // [Pagination, Pagination.name, '<el-pagination></el-pagination>'],
    // [Popconfirm, Popconfirm.name, '<el-popconfirm></el-popconfirm>'],
    // [Popover, Popover.name, '<el-popover></el-popover>'],
    // [Progress, Progress.name, '<el-progress></el-progress>'],
    // [Radio, Radio.name, '<el-radio></el-radio>'],
    // [RadioButton, RadioButton.name, '<el-radio-button></el-radio-button>'],
    // [RadioGroup, RadioGroup.name, '<el-radio-group></el-radio-group>'],
    // [RangePicker, RangePicker.name, '<el-range-picker></el-range-picker>'],
    // [Rate, Rate.name, '<el-rate></el-rate>'],
    // [Result, Result.name, '<el-result></el-result>'],
    // [Row, Row.name, '<el-row></el-row>'],
    // [Segmented, Segmented.name, '<el-segmented></el-segmented>'],
    // [Select, Select.name, '<el-select></el-select>'],
    // [SelectOption, SelectOption.name, '<el-select-option></el-select-option>'],
    // [SelectOptionGroup, SelectOptionGroup.name, '<el-select-option-group></el-select-option-group>'],
    // [Skeleton, Skeleton.name, '<el-skeleton></el-skeleton>'],
    // [Slider, Slider.name, '<el-slider></el-slider>'],
    // [Space, Space.name, '<el-space></el-space>'],
    // [SpaceCompact, SpaceCompact.name, '<el-space-compact></el-space-compact>'],
    // [Spin, Spin.name, '<el-spin></el-spin>'],
    // [Statistic, Statistic.name, '<el-statistic></el-statistic>'],
    // [StatisticCountdown, StatisticCountdown.name, '<el-statistic-countdown></el-statistic-countdown>'],
    // [Steps, Steps.name, '<el-steps></el-steps>'],
    // [Switch, Switch.name, '<el-switch></el-switch>'],
    // [TabPane, TabPane.name, '<el-tab-pane></el-tab-pane>'],
    // [Table, Table.name, '<el-table></el-table>'],
    // [TableColumn, TableColumn.name, '<el-table-column></el-table-column>'],
    // [Tabs, Tabs.name, '<el-tabs></el-tabs>'],
    // [Tag, Tag.name, '<el-tag></el-tag>'],
    // [Textarea, Textarea.name, '<el-textarea></el-textarea>'],
    // [TimePicker, TimePicker.name, '<el-time-picker></el-time-picker>'],
    // [Timeline, Timeline.name, '<el-timeline></el-timeline>'],
    // [TimelineItem, TimelineItem.name, '<el-timeline-item></el-timeline-item>'],
    // [Tooltip, Tooltip.name, '<el-tooltip></el-tooltip>'],
    // [Tour, Tour.name, '<el-tour></el-tour>'],
    // [Transfer, Transfer.name, '<el-transfer></el-transfer>'],
    // [Tree, Tree.name, '<el-tree></el-tree>'],
    // [TreeSelect, TreeSelect.name, '<el-tree-select></el-tree-select>'],
    // [Typography, Typography.name, '<el-typography></el-typography>'],
    // [TypographyLink, TypographyLink.name, '<el-typography-link></el-typography-link>'],
    // [TypographyParagraph, TypographyParagraph.name, '<el-typography-paragraph></el-typography-paragraph>'],
    // [TypographyText, TypographyText.name, '<el-typography-text></el-typography-text>'],
    // [TypographyTitle, TypographyTitle.name, '<el-typography-title></el-typography-title>'],
    // [Upload, Upload.name, '<el-upload></el-upload>'],
    // [Watermark, Watermark.name, '<el-watermark></el-watermark>'],
  ]
  return componentsReducer(map, true, 'el')
}
