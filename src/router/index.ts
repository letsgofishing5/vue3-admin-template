import { createRouter, createWebHashHistory, createWebHistory } from "vue-router"
import { ConstantRoutes, NotFoundRoutes } from "./modules/constantRoutes"
import NProgress from "nprogress";
import { useUserStore } from "@/store/user";
import { initDynamicRoutes } from "./utils";
const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        ...ConstantRoutes,
        ...NotFoundRoutes
    ]
})
/**
 * 路由白名单
 */
export const whiteList = ["/login", "/404"]

router.beforeEach(async (to, from) => {
    NProgress.start();
    const userStore = useUserStore()
    document.title = to.meta.title ? "走我们钓鱼去-" + to.meta.title : "走我们钓鱼去"
    // TODO: 简化代码层级嵌套，尽量平铺直叙
    if (userStore.token) {
        if (to.path === '/login') {
            return "/"
        } else {
            if (!userStore.dynamicRoutes.length) {
                await initDynamicRoutes(router)
                return to.fullPath
            }
        }
    } else {
        if (whiteList.indexOf(to.fullPath) === -1) {
            return `/login`
        }
    }

});
router.afterEach(() => {
    NProgress.done();
});
router.onError(handler => {
    NProgress.done();
    console.warn("router occurence error", handler);
})

export default router