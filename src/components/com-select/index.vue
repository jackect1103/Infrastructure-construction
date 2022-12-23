<template>
  <a-select allowClear showSearch v-model:value="searchValue" label-in-value placeholder="Select users"
    style="width: 100%" :filter-option="false" :not-found-content="fetching ? undefined : null" :options="options"
    @search="fetchUser" @change="handleSelectChange">
    <template v-if="fetching" #notFoundContent>
      <a-spin size="small" />
    </template>
  </a-select>
</template>

<script lang="ts" setup>
import { ref, watch, computed } from 'vue'
import { debounce } from 'lodash-es';
interface selectInterFace {
  placeholder?: string
  mode?: string // 多选还是单选 'multiple' | 'tags' | 'combobox'
  isRemote?: boolean //是否为远程搜索
  username: any
}
const emit = defineEmits(["update:username"])
const $props = withDefaults(defineProps<selectInterFace>(), {
  placeholder: '请选择输入',
  isRemote: true
})
const searchValue = computed({
  get: () => $props.username,
  set: (value) => {
    console.log('%c@@@value===>', 'color:green;font-size:15px', value)
    emit("update:username", value)
  },
})

let options = ref([])
let fetching = ref(false);
/**
 * 远程搜索
 */
const fetchUser = debounce(value => {
  let data = []
  for (let index = 0; index < 10; index++) {
    data.push({
      label: `${index}`,
      value: `${index}`,
    })
  }
  options.value = data
}, 1000);

/**
 * 项-点击事件
 */
const handleSelectChange = (value) => {
  console.log('项-点击事件', value)
}
</script>

<style lang="less" scoped>

</style>