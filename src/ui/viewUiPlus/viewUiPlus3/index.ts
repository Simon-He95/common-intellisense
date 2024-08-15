import { componentsReducer, propsReducer } from '../../utils'
import directives from '../directives.json'
import Affix from './Affix.json'
import Alert from './Alert.json'
import Anchor from './Anchor.json'
import AnchorLink from './AnchorLink.json'
import Auth from './Auth.json'
import AutoComplete from './AutoComplete.json'
import Avatar from './Avatar.json'
import AvatarList from './AvatarList.json'
import BackTop from './BackTop.json'
import Badge from './Badge.json'
import Breadcrumb from './Breadcrumb.json'
import BreadcrumbItem from './BreadcrumbItem.json'
import Button from './Button.json'
import ButtonGroup from './ButtonGroup.json'
import Calendar from './Calendar.json'
import Captcha from './Captcha.json'
import Card from './Card.json'
import Carousel from './Carousel.json'
import CarouselItem from './CarouselItem.json'
import Cascader from './Cascader.json'
import Cell from './Cell.json'
import CellGroup from './CellGroup.json'
import Checkbox from './Checkbox.json'
import CheckboxGroup from './CheckboxGroup.json'
import Circle from './Circle.json'
import City from './City.json'
import Col from './Col.json'
import Collapse from './Collapse.json'
import ColorPicker from './ColorPicker.json'
import Content from './Content.json'
import CountDown from './CountDown.json'
import CountUp from './CountUp.json'
import DatePicker from './DatePicker.json'
import Description from './Description.json'
import DescriptionList from './DescriptionList.json'
import Divider from './Divider.json'
import Drawer from './Drawer.json'
import Dropdown from './Dropdown.json'
import DropdownItem from './DropdownItem.json'
import DropdownMenu from './DropdownMenu.json'
import Ellipsis from './Ellipsis.json'
import Exception from './Exception.json'
import Footer from './Footer.json'
import FooterToolbar from './FooterToolbar.json'
import Form from './Form.json'
import FormItem from './FormItem.json'
import GlobalFooter from './GlobalFooter.json'
import Grid from './Grid.json'
import GridItem from './GridItem.json'
import Header from './Header.json'
import Icon from './Icon.json'
import Image from './Image.json'
import ImagePreview from './ImagePreview.json'
import Input from './Input.json'
import InputNumber from './InputNumber.json'
import Layout from './Layout.json'
import Link from './Link.json'
import List from './List.json'
import ListItem from './ListItem.json'
import ListItemMeta from './ListItemMeta.json'
import Login from './Login.json'
import Menu from './Menu.json'
import MenuGroup from './MenuGroup.json'
import MenuItem from './MenuItem.json'
import Modal from './Modal.json'
import Notification from './Notification.json'
import NotificationItem from './NotificationItem.json'
import NotificationTab from './NotificationTab.json'
import NumberInfo from './NumberInfo.json'
import Numeral from './Numeral.json'
import Option from './Option.json'
import OptionGroup from './OptionGroup.json'
import Page from './Page.json'
import PageHeader from './PageHeader.json'
import Panel from './Panel.json'
import Paragraph from './Paragraph.json'
import Poptip from './Poptip.json'
import Progress from './Progress.json'
import Radio from './Radio.json'
import RadioGroup from './RadioGroup.json'
import Rate from './Rate.json'
import Result from './Result.json'
import Row from './Row.json'
import Scroll from './Scroll.json'
import Select from './Select.json'
import Sider from './Sider.json'
import Skeleton from './Skeleton.json'
import SkeletonItem from './SkeletonItem.json'
import Slider from './Slider.json'
import Space from './Space.json'
import Spin from './Spin.json'
import Split from './Split.json'
import Step from './Step.json'
import Steps from './Steps.json'
import Submenu from './Submenu.json'
import Switch from './Switch.json'
import TabPane from './TabPane.json'
import Table from './Table.json'
import TablePaste from './TablePaste.json'
import Tabs from './Tabs.json'
import Tag from './Tag.json'
import TagSelect from './TagSelect.json'
import TagSelectOption from './TagSelectOption.json'
import Text from './Text.json'
import Time from './Time.json'
import TimePicker from './TimePicker.json'
import Timeline from './Timeline.json'
import TimelineItem from './TimelineItem.json'
import Title from './Title.json'
import Tooltip from './Tooltip.json'
import Transfer from './Transfer.json'
import Tree from './Tree.json'
import TreeSelect from './TreeSelect.json'
import Trend from './Trend.json'
import Upload from './Upload.json'
import UserName from './UserName.json'
import WordCount from './WordCount.json'

