<template>
  <el-form ref="formRef" :model="loginUser" :rules="rules">
    <el-form-item prop="username">
      <el-input
        placeholer="请输入账号"
        autocomplete="off"
        prefixIcon="user"
        @keyup.enter="submitForm"
        v-model="loginUser.username"
      />
    </el-form-item>
    <el-form-item prop="password">
      <el-input
        placeholer="请输入密码"
        autocomplete="off"
        type="password"
        prefixIcon="lock"
        showPassword
        @keyup.enter="submitForm"
        v-model="loginUser.password"
        clearable
      />
    </el-form-item>
    <el-form-item>
      <el-button
        class="w-full"
        :loading="loading"
        type="primary"
        @click="submitForm()"
      >
        登录
      </el-button>
    </el-form-item>
  </el-form>
</template>

<script lang="ts" setup>
import { login, LoginUser, UserModel } from "@/api/common";
import { Validate } from "@/hocks/useForm";
import { notify } from "@/hocks/useMessage";
import { useUserStore } from "@/store/user";
import { FormInstance, FormRules } from "element-plus/lib/components/index.js";
import { reactive, ref } from "vue";
import { useRouter } from "vue-router";

const loginUser = reactive<LoginUser>({
  username: "admin",
  password: "123456",
});

const router = useRouter();

function validatePass(_rule: any, value: any, callback: any) {
  if (value === "") {
    callback(new Error("请输入密码"));
  } else {
    callback();
  }
}
function validateAccount(_rule: any, value: any, callback: any) {
  if (value === "") {
    callback(new Error("请输入账号"));
  } else {
    callback();
  }
}
const rules = reactive<FormRules<typeof loginUser>>({
  username: [{ validator: validateAccount, trigger: ["blur"] }],
  password: [{ validator: validatePass, trigger: ["blur"] }],
});
const formRef = ref<FormInstance>();
const loading = ref(false);
async function submitForm() {
  const result = await Validate(formRef);
  if (!result) return;
  const { code, data } = await login<UserModel>(loginUser, loading);
  if (code === 200) {
    saveUserInfo(data);
    notify.Succ(`登录成功，${data.username} 欢迎回来`);
    setTimeout(() => {
      router.push("/");
    }, 500);
  }
}
const userStore = useUserStore();
function saveUserInfo(user: UserModel) {
  userStore.setToken(user.token);
  userStore.setUserName(user.username);
}
</script>
