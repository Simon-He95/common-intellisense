import { componentsReducer, propsReducer } from '../../utils'
import ActionMenu from './ActionMenu.json'
import Alert from './Alert.json'
import Anchor from './Anchor.json'
import AutoComplete from './AutoComplete.json'
import Badge from './Badge.json'
import Breadcrumb from './Breadcrumb.json'
import BulletinBoard from './BulletinBoard.json'
import Button from './Button.json'
import ButtonGroup from './ButtonGroup.json'
import Calendar from './Calendar.json'
import CalendarView from './CalendarView.json'
import Card from './Card.json'
import Carousel from './Carousel.json'
import CarouselItem from './CarouselItem.json'
import Cascader from './Cascader.json'
import CascaderPanel from './CascaderPanel.json'
import Chart from './Chart.json'
import Checkbox from './Checkbox.json'
import CheckboxButton from './CheckboxButton.json'
import CheckboxGroup from './CheckboxGroup.json'
import Col from './Col.json'
import Collapse from './Collapse.json'
import CollapseItem from './CollapseItem.json'
import Color from './Color.json'
import ColorPicker from './ColorPicker.json'
import ColorSelectPanel from './ColorSelectPanel.json'
import ConfigProvider from './ConfigProvider.json'
import Container from './Container.json'
import Crop from './Crop.json'
import DatePicker from './DatePicker.json'
import DialogBox from './DialogBox.json'
import DialogSelect from './DialogSelect.json'
import Divider from './Divider.json'
import Drawer from './Drawer.json'
import DropTimes from './DropTimes.json'
import Dropdown from './Dropdown.json'
import DropdownItem from './DropdownItem.json'
import DropdownMenu from './DropdownMenu.json'
import FallMenu from './FallMenu.json'
import FileUpload from './FileUpload.json'
import FilterPanel from './FilterPanel.json'
import FloatBar from './FloatBar.json'
import FlowChart from './FlowChart.json'
import Font from './Font.json'
import Form from './Form.json'
import FormItem from './FormItem.json'
import Fullscreen from './Fullscreen.json'
import Grid from './Grid.json'
import GridColumn from './GridColumn.json'
import GridToolbar from './GridToolbar.json'
import Guide from './Guide.json'
import Image from './Image.json'
import Input from './Input.json'
import IpAddress from './IpAddress.json'
import Layout from './Layout.json'
import Link from './Link.json'
import LinkMenu from './LinkMenu.json'
import Milestone from './Milestone.json'
import MindMap from './MindMap.json'
import Modal from './Modal.json'
import NavMenu from './NavMenu.json'
import Numeric from './Numeric.json'
import Pager from './Pager.json'
import PopConfirm from './PopConfirm.json'
import PopEditor from './PopEditor.json'
import PopUpload from './PopUpload.json'
import Popover from './Popover.json'
import Progress from './Progress.json'
import QrCode from './QrCode.json'
import Radio from './Radio.json'
import RadioButton from './RadioButton.json'
import RadioGroup from './RadioGroup.json'
import Rate from './Rate.json'
import RichTextEditor from './RichTextEditor.json'
import Row from './Row.json'
import ScrollText from './ScrollText.json'
import Search from './Search.json'
import Select from './Select.json'
import Skeleton from './Skeleton.json'
import SkeletonItem from './SkeletonItem.json'
import Slider from './Slider.json'
import Split from './Split.json'
import Statistic from './Statistic.json'
import Steps from './Steps.json'
import Switch from './Switch.json'
import TabItem from './TabItem.json'
import Tabs from './Tabs.json'
import Tag from './Tag.json'
import TagGroup from './TagGroup.json'
import TextPopup from './TextPopup.json'
import TimePicker from './TimePicker.json'
import TimeSelect from './TimeSelect.json'
import Timeline from './Timeline.json'
import TimelineItem from './TimelineItem.json'
import ToggleMenu from './ToggleMenu.json'
import ToolTip from './ToolTip.json'
import Transfer from './Transfer.json'
import Tree from './Tree.json'
import TreeMenu from './TreeMenu.json'
import UserContact from './UserContact.json'
import UserHead from './UserHead.json'
import Watermark from './Watermark.json'
import Wizard from './Wizard.json'

