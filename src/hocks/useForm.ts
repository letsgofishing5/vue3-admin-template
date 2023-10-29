import { FormInstance } from "element-plus/lib/components/index.js"
import { Ref } from "vue"

export async function Validate(formEl: Ref<FormInstance | undefined>) {
    if (!formEl.value) return
    return await formEl.value.validate((valid) => {
        return valid
    })
}