<template>
    <el-menu router :default-active="menuStore.defaultActive" class="h-screen" unique-opened
        :collapse="menuStore.isCollapse">
        <template v-for="(route, routeIdx) in dynamicRoutes" :key="routeIdx">
            <!-- 判断是否有子路由，有子路由则使用 subItem -->
            <el-menu-item :index="route.path" v-if="!route.children?.length">
                <el-icon>
                    <Menu />
                </el-icon>
                <span>{{ route.meta?.title }}</span>
            </el-menu-item>
            <!-- 没有子路由，则使用Item -->
            <MenuSubItem :dynamic-routes="route" v-if="route.children?.length"></MenuSubItem>
        </template>
    </el-menu>
</template>
<script setup lang='ts'>
import { useMenuStore } from '@/store/menu';
import MenuSubItem from "./MenuSubItem.vue"
import { RouteRecordRaw, useRoute } from 'vue-router';
import { watch } from 'vue';
interface Props {
    dynamicRoutes: RouteRecordRaw[]
}
withDefaults(defineProps<Props>(), {
    dynamicRoutes: () => []
})
const route = useRoute()
const menuStore = useMenuStore()
// 监听路由变化，设置默认激活的菜单
watch(() => route.fullPath, newPath => {
    menuStore.setDefaultActive(newPath)
}, {
    immediate: true
})
</script>
<style scoped>
.el-menu:not(.el-menu--collapse) {
    width: 210px;
    min-height: 400px;
}
</style>