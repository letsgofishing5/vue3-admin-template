<template>
  <div class="flex flex-col items-end card">
    <el-table :data="data" v-bind="$attrs" class="flex-1">
      <!-- 遍历每一列 -->
      <template v-for="(col, colIdx) in columns" :key="colIdx">
        <!-- 自定义插槽列 -->
        <el-table-column v-if="col.type === 'slot'" v-bind="col">
          <template #default="scope">
            <slot :name="col.slotName || 'default'" :scope="scope" :row="scope.row">
            </slot>
          </template>
        </el-table-column>
        <!--对应列的类型: selection | index | expand -->
        <el-table-column v-bind="col" v-else />
      </template>
    </el-table>
    <Pagination :pagination="pagination" class="mt-2" @handlePageChange="emits('handlePageChange', $event)"
      @handlePageSizeChange="emits('handlePageSizeChange', $event)"></Pagination>
  </div>
</template>

<script lang="ts" setup>
import { Pagination, PaginationProp } from "@/components/pagination";
import type { TableColumnProp } from "@/components/Table";
interface Props {
  columns: TableColumnProp[];
  data?: any[];
  pagination?: PaginationProp;
}
withDefaults(defineProps<Props>(), {
  pagination: () => {
    return {
      pageSize: 15,
      page: 1,
      total: 0,
    };
  },
});
const emits = defineEmits(["handlePageChange", "handlePageSizeChange"]);
</script>
