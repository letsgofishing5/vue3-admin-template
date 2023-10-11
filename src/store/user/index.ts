import { getRoutes } from "@/api";
import { handleDynamicRoutesFileMapping } from "@/router/utils";
import { defineStore } from "pinia";
import { RouteRecordRaw } from "vue-router";
const modules = import.meta.glob("@/views/**/*.vue")
export const useUserStore = defineStore("userInfo", {
    state: () => {
        return {
            username: "",
            token: "",
            roles: [] as string[],
            dynamicRoutes: [] as RouteRecordRaw[]
        };
    },
    actions: {
        setUserName(name: string) {
            this.username = name
        },
        setToken(token: string) {
            this.token = token
        },
        setRoles(roles: string[]) {
            this.roles = roles
        },
        /**
         * 获取动态路由
         * @returns 
         */
        async setDynamicRoutes(dynamicRoutes: RouteRecordRaw[]) {
            this.dynamicRoutes = dynamicRoutes
        },
        clearAll() {
            this.username = ""
            this.token = ""
            this.roles = []
            this.dynamicRoutes = []
            localStorage.removeItem("userInfo")
        }
    },
    // 所有数据持久化
    // persist: true,
    // 持久化存储插件其他配置
    persist: {
        // 修改存储中使用的键名称，默认为当前 Store的 id
        // key: "userInfo",
        // 修改为 sessionStorage，默认为 localStorage
        storage: window.localStorage,
        // 部分持久化状态的点符号路径数组，[]意味着没有状态被持久化(默认为undefined，持久化整个状态)
        paths: ["username", "token", "roles"],
    },
});
