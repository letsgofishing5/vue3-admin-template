<template>
    <div class="flex h-full overflow-hidden">
        <aside>
            <MenuComponent :dynamic-routes="userStore.dynamicRoutes"></MenuComponent>
        </aside>
        <main class="flex flex-col flex-1">
            <HeaderComponent></HeaderComponent>
            <MainComponent></MainComponent>
            <footer class="flex items-center justify-center h-8 text-gray-500 border">技术支持：@走我们钓鱼去</footer>
        </main>
    </div>
</template>
<script setup lang='ts'>
import MenuComponent from "./components/menu/index.vue"
import HeaderComponent from "./components/header/index.vue"
import MainComponent from "./components/main/index.vue"
import { useUserStore } from "@/store/user";
const userStore = useUserStore()

</script>
<style scoped lang="scss">
:deep(.el-tabs) {

    .el-tabs__header {
        height: 30px;
        margin: 0px;
    }

    .el-tabs__nav-wrap {
        height: 30px;

        .el-tabs__item.is-top {
            height: 30px;
        }
    }
}
</style>