<template>
  <div>
    <el-divider content-position="left">表单操作</el-divider>
    <BasicForm label-width="100" v-model="person" :json-conf="formConf">
      <template #btns="{ events }">
        <el-button @click="submit(events)" type="primary">提交</el-button>
        <el-button @click="events.reset()">重置</el-button>
      </template>
    </BasicForm>
  </div>
</template>
<script setup lang="ts">
import { BasicForm, BasicFormItemProps } from "@/components/form";
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
function submit(val) {
  console.log("----", val);
}
</script>
<style scoped></style>
