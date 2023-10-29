import { doGet, doPost } from "@/http";
import type { LoginUser, UserModel } from "./models/user"
import { Ref } from "vue";
export type { LoginUser, UserModel }
const API = {
    Login: "/login",
    Logout: "/logout",
    GetRoutes: "/getRoutes"
}
/**
 * 登录
 * @param data 
 * @returns 
 */
export function login<T = any>(data: LoginUser, loading?: Ref<boolean>) {
    return doPost<T>({
        url: API.Login,
        data
    }, loading)
}
/**
 * 退出登录
 * @returns 
 */
export function logout<T = any>(loading?: Ref<boolean>) {
    return doPost<T>({
        url: API.Logout
    }, loading)
}
/**
 * 获取动态路由
 * @returns 
 */
export function getRoutes<T>(loading?: Ref<boolean>) {
    return doGet<T>({ url: API.GetRoutes }, loading)
}