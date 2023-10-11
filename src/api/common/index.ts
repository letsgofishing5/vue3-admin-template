import { doGet, doPost } from "@/http";
import type { LoginUser, UserModel } from "./models/user"
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
export function login<T = any>(data: LoginUser) {
    return doPost<T>({
        url: API.Login,
        data
    })
}
/**
 * 退出登录
 * @returns 
 */
export function logout<T = any>() {
    return doPost<T>({
        url: API.Logout
    })
}
/**
 * 获取动态路由
 * @returns 
 */
export function getRoutes<T>() {
    return doGet<T>({ url: API.GetRoutes })
}