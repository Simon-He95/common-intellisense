import { componentsReducer, propsReducer } from '../../utils'
import Affix from './Affix.json'
import Alert from './Alert.json'
import Anchor from './Anchor.json'
import AnchorLink from './AnchorLink.json'
import AutoComplete from './AutoComplete.json'
import Avatar from './Avatar.json'
import AvatarGroup from './AvatarGroup.json'
import BackTop from './BackTop.json'
import Badge from './Badge.json'
import Breadcrumb from './Breadcrumb.json'
import BreadcrumbItem from './BreadcrumbItem.json'
import Button from './Button.json'
import ButtonGroup from './ButtonGroup.json'
import Calendar from './Calendar.json'
import Card from './Card.json'
import CardGrid from './CardGrid.json'
import CardMeta from './CardMeta.json'
import Carousel from './Carousel.json'
import Cascader from './Cascader.json'
import CascaderPanel from './CascaderPanel.json'
import Checkbox from './Checkbox.json'
import CheckboxGroup from './CheckboxGroup.json'
import Col from './Col.json'
import Collapse from './Collapse.json'
import CollapseItem from './CollapseItem.json'
import Comment from './Comment.json'
import ConfigProvider from './ConfigProvider.json'
import Countdown from './Countdown.json'
import DatePicker from './DatePicker.json'
import Descriptions from './Descriptions.json'
import DescriptionsItem from './DescriptionsItem.json'
import Dgroup from './Dgroup.json'
import Divider from './Divider.json'
import Doption from './Doption.json'
import Drawer from './Drawer.json'
import Dropdown from './Dropdown.json'
import DropdownButton from './DropdownButton.json'
import Dsubmenu from './Dsubmenu.json'
import Empty from './Empty.json'
import Form from './Form.json'
import FormItem from './FormItem.json'
import Grid from './Grid.json'
import GridItem from './GridItem.json'
import Image from './Image.json'
import ImagePreview from './ImagePreview.json'
import ImagePreviewAction from './ImagePreviewAction.json'
import ImagePreviewGroup from './ImagePreviewGroup.json'
import Input from './Input.json'
import InputNumber from './InputNumber.json'
import InputPassword from './InputPassword.json'
import InputSearch from './InputSearch.json'
import InputTag from './InputTag.json'
import Layout from './Layout.json'
import LayoutContent from './LayoutContent.json'
import LayoutFooter from './LayoutFooter.json'
import LayoutHeader from './LayoutHeader.json'
import LayoutSider from './LayoutSider.json'
import Link from './Link.json'
import List from './List.json'
import ListItem from './ListItem.json'
import ListItemMeta from './ListItemMeta.json'
import Mention from './Mention.json'
import Menu from './Menu.json'
import MenuItem from './MenuItem.json'
import MenuItemGroup from './MenuItemGroup.json'
import Modal from './Modal.json'
import MonthPicker from './MonthPicker.json'
import OverflowList from './OverflowList.json'
import PageHeader from './PageHeader.json'
import Pagination from './Pagination.json'
import Popconfirm from './Popconfirm.json'
import Popover from './Popover.json'
import Progress from './Progress.json'
import QuarterPicker from './QuarterPicker.json'
import Radio from './Radio.json'
import RadioGroup from './RadioGroup.json'
import RangePicker from './RangePicker.json'
import Rate from './Rate.json'
import ResizeBox from './ResizeBox.json'
import Result from './Result.json'
import Row from './Row.json'
import Scrollbar from './Scrollbar.json'
import Select from './Select.json'
import SelectOptgroup from './SelectOptgroup.json'
import SelectOption from './SelectOption.json'
import Skeleton from './Skeleton.json'
import SkeletonLine from './SkeletonLine.json'
import SkeletonShape from './SkeletonShape.json'
import Slider from './Slider.json'
import Space from './Space.json'
import Spin from './Spin.json'
import Split from './Split.json'
import Statistic from './Statistic.json'
import Step from './Step.json'
import Steps from './Steps.json'
import SubMenu from './SubMenu.json'
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
import Transfer from './Transfer.json'
import Tree from './Tree.json'
import TreeSelect from './TreeSelect.json'
import Trigger from './Trigger.json'
import Typography from './Typography.json'
import TypographyParagraph from './TypographyParagraph.json'
import TypographyTitle from './TypographyTitle.json'
import Upload from './Upload.json'
import Watermark from './Watermark.json'
import WeekPicker from './WeekPicker.json'
import YearPicker from './YearPicker.json'

