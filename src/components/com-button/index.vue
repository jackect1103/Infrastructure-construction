<template>
  <!-- 
    v-bind="$props.infos" 统一绑定
    <a-button :type="$props.infos.type" :disabled="$props.infos.disabled" :loading="$props.infos.loading"> 
  -->
  <!-- 设置权限 -->
  <a-button v-if="$props.infos.permission" v-bind="$props.infos" v-permission="$props.infos.permission">
    <slot name="icon-left"></slot>
    <slot></slot>
    <slot name="icon-right"></slot>
  </a-button>
  <!-- 不设置权限 -->
  <a-button v-else v-bind="$props.infos">
    <slot name="icon-left"></slot>
    <slot></slot>
    <slot name="icon-right"></slot>
  </a-button>
</template>

<script lang="ts" setup>
interface buttonInteFace {
  infos: {
    type?: string // 类型
    disabled?: boolean // 是否可用状态
    loading?: boolean // 是否加载
    permission?: string // 按钮权限路径
  }
}
const $props = withDefaults(defineProps<buttonInteFace>(), {
  infos: () => {
    return {
      type: '', // primary dashed text link
      disabled: false, // true false
      loading: false, // true false
    }
  }
})
</script>

<style lang="less" scoped>

</style>