import { getDataType } from "@/hocks/useFunc"

/**
 * 排除对象空值属性
 * @param param 
 * @returns 
 */
export function useExcludeObjectNullProp<T extends object>(param: T): Partial<T> {
    const rest: Partial<T> = {}
    Object.entries(param).forEach(item => {
        const tp = getDataType(item[1])
        if (tp !== "Undefined" && tp !== "Null") {
            rest[item[0]] = item[1]
        }
    })
    return rest
}