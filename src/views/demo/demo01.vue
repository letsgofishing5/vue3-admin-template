<template>
  <div class="">
    <el-divider content-position="left">基础表格</el-divider>
    <div class="flex justify-end">
      <el-button @click="getTableData1" type="primary">查询</el-button>
    </div>
    <BasicTable :columns="columns" :data="tableData1" border :pagination="{
        page: listQuery1.page,
        pageSize: listQuery1.pageSize,
        total: total1,
      }" @handle-page-change="onPageChange(1, $event)" @handle-page-size-change="onPageSizeChange(1, $event)">
      <template #="{ scope }">
        <el-button icon="Edit" size="small" @click="getInfo(scope)" link />
        <el-button icon="Share" size="small" link />
        <el-button icon="Delete" size="small" link />
      </template>
    </BasicTable>
    <el-divider content-position="left">多选框表格</el-divider>
    <div class="flex justify-end">
      <el-button @click="getTableData2" type="primary">查询</el-button>
    </div>
    <BasicTable :columns="columns2" :data="tableData2" border @selection-change="selectAll" :pagination="{
        page: listQuery2.page,
        pageSize: listQuery2.pageSize,
        total: total1,
      }" @handle-page-change="onPageChange(2, $event)" @handle-page-size-change="onPageSizeChange(2, $event)">
      <template #avator="{ row }">
        <el-image preview-teleported style="width: 80px; height: 40px" :src="row.avator" fit="contain"
          :preview-src-list="[row.avator]" />
      </template>
      <template #="{ scope }">
        <el-button icon="Edit" size="small" @click="getInfo(scope)" link />
        <el-button icon="Share" size="small" link />
        <el-button icon="Delete" size="small" link />
      </template>
    </BasicTable>
  </div>
</template>
<script setup lang="ts">
import BasicTable, { type TableColumnProp } from "@/components/Table";
import { getDemoUserList1, getDemoUserList2 } from "@/api/demo";
import { DemoUserModel } from "#/demo/user";
import { reactive, ref } from "vue";
const columns: TableColumnProp[] = [
  { label: "序列", align: "center", type: "index", width: 55, fixed: "left" },
  {
    label: "姓名",
    prop: "name",
    width: 150,
    align: "center",
  },
  {
    label: "地址",
    prop: "address",
    align: "center",
  },
  {
    label: "生日",
    align: "center",
    width: 150,
    prop: "birthday",
  },
  {
    label: "操作",
    type: "slot",
    width: 200,
    fixed: "right",
  },
];
const tableData1 = reactive<Partial<DemoUserModel>[]>([]);
// 多选框表格
const columns2: TableColumnProp[] = [
  {
    type: "selection",
    width: "55",
  },
  {
    label: "姓名",
    prop: "name",
    width: 200,
    align: "center",
  },
  {
    label: "头像",
    prop: "avator",
    width: 200,
    align: "center",
    type: "slot",
    slotName: "avator",
  },
  {
    label: "地址",
    prop: "address",
    width: 600,
    align: "center",
  },
  {
    label: "生日",
    align: "center",
    prop: "birthday",
  },
  {
    label: "操作",
    type: "slot",
    width: 200,
    fixed: "right",
  },
];
const tableData2 = reactive<Partial<DemoUserModel>[]>([]);
function getInfo(val: any) {
  console.log("val:", val);
}
function selectAll(val) {
  console.log("selectAll:", val);
}
const loading = ref(false);
const listQuery1 = ref({
  page: 1,
  pageSize: 5,
});
const listQuery2 = ref({
  page: 1,
  pageSize: 5,
});
const total1 = ref(0);
const total2 = ref(0);
async function getTableData1() {
  loading.value = true;
  const res = await getDemoUserList1<Partial<DemoUserModel>[]>(
    listQuery1.value,
    loading
  );
  tableData1.splice(0, 15, ...(res.data || []));
  total1.value = res.count;
}
async function getTableData2() {
  loading.value = true;
  const res = await getDemoUserList2<Partial<DemoUserModel>[]>(
    listQuery2.value,
    loading
  );
  tableData2.splice(0, 15, ...(res.data || []));
  total2.value = res.count;
}
function onPageChange(num, val: number) {
  console.log("onCurrentChange:", val);
  switch (num) {
    case 1:
      listQuery1.value.page = val;
      getTableData1();
      break;
    case 2:
      listQuery2.value.page = val;
      getTableData2();
      break;
  }
}
function onPageSizeChange(num, val: number) {
  console.log("onCurrentChange:", val);
  switch (num) {
    case 1:
      listQuery1.value.pageSize = val;
      getTableData1();
      break;
    case 2:
      listQuery2.value.pageSize = val;
      getTableData2();
      break;
  }
}
getTableData1();
getTableData2();
</script>
<style scoped></style>
