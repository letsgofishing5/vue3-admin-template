import { TableColumnCtx } from "element-plus/lib/components/index.js"

export interface TableColumnProp<T = any> extends Partial<TableColumnCtx<T>> {
    slotName?: string
}