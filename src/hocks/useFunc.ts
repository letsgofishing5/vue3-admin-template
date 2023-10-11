import { notify } from "./useMessage";

export function todo() {
    notify.Warn("功能暂未开发，敬请期待")
}
type dataType = "Undefined"
    | "Array"
    | "Number"
    | "String"
    | "Object"
    | "Symbol"
    | "Boolean"
    | "Null"
    | "BigInt"
/**
 * 获取数据的类型
 * @param val 
 * @returns 
 */
export function getDataType(val: any): dataType {
    return Object.prototype.toString.call(val).slice(1, -1).split(" ")[1] as dataType
}

/**
 * 设置默认值
 * @param val 
 * @returns 
 */
export function setDefaultValue<T>(val: any, defaultVal: T): T {
    if (getDataType(val) === "Undefined") {
        return defaultVal
    }
    return val
}