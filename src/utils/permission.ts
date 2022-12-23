/**
 * @Description: 自定义权限指令 用于操作按钮显示
 * @author 
 * @date 2022/9/22
*/
const permissionList = JSON.parse(localStorage.getItem('permissions')) || []
const permission = {
  // 在元素被插入到 DOM 前调用
  beforeMount(el, binding, vnode, prevVnode) { 
    console.log('!permissionList.includes(binding.value)',binding.value)
    if (!permissionList.includes(binding.value)) {
      el.style.display = 'none'
    }
  },
}
export default permission