import { createApp } from 'vue'

import piniaPersist from 'pinia-plugin-persist'

import * as moment from 'moment'

import * as dayjs from 'dayjs'
import 'dayjs/locale/zh-cn'
import objectSupport from 'dayjs/plugin/objectSupport'

import store from '@/store'

import { router } from '@/router'

import './styles/index.css'

import 'animate.css'

import { setupAntdComp, setupAntdIcon, setupAntdGlobal } from '@/utils/antdPlugin'
import permission from '@/utils/permission'

import App from './App.vue'

store.use(piniaPersist)

const app = createApp(App)
app.use(router)
app.use(store)

/**
 * 注册指令
 */
app.directive('permission',permission)

/**
 * 注册dayjs
 */
dayjs.extend(objectSupport)
app.config.globalProperties.$dayjs = dayjs

/**
 * 批量注册antd组件
 */
setupAntdComp(app)

/**
 * 全局组件
 */
setupAntdGlobal(app)

/**
 * antd-icon
 */
setupAntdIcon(app)

app.config.globalProperties.$moment = moment

app.mount('#app')
