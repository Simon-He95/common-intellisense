import { componentsReducer, propsReducer } from '../../utils'
import ActionSheet from './ActionSheet.json'
import Avatar from './Avatar.json'
import Badge from './Badge.json'
import Button from './Button.json'
import Calendar from './Calendar.json'
import CalendarPicker from './CalendarPicker.json'
import CalendarPickerView from './CalendarPickerView.json'
import CapsuleTabs from './CapsuleTabs.json'
import Card from './Card.json'
import CascadePickerView from './CascadePickerView.json'
import Cascader from './Cascader.json'
import CascaderView from './CascaderView.json'
import CenterPopup from './CenterPopup.json'
import CheckList from './CheckList.json'
import CheckListItem from './CheckListItem.json'
import Checkbox from './Checkbox.json'
import CheckboxGroup from './CheckboxGroup.json'
import Collapse from './Collapse.json'
import CollapsePanel from './CollapsePanel.json'
import ConfigProvider from './ConfigProvider.json'
import DatePicker from './DatePicker.json'
import DatePickerView from './DatePickerView.json'
import Dialog from './Dialog.json'
import Divider from './Divider.json'
import DotLoading from './DotLoading.json'
import Dropdown from './Dropdown.json'
import DropdownItem from './DropdownItem.json'
import Ellipsis from './Ellipsis.json'
import Empty from './Empty.json'
import ErrorBlock from './ErrorBlock.json'
import FloatingBubble from './FloatingBubble.json'
import FloatingPanel from './FloatingPanel.json'
import Footer from './Footer.json'
import FooterChipItem from './FooterChipItem.json'
import FooterLinkItem from './FooterLinkItem.json'
import Form from './Form.json'
import FormArray from './FormArray.json'
import FormHeader from './FormHeader.json'
import FormItem from './FormItem.json'
import FormSubscribe from './FormSubscribe.json'
import Grid from './Grid.json'
import GridItem from './GridItem.json'
import Image from './Image.json'
import ImageUploader from './ImageUploader.json'
import ImageViewer from './ImageViewer.json'
import IndexBar from './IndexBar.json'
import IndexBarPanel from './IndexBarPanel.json'
import InfiniteScroll from './InfiniteScroll.json'
import Input from './Input.json'
import JumboTabs from './JumboTabs.json'
import JumboTabsTab from './JumboTabsTab.json'
import List from './List.json'
import ListItem from './ListItem.json'
import Mask from './Mask.json'
import Modal from './Modal.json'
import NavBar from './NavBar.json'
import NoticeBar from './NoticeBar.json'
import NumberKeyboard from './NumberKeyboard.json'
import PageIndicator from './PageIndicator.json'
import PasscodeInput from './PasscodeInput.json'
import Picker from './Picker.json'
import PickerView from './PickerView.json'
import Popover from './Popover.json'
import PopoverMenu from './PopoverMenu.json'
import Popup from './Popup.json'
import ProgressBar from './ProgressBar.json'
import ProgressCircle from './ProgressCircle.json'
import PullToRefresh from './PullToRefresh.json'
import Radio from './Radio.json'
import RadioGroup from './RadioGroup.json'
import Rate from './Rate.json'
import Result from './Result.json'
import ResultPage from './ResultPage.json'
import ResultPageCard from './ResultPageCard.json'
import SafeArea from './SafeArea.json'
import SearchBar from './SearchBar.json'
import Selector from './Selector.json'
import SideBar from './SideBar.json'
import SideBarItem from './SideBarItem.json'
import Skeleton from './Skeleton.json'
import SkeletonParagraph from './SkeletonParagraph.json'
import SkeletonTitle from './SkeletonTitle.json'
import Slider from './Slider.json'
import Space from './Space.json'
import SpinLoading from './SpinLoading.json'
import Stepper from './Stepper.json'
import Steps from './Steps.json'
import StepsStep from './StepsStep.json'
import SwipeAction from './SwipeAction.json'
import Swiper from './Swiper.json'
import Switch from './Switch.json'
import TabBar from './TabBar.json'
import TabBarItem from './TabBarItem.json'
import Tabs from './Tabs.json'
import TabsTab from './TabsTab.json'
import Tag from './Tag.json'
import TextArea from './TextArea.json'
import TreeSelect from './TreeSelect.json'
import VirtualInput from './VirtualInput.json'
import WaterMark from './WaterMark.json'

