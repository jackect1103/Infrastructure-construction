/**
 * @name: routesConfig
 * @author: 黄俊炎
 * @date: 2022-08-09 15:53
 * @description：routesConfig
 * @update: 2022-08-09 15:53
 */

import { RouteRecordRaw } from 'vue-router'

import Layout from '@/layout/index.vue';

// 业务路由
import tableRouter from './modules/table';
import buttonRouter from './modules/button';

export const routesConfig: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: Layout,
    redirect: '/table',
    children: [
      // 业务路由
      ...tableRouter,
      ...buttonRouter,
    ]
  }, {
    path: '/login',
    children: [
      {
        path: '/login',
        name: 'Login',
        component: () => import('@/views/login.vue'),
        meta: { title: '登录', icon: 'HomeOutlined' },
      }
    ]
  }, {
    // vue3中对404配置进行了修改,必须要使用正则匹配
    path: '/:pathMatch(.*)*',//匹配未定义的路由
    component: Layout,
    redirect: '/404',//重定向
    children: [
      {
        path: '/404',
        name: '404',
        component: () => import('@/views/404.vue'),
        meta: { title: '404', icon: 'HomeOutlined' },
      }
    ]
  }
]
