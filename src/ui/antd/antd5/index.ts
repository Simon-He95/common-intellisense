import { getLocale } from '@vscode-use/utils'
import { componentsReducer, propsReducer } from '../../utils'
import FormErrorList from './FormErrorList.json'
import FormList from './FormList.json'
import FormProvider from './FormProvider.json'
import Affix from './Affix.json'
import Alert from './Alert.json'
import Anchor from './Anchor.json'
import AnchorItem from './AnchorItem.json'
import AutoComplete from './AutoComplete.json'
import Avatar from './Avatar.json'
import AvatarGroup from './AvatarGroup.json'
import BadgeRibbon from './BadegRibbon.json'
import Badge from './Badge.json'
import Breadcrumb from './Breadcrumb.json'
import BreadcrumbItem from './BreadcrumbItem.json'
import Button from './Button.json'
import Calendar from './Calendar.json'
import Card from './Card.json'
import CardGrid from './CardGrid.json'
import CardMeta from './CardMeta.json'
import Carousel from './Carousel.json'
import Cascader from './Cascader.json'
import Checkbox from './Checkbox.json'
import CheckboxGroup from './CheckboxGroup.json'
import Col from './Col.json'
import Collapse from './Collapse.json'
import CollapsePanel from './CollapsePanel.json'
import ColorPicker from './ColorPicker.json'
import DatePicker from './DatePicker.json'
import DescriptionsItem from './DescriptionsItem.json'
import Descriptions from './Descriptions.json'
import Divider from './Divider.json'
import Drawer from './Drawer.json'
import Dropdown from './Dropdown.json'
import DropdownButton from './DropdownButton.json'
import Empty from './Empty.json'
import Form from './Form.json'
import FormItem from './FormItem.json'
import Icon from './Icon.json'
import Image from './Image.json'
import ImagePreviewGroup from './ImagePreviewGroup.json'
import Input from './Input.json'
import InputNumber from './InputNumber.json'
import InputPassword from './InputPassword.json'
import InputSearch from './InputSearch.json'
import InputTextArea from './InputTextArea.json'
import Layout from './Layout.json'
import LayoutSider from './LayoutSider.json'
import List from './List.json'
import ListItem from './ListItem.json'
import ListItemMeta from './ListItemMeta.json'
import Mentions from './Mentions.json'
import Menu from './Menu.json'
import Modal from './Modal.json'
import Pagination from './Pagination.json'
import Popconfirm from './Popconfirm.json'
import Popover from './Popover.json'
import Progress from './Progress.json'
import QRCode from './QrCode.json'
import Radio from './Radio.json'
import RadioButton from './RadioButton.json'
import RadioGroup from './RadioGroup.json'
import RangePicker from './RangePicker.json'
import Rate from './Rate.json'
import Result from './Result.json'
import Row from './Row.json'
import Segmented from './Segmented.json'
import Select from './Select.json'
import Slider from './Slider.json'
import Space from './Space.json'
import Spin from './Spin.json'
import Statistic from './Statistic.json'
import StatisticCountdown from './StatisticCountdown.json'
import Steps from './Steps.json'
import Switch from './Switch.json'
import Table from './Table.json'
import TableColumn from './TableColumn.json'
import TableColumnGroup from './TableColumnGroup.json'
import Tabs from './Tabs.json'
import Tag from './Tag.json'
import TagCheckableTag from './TagCheckableTag.json'
import Timeline from './Timeline.json'
import TimePicker from './TimePicker.json'
import Tooltip from './Tooltip.json'
import Tour from './Tour.json'
import Transfer from './Transfer.json'
import Tree from './Tree.json'
import TreeSelect from './TreeSelect.json'
import TypographyParagraph from './TypographyParagraph.json'
import Typography from './Typography.json'
import TypographyText from './TypographyText.json'
import TypographyTitle from './TypographyTitle.json'
import TypographyLink from './TypographyLink.json'
import Upload from './Upload.json'
import FloatButton from './FloatButton.json'
import FloatButtonBackTop from './FloatButtonBackTop.json'
import FloatButtonGroup from './FloatButtonGroup.json'
import Watermark from './Watermark.json'
import App from './App.json'
import ConfigProvider from './ConfigProvider.json'
import Skeleton from './Skeleton.json'
import Flex from './Flex.json'