export function antdMobile5() {
  const map: any = [
    ActionSheet,
    Avatar,
    Badge,
    Button,
    Calendar,
    CalendarPicker,
    CalendarPickerView,
    CapsuleTabs,
    Card,
    CascadePickerView,
    Cascader,
    CascaderView,
    CenterPopup,
    CheckList,
    CheckListItem,
    Checkbox,
    CheckboxGroup,
    Collapse,
    CollapsePanel,
    ConfigProvider,
    DatePicker,
    DatePickerView,
    Dialog,
    Divider,
    DotLoading,
    Dropdown,
    DropdownItem,
    Ellipsis,
    Empty,
    ErrorBlock,
    FloatingBubble,
    FloatingPanel,
    Footer,
    FooterChipItem,
    FooterLinkItem,
    Form,
    FormArray,
    FormHeader,
    FormItem,
    FormSubscribe,
    Grid,
    GridItem,
    Image,
    ImageUploader,
    ImageViewer,
    IndexBar,
    IndexBarPanel,
    InfiniteScroll,
    Input,
    JumboTabs,
    JumboTabsTab,
    List,
    ListItem,
    Mask,
    Modal,
    NavBar,
    NoticeBar,
    NumberKeyboard,
    PageIndicator,
    PasscodeInput,
    Picker,
    PickerView,
    Popover,
    PopoverMenu,
    Popup,
    ProgressBar,
    ProgressCircle,
    PullToRefresh,
    Radio,
    RadioGroup,
    Rate,
    Result,
    ResultPage,
    ResultPageCard,
    SafeArea,
    SearchBar,
    Selector,
    SideBar,
    SideBarItem,
    Skeleton,
    SkeletonParagraph,
    SkeletonTitle,
    Slider,
    Space,
    SpinLoading,
    Stepper,
    Steps,
    StepsStep,
    SwipeAction,
    Swiper,
    Switch,
    TabBar,
    TabBarItem,
    Tabs,
    TabsTab,
    Tag,
    TextArea,
    TreeSelect,
    VirtualInput,
    WaterMark,
  ]

  return propsReducer('antd-mobile5', map, '')
}