const map: any = [
  Affix,
  Alert,
  Anchor,
  AnchorLink,
  Auth,
  AutoComplete,
  Avatar,
  AvatarList,
  BackTop,
  Badge,
  Breadcrumb,
  BreadcrumbItem,
  Button,
  ButtonGroup,
  Calendar,
  Captcha,
  Card,
  Carousel,
  CarouselItem,
  Cascader,
  Cell,
  CellGroup,
  Checkbox,
  CheckboxGroup,
  Circle,
  City,
  Col,
  Collapse,
  ColorPicker,
  Content,
  CountDown,
  CountUp,
  DatePicker,
  Description,
  DescriptionList,
  Divider,
  Drawer,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  Ellipsis,
  Exception,
  Footer,
  FooterToolbar,
  Form,
  FormItem,
  GlobalFooter,
  Grid,
  GridItem,
  Header,
  Icon,
  Image,
  ImagePreview,
  Input,
  InputNumber,
  Layout,
  Link,
  List,
  ListItem,
  ListItemMeta,
  Login,
  Menu,
  MenuGroup,
  MenuItem,
  Modal,
  Notification,
  NotificationItem,
  NotificationTab,
  NumberInfo,
  Numeral,
  Option,
  OptionGroup,
  Page,
  PageHeader,
  Panel,
  Paragraph,
  Poptip,
  Progress,
  Radio,
  RadioGroup,
  Rate,
  Result,
  Row,
  Scroll,
  Select,
  Sider,
  Skeleton,
  SkeletonItem,
  Slider,
  Space,
  Spin,
  Split,
  Step,
  Steps,
  Submenu,
  Switch,
  TabPane,
  Table,
  TablePaste,
  Tabs,
  Tag,
  TagSelect,
  TagSelectOption,
  Text,
  Time,
  TimePicker,
  Timeline,
  TimelineItem,
  Title,
  Tooltip,
  Transfer,
  Tree,
  TreeSelect,
  Trend,
  Upload,
  UserName,
  WordCount,
]
export function viewUiPlus3() {
  return propsReducer('view-ui-plus', map, '')
}

