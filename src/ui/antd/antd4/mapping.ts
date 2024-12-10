import { getLocale } from '@vscode-use/utils'
import Affix from './affix.json'
import Alert from './alert.json'
import Anchor from './anchor.json'
import AutoComplete from './autoComplete.json'
import Avatar from './avatar.json'
import AvatarGroup from './avatarGroup.json'
import BadgeRibbon from './badegRibbon.json'
import Badge from './badge.json'
import Breadcrumb from './breadcrumb.json'
import BreadcrumbItem from './breadcrumbItem.json'
import Button from './button.json'
import Calendar from './calendar.json'
import Card from './card.json'
import CardGrid from './cardGrid.json'
import CardMeta from './cardMeta.json'
import Carousel from './carousel.json'
import Cascader from './cascader.json'
import Checkbox from './checkbox.json'
import CheckboxGroup from './checkboxGroup.json'
import Col from './col.json'
import Collapse from './collapse.json'
import CollapsePanel from './collapsePanel.json'
import ColorPicker from './colorPicker.json'
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
import Icon from './icon.json'
import Image from './image.json'
import ImagePreviewGroup from './imagePreviewGroup.json'
import Input from './input.json'
import InputNumber from './inputNumber.json'
import InputPassword from './inputPassword.json'
import InputSearch from './inputSearch.json'
import InputTextArea from './InputTextArea.json'
import Layout from './layout.json'
import List from './list.json'
import ListItem from './listItem.json'
import ListItemMeta from './listItemMeta.json'
import Mentions from './mentions.json'
import Menu from './menu.json'
import Modal from './modal.json'
import Pagination from './pagination.json'
import Paragraph from './paragraph.json'
import Popconfirm from './popconfirm.json'
import Popover from './popover.json'
import Progress from './progress.json'
import QRCode from './qrCode.json'
import Radio from './radio.json'
import RadioGroup from './radioGroup.json'
import RangePicker from './rangePicker.json'
import Rate from './rate.json'
import Result from './result.json'
import Row from './row.json'
import Segmented from './segmented.json'
import Select from './select.json'
import Sider from './sider.json'
import Slider from './slider.json'
import Space from './space.json'
import Spin from './spin.json'
import Statistic from './statistic.json'
import StatisticCountdown from './statisticCountdown.json'
import Steps from './steps.json'
import Switch from './switch.json'
import Table from './table.json'
import Tabs from './tabs.json'
import Tag from './tag.json'
import TagCheckableTag from './tagCheckableTag.json'
import Text from './text.json'
import Timeline from './timeline.json'
import TimePicker from './timePicker.json'
import Title from './title.json'
import Tooltip from './tooltip.json'
import Tour from './tour.json'
import Transfer from './transfer.json'
import Tree from './tree.json'
import TreeSelect from './treeSelect.json'
import Upload from './upload.json'

export function getPropsMap() {
  return [
    Affix,
    Divider,
    Row,
    Col,
    Layout,
    Sider,
    Space,
    Button,
    Icon,
    Text,
    Title,
    Paragraph,
    Anchor,
    Breadcrumb,
    BreadcrumbItem,
    Dropdown,
    DropdownButton,
    Menu,
    Pagination,
    Steps,
    AutoComplete,
    Cascader,
    Checkbox,
    CheckboxGroup,
    ColorPicker,
    DatePicker,
    RangePicker,
    Form,
    FormItem,
    Input,
    InputNumber,
    InputPassword,
    InputSearch,
    InputTextArea,
    Mentions,
    Radio,
    RadioGroup,
    Rate,
    Select,
    Slider,
    Switch,
    TimePicker,
    Transfer,
    TreeSelect,
    Upload,
    Avatar,
    AvatarGroup,
    Badge,
    BadgeRibbon,
    Calendar,
    Card,
    CardGrid,
    CardMeta,
    Carousel,
    Collapse,
    CollapsePanel,
    Descriptions,
    DescriptionsItem,
    Empty,
    Image,
    ImagePreviewGroup,
    List,
    ListItem,
    ListItemMeta,
    Popover,
    Segmented,
    Statistic,
    StatisticCountdown,
    Table,
    Tabs,
    Tag,
    TagCheckableTag,
    Timeline,
    Tooltip,
    Tree,
    Alert,
    Drawer,
    Modal,
    Popconfirm,
    Progress,
    Result,
    Spin,
  ]
}