export function arcoDesignVue2() {
  const map: any = [
    Affix,
    Alert,
    Anchor,
    AnchorLink,
    AutoComplete,
    Avatar,
    AvatarGroup,
    BackTop,
    Badge,
    Breadcrumb,
    BreadcrumbItem,
    Button,
    ButtonGroup,
    Calendar,
    Card,
    CardGrid,
    CardMeta,
    Carousel,
    Cascader,
    CascaderPanel,
    Checkbox,
    CheckboxGroup,
    Col,
    Collapse,
    CollapseItem,
    Comment,
    ConfigProvider,
    Countdown,
    DatePicker,
    Descriptions,
    DescriptionsItem,
    Dgroup,
    Divider,
    Doption,
    Drawer,
    Dropdown,
    DropdownButton,
    Dsubmenu,
    Empty,
    Form,
    FormItem,
    Grid,
    GridItem,
    Image,
    ImagePreview,
    ImagePreviewAction,
    ImagePreviewGroup,
    Input,
    InputNumber,
    InputPassword,
    InputSearch,
    InputTag,
    Layout,
    LayoutContent,
    LayoutFooter,
    LayoutHeader,
    LayoutSider,
    Link,
    List,
    ListItem,
    ListItemMeta,
    Mention,
    Menu,
    MenuItem,
    MenuItemGroup,
    Modal,
    MonthPicker,
    OverflowList,
    PageHeader,
    Pagination,
    Popconfirm,
    Popover,
    Progress,
    QuarterPicker,
    Radio,
    RadioGroup,
    RangePicker,
    Rate,
    ResizeBox,
    Result,
    Row,
    Scrollbar,
    Select,
    SelectOptgroup,
    SelectOption,
    Skeleton,
    SkeletonLine,
    SkeletonShape,
    Slider,
    Space,
    Spin,
    Split,
    Statistic,
    Step,
    Steps,
    SubMenu,
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
    Trigger,
    Typography,
    TypographyParagraph,
    TypographyTitle,
    Upload,
    Watermark,
    WeekPicker,
    YearPicker,
  ]

  return propsReducer('@arco-design/web-vue', map)
}