export function antdMobile5Components() {
  const map = [
    [ActionSheet, ActionSheet.name, `<${ActionSheet.name}></${ActionSheet.name}`],
    [Avatar, Avatar.name, `<${Avatar.name}></${Avatar.name}`],
    [Badge, Badge.name, `<${Badge.name}></${Badge.name}`],
    [Button, Button.name, `<${Button.name}></${Button.name}`],
    [Calendar, Calendar.name, `<${Calendar.name}></${Calendar.name}`],
    [CalendarPicker, CalendarPicker.name, `<${CalendarPicker.name}></${CalendarPicker.name}`],
    [CalendarPickerView, CalendarPickerView.name, `<${CalendarPickerView.name}></${CalendarPickerView.name}`],
    [CapsuleTabs, CapsuleTabs.name, `<${CapsuleTabs.name}></${CapsuleTabs.name}`],
    [Card, Card.name, `<${Card.name}></${Card.name}`],
    [CascadePickerView, CascadePickerView.name, `<${CascadePickerView.name}></${CascadePickerView.name}`],
    [Cascader, Cascader.name, `<${Cascader.name}></${Cascader.name}`],
    [CascaderView, CascaderView.name, `<${CascaderView.name}></${CascaderView.name}`],
    [CenterPopup, CenterPopup.name, `<${CenterPopup.name}></${CenterPopup.name}`],
    [CheckList, CheckList.name, `<${CheckList.name}></${CheckList.name}`],
    [CheckListItem, CheckListItem.name, `<${CheckListItem.name}></${CheckListItem.name}`],
    [Checkbox, Checkbox.name, `<${Checkbox.name}></${Checkbox.name}`],
    [CheckboxGroup, CheckboxGroup.name, `<${CheckboxGroup.name}></${CheckboxGroup.name}`],
    [Collapse, Collapse.name, `<${Collapse.name}></${Collapse.name}`],
    [CollapsePanel, CollapsePanel.name, `<${CollapsePanel.name}></${CollapsePanel.name}`],
    [ConfigProvider, ConfigProvider.name, `<${ConfigProvider.name}></${ConfigProvider.name}`],
    [DatePicker, DatePicker.name, `<${DatePicker.name}></${DatePicker.name}`],
    [DatePickerView, DatePickerView.name, `<${DatePickerView.name}></${DatePickerView.name}`],
    [Dialog, Dialog.name, `<${Dialog.name}></${Dialog.name}`],
    [Divider, Divider.name, `<${Divider.name}></${Divider.name}`],
    [DotLoading, DotLoading.name, `<${DotLoading.name}></${DotLoading.name}`],
    [Dropdown, Dropdown.name, `<${Dropdown.name}></${Dropdown.name}`],
    [DropdownItem, DropdownItem.name, `<${DropdownItem.name}></${DropdownItem.name}`],
    [Ellipsis, Ellipsis.name, `<${Ellipsis.name}></${Ellipsis.name}`],
    [Empty, Empty.name, `<${Empty.name}></${Empty.name}`],
    [ErrorBlock, ErrorBlock.name, `<${ErrorBlock.name}></${ErrorBlock.name}`],
    [FloatingBubble, FloatingBubble.name, `<${FloatingBubble.name}></${FloatingBubble.name}`],
    [FloatingPanel, FloatingPanel.name, `<${FloatingPanel.name}></${FloatingPanel.name}`],
    [Footer, Footer.name, `<${Footer.name}></${Footer.name}`],
    [FooterChipItem, FooterChipItem.name, `<${FooterChipItem.name}></${FooterChipItem.name}`],
    [FooterLinkItem, FooterLinkItem.name, `<${FooterLinkItem.name}></${FooterLinkItem.name}`],
    [Form, Form.name, `<${Form.name}></${Form.name}`],
    [FormArray, FormArray.name, `<${FormArray.name}></${FormArray.name}`],
    [FormHeader, FormHeader.name, `<${FormHeader.name}></${FormHeader.name}`],
    [FormItem, FormItem.name, `<${FormItem.name}></${FormItem.name}`],
    [FormSubscribe, FormSubscribe.name, `<${FormSubscribe.name}></${FormSubscribe.name}`],
    [Grid, Grid.name, `<${Grid.name}></${Grid.name}`],
    [GridItem, GridItem.name, `<${GridItem.name}></${GridItem.name}`],
    [Image, Image.name, `<${Image.name}></${Image.name}`],
    [ImageUploader, ImageUploader.name, `<${ImageUploader.name}></${ImageUploader.name}`],
    [ImageViewer, ImageViewer.name, `<${ImageViewer.name}></${ImageViewer.name}`],
    [IndexBar, IndexBar.name, `<${IndexBar.name}></${IndexBar.name}`],
    [IndexBarPanel, IndexBarPanel.name, `<${IndexBarPanel.name}></${IndexBarPanel.name}`],
    [InfiniteScroll, InfiniteScroll.name, `<${InfiniteScroll.name}></${InfiniteScroll.name}`],
    [Input, Input.name, `<${Input.name}></${Input.name}`],
    [JumboTabs, JumboTabs.name, `<${JumboTabs.name}></${JumboTabs.name}`],
    [JumboTabsTab, JumboTabsTab.name, `<${JumboTabsTab.name}></${JumboTabsTab.name}`],
    [List, List.name, `<${List.name}></${List.name}`],
    [ListItem, ListItem.name, `<${ListItem.name}></${ListItem.name}`],
    [Mask, Mask.name, `<${Mask.name}></${Mask.name}`],
    [Modal, Modal.name, `<${Modal.name}></${Modal.name}`],
    [NavBar, NavBar.name, `<${NavBar.name}></${NavBar.name}`],
    [NoticeBar, NoticeBar.name, `<${NoticeBar.name}></${NoticeBar.name}`],
    [NumberKeyboard, NumberKeyboard.name, `<${NumberKeyboard.name}></${NumberKeyboard.name}`],
    [PageIndicator, PageIndicator.name, `<${PageIndicator.name}></${PageIndicator.name}`],
    [PasscodeInput, PasscodeInput.name, `<${PasscodeInput.name}></${PasscodeInput.name}`],
    [Picker, Picker.name, `<${Picker.name}></${Picker.name}`],
    [PickerView, PickerView.name, `<${PickerView.name}></${PickerView.name}`],
    [Popover, Popover.name, `<${Popover.name}></${Popover.name}`],
    [PopoverMenu, PopoverMenu.name, `<${PopoverMenu.name}></${PopoverMenu.name}`],
    [Popup, Popup.name, `<${Popup.name}></${Popup.name}`],
    [ProgressBar, ProgressBar.name, `<${ProgressBar.name}></${ProgressBar.name}`],
    [ProgressCircle, ProgressCircle.name, `<${ProgressCircle.name}></${ProgressCircle.name}`],
    [PullToRefresh, PullToRefresh.name, `<${PullToRefresh.name}></${PullToRefresh.name}`],
    [Radio, Radio.name, `<${Radio.name}></${Radio.name}`],
    [RadioGroup, RadioGroup.name, `<${RadioGroup.name}></${RadioGroup.name}`],
    [Rate, Rate.name, `<${Rate.name}></${Rate.name}`],
    [Result, Result.name, `<${Result.name}></${Result.name}`],
    [ResultPage, ResultPage.name, `<${ResultPage.name}></${ResultPage.name}`],
    [ResultPageCard, ResultPageCard.name, `<${ResultPageCard.name}></${ResultPageCard.name}`],
    [SafeArea, SafeArea.name, `<${SafeArea.name}></${SafeArea.name}`],
    [SearchBar, SearchBar.name, `<${SearchBar.name}></${SearchBar.name}`],
    [Selector, Selector.name, `<${Selector.name}></${Selector.name}`],
    [SideBar, SideBar.name, `<${SideBar.name}></${SideBar.name}`],
    [SideBarItem, SideBarItem.name, `<${SideBarItem.name}></${SideBarItem.name}`],
    [Skeleton, Skeleton.name, `<${Skeleton.name}></${Skeleton.name}`],
    [SkeletonParagraph, SkeletonParagraph.name, `<${SkeletonParagraph.name}></${SkeletonParagraph.name}`],
    [SkeletonTitle, SkeletonTitle.name, `<${SkeletonTitle.name}></${SkeletonTitle.name}`],
    [Slider, Slider.name, `<${Slider.name}></${Slider.name}`],
    [Space, Space.name, `<${Space.name}></${Space.name}`],
    [SpinLoading, SpinLoading.name, `<${SpinLoading.name}></${SpinLoading.name}`],
    [Stepper, Stepper.name, `<${Stepper.name}></${Stepper.name}`],
    [Steps, Steps.name, `<${Steps.name}></${Steps.name}`],
    [StepsStep, StepsStep.name, `<${StepsStep.name}></${StepsStep.name}`],
    [SwipeAction, SwipeAction.name, `<${SwipeAction.name}></${SwipeAction.name}`],
    [Swiper, Swiper.name, `<${Swiper.name}></${Swiper.name}`],
    [Switch, Switch.name, `<${Switch.name}></${Switch.name}`],
    [TabBar, TabBar.name, `<${TabBar.name}></${TabBar.name}`],
    [TabBarItem, TabBarItem.name, `<${TabBarItem.name}></${TabBarItem.name}`],
    [Tabs, Tabs.name, `<${Tabs.name}></${Tabs.name}`],
    [TabsTab, TabsTab.name, `<${TabsTab.name}></${TabsTab.name}`],
    [Tag, Tag.name, `<${Tag.name}></${Tag.name}`],
    [TextArea, TextArea.name, `<${TextArea.name}></${TextArea.name}`],
    [TreeSelect, TreeSelect.name, `<${TreeSelect.name}></${TreeSelect.name}`],
    [VirtualInput, VirtualInput.name, `<${VirtualInput.name}></${VirtualInput.name}`],
    [WaterMark, WaterMark.name, `<${WaterMark.name}></${WaterMark.name}`],
  ]
  return componentsReducer({
    map,
    isSeperatorByHyphen: false,
    prefix: '',
    lib: 'antd-mobile',
    isReact: true,
  })
}
