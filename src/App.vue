<script setup lang="ts" name="App">
import { onMounted } from 'vue'
import zh_CN from 'ant-design-vue/es/locale/zh_CN'
import { ConfigProvider } from 'ant-design-vue'

</script>

<template>
  <ConfigProvider :locale="zh_CN">
    <RouterView />
  </ConfigProvider>
</template>

<style scoped></style>
