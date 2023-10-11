<template>
    <nav class="flex items-center justify-between flex-1 max-h-12">
        <div class="flex items-center">
            <el-icon class="m-4 cursor-pointer" @click="menuStore.collapse">
                <component :is="menuStore.isCollapse ? 'expand' : 'fold'"></component>
            </el-icon>
            <el-breadcrumb separator-icon="ArrowRight">
                <transition-group name="breadcrumb">
                    <el-breadcrumb-item v-for="(breadcrumb, breadcrumbIdx) in breadcrumbStore.breadcrumbs"
                        :key="breadcrumb.path + breadcrumbIdx">
                        {{ breadcrumb.meta.title || breadcrumb.name }}
                    </el-breadcrumb-item>
                </transition-group>
            </el-breadcrumb>
        </div>
        <div class="grid items-center grid-cols-2 gap-x-2">
            <div class="text-sm font-bold ">
                {{ userStore.username }}
            </div>
            <el-dropdown trigger="click">
                <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png" />
                <template #dropdown>
                    <el-dropdown-menu>
                        <el-dropdown-item @click="todo">修改密码</el-dropdown-item>
                        <el-dropdown-item @click="doLogout">退出登录</el-dropdown-item>
                    </el-dropdown-menu>
                </template>
            </el-dropdown>
        </div>
    </nav>
</template>
<script setup lang='ts'>
import { useMenuStore } from '@/store/menu';
import { useBreadcrumbStore } from "@/store/breadcrumb"
import { logout } from '@/api';
import { useRouter } from 'vue-router';
import { useUserStore } from '@/store/user';
import { todo } from '@/hocks/useFunc';
import { notify } from '@/hocks/useMessage';
import { watch } from 'vue';
import { useRoute } from 'vue-router';
const menuStore = useMenuStore()
const breadcrumbStore = useBreadcrumbStore()
const router = useRouter()
const userStore = useUserStore()
const route = useRoute()
// 监听路由
watch(() => route, newPath => {
    breadcrumbStore.setBreadcrumbs(newPath.matched);
}, {
    deep: true,
    immediate: true
})
function doLogout() {
    async function confirmCallback() {
        const { code } = await logout()
        if (code === 200) {
            userStore.clearAll()
            router.push("/login")
        }
    }
    notify.Confirm({ message: "是否确认退出登录状态？", confirmCallback, type: "error" })
}
</script>
<style scoped></style>