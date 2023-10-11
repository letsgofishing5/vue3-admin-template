<template>
    <el-sub-menu :index="dynamicRoutes.path">
        <template #title>
            <el-icon>
                <location />
            </el-icon>
            <span>{{ dynamicRoutes.meta?.title }}</span>
        </template>
        <template v-for="(route, routeIdx) in dynamicRoutes.children" :key="routeIdx">
            <el-menu-item :index="route.path" v-if="!route.children?.length">
                <el-icon>
                    <Menu />
                </el-icon>
                <span>{{ route.meta?.title }}</span>
            </el-menu-item>
            <!-- 没有子路由，则使用Item -->
            <MenuSubItem :dynamic-routes="route" v-if="route.children?.length"></MenuSubItem>
        </template>
    </el-sub-menu>
</template>
<script setup lang='ts'>
import { RouteRecordRaw } from 'vue-router';
interface Props {
    dynamicRoutes: RouteRecordRaw
}
withDefaults(defineProps<Props>(), {
    dynamicRoutes: () => { return {} as RouteRecordRaw }
})
</script>
<style scoped></style>