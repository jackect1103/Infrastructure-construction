<script setup lang="ts" name="LayoutContent">
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const getRoute = computed(() => route.fullPath)
</script>

<template>
  <ALayoutContent class="content-container">
    <div class="content-wrap">
      <router-view v-slot="{ Component }">
        <!--        <transition mode="out-in" name="fade-transform">-->
        <!--        <keep-alive>-->
        <component :is="Component" :key="getRoute" />
        <!--        </keep-alive>-->
        <!--        </transition>-->
      </router-view>
    </div>
  </ALayoutContent>
</template>

<style scoped lang="less">
.content-container {
  margin: 0;
  min-height: calc(100% - 64px);
  transition: all 0.3s;
  overflow: auto;

  .content-wrap {
    //box-shadow: rgba(12, 30, 57, 0.1) 0 2px 12px 0;
    //background-color: #fff;
    min-height: 100%;
    overflow: hidden;
    //background: #fff;
    //margin: 20px;
    //-webkit-box-shadow: 0 2px 12px 0 rgb(0 0 0 / 10%);
    //box-shadow: 0 2px 12px 0 rgb(0 0 0 / 10%);
    //padding: 24px 20px;
  }
}

.fade-transform-leave-active,
.fade-transform-enter-active {
  transition: all 0.3s;
}

.fade-transform-enter-from {
  opacity: 0;
  transform: translateX(-30px);
}

.fade-transform-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
</style>
