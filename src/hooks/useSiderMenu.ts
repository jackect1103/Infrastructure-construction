/**
 * @name: useSiderMenu
 * @author: 黄俊炎
 * @date: 2022-08-11 23:41
 * @description：useSiderMenu
 * @update: 2022-08-11 23:41
 */
import { computed, ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useSettingStore } from '@/store/module/setting';

/**
 * 菜单校验
 * @param[Array] fullRoutes 项目所有菜单路由
 * @param[Array] existingMenu  当前用户拥有的权限路由
 */
const handleMenuCheck = (fullRoutes: any) => {
  let existingMenu = []
  let routers = [] as any
  fullRoutes.forEach(e => {
    let children = []
    if (e?.children && e?.children.length != 0) {
      children.push(...handleMenuCheck(e?.children)) 
      if (e?.children != children.length) {
        e.children = children
      }
      e.children.length != 0 && routers.push(e)
    }

    if (existingMenu.includes(e.routerPath)) {
      routers.push(e)
    }
  })
  return routers
}


const useSiderMenu = () => {
  const currRoute = useRoute()
  const router = useRouter()
  const settingStore = useSettingStore()
  let fullRoutes = computed(() => router.options.routes)
  console.log('%c@@@fullRoutes===>', 'color:green;font-size:15px', fullRoutes)
  // 路由权限校验
  // fullRoutes = handleMenuCheck(fullRoutes.value) as any
  const isSpreading = computed(() => settingStore.isSpreading)

  const openKeys = ref([])
  const selectedKeys = ref([currRoute.name] as string[])

  watch(
    () => currRoute.name,
    (n) => {
      if (n === selectedKeys.value[0]) return
      selectedKeys.value = [n] as string[]
    }
  )

  const handleTapMenuItem = ({ key }: any) => {
    if (key === currRoute.name) return
      ; /http(s)?:/.test(key) ? window.open(key) : router.push({ name: key })
  }

  return [fullRoutes, isSpreading, openKeys, selectedKeys, handleTapMenuItem]
}

export default useSiderMenu
