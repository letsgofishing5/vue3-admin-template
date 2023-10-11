<template>
    <div class="flex items-center justify-center w-full h-full login-container">
        <div class="p-4 mx-auto bg-white rounded-md xl:w-96 lg:w-96 md:w-96 sm:w-3/5 xs:w-4/5 xs:m-4">
            <strong class="leading-loose">走我们钓鱼去</strong>
            <LoginForm></LoginForm>
            <div class="text-sm text-blue-400 cursor-pointer">
                注册
            </div>
        </div>
        <div class="square">
            <ul>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
            </ul>
        </div>
        <div class="circle">
            <ul>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
            </ul>
        </div>
    </div>
</template>
<script setup lang='ts'>
import LoginForm from "./components/LoginForm.vue"
</script>
<style scoped>
@import url("@/styles/login.css");
;
</style>