export function getComponentMap() {
  const isZh = getLocale().includes('zh')

  return isZh
    ? [
        [Button, '按钮', '<Button type="primary">Primary Button</Button>'],
        ['Typography', '排版', '<Typography></Typography>'],
        [Title, '标题组件', '<Title></Title>'],
        [Paragraph, '排版', '<Paragraph></Paragraph>'],
        ['Link', '文本与超链接组件', `<Link href="https://ant.design" target="_blank">
  Ant Design (Link)
</Link>`],
        [Divider, '分割线', '<Divider />'],
        [Row, '栅格', '<Row></Row>'],
        [Col, '栅格', '<Col></Col>'],
        [Layout, '布局容器，其下可嵌套 Header Sider Content Footer 或 Layout 本身，可以放在任何父容器中。'],
        ['Content', '内容部分，自带默认样式，其下可嵌套任何元素，只能放在 Layout 中'],
        ['Header', '顶部布局，自带默认样式，其下可嵌套任何元素，只能放在 Layout 中。'],
        [Sider, '侧边栏，自带默认样式及基本功能，其下可嵌套任何元素，只能放在 Layout 中。'],
        ['Footer', '底部布局，自带默认样式，其下可嵌套任何元素，只能放在 Layout 中。'],
        [Space, '间距'],
        [Anchor, '锚点'],
        [Breadcrumb, '面包屑'],
        [BreadcrumbItem, '面包屑子项'],
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
        ['Checkbox.Group', '多选框组', '<Checkbox.Group style={{ width: \'100%\' }} onChange={onChange}></Checkbox.Group>'],
        [ColorPicker, '颜色选择器', '<ColorPicker />'],
        [DatePicker, '日期选择框', '<DatePicker onChange={onChange} />'],
        ['DatePicker.RangePicker', '日期选择框'],
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
        ['Form.Item', '表单项', `<Form.Item
  label="Username"
  name="username"
  rules={[{ required: true, message: 'Please input your username!' }]}
>
  <Input />
</Form.Item>`],
        [Input, '输入框', '<Input placeholder="Basic usage" />'],
        ['Input.Search', '输入框'],
        ['Input.TextArea', '输入框'],
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
        ['Card.Grid', '网格型内嵌卡片', 'Card.Grid style={gridStyle}>Content</Card.Grid>'],
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
        ['Panel', '折叠面板项', `<Panel header="This is panel header 1" key="1">
  <p>{text}</p>
</Panel>`],
        [Descriptions, '描述列表'],
        ['Descriptions.Item', '描述列表'],
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
        ['List.Item', '列表项', `<List.Item>
  <Typography.Text mark>[ITEM]</Typography.Text> {item}
</List.Item>`],
        [Popover, '气泡卡片', `<Popover content={content} title="Title">
  <Button type="primary">Hover me</Button>
</Popover>`],
        [QRCode, '二维码', '<QRCode value={text || \'-\'} />'],
        [Segmented, '分段控制器', '<Segmented options={[\'Daily\', \'Weekly\', \'Monthly\', \'Quarterly\', \'Yearly\']} />'],
        [Statistic, '统计数值'],
        ['Statistic.Countdown', '统计数值'],
        [Table, '表格'],
        ['TabPane', '标签项', `<TabPane tab="Tab 1" key="1">
  Content of Tab Pane 1
</TabPane>`],
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
        ['Skeleton', '骨架屏', '<Skeleton />'],
        [Spin, '加载中', '<Spin />'],
        [Affix, '固钉', `<Affix offsetTop={top}>
  <Button type="primary" onClick={() => setTop(top + 10)}>
    Affix top
  </Button>
</Affix>`],
        ['App', '包裹组件'],
        ['ConfigProvider', '全局化配置'],
        ['FloatButton', '悬浮按钮', '<FloatButton onClick={() => console.log(\'click\')} />'],
        ['Watermark', '水印', `<Watermark content="Ant Design">
  <div style={{ height: 500 }} />
</Watermark>`],
      ]
    : [
        [Button, 'Button', '<Button type="primary">Primary Button</Button>'],
        ['Typography', 'Typography', '<Typography></Typography>'],
        [Title, 'Title component', '<Title></Title>'],
        [Paragraph, 'Typesetting', '<Paragraph></Paragraph>'],
        ['Link', 'Text and hyperlink components', `<Link href="https://ant.design" target="_blank">
   Ant Design (Link)
</Link>`],
        [Divider, 'divider', '<Divider />'],
        [Row, 'Grid', '<Row></Row>'],
        [Col, 'Grid', '<Col></Col>'],
        [Layout, 'Layout container, under which Header Sider Content Footer or Layout itself can be nested, which can be placed in any parent container. '],
        ['Content', 'The content part has its own default style. Any element can be nested under it and can only be placed in Layout'],
        ['Header', 'Top layout, with its own default style, any element can be nested under it, and can only be placed in Layout. '],
        [Sider, 'The sidebar has its own default style and basic functions. Any element can be nested under it and can only be placed in Layout. '],
        ['Footer', 'Bottom layout, with its own default style, any element can be nested under it, and can only be placed in Layout. '],
        [Space, 'spacing'],
        [Anchor, 'anchor'],
        [Breadcrumb, 'breadcrumb'],
        [BreadcrumbItem, 'breadcrumbItem'],
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
        ['Checkbox.Group', 'Multiple checkbox group', '<Checkbox.Group style={{ width: \'100%\' }} onChange={onChange}></Checkbox.Group>'],
        [ColorPicker, 'Color Picker', '<ColorPicker />'],
        [DatePicker, 'Date selection box', '<DatePicker onChange={onChange} />'],
        ['DatePicker.RangePicker', 'Date selection box'],
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
        ['Form.Item', 'Form item', `<Form.Item
   label="Username"
   name="username"
   rules={[{ required: true, message: 'Please input your username!' }]}
>
   <Input />
</Form.Item>`],
        [Input, 'input box', '<Input placeholder="Basic usage" />'],
        ['Input.Search', 'input box'],
        ['Input.TextArea', 'input box'],
        [InputNumber, 'Number input box', '<InputNumber min={1} max={10} defaultValue={3} onChange={onChange} />'],
        [Mentions, 'mentions', '<Mentions options={options} />'],
        [Radio, 'Radio button', '<Radio>Radio</Radio>'],
        ['Radio.Button', 'Radio button button', '<Radio.Button>Radio</Radio.Button>'],
        ['Radio.Group', 'Radio group', `<Radio.Group name="radiogroup" defaultValue={1}>
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
        ['Card.Grid', 'Grid style embedded card', 'Card.Grid style={gridStyle}>Content</Card.Grid>'],
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
        ['Panel', 'Collapse panel item', `<Panel header="This is panel header 1" key="1">
   <p>{text}</p>
</Panel>`],
        [Descriptions, 'Description list'],
        ['Descriptions.Item', 'Description list'],
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
        ['List.Item', 'List item', `<List.Item>
   <Typography.Text mark>[ITEM]</Typography.Text> {item}
</List.Item>`],
        [Popover, 'Bubble Card', `<Popover content={content} title="Title">
   <Button type="primary">Hover me</Button>
</Popover>`],
        [QRCode, 'QR code', '<QRCode value={text || \'-\'} />'],
        [Segmented, 'Segmented Controller', '<Segmented options={[\'Daily\', \'Weekly\', \'Monthly\', \'Quarterly\', \'Yearly\']} /> '],
        [Statistic, 'statistical value'],
        ['Statistic.Countdown', 'statistical value'],
        [Table, 'table'],
        ['TabPane', 'Tab item', `<TabPane tab="Tab 1" key="1">
   Content of Tab Pane 1
</TabPane>`],
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
        ['Skeleton', 'Skeleton Screen', '<Skeleton />'],
        [Spin, 'Loading', '<Spin />'],
        [Affix, 'fix', `<Affix offsetTop={top}>
   <Button type="primary" onClick={() => setTop(top + 10)}>
     Affix top
   </Button>
</Affix>`],
        ['App', 'Wrapped component'],
        ['ConfigProvider', 'Global configuration'],
        ['FloatButton', 'Floating Button', '<FloatButton onClick={() => console.log(\'click\')} />'],
        ['Watermark', 'Watermark', `<Watermark content="Ant Design">
   <div style={{ height: 500 }} />
</Watermark>`],
      ]
}