export function arcoDesignVue2Components() {
  const map = [
    [Affix, Affix.name, '<a-affix></a-affix>'],
    [Alert, Alert.name, '<a-alert></a-alert>'],
    [Anchor, Anchor.name, '<a-anchor></a-anchor>'],
    [AnchorLink, AnchorLink.name, '<a-anchor-link></a-anchor-link>'],
    [AutoComplete, AutoComplete.name, '<a-auto-complete></a-auto-complete>'],
    [Avatar, Avatar.name, '<a-avatar></a-avatar>'],
    [AvatarGroup, AvatarGroup.name, '<a-avatar-group></a-avatar-group>'],
    [BackTop, BackTop.name, '<a-back-top></a-back-top>'],
    [Badge, Badge.name, '<a-badge></a-badge>'],
    [Breadcrumb, Breadcrumb.name, '<a-breadcrumb></a-breadcrumb>'],
    [BreadcrumbItem, BreadcrumbItem.name, '<a-breadcrumb-item></a-breadcrumb-item>'],
    [Button, Button.name, '<a-button></a-button>'],
    [ButtonGroup, ButtonGroup.name, '<a-button-group></a-button-group>'],
    [Calendar, Calendar.name, '<a-calendar></a-calendar>'],
    [Card, Card.name, '<a-card></a-card>'],
    [CardGrid, CardGrid.name, '<a-card-grid></a-card-grid>'],
    [CardMeta, CardMeta.name, '<a-card-meta></a-card-meta>'],
    [Carousel, Carousel.name, '<a-carousel></a-carousel>'],
    [Cascader, Cascader.name, '<a-cascader></a-cascader>'],
    [CascaderPanel, CascaderPanel.name, '<a-cascader-panel></a-cascader-panel>'],
    [Checkbox, Checkbox.name, '<a-checkbox></a-checkbox>'],
    [CheckboxGroup, CheckboxGroup.name, '<a-checkbox-group></a-checkbox-group>'],
    [Col, Col.name, '<a-col></a-col>'],
    [Collapse, Collapse.name, '<a-collapse></a-collapse>'],
    [CollapseItem, CollapseItem.name, '<a-collapse-item></a-collapse-item>'],
    [Comment, Comment.name, '<a-comment></a-comment>'],
    [ConfigProvider, ConfigProvider.name, '<a-config-provider></a-config-provider>'],
    [Countdown, Countdown.name, '<a-countdown></a-countdown>'],
    [DatePicker, DatePicker.name, '<a-date-picker></a-date-picker>'],
    [Descriptions, Descriptions.name, '<a-descriptions></a-descriptions>'],
    [DescriptionsItem, DescriptionsItem.name, '<a-descriptions-item></a-descriptions-item>'],
    [Dgroup, Dgroup.name, '<a-dgroup></a-dgroup>'],
    [Divider, Divider.name, '<a-divider></a-divider>'],
    [Doption, Doption.name, '<a-doption></a-doption>'],
    [Drawer, Drawer.name, '<a-drawer></a-drawer>'],
    [Dropdown, Dropdown.name, '<a-dropdown></a-dropdown>'],
    [DropdownButton, DropdownButton.name, '<a-dropdown-button></a-dropdown-button>'],
    [Dsubmenu, Dsubmenu.name, '<a-dsubmenu></a-dsubmenu>'],
    [Empty, Empty.name, '<a-empty></a-empty>'],
    [Form, Form.name, '<a-form></a-form>'],
    [FormItem, FormItem.name, '<a-form-item></a-form-item>'],
    [Grid, Grid.name, '<a-grid></a-grid>'],
    [GridItem, GridItem.name, '<a-grid-item></a-grid-item>'],
    [Image, Image.name, '<a-image></a-image>'],
    [ImagePreview, ImagePreview.name, '<a-image-preview></a-image-preview>'],
    [ImagePreviewAction, ImagePreviewAction.name, '<a-image-preview-action></a-image-preview-action>'],
    [ImagePreviewGroup, ImagePreviewGroup.name, '<a-image-preview-group></a-image-preview-group>'],
    [Input, Input.name, '<a-input></a-input>'],
    [InputNumber, InputNumber.name, '<a-input-number></a-input-number>'],
    [InputPassword, InputPassword.name, '<a-input-password></a-input-password>'],
    [InputSearch, InputSearch.name, '<a-input-search></a-input-search>'],
    [InputTag, InputTag.name, '<a-input-tag></a-input-tag>'],
    [Layout, Layout.name, '<a-layout></a-layout>'],
    [LayoutContent, LayoutContent.name, '<a-layout-content></a-layout-content>'],
    [LayoutFooter, LayoutFooter.name, '<a-layout-footer></a-layout-footer>'],
    [LayoutHeader, LayoutHeader.name, '<a-layout-header></a-layout-header>'],
    [LayoutSider, LayoutSider.name, '<a-layout-sider></a-layout-sider>'],
    [Link, Link.name, '<a-link></a-link>'],
    [List, List.name, '<a-list></a-list>'],
    [ListItem, ListItem.name, '<a-list-item></a-list-item>'],
    [ListItemMeta, ListItemMeta.name, '<a-list-item-meta></a-list-item-meta>'],
    [Mention, Mention.name, '<a-mention></a-mention>'],
    [Menu, Menu.name, '<a-menu></a-menu>'],
    [MenuItem, MenuItem.name, '<a-menu-item></a-menu-item>'],
    [MenuItemGroup, MenuItemGroup.name, '<a-menu-item-group></a-menu-item-group>'],
    [Modal, Modal.name, '<a-modal></a-modal>'],
    [MonthPicker, MonthPicker.name, '<a-month-picker></a-month-picker>'],
    [OverflowList, OverflowList.name, '<a-overflow-list></a-overflow-list>'],
    [PageHeader, PageHeader.name, '<a-page-header></a-page-header>'],
    [Pagination, Pagination.name, '<a-pagination></a-pagination>'],
    [Popconfirm, Popconfirm.name, '<a-popconfirm></a-popconfirm>'],
    [Popover, Popover.name, '<a-popover></a-popover>'],
    [Progress, Progress.name, '<a-progress></a-progress>'],
    [QuarterPicker, QuarterPicker.name, '<a-quarter-picker></a-quarter-picker>'],
    [Radio, Radio.name, '<a-radio></a-radio>'],
    [RadioGroup, RadioGroup.name, '<a-radio-group></a-radio-group>'],
    [RangePicker, RangePicker.name, '<a-range-picker></a-range-picker>'],
    [Rate, Rate.name, '<a-rate></a-rate>'],
    [ResizeBox, ResizeBox.name, '<a-resize-box></a-resize-box>'],
    [Result, Result.name, '<a-result></a-result>'],
    [Row, Row.name, '<a-row></a-row>'],
    [Scrollbar, Scrollbar.name, '<a-scrollbar></a-scrollbar>'],
    [Select, Select.name, '<a-select></a-select>'],
    [SelectOptgroup, SelectOptgroup.name, '<a-select-optgroup></a-select-optgroup>'],
    [SelectOption, SelectOption.name, '<a-select-option></a-select-option>'],
    [Skeleton, Skeleton.name, '<a-skeleton></a-skeleton>'],
    [SkeletonLine, SkeletonLine.name, '<a-skeleton-line></a-skeleton-line>'],
    [SkeletonShape, SkeletonShape.name, '<a-skeleton-shape></a-skeleton-shape>'],
    [Slider, Slider.name, '<a-slider></a-slider>'],
    [Space, Space.name, '<a-space></a-space>'],
    [Spin, Spin.name, '<a-spin></a-spin>'],
    [Split, Split.name, '<a-split></a-split>'],
    [Statistic, Statistic.name, '<a-statistic></a-statistic>'],
    [Step, Step.name, '<a-step></a-step>'],
    [Steps, Steps.name, '<a-steps></a-steps>'],
    [SubMenu, SubMenu.name, '<a-sub-menu></a-sub-menu>'],
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
    [Trigger, Trigger.name, '<a-trigger></a-trigger>'],
    [Typography, Typography.name, '<a-typography></a-typography>'],
    [TypographyParagraph, TypographyParagraph.name, '<a-typography-paragraph></a-typography-paragraph>'],
    [TypographyTitle, TypographyTitle.name, '<a-typography-title></a-typography-title>'],
    [Upload, Upload.name, '<a-upload></a-upload>'],
    [Watermark, Watermark.name, '<a-watermark></a-watermark>'],
    [WeekPicker, WeekPicker.name, '<a-week-picker></a-week-picker>'],
    [YearPicker, YearPicker.name, '<a-year-picker></a-year-picker>'],
  ]
  return componentsReducer(map, true, 'a', '@arco-design/web-vue')
}