export function antd5() {
  const map: any = [
    FormErrorList,
    FormList,
    FormProvider,
    Affix,
    Alert,
    Anchor,
    AnchorItem,
    AutoComplete,
    Avatar,
    AvatarGroup,
    BadgeRibbon,
    Badge,
    Breadcrumb,
    BreadcrumbItem,
    Button,
    Calendar,
    Card,
    CardGrid,
    CardMeta,
    Carousel,
    Cascader,
    Checkbox,
    CheckboxGroup,
    Col,
    Collapse,
    CollapsePanel,
    ColorPicker,
    DatePicker,
    DescriptionsItem,
    Descriptions,
    Divider,
    Drawer,
    Dropdown,
    DropdownButton,
    Empty,
    Form,
    FormItem,
    Icon,
    Image,
    ImagePreviewGroup,
    Input,
    InputNumber,
    InputPassword,
    InputSearch,
    InputTextArea,
    Layout,
    LayoutSider,
    List,
    ListItem,
    ListItemMeta,
    Mentions,
    Menu,
    Modal,
    Pagination,
    Popconfirm,
    Popover,
    Progress,
    QRCode,
    Radio,
    RadioButton,
    RadioGroup,
    RangePicker,
    Rate,
    Result,
    Row,
    Segmented,
    Select,
    Slider,
    Space,
    Spin,
    Statistic,
    StatisticCountdown,
    Steps,
    Switch,
    Table,
    TableColumn,
    TableColumnGroup,
    Tabs,
    Tag,
    TagCheckableTag,
    Timeline,
    TimePicker,
    Tooltip,
    Tour,
    Transfer,
    Tree,
    TreeSelect,
    TypographyParagraph,
    Typography,
    TypographyText,
    TypographyTitle,
    Upload,
    FloatButton,
    FloatButtonBackTop,
    FloatButtonGroup,
    Watermark,
    App,
    ConfigProvider,
    Skeleton,
    TypographyLink,
    Flex,
  ]

  return propsReducer('antd5', map, '')
}

