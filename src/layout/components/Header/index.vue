<script setup lang="ts" name="LayoutHeader">
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useSettingStore } from '@/store/module/setting'

const $router = useRouter();
const currRoute = useRoute()

const settingStore = useSettingStore()

const isSpreading = computed(() => settingStore.isSpreading)
const spreadingIconSize = computed(() => ({ fontSize: '18px' }))
const currRoutesMatched = computed(() => currRoute.matched)

const changeSpreading = () => {
  settingStore.changeIsSpreading()
}

const userInfo = {
  realName: ''
}
const signOut = () => {
  localStorage.clear()
  $router.replace({ path: '/login' })
}
</script>

<template>
  <ALayoutHeader class="header">
    <!-- 左侧导航栏 -->
    <ASpace :size="20">
      <span @click="changeSpreading" class="spreading-icon">
        <MenuFoldOutlined v-show="!isSpreading" :style="spreadingIconSize" />
        <MenuUnfoldOutlined v-show="isSpreading" :style="spreadingIconSize" />
      </span>
      <ABreadcrumb>
        <ABreadcrumbItem v-for="routes in currRoutesMatched" :key="routes?.name">
          <RouterLink :to="{ name: routes?.name }">
            {{ routes?.meta?.title }}
          </RouterLink>
        </ABreadcrumbItem>
      </ABreadcrumb>
    </ASpace>

    <ASpace :size="20" align="center" class="avatar">
      <!-- 图标 -->
      <AAvatar style="background-color: #1890ff;" :size="24">F</AAvatar>
      <!-- 姓名 -->
      <a-popover v-if="userInfo.realName" placement="bottom">
        <template #content>
          <div style="cursor: pointer;" @click="signOut">退出登录</div>
        </template>
        <span style="color: #93c4f7;">{{ userInfo.realName }}</span>
      </a-popover>
      <span v-else>项目小助手</span>
    </ASpace>
  </ALayoutHeader>
</template>

<style scoped lang="less">
.header {
  padding: 0 20px;
  height: 64px;
  line-height: 64px;
  background-color: white;
  position: sticky;
  top: 0;
  z-index: 199;
  transition: width 0.28s;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 0 5px 1px rgba(12, 30, 57, 0.1);

  .ant-breadcrumb {
    margin: 0 !important;
  }

  * {
    cursor: pointer;
  }

  .avatar {
    :deep(.ant-space-item) {
      line-height: normal;
    }
  }
}
</style>
