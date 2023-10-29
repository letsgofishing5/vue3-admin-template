<template>
  <el-pagination
    :page-sizes="[15, 30, 45, 60]"
    background
    layout=" prev, pager, next,sizes"
    :total="pagination.total"
    @size-change="emits('handlePageSizeChange', $event)"
    @current-change="emits('handlePageChange', $event)"
  />
</template>
<script setup lang="ts">
import { PaginationProp } from "./types";
interface Props {
  pagination: PaginationProp;
}
withDefaults(defineProps<Props>(), {});
const emits = defineEmits<{
  (e: "handlePageSizeChange", size: number): void;
  (e: "handlePageChange", page: number): void;
}>();
</script>
<style scoped></style>
