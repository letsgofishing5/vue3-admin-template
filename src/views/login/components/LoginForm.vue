<template>
  <BasicForm :json-conf="formConf" v-model="loginUser">
    <template #password="{ props, events }">
      <el-input
        @keyup.enter="events.submit(submitForm)"
        v-bind="props"
        v-model="loginUser.password"
      />
    </template>
    <template #btns="{ events }">
      <el-button
        class="w-full"
        type="primary"
        @click="events.submit(submitForm)"
        >登录</el-button
      >
    </template>
  </BasicForm>
</template>

<script lang="ts" setup>
import { login, LoginUser, UserModel } from "@/api/common";
import { BasicForm } from "@/components/form";
import { notify } from "@/hocks/useMessage";
import { useUserStore } from "@/store/user";
import { reactive } from "vue";
import { useRouter } from "vue-router";
import { formConf } from "./index";

const loginUser = reactive<LoginUser>({
  username: "admin",
  password: "123456",
});

const router = useRouter();
async function submitForm() {
  const { code, data } = await login<UserModel>(loginUser);
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
