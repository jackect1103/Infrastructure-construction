<script setup lang="ts" name="LayoutSider">
import { computed } from 'vue'
import { useSettingStore } from '@/store/module/setting'
import SiderLogo from './components/SiderLogo/index.vue'
import SiderMenu from './components/SiderMenu/index.vue'
const settingStore = useSettingStore()
/**
 * 当前收起状态
 */
const isSpreading = computed(() => settingStore.isSpreading)

// 自定义侧边栏菜单收缩和展开时的宽度
const asideWidth = computed(() => (isSpreading.value ? 80 : 230))



</script>

<template>
  <ALayoutSider
    theme="light"
    :width="asideWidth"
    v-model:collapsed="isSpreading"
    :trigger="null"
    collapsible
    class="side-container"
  >
    <SiderLogo />
    <SiderMenu />
  </ALayoutSider>
</template>

<style scoped lang="less">
.side-container {
  //background-color: #fff;
  //overflow: hidden;
  //height: 100vh;
  //position: fixed;
  //left: 0;
  //top: 0;
  //bottom: 0;
}
</style>
