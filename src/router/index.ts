/**
 * @name: index
 * @author: 黄俊炎
 * @date: 2022-08-09 15:52
 * @description：index
 * @update: 2022-08-09 15:52
 */
import { createRouter, createWebHistory } from 'vue-router'
import { routesConfig } from './routesConfig'

const router = createRouter({
  history: createWebHistory(),
  routes: routesConfig,
  // 刷新时，滚动条位置还原
  scrollBehavior: () => ({ left: 0, top: 0 })
})

router.beforeEach((to, from, next) => {
  next()
})

export  {
  router,
  routesConfig
}
