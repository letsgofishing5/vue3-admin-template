import {
    ElSelect,
    InputProps,
    RateProps,
    FormItemProps,
    InputNumberProps,
    TimePickerDefaultProps,
    UploadContentInstance,
    ElRadioGroup
} from "element-plus/lib/components/index.js";
import { Component, ComputedRef } from "vue"
export type BasicFormItemProps = {
    [key: string]: any
    label?: string
    prop?: string
    labelWidth?: string
    disabled?: boolean
    required?: boolean
    rules?: object
    error?: string
    showMessage?: boolean
    inlineMessage?: string | boolean
    size?: '' | 'large' | 'default' | 'small'
    validateStatus?: '' | 'error' | 'validating' | 'success'
    clearable?: boolean
    /**
     * 控制是否显示（控制DOM元素是否删除）
     */
    display?: ComputedRef<boolean>
    el?: PropType
    placeholder?: string
    slotName?: string
} & Partial<FormItemProps>

/**
 * 表单类型，默认input，
 */
export type PropType =
    | "slot"
    | "el-input"
    | "el-input-number"
    | "el-date-picker"
    | "el-rate"
    | "g-upload"
    | "el-switch"
    | "sub-item-select"
    | "sub-item-radio"
// 输入框
export type Input = {
    el: Extract<PropType, "el-input">;
} & Partial<InputProps>;

// 数字输入框
export type InputNumber = {
    el: Extract<PropType, "el-input-number">;
} & Partial<InputNumberProps>;
// 开关组件
export type Switch = {
    el: Extract<PropType, "el-switch">;
    width?: string | number
    loading?: boolean
    inlinePrompt?: boolean
    activeIcon?: string | Component
    inactiveIcon?: string | Component
    activeText?: string
    inactiveText?: string
    activeValue?: string
    inactiveValue?: string
    activeColor?: string
    inactiveColor?: string
    name?: string
    id?: string
}
// & Partial<SwitchProps>;
// 下拉框
export type Select = {
    el: Extract<PropType, "sub-item-select">;
    multiple?: boolean
    name?: string
    autocomplete?: string
    filterable?: boolean
    allowCreate?: boolean
    filterMethod?: () => void
    remote?: boolean
    remoteMethod?: () => void
    suffixIcon?: string | Component
    loading?: boolean
    key?: string
    val?: string
    list: object[]
} & Partial<typeof ElSelect>;
// 单选
export type Radio = {
    el: Extract<PropType, "sub-item-radio">;
    textColor?: string
    fill?: string
    name?: string
    id?: string
    key?: string
    val?: string
    list: object[]
    validateEvent?: boolean
} & Partial<typeof ElRadioGroup>;

// 时间选择器
export type Date = {
    el: Extract<PropType, "el-date-picker">;
    type?:
    | "year"
    | "month"
    | "date"
    | "dates"
    | "datetime"
    | "week"
    | "datetimerange"
    | "daterange"
    | "monthrange";
    valueFormat?: "YYYY-MM-DD" | "YYYY-MM-DD HH:mm:ss";
} & Partial<TimePickerDefaultProps>;
// 上传
export type Upload = {
    el: Extract<PropType, "g-upload">;
} & Partial<UploadContentInstance>;
// 评分
export type Rate = {
    el?: Extract<PropType, "el-rate">;
} & Partial<RateProps>;