const map: any = [
  ActionMenu,
  Alert,
  Anchor,
  AutoComplete,
  Badge,
  Breadcrumb,
  BulletinBoard,
  Button,
  ButtonGroup,
  Calendar,
  CalendarView,
  Card,
  Carousel,
  CarouselItem,
  Cascader,
  CascaderPanel,
  Chart,
  Checkbox,
  CheckboxButton,
  CheckboxGroup,
  Col,
  Collapse,
  CollapseItem,
  Color,
  ColorPicker,
  ColorSelectPanel,
  ConfigProvider,
  Container,
  Crop,
  DatePicker,
  DialogBox,
  DialogSelect,
  Divider,
  Drawer,
  DropTimes,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  FallMenu,
  FileUpload,
  FilterPanel,
  FloatBar,
  FlowChart,
  Font,
  Form,
  FormItem,
  Fullscreen,
  Grid,
  GridColumn,
  GridToolbar,
  Guide,
  Image,
  Input,
  IpAddress,
  Layout,
  Link,
  LinkMenu,
  Milestone,
  MindMap,
  Modal,
  NavMenu,
  Numeric,
  Pager,
  PopConfirm,
  PopEditor,
  PopUpload,
  Popover,
  Progress,
  QrCode,
  Radio,
  RadioButton,
  RadioGroup,
  Rate,
  RichTextEditor,
  Row,
  ScrollText,
  Search,
  Select,
  Skeleton,
  SkeletonItem,
  Slider,
  Split,
  Statistic,
  Steps,
  Switch,
  TabItem,
  Tabs,
  Tag,
  TagGroup,
  TextPopup,
  TimePicker,
  TimeSelect,
  Timeline,
  TimelineItem,
  ToggleMenu,
  ToolTip,
  Transfer,
  Tree,
  TreeMenu,
  UserContact,
  UserHead,
  Watermark,
  Wizard,
]
export function tinyVue3() {
  return propsReducer('@opentiny/vue3', map, 'tiny')
}

