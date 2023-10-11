<template>
  <el-select>
    <el-option v-for="item in list" :key="item[val]" :label="item[key]" :value="item[val]"
      :disabled="setDefaultValue(item.disabled, false)" />
  </el-select>
</template>
<script setup lang="ts">
import { setDefaultValue } from "@/hocks/useFunc"
interface Props {
  key?: string;
  val?: string;
  list: any[];
}
const props = withDefaults(defineProps<Props>(), {
  key: "label",
  val: "value",
})
</script>
<style scoped></style>
