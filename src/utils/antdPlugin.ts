import * as antIcons from '@ant-design/icons-vue'
import {
  Button,
  Input,
  message,
  Layout,
  Breadcrumb,
  Menu,
  PageHeader,
  Tag,
  Space,
  Row,
  Col,
  Form,
  Select,
  Alert,
  Cascader,
  DatePicker,
  Table,
  Popconfirm,
  Pagination,
  Modal,
  Drawer,
  Spin,
  Image,
  Avatar,
  AutoComplete,
  Card,
  Carousel,
  Popover,
} from 'ant-design-vue'
import type { App } from 'vue'

export const plugins = [
  Button,
  Input,
  Layout,
  Breadcrumb,
  Menu,
  PageHeader,
  Tag,
  Space,
  Row,
  Col,
  Form,
  Select,
  Alert,
  Cascader,
  DatePicker,
  Table,
  Popconfirm,
  Pagination,
  Modal,
  Drawer,
  Spin,
  Image,
  Avatar,
  AutoComplete,
  Card,
  Carousel,
  Popover,
]

/**
 * 组件注册
 * @param app
 */
export const setupAntdComp = (app: App<Element>): void => {
  plugins.forEach((plugin) => app.use(plugin))
}

/**
 * 全局组件
 */
export const setupAntdGlobal = (app: App<Element>): void => {
  app.config.globalProperties.$message = message
  app.config.globalProperties.$modal = Modal
  // app.config.globalProperties.$loading = Spin
}

/**
 * 图标全局引入
 * @param app
 */
export const setupAntdIcon = (app: App<Element>): void => {
  // 注册组件
  Object.keys(antIcons).forEach((key) => {
    app.component(key, antIcons[key as keyof typeof antIcons])
  })
}
