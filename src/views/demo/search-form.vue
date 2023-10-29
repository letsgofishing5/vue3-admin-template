<template>
  <div>
    <el-divider content-position="left">表单操作</el-divider>
    <search-form
      label-width="100"
      v-model="person"
      :formItems="formConf"
      api="http://www.baidu.com"
    >
    </search-form>
  </div>
</template>
<script setup lang="ts">
import { BasicFormItemProps, SearchForm } from "@/components/form";
import { ref } from "vue";
// 表单变量对象
const person = ref({
  name: "沈建政",
  age: 12,
  address: "河南省濮阳市濮阳县濮阳县子岸镇",
  phone: null,
});
// 表单json配置
const formConf: BasicFormItemProps[] = [
  {
    label: "姓名",
    prop: "name",
    rules: [{ required: true, message: "请填写姓名", trigger: "blur" }],
  },
  {
    label: "年龄",
    prop: "age",
  },
  {
    label: "地址",
    prop: "address",
  },
];
</script>
<style scoped></style>