const componentsMap = [
  [Affix, Affix.name, `<${Affix.name}></${Affix.name}`],
  [Alert, Alert.name, `<${Alert.name}></${Alert.name}`],
  [Anchor, Anchor.name, `<${Anchor.name}></${Anchor.name}`],
  [AnchorLink, AnchorLink.name, `<${AnchorLink.name}></${AnchorLink.name}`],
  [Auth, Auth.name, `<${Auth.name}></${Auth.name}`],
  [AutoComplete, AutoComplete.name, `<${AutoComplete.name}></${AutoComplete.name}`],
  [Avatar, Avatar.name, `<${Avatar.name}></${Avatar.name}`],
  [AvatarList, AvatarList.name, `<${AvatarList.name}></${AvatarList.name}`],
  [BackTop, BackTop.name, `<${BackTop.name}></${BackTop.name}`],
  [Badge, Badge.name, `<${Badge.name}></${Badge.name}`],
  [Breadcrumb, Breadcrumb.name, `<${Breadcrumb.name}></${Breadcrumb.name}`],
  [BreadcrumbItem, BreadcrumbItem.name, `<${BreadcrumbItem.name}></${BreadcrumbItem.name}`],
  [Button, Button.name, `<${Button.name}></${Button.name}`],
  [ButtonGroup, ButtonGroup.name, `<${ButtonGroup.name}></${ButtonGroup.name}`],
  [Calendar, Calendar.name, `<${Calendar.name}></${Calendar.name}`],
  [Captcha, Captcha.name, `<${Captcha.name}></${Captcha.name}`],
  [Card, Card.name, `<${Card.name}></${Card.name}`],
  [Carousel, Carousel.name, `<${Carousel.name}></${Carousel.name}`],
  [CarouselItem, CarouselItem.name, `<${CarouselItem.name}></${CarouselItem.name}`],
  [Cascader, Cascader.name, `<${Cascader.name}></${Cascader.name}`],
  [Cell, Cell.name, `<${Cell.name}></${Cell.name}`],
  [CellGroup, CellGroup.name, `<${CellGroup.name}></${CellGroup.name}`],
  [Checkbox, Checkbox.name, `<${Checkbox.name}></${Checkbox.name}`],
  [CheckboxGroup, CheckboxGroup.name, `<${CheckboxGroup.name}></${CheckboxGroup.name}`],
  [Circle, Circle.name, `<${Circle.name}></${Circle.name}`],
  [City, City.name, `<${City.name}></${City.name}`],
  [Col, Col.name, `<${Col.name}></${Col.name}`],
  [Collapse, Collapse.name, `<${Collapse.name}></${Collapse.name}`],
  [ColorPicker, ColorPicker.name, `<${ColorPicker.name}></${ColorPicker.name}`],
  [Content, Content.name, `<${Content.name}></${Content.name}`],
  [CountDown, CountDown.name, `<${CountDown.name}></${CountDown.name}`],
  [CountUp, CountUp.name, `<${CountUp.name}></${CountUp.name}`],
  [DatePicker, DatePicker.name, `<${DatePicker.name}></${DatePicker.name}`],
  [Description, Description.name, `<${Description.name}></${Description.name}`],
  [DescriptionList, DescriptionList.name, `<${DescriptionList.name}></${DescriptionList.name}`],
  [Divider, Divider.name, `<${Divider.name}></${Divider.name}`],
  [Drawer, Drawer.name, `<${Drawer.name}></${Drawer.name}`],
  [Dropdown, Dropdown.name, `<${Dropdown.name}></${Dropdown.name}`],
  [DropdownItem, DropdownItem.name, `<${DropdownItem.name}></${DropdownItem.name}`],
  [DropdownMenu, DropdownMenu.name, `<${DropdownMenu.name}></${DropdownMenu.name}`],
  [Ellipsis, Ellipsis.name, `<${Ellipsis.name}></${Ellipsis.name}`],
  [Exception, Exception.name, `<${Exception.name}></${Exception.name}`],
  [Footer, Footer.name, `<${Footer.name}></${Footer.name}`],
  [FooterToolbar, FooterToolbar.name, `<${FooterToolbar.name}></${FooterToolbar.name}`],
  [Form, Form.name, `<${Form.name}></${Form.name}`],
  [FormItem, FormItem.name, `<${FormItem.name}></${FormItem.name}`],
  [GlobalFooter, GlobalFooter.name, `<${GlobalFooter.name}></${GlobalFooter.name}`],
  [Grid, Grid.name, `<${Grid.name}></${Grid.name}`],
  [GridItem, GridItem.name, `<${GridItem.name}></${GridItem.name}`],
  [Header, Header.name, `<${Header.name}></${Header.name}`],
  [Icon, Icon.name, `<${Icon.name}></${Icon.name}`],
  [Image, Image.name, `<${Image.name}></${Image.name}`],
  [ImagePreview, ImagePreview.name, `<${ImagePreview.name}></${ImagePreview.name}`],
  [Input, Input.name, `<${Input.name}></${Input.name}`],
  [InputNumber, InputNumber.name, `<${InputNumber.name}></${InputNumber.name}`],
  [Layout, Layout.name, `<${Layout.name}></${Layout.name}`],
  [Link, Link.name, `<${Link.name}></${Link.name}`],
  [List, List.name, `<${List.name}></${List.name}`],
  [ListItem, ListItem.name, `<${ListItem.name}></${ListItem.name}`],
  [ListItemMeta, ListItemMeta.name, `<${ListItemMeta.name}></${ListItemMeta.name}`],
  [Login, Login.name, `<${Login.name}></${Login.name}`],
  [Menu, Menu.name, `<${Menu.name}></${Menu.name}`],
  [MenuGroup, MenuGroup.name, `<${MenuGroup.name}></${MenuGroup.name}`],
  [MenuItem, MenuItem.name, `<${MenuItem.name}></${MenuItem.name}`],
  [Modal, Modal.name, `<${Modal.name}></${Modal.name}`],
  [Notification, Notification.name, `<${Notification.name}></${Notification.name}`],
  [NotificationItem, NotificationItem.name, `<${NotificationItem.name}></${NotificationItem.name}`],
  [NotificationTab, NotificationTab.name, `<${NotificationTab.name}></${NotificationTab.name}`],
  [NumberInfo, NumberInfo.name, `<${NumberInfo.name}></${NumberInfo.name}`],
  [Numeral, Numeral.name, `<${Numeral.name}></${Numeral.name}`],
  [Option, Option.name, `<${Option.name}></${Option.name}`],
  [OptionGroup, OptionGroup.name, `<${OptionGroup.name}></${OptionGroup.name}`],
  [Page, Page.name, `<${Page.name}></${Page.name}`],
  [PageHeader, PageHeader.name, `<${PageHeader.name}></${PageHeader.name}`],
  [Panel, Panel.name, `<${Panel.name}></${Panel.name}`],
  [Paragraph, Paragraph.name, `<${Paragraph.name}></${Paragraph.name}`],
  [Poptip, Poptip.name, `<${Poptip.name}></${Poptip.name}`],
  [Progress, Progress.name, `<${Progress.name}></${Progress.name}`],
  [Radio, Radio.name, `<${Radio.name}></${Radio.name}`],
  [RadioGroup, RadioGroup.name, `<${RadioGroup.name}></${RadioGroup.name}`],
  [Rate, Rate.name, `<${Rate.name}></${Rate.name}`],
  [Result, Result.name, `<${Result.name}></${Result.name}`],
  [Row, Row.name, `<${Row.name}></${Row.name}`],
  [Scroll, Scroll.name, `<${Scroll.name}></${Scroll.name}`],
  [Select, Select.name, `<${Select.name}></${Select.name}`],
  [Sider, Sider.name, `<${Sider.name}></${Sider.name}`],
  [Skeleton, Skeleton.name, `<${Skeleton.name}></${Skeleton.name}`],
  [SkeletonItem, SkeletonItem.name, `<${SkeletonItem.name}></${SkeletonItem.name}`],
  [Slider, Slider.name, `<${Slider.name}></${Slider.name}`],
  [Space, Space.name, `<${Space.name}></${Space.name}`],
  [Spin, Spin.name, `<${Spin.name}></${Spin.name}`],
  [Split, Split.name, `<${Split.name}></${Split.name}`],
  [Step, Step.name, `<${Step.name}></${Step.name}`],
  [Steps, Steps.name, `<${Steps.name}></${Steps.name}`],
  [Submenu, Submenu.name, `<${Submenu.name}></${Submenu.name}`],
  [Switch, Switch.name, `<${Switch.name}></${Switch.name}`],
  [TabPane, TabPane.name, `<${TabPane.name}></${TabPane.name}`],
  [Table, Table.name, `<${Table.name}></${Table.name}`],
  [TablePaste, TablePaste.name, `<${TablePaste.name}></${TablePaste.name}`],
  [Tabs, Tabs.name, `<${Tabs.name}></${Tabs.name}`],
  [Tag, Tag.name, `<${Tag.name}></${Tag.name}`],
  [TagSelect, TagSelect.name, `<${TagSelect.name}></${TagSelect.name}`],
  [TagSelectOption, TagSelectOption.name, `<${TagSelectOption.name}></${TagSelectOption.name}`],
  [Text, Text.name, `<${Text.name}></${Text.name}`],
  [Time, Time.name, `<${Time.name}></${Time.name}`],
  [TimePicker, TimePicker.name, `<${TimePicker.name}></${TimePicker.name}`],
  [Timeline, Timeline.name, `<${Timeline.name}></${Timeline.name}`],
  [TimelineItem, TimelineItem.name, `<${TimelineItem.name}></${TimelineItem.name}`],
  [Title, Title.name, `<${Title.name}></${Title.name}`],
  [Tooltip, Tooltip.name, `<${Tooltip.name}></${Tooltip.name}`],
  [Transfer, Transfer.name, `<${Transfer.name}></${Transfer.name}`],
  [Tree, Tree.name, `<${Tree.name}></${Tree.name}`],
  [TreeSelect, TreeSelect.name, `<${TreeSelect.name}></${TreeSelect.name}`],
  [Trend, Trend.name, `<${Trend.name}></${Trend.name}`],
  [Upload, Upload.name, `<${Upload.name}></${Upload.name}`],
  [UserName, UserName.name, `<${UserName.name}></${UserName.name}`],
  [WordCount, WordCount.name, `<${WordCount.name}></${WordCount.name}`],
]

export function viewUiPlus3Components() {
  return componentsReducer({
    map: componentsMap,
    isSeperatorByHyphen: false,
    prefix: '',
    isReact: false,
    lib: 'view-ui-plus',
    directives: directives.viewUiPlus3,
  })
}
