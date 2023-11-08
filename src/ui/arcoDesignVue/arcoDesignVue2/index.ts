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

  return propsReducer(map)
}

export function arcoDesignVue2Components() {
  const map = [
    [Affix, '固钉', '<Affix></Affix>'],
    [Alert, '警告提示', '<Alert></Alert>'],
    [Anchor, '锚点', '<Anchor></Anchor>'],
    [AnchorLink, '锚点', '<AnchorLink></AnchorLink>'],
    [AutoComplete, '自动补全', '<AutoComplete></AutoComplete>'],
    [Avatar, '头像', '<Avatar></Avatar>'],
    [AvatarGroup, '头像', '<AvatarGroup></AvatarGroup>'],
    [BackTop, '返回顶部', '<BackTop></BackTop>'],
    [Badge, '徽标', '<Badge></Badge>'],
    [Breadcrumb, '面包屑', '<Breadcrumb></Breadcrumb>'],
    [BreadcrumbItem, '面包屑', '<BreadcrumbItem></BreadcrumbItem>'],
    [Button, '按钮', '<Button></Button>'],
    [ButtonGroup, '按钮', '<ButtonGroup></ButtonGroup>'],
    [Calendar, '日历', '<Calendar></Calendar>'],
    [Card, '卡片', '<Card></Card>'],
    [CardGrid, '卡片', '<CardGrid></CardGrid>'],
    [CardMeta, '卡片', '<CardMeta></CardMeta>'],
    [Carousel, '图片轮播', '<Carousel></Carousel>'],
    [Cascader, '级联选择', '<Cascader></Cascader>'],
    [CascaderPanel, '级联选择', '<CascaderPanel></CascaderPanel>'],
    [Checkbox, '复选框', '<Checkbox></Checkbox>'],
    [CheckboxGroup, '复选框', '<CheckboxGroup></CheckboxGroup>'],
    [Col, '列', '<Col></Col>'],
    [Collapse, '折叠面板', '<Collapse></Collapse>'],
    [CollapseItem, '折叠面板', '<CollapseItem></CollapseItem>'],
    [Comment, '评论', '<Comment></Comment>'],
    [ConfigProvider, '全局配置', '<ConfigProvider></ConfigProvider>'],
    [Countdown, '倒计时', '<Countdown></Countdown>'],
    [DatePicker, '日期选择器', '<DatePicker></DatePicker>'],
    [Descriptions, '描述', '<Descriptions></Descriptions>'],
    [DescriptionsItem, '描述', '<DescriptionsItem></DescriptionsItem>'],
    [Dgroup, '下拉菜单', '<Dgroup></Dgroup>'],
    [Divider, '分割线', '<Divider></Divider>'],
    [Doption, '下拉菜单', '<Doption></Doption>'],
    [Drawer, '抽屉', '<Drawer></Drawer>'],
    [Dropdown, '下拉菜单', '<Dropdown></Dropdown>'],
    [DropdownButton, '下拉菜单', '<DropdownButton></DropdownButton>'],
    [Dsubmenu, '下拉菜单', '<Dsubmenu></Dsubmenu>'],
    [Empty, '空列表', '<Empty></Empty>'],
    [Form, '表单', '<Form></Form>'],
    [FormItem, '表单', '<FormItem></FormItem>'],
    [Grid, '栅格', '<Grid></Grid>'],
    [GridItem, '栅格', '<GridItem></GridItem>'],
    [Image, '图片', '<Image></Image>'],
    [ImagePreview, '图片', '<ImagePreview></ImagePreview>'],
    [ImagePreviewAction, '图片', '<ImagePreviewAction></ImagePreviewAction>'],
    [ImagePreviewGroup, '图片', '<ImagePreviewGroup></ImagePreviewGroup>'],
    [Input, '输入框', '<Input></Input>'],
    [InputNumber, '数字输入框', '<InputNumber></InputNumber>'],
    [InputPassword, '密码输入框', '<InputPassword></InputPassword>'],
    [InputSearch, '搜索输入', '<InputSearch></InputSearch>'],
    [InputTag, '标签输入框', '<InputTag></InputTag>'],
    [Layout, '布局', '<Layout></Layout>'],
    [LayoutContent, '布局', '<LayoutContent></LayoutContent>'],
    [LayoutFooter, '布局', '<LayoutFooter></LayoutFooter>'],
    [LayoutHeader, '布局', '<LayoutHeader></LayoutHeader>'],
    [LayoutSider, '布局', '<LayoutSider></LayoutSider>'],
    [Link, '链接', '<Link></Link>'],
    [List, '列表', '<List></List>'],
    [ListItem, '列表', '<ListItem></ListItem>'],
    [ListItemMeta, '列表', '<ListItemMeta></ListItemMeta>'],
    [Mention, '提及', '<Mention></Mention>'],
    [Menu, '菜单', '<Menu></Menu>'],
    [MenuItem, '菜单', '<MenuItem></MenuItem>'],
    [MenuItemGroup, '菜单', '<MenuItemGroup></MenuItemGroup>'],
    [Modal, '对话框', '<Modal></Modal>'],
    [MonthPicker, '日期选择器', '<MonthPicker></MonthPicker>'],
    [OverflowList, '折叠列表', '<OverflowList></OverflowList>'],
    [PageHeader, '页头', '<PageHeader></PageHeader>'],
    [Pagination, '分页', '<Pagination></Pagination>'],
    [Popconfirm, '气泡确认框', '<Popconfirm></Popconfirm>'],
    [Popover, '气泡卡片', '<Popover></Popover>'],
    [Progress, '进度条', '<Progress></Progress>'],
    [QuarterPicker, '日期选择器', '<QuarterPicker></QuarterPicker>'],
    [Radio, '按钮', '<Radio></Radio>'],
    [RadioGroup, '按钮组', '<RadioGroup></RadioGroup>'],
    [RangePicker, '日期选择器', '<RangePicker></RangePicker>'],
    [Rate, '评分', '<Rate></Rate>'],
    [ResizeBox, '伸缩框', '<ResizeBox></ResizeBox>'],
    [Result, '结果也', '<Result></Result>'],
    [Row, '行', '<Row></Row>'],
    [Scrollbar, '滚动条', '<Scrollbar></Scrollbar>'],
    [Select, '选择器', '<Select></Select>'],
    [SelectOptgroup, '选择器', '<SelectOptgroup></SelectOptgroup>'],
    [SelectOption, '选择器', '<SelectOption></SelectOption>'],
    [Skeleton, '骨架屏', '<Skeleton></Skeleton>'],
    [SkeletonLine, '骨架屏', '<SkeletonLine></SkeletonLine>'],
    [SkeletonShape, '骨架屏', '<SkeletonShape></SkeletonShape>'],
    [Slider, '滑动输入条', '<Slider></Slider>'],
    [Space, '间距', '<Space></Space>'],
    [Spin, '加载中', '<Spin></Spin>'],
    [Split, '面板分割', '<Split></Split>'],
    [Statistic, '数值显示', '<Statistic></Statistic>'],
    [Step, '步骤条', '<Step></Step>'],
    [Steps, '步骤条', '<Steps></Steps>'],
    [SubMenu, '菜单', '<SubMenu></SubMenu>'],
    [Switch, '开关', '<Switch></Switch>'],
    [TabPane, '标签页', '<TabPane></TabPane>'],
    [Table, '表格', '<Table></Table>'],
    [TableColumn, '表格', '<TableColumn></TableColumn>'],
    [Tabs, '标签页', '<Tabs></Tabs>'],
    [Tag, '标签', '<Tag></Tag>'],
    [Textarea, '文本域', '<Textarea></Textarea>'],
    [TimePicker, '日期选择器', '<TimePicker></TimePicker>'],
    [Timeline, '时间线', '<Timeline></Timeline>'],
    [TimelineItem, '时间线', '<TimelineItem></TimelineItem>'],
    [Tooltip, '文字气泡', '<Tooltip></Tooltip>'],
    [Transfer, '穿梭框', '<Transfer></Transfer>'],
    [Tree, '树', '<Tree></Tree>'],
    [TreeSelect, '树选择', '<TreeSelect></TreeSelect>'],
    [Trigger, '触发器', '<Trigger></Trigger>'],
    [Typography, '排版', '<Typography></Typography>'],
    [TypographyParagraph, '排版', '<TypographyParagraph></TypographyParagraph>'],
    [TypographyTitle, '排版', '<TypographyTitle></TypographyTitle>'],
    [Upload, '上传', '<Upload></Upload>'],
    [Watermark, '水印', '<Watermark></Watermark>'],
    [WeekPicker, '日期选择器', '<WeekPicker></WeekPicker>'],
    [YearPicker, '日期选择器', '<YearPicker></YearPicker>'],
  ]
  return componentsReducer(map)
}
