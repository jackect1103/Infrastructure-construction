
/**
 * 业务模块路由
 */
export default [
  {
    path: '/button',
    name: 'Button',
    component: () => import('@/views/button/index.vue'),
    meta: { title: '按钮', icon: 'HomeOutlined' },
    children:[]
  }
]
