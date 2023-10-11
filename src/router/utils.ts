import { getRoutes } from "@/api"
import { useUserStore } from "@/store/user"
import { RouteRecordRaw, Router } from "vue-router"
import { ConstantRoutes } from "./modules/constantRoutes"
const modules = import.meta.glob("@/views/**/*.vue")
/**
 * 初始化动态路由
 */
export async function initDynamicRoutes(router: Router) {
    const userStore = useUserStore()
    const { code, data } = await getRoutes<RouteRecordRaw[]>()
    if (code === 200) {
        handleDynamicRoutesFileMapping(data)
    } else {
        return []
    }
    // 设置共享内存动态路由数据
    userStore.setDynamicRoutes(data)
    ConstantRoutes[0].redirect = findDashboard(data)
    router.addRoute(ConstantRoutes[0])
    // 动态添加路由
    data?.forEach(route => {
        router.addRoute(import.meta.env.VITE_ROOT_ROUTE_NAME, route)
    })
    return data
}
/**
 * 处理动态路由的组件映射关系
 * @param dynamicRoutes 
 */
export function handleDynamicRoutesFileMapping(dynamicRoutes: RouteRecordRaw[]) {
    dynamicRoutes.forEach(route => {
        if (modules[(route.component as any as string)]) {
            route.component = modules[(route.component as any as string)]
        }
        if (route.children && route.children.length) {
            handleDynamicRoutesFileMapping(route.children)
        }
    })
}

/**
 * 发现首页，并返回路径
 * @param routes 
 * @returns 
 */
export function findDashboard(routes: RouteRecordRaw[]): RouteRecordRaw {
    let route = routes[0]
    while (route?.children && route.children.length) {
        route = route.children[0]
    }
    return route
}

// 重置路由
export function resetRoutes(dynamicRoutes: RouteRecordRaw[], router: Router) {
    dynamicRoutes.forEach(route => {
        const { name } = route;
        if (name && router.hasRoute(name)) router.removeRoute(name);
    });
};