export function antd5Components() {
  const isZh = getLocale().includes('zh')

  const map = isZh
    ? [
        [Flex, '弹性布局'],
        [Button, '按钮', '<Button type="primary">Primary Button</Button>'],
        [Typography, '排版', '<Typography></Typography>'],
        [TypographyParagraph, '段落', '<TypographyParagraph></TypographyParagraph>'],
        [TypographyLink, '链接', '<TypographyLink></TypographyLink>'],
        [TypographyText, '文本', '<TypographyText></TypographyText>'],
        [TypographyTitle, '标题', '<TypographyTitle></TypographyTitle>'],
        [Divider, '分割线', '<Divider />'],
        [Row, '栅格', '<Row></Row>'],
        [Col, '栅格', '<Col></Col>'],
        [Layout, '布局容器，其下可嵌套 Header Sider Content Footer 或 Layout 本身，可以放在任何父容器中。'],
        ['Content', '内容部分，自带默认样式，其下可嵌套任何元素，只能放在 Layout 中'],
        ['Header', '顶部布局，自带默认样式，其下可嵌套任何元素，只能放在 Layout 中。'],
        ['Footer', '底部布局，自带默认样式，其下可嵌套任何元素，只能放在 Layout 中。'],
        [Space, '间距'],
        [Anchor, '锚点'],
        [Breadcrumb, '面包屑'],
        [Dropdown, '下拉菜单'],
        [Menu, '导航菜单'],
        [Pagination, '分页', '<Pagination defaultCurrent={1} total={50} />'],
        [Steps, '步骤条', `<Steps
  current={1}
  items={[
    {
      title: Finished,
      description,
    },
    {
      title: 'In Progress',
      description,
      subTitle: 'Left 00:00:08',
    },
    {
      title: Waiting,
      description,
    },
  ]}
/>`],
        [AutoComplete, '自动完成', `<AutoComplete
  options={options}
  style={{ width: 200 }}
  onSelect={onSelect}
  onSearch={(text) => setOptions(getPanelValue(text))}
  placeholder="input here"
/>`],
        [Cascader, '级联选择', '<Cascader options={options} onChange={onChange} placeholder="Please select" />'],
        [Checkbox, '多选框', '<Checkbox onChange={onChange}>Checkbox</Checkbox>'],
        [CheckboxGroup, '多选框组', '<Checkbox.Group style={{ width: \'100%\' }} onChange={onChange}></Checkbox.Group>'],
        [ColorPicker, '颜色选择器', '<ColorPicker />'],
        [DatePicker, '日期选择框', '<DatePicker onChange={onChange} />'],
        [RangePicker, '日期选择框'],
        [Form, '表单', `<Form
  name="basic"
  labelCol={{ span: 8 }}
  wrapperCol={{ span: 16 }}
  style={{ maxWidth: 600 }}
  initialValues={{ remember: true }}
  onFinish={onFinish}
  onFinishFailed={onFinishFailed}
  autoComplete="off"
></Form>`],
        [FormList, '为字段提供数组化管理', '<Form.List></Form.List>'],
        [FormErrorList, '4.7.0 新增。错误展示组件，仅限配合 Form.List 的 rules 一同使用', '<Form.ErrorList></Form.ErrorList>'],
        [FormProvider, '提供表单间联动功能', '<Form.Provider></Form.Provider>'],
        [FormItem, '表单项', `<Form.Item
  label="Username"
  name="username"
  rules={[{ required: true, message: 'Please input your username!' }]}
>
  <Input />
</Form.Item>`],
        [Input, '输入框', '<Input placeholder="Basic usage" />'],
        [InputSearch, '输入框'],
        [InputTextArea, '输入框'],
        [InputNumber, '数字输入框', '<InputNumber min={1} max={10} defaultValue={3} onChange={onChange} />'],
        [Mentions, '提及', '<Mentions options={options} />'],
        [Radio, '单选框', '<Radio>Radio</Radio>'],
        ['Radio.Button', '单选框按钮', '<Radio.Button>Radio</Radio.Button>'],
        ['Radio.Group', '单选框组', `<Radio.Group name="radiogroup" defaultValue={1}>
  <Radio value={1}>A</Radio>
  <Radio value={2}>B</Radio>
  <Radio value={3}>C</Radio>
  <Radio value={4}>D</Radio>
</Radio.Group>`],
        [Rate, '评分', '<Rate />'],
        [Select, '选择器', `<Select
  defaultValue="lucy"
  style={{ width: 120 }}
  onChange={handleChange}
  options={[
    { value: 'jack', label: Jack },
    { value: 'lucy', label: Lucy },
    { value: Yiminghe, label: 'yiminghe' },
    { value: 'disabled', label: Disabled, disabled: true },
  ]}
/>`],
        [Slider, '滑动输入条', '<Slider defaultValue={30} disabled={disabled} />'],
        [Switch, '开关', '<Switch defaultChecked onChange={onChange} />'],
        [TimePicker, '时间选择框', '<TimePicker onChange={onChange} defaultOpenValue={dayjs(\'00:00:00\', \'HH:mm:ss\')} />'],
        [Transfer, '穿梭框', `<Transfer
  dataSource={mockData}
  titles={[Source, Target]}
  targetKeys={targetKeys}
  selectedKeys={selectedKeys}
  onChange={onChange}
  onSelectChange={onSelectChange}
  onScroll={onScroll}
  render={(item) => item.title}
/>`],
        [TreeSelect, '树选择', `<TreeSelect
  showSearch
  style={{ width: '100%' }}
  value={value}
  dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
  placeholder="Please select"
  allowClear
  treeDefaultExpandAll
  onChange={onChange}
  treeData={treeData}
/>`],
        [Upload, '上传', `<Upload {...props}>
  <Button icon={<UploadOutlined />}>Click to Upload</Button>
</Upload>`],
        [Avatar, '头像', '<Avatar size={64} icon={<UserOutlined />} />'],
        [Badge, '徽标数', `<Badge count={5}>
  <Avatar shape="square" size="large" />
</Badge>`],
        [Calendar, '日历', '<Calendar onPanelChange={onPanelChange} />'],
        [Card, '卡片', `<Card title="Default size card" extra={<a href="#">More</a>} style={{ width: 300 }}>
  <p>Card content</p>
  <p>Card content</p>
  <p>Card content</p>
</Card>`],
        [CardGrid, '网格型内嵌卡片', 'Card.Grid style={gridStyle}>Content</Card.Grid>'],
        [Carousel, '走马灯', `<Carousel afterChange={onChange}>
  <div>
    <h3 style={contentStyle}>1</h3>
  </div>
  <div>
    <h3 style={contentStyle}>2</h3>
  </div>
  <div>
    <h3 style={contentStyle}>3</h3>
  </div>
  <div>
    <h3 style={contentStyle}>4</h3>
  </div>
</Carousel>`],
        [Collapse, '折叠面板', '<Collapse items={items} defaultActiveKey={[\'1\']} />'],
        [CollapsePanel, '折叠面板项', `<Panel header="This is panel header 1" key="1">
  <p>{text}</p>
</Panel>`],
        [Descriptions, '描述列表'],
        [DescriptionsItem, '描述列表'],
        [Empty, '空状态', '<Empty />'],
        [Image, '图片', `<Image
  width={200}
  src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
/>`],
        [List, '列表', `<List
  header={<div>Header</div>}
  footer={<div>Footer</div>}
  bordered
  dataSource={data}
  renderItem={(item) => (
    <List.Item>
      <Typography.Text mark>[ITEM]</Typography.Text> {item}
    </List.Item>
  )}
/>`],
        [ListItem, '列表项', `<List.Item>
<Typography.Text mark>[ITEM]</Typography.Text> {item}
</List.Item>`],
        [Popover, '气泡卡片', `<Popover content={content} title="Title">
  <Button type="primary">Hover me</Button>
</Popover>`],
        [QRCode, '二维码', '<QRCode value={text || \'-\'} />'],
        [Segmented, '分段控制器', '<Segmented options={[\'Daily\', \'Weekly\', \'Monthly\', \'Quarterly\', \'Yearly\']} />'],
        [Statistic, '统计数值'],
        [StatisticCountdown, '统计数值'],
        [Table, '表格'],
        [Tabs, '标签页', '<Tabs defaultActiveKey="1" items={items} onChange={onChange} />'],
        [Tag, '标签', '<Tag>Tag 1</Tag>'],
        [Timeline, '时间轴', `<Timeline onChange={onChange}>
  <Timeline.Item>Sample</Timeline.Item>
</Timeline>`],
        [Tooltip, '文字提示', `<Tooltip title="prompt text">
  <span>Tooltip will show on mouse enter.</span>
</Tooltip>`],
        [Tour, '漫游式引导', '<Tour open={open} onClose={() => setOpen(false)} steps={steps} />'],
        [Tree, '树形控件', `<Tree
  checkable
  defaultExpandedKeys={['0-0-0', '0-0-1']}
  defaultSelectedKeys={['0-0-0', '0-0-1']}
  defaultCheckedKeys={['0-0-0', '0-0-1']}
  onSelect={onSelect}
  onCheck={onCheck}
  treeData={treeData}
/>`],
        [Alert, '警告提示', '<Alert message="Success Text" type="success" />'],
        [Drawer, '抽屉', `<Drawer title="Basic Drawer" placement="right" onClose={onClose} open={open}>
  <p>Some contents...</p>
  <p>Some contents...</p>
  <p>Some contents...</p>
</Drawer>`],
        [Modal, '对话框', `<Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
  <p>Some contents...</p>
  <p>Some contents...</p>
  <p>Some contents...</p>
</Modal>`],
        [Popconfirm, '气泡确认框', `<Popconfirm
  title="Delete the task"
  description="Are you sure to delete this task?"
  onConfirm={confirm}
  onCancel={cancel}
  okText="Yes"
  cancelText="No"
  >
  <Button danger>Delete</Button>
</Popconfirm>`],
        [Progress, '进度条', '<Progress percent={30} />'],
        [Result, '结果', `<Result
  status="success"
  title="Successfully Purchased Cloud Server ECS!"
  subTitle="Order number: 2017182818828182881 Cloud server configuration takes 1-5 minutes, please wait."
  extra={[
    <Button type="primary" key="console">
      Go Console
    </Button>,
    <Button key="buy">Buy Again</Button>,
  ]}
/>`],
        [Skeleton, '骨架屏', '<Skeleton />'],
        [Spin, '加载中', '<Spin />'],
        [Affix, '固钉', `<Affix offsetTop={top}>
  <Button type="primary" onClick={() => setTop(top + 10)}>
    Affix top
  </Button>
</Affix>`],
        [App, '包裹组件'],
        [ConfigProvider, '全局化配置'],
        [FloatButton, '悬浮按钮', '<FloatButton onClick={() => console.log(\'click\')} />'],
        [FloatButtonBackTop, '悬浮按钮', '<FloatButton.BackTop onClick={() => console.log(\'click\')} />'],
        [FloatButtonGroup, '悬浮按钮', '<FloatButton.Group onClick={() => console.log(\'click\')} />'],
        [Watermark, '水印', `<Watermark content="Ant Design">
  <div style={{ height: 500 }} />
</Watermark>`],
      ]
    : [
        [Flex, 'Flex box'],
        [Button, 'Button', '<Button type="primary">Primary Button</Button>'],
        [Typography, 'Typography', '<Typography></Typography>'],
        [TypographyParagraph, 'TypographyParagraph', '<TypographyParagraph></TypographyParagraph>'],
        [TypographyLink, 'TypographyLink', '<TypographyLink></TypographyLink>'],
        [TypographyText, 'TypographyText', '<TypographyText></TypographyText>'],
        [TypographyTitle, 'TypographyTitle', '<TypographyTitle></TypographyTitle>'],
        ['Link', 'Text and hyperlink components', `<Link href="https://ant.design" target="_blank">
   Ant Design (Link)
</Link>`],
        [Divider, 'divider', '<Divider />'],
        [Row, 'Grid', '<Row></Row>'],
        [Col, 'Grid', '<Col></Col>'],
        [Layout, 'Layout container, under which Header Sider Content Footer or Layout itself can be nested, which can be placed in any parent container. '],
        ['Content', 'The content part has its own default style. Any element can be nested under it and can only be placed in Layout'],
        ['Header', 'Top layout, with its own default style, any element can be nested under it, and can only be placed in Layout. '],
        [LayoutSider, 'The sidebar has its own default style and basic functions. Any element can be nested under it and can only be placed in Layout. '],
        ['Footer', 'Bottom layout, with its own default style, any element can be nested under it, and can only be placed in Layout. '],
        [Space, 'spacing'],
        [Anchor, 'anchor'],
        [AnchorItem, 'anchor item'],
        [Breadcrumb, 'breadcrumb'],
        [BreadcrumbItem, 'BreadcrumbItem'],
        [Dropdown, 'Dropdown menu'],
        [Menu, 'Navigation menu'],
        [Pagination, 'Pagination', '<Pagination defaultCurrent={1} total={50} />'],
        [Steps, 'step bar', `<Steps
   current={1}
   items={[
     {
       title: Finished,
       description,
     },
     {
       title: 'In Progress',
       description,
       subTitle: 'Left 00:00:08',
     },
     {
       title: Waiting,
       description,
     },
   ]}
/>`],
        [AutoComplete, 'AutoComplete', `<AutoComplete
   options={options}
   style={{ width: 200 }}
   onSelect={onSelect}
   onSearch={(text) => setOptions(getPanelValue(text))}
   placeholder="input here"
/>`],
        [Cascader, 'Cascade selection', '<Cascader options={options} onChange={onChange} placeholder="Please select" />'],
        [Checkbox, 'Multiple checkbox', '<Checkbox onChange={onChange}>Checkbox</Checkbox>'],
        [CheckboxGroup, 'Multiple checkbox group', '<Checkbox.Group style={{ width: \'100%\' }} onChange={onChange}></Checkbox.Group>'],
        [ColorPicker, 'Color Picker', '<ColorPicker />'],
        [DatePicker, 'Date selection box', '<DatePicker onChange={onChange} />'],
        [RangePicker, 'Date selection box'],
        [Form, 'form', `<Form
   name="basic"
   labelCol={{ span: 8 }}
   wrapperCol={{ span: 16 }}
   style={{ maxWidth: 600 }}
   initialValues={{ remember: true }}
   onFinish={onFinish}
   onFinishFailed={onFinishFailed}
   autoComplete="off"
></Form>`],
        [FormList, 'FormList', '<Form.List></Form.List>'],
        [FormErrorList, 'FormErrorList', '<Form.ErrorList></Form.ErrorList>'],
        [FormProvider, 'FormProvider', '<Form.Provider></Form.Provider>'],
        [FormItem, 'Form item', `<Form.Item
   label="Username"
   name="username"
   rules={[{ required: true, message: 'Please input your username!' }]}
>
   <Input />
</Form.Item>`],
        [Input, 'input box', '<Input placeholder="Basic usage" />'],
        [InputSearch, 'input box'],
        [InputTextArea, 'input box'],
        [InputNumber, 'Number input box', '<InputNumber min={1} max={10} defaultValue={3} onChange={onChange} />'],
        [Mentions, 'mentions', '<Mentions options={options} />'],
        [Radio, 'Radio button', '<Radio>Radio</Radio>'],
        [RadioButton, 'Radio button button', '<Radio.Button>Radio</Radio.Button>'],
        [RadioGroup, 'Radio group', `<Radio.Group name="radiogroup" defaultValue={1}>
   <Radio value={1}>A</Radio>
   <Radio value={2}>B</Radio>
   <Radio value={3}>C</Radio>
   <Radio value={4}>D</Radio>
</Radio.Group>`],
        [Rate, 'Rating', '<Rate />'],
        [Select, 'selector', `<Select
   defaultValue="lucy"
   style={{ width: 120 }}
   onChange={handleChange}
   options={[
     { value: 'jack', label: Jack },
     { value: 'lucy', label: Lucy },
     { value: Yiminghe, label: 'yiminghe' },
     { value: 'disabled', label: Disabled, disabled: true },
   ]}
/>`],
        [Slider, 'Sliding input bar', '<Slider defaultValue={30} disabled={disabled} />'],
        [Switch, 'switch', '<Switch defaultChecked onChange={onChange} />'],
        [TimePicker, 'Time selection box', '<TimePicker onChange={onChange} defaultOpenValue={dayjs(\'00:00:00\', \'HH:mm:ss\')} />'],
        [Transfer, 'shuttle box', `<Transfer
   dataSource={mockData}
   titles={[Source, Target]}
   targetKeys={targetKeys}
   selectedKeys={selectedKeys}
   onChange={onChange}
   onSelectChange={onSelectChange}
   onScroll={onScroll}
   render={(item) => item.title}
/>`],
        [TreeSelect, 'TreeSelect', `<TreeSelect
   showSearch
   style={{ width: '100%' }}
   value={value}
   dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
   placeholder="Please select"
   allowClear
   treeDefaultExpandAll
   onChange={onChange}
   treeData={treeData}
/>`],
        [Upload, 'upload', `<Upload {...props}>
   <Button icon={<UploadOutlined />}>Click to Upload</Button>
</Upload>`],
        [Avatar, 'avatar', '<Avatar size={64} icon={<UserOutlined />} />'],
        [Badge, 'Badge count', `<Badge count={5}>
   <Avatar shape="square" size="large" />
</Badge>`],
        [Calendar, 'Calendar', '<Calendar onPanelChange={onPanelChange} />'],
        [Card, 'Card', `<Card title="Default size card" extra={<a href="#">More</a>} style={{ width: 300 }}>
   <p>Card content</p>
   <p>Card content</p>
   <p>Card content</p>
</Card>`],
        [CardGrid, 'Grid style embedded card', 'Card.Grid style={gridStyle}>Content</Card.Grid>'],
        [Carousel, 'Carousel', `<Carousel afterChange={onChange}>
   <div>
     <h3 style={contentStyle}>1</h3>
   </div>
   <div>
     <h3 style={contentStyle}>2</h3>
   </div>
   <div>
     <h3 style={contentStyle}>3</h3>
   </div>
   <div>
     <h3 style={contentStyle}>4</h3>
   </div>
</Carousel>`],
        [Collapse, 'collapse panel', '<Collapse items={items} defaultActiveKey={[\'1\']} />'],
        [CollapsePanel, 'Collapse panel item', `<Panel header="This is panel header 1" key="1">
   <p>{text}</p>
</Panel>`],
        [Descriptions, 'Description list'],
        [DescriptionsItem, 'Description list'],
        [Empty, 'Empty state', '<Empty />'],
        [Image, 'picture', `<Image
   width={200}
   src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
/>`],
        [List, 'List', `<List
   header={<div>Header</div>}
   footer={<div>Footer</div>}
   bordered
   dataSource={data}
   renderItem={(item) => (
     <List.Item>
       <Typography.Text mark>[ITEM]</Typography.Text> {item}
     </List.Item>
   )}
/>`],
        [ListItem, 'List item', `<List.Item>
   <Typography.Text mark>[ITEM]</Typography.Text> {item}
</List.Item>`],
        [Popover, 'Bubble Card', `<Popover content={content} title="Title">
   <Button type="primary">Hover me</Button>
</Popover>`],
        [QRCode, 'QR code', '<QRCode value={text || \'-\'} />'],
        [Segmented, 'Segmented Controller', '<Segmented options={[\'Daily\', \'Weekly\', \'Monthly\', \'Quarterly\', \'Yearly\']} /> '],
        [Statistic, 'statistical value'],
        [StatisticCountdown, 'statistical value'],
        [Table, 'table'],
        [TableColumn, 'TableColumn'],
        [TableColumnGroup, 'TableColumnGroup'],
        [Tabs, 'Tabs', '<Tabs defaultActiveKey="1" items={items} onChange={onChange} />'],
        [Tag, 'tag', '<Tag>Tag 1</Tag>'],
        [Timeline, 'Timeline', `<Timeline onChange={onChange}>
   <Timeline.Item>Sample</Timeline.Item>
</Timeline>`],
        [Tooltip, 'Text prompt', `<Tooltip title="prompt text">
   <span>Tooltip will show on mouse enter.</span>
</Tooltip>`],
        [Tour, 'Roaming guide', '<Tour open={open} onClose={() => setOpen(false)} steps={steps} />'],
        [Tree, 'Tree control', `<Tree
   checkable
   defaultExpandedKeys={['0-0-0', '0-0-1']}
   defaultSelectedKeys={['0-0-0', '0-0-1']}
   defaultCheckedKeys={['0-0-0', '0-0-1']}
   onSelect={onSelect}
   onCheck={onCheck}
   treeData={treeData}
/>`],
        [Alert, 'Warning prompt', '<Alert message="Success Text" type="success" />'],
        [Drawer, 'Drawer', `<Drawer title="Basic Drawer" placement="right" onClose={onClose} open={open}>
   <p>Some contents...</p>
   <p>Some contents...</p>
   <p>Some contents...</p>
</Drawer>`],
        [Modal, 'Dialog', `<Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
   <p>Some contents...</p>
   <p>Some contents...</p>
   <p>Some contents...</p>
</Modal>`],
        [Popconfirm, 'Bubble confirmation box', `<Popconfirm
   title="Delete the task"
   description="Are you sure to delete this task?"
   onConfirm={confirm}
   onCancel={cancel}
   okText="Yes"
   cancelText="No"
   >
   <Button danger>Delete</Button>
</Popconfirm>`],
        [Progress, 'Progress bar', '<Progress percent={30} />'],
        [Result, 'result', `<Result
   status="success"
   title="Successfully Purchased Cloud Server ECS!"
   subTitle="Order number: 2017182818828182881 Cloud server configuration takes 1-5 minutes, please wait."
   extra={[
     <Button type="primary" key="console">
       Go Console
     </Button>,
     <Button key="buy">Buy Again</Button>,
   ]}
/>`],
        [Skeleton, 'Skeleton Screen', '<Skeleton />'],
        [Spin, 'Loading', '<Spin />'],
        [Affix, 'fix', `<Affix offsetTop={top}>
   <Button type="primary" onClick={() => setTop(top + 10)}>
     Affix top
   </Button>
</Affix>`],
        [App, 'Wrapped component'],
        [ConfigProvider, 'Global configuration'],
        [FloatButton, 'Floating Button', '<FloatButton onClick={() => console.log(\'click\')} />'],
        [FloatButtonBackTop, 'Floating Button', '<FloatButton.BackTop onClick={() => console.log(\'click\')} />'],
        [FloatButtonGroup, 'Floating Button', '<FloatButton.Group onClick={() => console.log(\'click\')} />'],
        [Watermark, 'Watermark', `<Watermark content="Ant Design">
   <div style={{ height: 500 }} />
</Watermark>`],
      ]
  return componentsReducer({
    map,
    isSeperatorByHyphen: false,
    prefix: '',
    lib: 'antd',
    isReact: true,
  })
}
