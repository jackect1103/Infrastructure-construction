<script setup lang="ts" name="SiderMenu">
// import { computed, reactive, ref, watch } from 'vue'
// import { useRoute, useRouter } from 'vue-router'
// import { useSettingStore } from '@/store/module/setting'
import useSiderMenu from '@/hooks/useSiderMenu'
import SiderMenuItem from './SiderMenuItem/index.vue'

const [fullRoutes, isSpreading, openKeys, selectedKeys, handleTapMenuItem] = useSiderMenu()
console.log('%c@@@fullRoutes===>', 'color:green;font-size:15px', fullRoutes)
</script>

<template>
  <div class="menu-container" v-if="fullRoutes.length != 0">
    <AMenu mode="inline" v-model:selectedKeys="selectedKeys" v-model:openKeys="openKeys" collapsible
      :collapsed="isSpreading" @click="handleTapMenuItem">
      <template v-for="(item, index) in fullRoutes[0].children" :key="item.name ?? item.path ?? index">
        <SiderMenuItem :routes="item" />
      </template>
    </AMenu>
  </div>
  <div v-else class="empty">当前用户暂无菜单</div>
</template>

<style scoped lang="less">
.menu-container {
  overflow-y: auto;
  overflow-x: hidden;
  height: calc(100vh - 64px);
  box-shadow: 0 0 5px 1px rgba(12, 30, 57, 0.1);

  ::-webkit-scrollbar {
    width: 0 !important;
    height: 0 !important;
  }
}

.empty {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
