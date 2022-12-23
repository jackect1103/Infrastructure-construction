
/**
 * 业务模块路由
 */
export default [
  {
    path: '/table',
    name: 'Table',
    component: () => import('@/views/table/index.vue'),
    meta: { title: '列表', icon: 'HomeOutlined' },
    children:[]
  }
]
