<template>
  <!-- 
    先处理简单的数据类型
    1. 能数据双向绑定
    2. 能动态关联
    3. 插槽也能动态关联
    6. 可以高度自定义定制化
      1. 接入常用的表单元素
   -->
  <el-form ref="formRef" v-bind="$attrs" :model="formModel">
    <template v-for="(formItem, formItemIdx) in jsonConf" :key="formItemIdx">
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
    <div :class="btnsClass" :style="btnsStyle">
      <slot name="btns" :events="{ reset, submit }"></slot>
    </div>
  </el-form>
</template>

<script lang="ts" setup>
import { BasicFormItemProps } from "@/components/form";
import { setDefaultValue } from "@/hocks/useFunc";
import { StyleValue, computed, ref } from "vue";
import { FormInstance } from "element-plus/lib/components/index.js";
interface Props {
  modelValue: object;
  jsonConf: BasicFormItemProps[];
  btnsStyle?: StyleValue | string;
  btnsClass?: object | string;
}
const props = withDefaults(defineProps<Props>(), {
  jsonConf: () => [],
  modelValue: () => {
    return {};
  },
  btnsClass: "justify-center flex",
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

// 表单校验提交
function submit(callback?: (params?: any[]) => any) {
  if (!formRef.value) return false;
  formRef.value.validate(async (valid) => {
    if (valid) {
      callback?.();
    } else {
      return false;
    }
  });
}
// 清空
function reset(): void {
  if (!formRef.value) return;
  formRef.value.resetFields();
}
// 导出方法
defineExpose({ reset, submit });
</script>
