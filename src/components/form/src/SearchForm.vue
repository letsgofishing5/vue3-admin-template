<template>
  <!-- 
    先处理简单的数据类型
    1. 复杂search Item 可以插槽使用，常用的则可以通过 el 设置
    2. 能动态关联
    3. 插槽也能动态关联
    6. 可以高度自定义定制化
      1. 接入常用的表单元素
   -->
  <el-form ref="formRef" v-bind="$attrs" :model="formModel" :inline="inline">
    <template v-for="(formItem, formItemIdx) in formItems" :key="formItemIdx">
      <!-- 定制化 form-item -->
      <el-form-item
        v-if="formItem.el && setDefaultValue(formItem.display?.value, true)"
        v-bind="formItem"
      >
        <!-- 插槽 -->
        <slot
          v-if="formItem.el === 'slot'"
          :props="formItem"
          :name="formItem.slotName || 'default'"
          :events="{ reset, submit }"
        >
        </slot>
        <!-- 非插槽 表单元素子组件类型组件 -->
        <component
          v-else
          :is="formItem.el"
          v-bind="formItem"
          v-model="formModel[formItem.prop!]"
        ></component>
      </el-form-item>
      <!-- 默认 form-item el-input 默认元素-->
      <el-form-item
        v-bind="formItem"
        v-else-if="setDefaultValue(formItem.display?.value, true)"
      >
        <el-input v-model="formModel[formItem.prop!]" v-bind="formItem" />
      </el-form-item>
    </template>
    <!-- 表单按钮 -->
    <el-form-item>
      <slot name="btns" :events="{ reset, submit }">
        <el-button type="primary" @click="submit" :loading="loading">
          查询
        </el-button>
        <el-button @click="reset">重置</el-button>
      </slot>
    </el-form-item>
  </el-form>
</template>

<script lang="ts" setup>
import { BasicFormItemProps } from "@/components/form";
import { setDefaultValue } from "@/hocks/useFunc";
import { doGet } from "@/http";
import { computed, ref } from "vue";
import { FormInstance } from "element-plus/lib/components/index.js";
interface Props {
  modelValue: object;
  formItems: BasicFormItemProps[];
  inline?: boolean;
  api: string;
}
const props = withDefaults(defineProps<Props>(), {
  formItems: () => [],
  modelValue: () => {
    return {};
  },
  inline: true,
});

const emits = defineEmits(["update:modelValue", "loading"]);
// 表单内部对象变量
const formModel = computed({
  get() {
    return props.modelValue;
  },
  set(value) {
    emits("update:modelValue", value);
  },
});

const formRef = ref<FormInstance>();
const loading = ref(false);
// 表单校验并提交提交
function submit() {
  if (!formRef.value) return false;
  formRef.value.validate(async (valid) => {
    if (valid) {
      const result = await doGet({ url: props.api }, loading);
      console.log(result);
    } else {
      return false;
    }
  });
}
// 重置表单
function reset(): void {
  if (!formRef.value) return;
  formRef.value.resetFields();
}
// 导出方法
defineExpose({ reset, submit });
</script>
