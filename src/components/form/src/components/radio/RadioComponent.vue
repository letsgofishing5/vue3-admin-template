<template>
  <el-radio-group>
    <el-radio
      v-for="(radioItem, radioIdx) in list"
      :label="radioItem[val]"
      :key="radioIdx"
    >
      {{ radioItem[key] }}
    </el-radio>
  </el-radio-group>
</template>
<script setup lang="ts">
interface Props {
  key?: string;
  val?: string;
  list: [];
}
const props = withDefaults(defineProps<Props>(), {
  key: "label",
  val: "value",
});
</script>
<style scoped></style>
