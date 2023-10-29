<template>
  <el-config-provider :locale="locale">
    <RouterView />
  </el-config-provider>
</template>
<script setup lang="ts">
import { ref } from "vue";
import zhCn from "element-plus/lib/locale/lang/zh-cn";
const locale = ref(zhCn);
console.log("App 打印日志");
</script>
<style scoped></style>
