<template>
  <div>
    <el-divider content-position="left">基础表单</el-divider>
    <SearchForm
      api=""
      :inline="false"
      label-width="100"
      v-model="person"
      :formItems="formConf"
    >
      <el-input v-model="person.phone" label="电话号码"></el-input>
    </SearchForm>
    <el-divider content-position="left">多类型表单</el-divider>
    <SearchForm
      api=""
      :inline="false"
      label-width="100"
      v-model="multipFormType"
      :formItems="formConf2"
    >
      <el-input v-model="person.phone" label="电话号码"></el-input>
    </SearchForm>
  </div>
</template>
<script setup lang="ts">
import SearchForm, { BasicFormItemProps } from "@/components/form";
import { computed, ref, watch } from "vue";
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
  },
  {
    label: "年龄",
    prop: "age",
  },
  {
    label: "地址",
    prop: "address",
  },
  {
    label: "邮箱",
    prop: "email",
    display: computed<boolean>(() => {
      return person.value.age > 18;
    }),
  },
  {
    label: "电话",
    prop: "phone",
    display: computed<boolean>(() => {
      return person.value.age > 18;
    }),
  },
];

// 表单变量对象
const multipFormType = ref({
  name: "沈建政",
  age: 12,
  address: "河南省濮阳市濮阳县濮阳县子岸镇",
  phone: null,
  birthday: "2023-10-29",
  marry: null,
  adut: null,
  select: null,
});
// 表单json配置
const formConf2: BasicFormItemProps[] = [
  {
    label: "姓名",
    prop: "name",
  },
  {
    label: "出生日期",
    prop: "birthday",
    el: "el-date-picker",
    placeholder: "请选择出生日期",
    valueFormat: "YYYY-MM-DD",
  },
  {
    label: "地址",
    prop: "address",
  },
  {
    label: "婚姻状态",
    prop: "marry",
    el: "sub-item-radio",
    textColor: "#ef5350",
    list: [
      {
        label: "已婚",
        value: 1,
      },
      {
        label: "未婚",
        value: 0,
      },
    ],
  },
  {
    label: "是否成年",
    prop: "adut",
    el: "el-switch",
  },
  {
    label: "下拉框",
    prop: "select",
    el: "sub-item-select",
    list: [
      {
        value: "Option1",
        label: "Option1",
        disabled: true,
      },
      {
        value: "Option2",
        label: "Option2",
      },
      {
        value: "Option3",
        label: "Option3",
      },
      {
        value: "Option4",
        label: "Option4",
      },
      {
        value: "Option5",
        label: "Option5",
      },
    ],
  },
];
// 表单变量对象
const person3 = ref({
  name: "沈建政",
  age: 12,
  address: "河南省濮阳市濮阳县濮阳县子岸镇",
  phone: null,
});
// 表单json配置
const formConf3: BasicFormItemProps[] = [
  {
    label: "姓名",
    prop: "name",
  },
  {
    label: "年龄",
    prop: "age",
  },
  {
    label: "地址",
    prop: "address",
  },
  {
    label: "邮箱",
    prop: "email",
    display: computed<boolean>(() => {
      return person.value.age > 18;
    }),
  },
  {
    label: "电话",
    prop: "phone",
    display: computed<boolean>(() => {
      return person.value.age > 18;
    }),
  },
];
watch(
  () => multipFormType.value.adut,
  (newVal) => {
    console.log("newVal", newVal);
  }
);
function submit(val) {
  console.log("提交信息：", val);
}
</script>
<style scoped></style>
