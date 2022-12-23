<template>
  <div class="app_main guide-container" style="height: 900px;">
    <h3>自定义按钮</h3>
    <div style="margin:10px 0">
      <ComButton></ComButton>&nbsp;
      <ComButton :infos="{ type: 'dashed', }">Dashed Button</ComButton>&nbsp;
      <ComButton :infos="{ type: 'primary', }">primary Button</ComButton>&nbsp;
      <ComButton :infos="{ type: 'text', }">text Button</ComButton>&nbsp;
      <ComButton :infos="{ type: 'link', }">link Button</ComButton>&nbsp;
      <ComButton :infos="{ type: 'Primary', disabled: true }">Primary(disabled)</ComButton>&nbsp;
      <ComButton :infos="{ type: 'Primary', loading: true }">loading Button</ComButton>&nbsp;
      <ComButton :infos="{ type: 'Primary' }">
        <template #icon-left>
          <SearchOutlined />
        </template>
        loading Button
        <template #icon-right>
          <DownloadOutlined />
        </template>
      </ComButton>&nbsp;
    </div>
  </div>
</template>

<script lang="ts" setup>
import ComButton from '@/components/com-button/index.vue';
</script>