const componentsMap = [
  [ActionMenu, ActionMenu.name, `<tiny-action-menu></tiny-action-menu>`],
  [Alert, Alert.name, `<tiny-alert></tiny-alert>`],
  [Anchor, Anchor.name, `<tiny-anchor></tiny-anchor>`],
  [AutoComplete, AutoComplete.name, `<tiny-auto-complete></tiny-auto-complete>`],
  [Badge, Badge.name, `<tiny-badge></tiny-badge>`],
  [Breadcrumb, Breadcrumb.name, `<tiny-breadcrumb></tiny-breadcrumb>`],
  [BulletinBoard, BulletinBoard.name, `<tiny-bulletin-board></tiny-bulletin-board>`],
  [Button, Button.name, `<tiny-button></tiny-button>`],
  [ButtonGroup, ButtonGroup.name, `<tiny-button-group></tiny-button-group>`],
  [Calendar, Calendar.name, `<tiny-calendar></tiny-calendar>`],
  [CalendarView, CalendarView.name, `<tiny-calendar-view></tiny-calendar-view>`],
  [Card, Card.name, `<tiny-card></tiny-card>`],
  [Carousel, Carousel.name, `<tiny-carousel></tiny-carousel>`],
  [CarouselItem, CarouselItem.name, `<tiny-carousel-item></tiny-carousel-item>`],
  [Cascader, Cascader.name, `<tiny-cascader></tiny-cascader>`],
  [CascaderPanel, CascaderPanel.name, `<tiny-cascader-panel></tiny-cascader-panel>`],
  [Chart, Chart.name, `<tiny-chart></tiny-chart>`],
  [Checkbox, Checkbox.name, `<tiny-checkbox></tiny-checkbox>`],
  [CheckboxButton, CheckboxButton.name, `<tiny-checkbox-button></tiny-checkbox-button>`],
  [CheckboxGroup, CheckboxGroup.name, `<tiny-checkbox-group></tiny-checkbox-group>`],
  [Col, Col.name, `<tiny-col></tiny-col>`],
  [Collapse, Collapse.name, `<tiny-collapse></tiny-collapse>`],
  [CollapseItem, CollapseItem.name, `<tiny-collapse-item></tiny-collapse-item>`],
  [Color, Color.name, `<tiny-color></tiny-color>`],
  [ColorPicker, ColorPicker.name, `<tiny-color-picker></tiny-color-picker>`],
  [ColorSelectPanel, ColorSelectPanel.name, `<tiny-color-select-panel></tiny-color-select-panel>`],
  [ConfigProvider, ConfigProvider.name, `<tiny-config-provider></tiny-config-provider>`],
  [Container, Container.name, `<tiny-container></tiny-container>`],
  [Crop, Crop.name, `<tiny-crop></tiny-crop>`],
  [DatePicker, DatePicker.name, `<tiny-date-picker></tiny-date-picker>`],
  [DialogBox, DialogBox.name, `<tiny-dialog-box></tiny-dialog-box>`],
  [DialogSelect, DialogSelect.name, `<tiny-dialog-select></tiny-dialog-select>`],
  [Divider, Divider.name, `<tiny-divider></tiny-divider>`],
  [Drawer, Drawer.name, `<tiny-drawer></tiny-drawer>`],
  [DropTimes, DropTimes.name, `<tiny-drop-times></tiny-drop-times>`],
  [Dropdown, Dropdown.name, `<tiny-dropdown></tiny-dropdown>`],
  [DropdownItem, DropdownItem.name, `<tiny-dropdown-item></tiny-dropdown-item>`],
  [DropdownMenu, DropdownMenu.name, `<tiny-dropdown-menu></tiny-dropdown-menu>`],
  [FallMenu, FallMenu.name, `<tiny-fall-menu></tiny-fall-menu>`],
  [FileUpload, FileUpload.name, `<tiny-file-upload></tiny-file-upload>`],
  [FilterPanel, FilterPanel.name, `<tiny-filter-panel></tiny-filter-panel>`],
  [FloatBar, FloatBar.name, `<tiny-float-bar></tiny-float-bar>`],
  [FlowChart, FlowChart.name, `<tiny-flow-chart></tiny-flow-chart>`],
  [Font, Font.name, `<tiny-font></tiny-font>`],
  [Form, Form.name, `<tiny-form></tiny-form>`],
  [FormItem, FormItem.name, `<tiny-form-item></tiny-form-item>`],
  [Fullscreen, Fullscreen.name, `<tiny-fullscreen></tiny-fullscreen>`],
  [Grid, Grid.name, `<tiny-grid></tiny-grid>`],
  [GridColumn, GridColumn.name, `<tiny-grid-column></tiny-grid-column>`],
  [GridToolbar, GridToolbar.name, `<tiny-grid-toolbar></tiny-grid-toolbar>`],
  [Guide, Guide.name, `<tiny-guide></tiny-guide>`],
  [Image, Image.name, `<tiny-image></tiny-image>`],
  [Input, Input.name, `<tiny-input></tiny-input>`],
  [IpAddress, IpAddress.name, `<tiny-ip-address></tiny-ip-address>`],
  [Layout, Layout.name, `<tiny-layout></tiny-layout>`],
  [Link, Link.name, `<tiny-link></tiny-link>`],
  [LinkMenu, LinkMenu.name, `<tiny-link-menu></tiny-link-menu>`],
  [Milestone, Milestone.name, `<tiny-milestone></tiny-milestone>`],
  [MindMap, MindMap.name, `<tiny-mind-map></tiny-mind-map>`],
  [Modal, Modal.name, `<tiny-modal></tiny-modal>`],
  [NavMenu, NavMenu.name, `<tiny-nav-menu></tiny-nav-menu>`],
  [Numeric, Numeric.name, `<tiny-numeric></tiny-numeric>`],
  [Pager, Pager.name, `<tiny-pager></tiny-pager>`],
  [PopConfirm, PopConfirm.name, `<tiny-pop-confirm></tiny-pop-confirm>`],
  [PopEditor, PopEditor.name, `<tiny-pop-editor></tiny-pop-editor>`],
  [PopUpload, PopUpload.name, `<tiny-pop-upload></tiny-pop-upload>`],
  [Popover, Popover.name, `<tiny-popover></tiny-popover>`],
  [Progress, Progress.name, `<tiny-progress></tiny-progress>`],
  [QrCode, QrCode.name, `<tiny-qr-code></tiny-qr-code>`],
  [Radio, Radio.name, `<tiny-radio></tiny-radio>`],
  [RadioButton, RadioButton.name, `<tiny-radio-button></tiny-radio-button>`],
  [RadioGroup, RadioGroup.name, `<tiny-radio-group></tiny-radio-group>`],
  [Rate, Rate.name, `<tiny-rate></tiny-rate>`],
  [RichTextEditor, RichTextEditor.name, `<tiny-rich-text-editor></tiny-rich-text-editor>`],
  [Row, Row.name, `<tiny-row></tiny-row>`],
  [ScrollText, ScrollText.name, `<tiny-scroll-text></tiny-scroll-text>`],
  [Search, Search.name, `<tiny-search></tiny-search>`],
  [Select, Select.name, `<tiny-select></tiny-select>`],
  [Skeleton, Skeleton.name, `<tiny-skeleton></tiny-skeleton>`],
  [SkeletonItem, SkeletonItem.name, `<tiny-skeleton-item></tiny-skeleton-item>`],
  [Slider, Slider.name, `<tiny-slider></tiny-slider>`],
  [Split, Split.name, `<tiny-split></tiny-split>`],
  [Statistic, Statistic.name, `<tiny-statistic></tiny-statistic>`],
  [Steps, Steps.name, `<tiny-steps></tiny-steps>`],
  [Switch, Switch.name, `<tiny-switch></tiny-switch>`],
  [TabItem, TabItem.name, `<tiny-tab-item></tiny-tab-item>`],
  [Tabs, Tabs.name, `<tiny-tabs></tiny-tabs>`],
  [Tag, Tag.name, `<tiny-tag></tiny-tag>`],
  [TagGroup, TagGroup.name, `<tiny-tag-group></tiny-tag-group>`],
  [TextPopup, TextPopup.name, `<tiny-text-popup></tiny-text-popup>`],
  [TimePicker, TimePicker.name, `<tiny-time-picker></tiny-time-picker>`],
  [TimeSelect, TimeSelect.name, `<tiny-time-select></tiny-time-select>`],
  [Timeline, Timeline.name, `<tiny-timeline></tiny-timeline>`],
  [TimelineItem, TimelineItem.name, `<tiny-timeline-item></tiny-timeline-item>`],
  [ToggleMenu, ToggleMenu.name, `<tiny-toggle-menu></tiny-toggle-menu>`],
  [ToolTip, ToolTip.name, `<tiny-tool-tip></tiny-tool-tip>`],
  [Transfer, Transfer.name, `<tiny-transfer></tiny-transfer>`],
  [Tree, Tree.name, `<tiny-tree></tiny-tree>`],
  [TreeMenu, TreeMenu.name, `<tiny-tree-menu></tiny-tree-menu>`],
  [UserContact, UserContact.name, `<tiny-user-contact></tiny-user-contact>`],
  [UserHead, UserHead.name, `<tiny-user-head></tiny-user-head>`],
  [Watermark, Watermark.name, `<tiny-watermark></tiny-watermark>`],
  [Wizard, Wizard.name, `<tiny-wizard></tiny-wizard>`],
]

export function tinyVue3Components() {
  return componentsReducer({
    map: componentsMap,
    isSeperatorByHyphen: true,
    prefix: 'tiny',
    lib: '@opentiny/vue3',
  })
}
