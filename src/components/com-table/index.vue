

<!-- 
  用例:
  import ComTable from '@/components/com-table/index.vue'

  <ComTable :pagination="pagination" :columns="columns" :dataSource="dataSource" @on-page="handlePage">
    <template #[item.slots.customRender]="scope" v-for="item in columns">
      <template v-if="item.dataIndex == 'operation'">
        <span style="color:red">操作</span>
      </template>
      <template v-else>{{ scope.scope.record[item.dataIndex] }}</template>
    </template>
  </ComTable>
-->

<template>
  <a-table :loading="loading" :dataSource="dataSource" :columns="columns" :row-key="(record: any) => record"
    :scroll="scroll" :pagination="showPage && pagination" :row-selection="isSelect ? rowSelection1 : null" bordered
    @change="(page, filters, sorter, source) => handlePage(page, filters, sorter, source)">
    <template #[item]="scope" v-for="item in renderArr">
      <slot :name="item" :scope="scope"></slot>
    </template>
  </a-table>
</template>

<script  lang="ts" setup>
import { watch, ref } from 'vue'
import useTables from './useTables';
import { columnsItemInterFace, paginationInterFace } from '@/interface/tableInterFace.ts';
let { pagination, searchParams, onTableChange } = useTables()
let loading = ref(false)
/**
 * vue3 defineProps 引入定义的接口报错
 * https://segmentfault.com/q/1010000042014549?utm_source=sf-similar-question
 */
interface PropsInterFace {
  dataSource: columnsItemInterFace[]// 数据
  columns: columnsItemInterFace[] // 列表
  pagination?: paginationInterFace // 分页配置
  tableLoading?: boolean //加载器
  showPage?: boolean //是否展示分页
  scroll?: Object //
  isSelect?: boolean //是否需要表格前面的选择按钮
}
const emits = defineEmits(['batch', 'on-page'])
const $props = withDefaults(defineProps<PropsInterFace>(), {
  dataSource: () => [],
  columns: () => [],
  tableLoading: false,
  showPage: true,
  isSelect: true,
  scroll: () => {
    return { x: 750, y: 600 }
  },
  pagination: () => {
    return {
      total: 200,
      current: 1,
      pageSize: 20,
    }
  }
})
// 渲染需要自定义的列字段
let renderArr = ref<Array<String>>([])
watch(() => [$props.pagination, $props.tableLoading], (newValue ) => {
  pagination.value = newValue[0];
  loading.value = newValue[1]
  renderArr.value = $props.columns.map(e => e.dataIndex)
}, {
  deep: true,
  immediate: true
})



// 是否多选
const rowSelection1 = {
  onChange: (selectedRowKeys: any, selectedRows: any) => {
    console.log(selectedRowKeys, selectedRows)
    emits('batch', selectedRowKeys)
  },
  getCheckboxProps: (record: any) => ({
    disabled: record.name === 'Disabled User', // Column configuration not to be checked
    name: record.name
  })
}
//分页
const handlePage = (page, filters, sorter, source) => {
  onTableChange(page, filters, sorter, source)
  emits('on-page', searchParams)
}



</script>

<style lang="less">

</style>