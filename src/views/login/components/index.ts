import { BasicFormItemProps } from "@/components/form";

export const formConf: BasicFormItemProps[] = [
    {
        prop: "username",
        placeholder: "请输入账号",
        autocomplete: "off",
        prefixIcon: "user",
        rules: [
            { validator: validateAccount, trigger: ["blur"] }
        ],
    },
    {
        el: "slot",
        slotName: "password",
        prop: "password",
        placeholder: "请输入密码",
        autocomplete: "off",
        type: "password",
        showPassword: true,
        clearable: true,
        prefixIcon: "lock",
        rules: [
            { validator: validatePass, trigger: ["blur"] }
        ]
    }
]
function validatePass(_rule: any, value: any, callback: any) {
    if (value === '') {
        callback(new Error('请输入密码'))
    } else {
        callback()
    }
}
function validateAccount(_rule: any, value: any, callback: any) {
    if (value === '') {
        callback(new Error('请输入账号'))
    } else {
        callback()
    }
}
function submitForm() {
    console.log('执行了keyup');
}