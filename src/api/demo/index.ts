import { doGet } from "@/http";
import { Ref } from "vue";
const API = {
    GetUserList1: "/getUserList1",
    GetUserList2: "/getUserList2",
    GetUserList3: "/getUserList3",
}
export function getDemoUserList1<T = any>(data: { page, pageSize: number }, loading: Ref) {
    return doGet<T>({
        url: API.GetUserList1,
        data
    }, loading)
}
export function getDemoUserList2<T = any>(data: { page, pageSize: number }, loading: Ref) {
    return doGet<T>({
        url: API.GetUserList2,
        data
    }, loading)
}
export function getDemoUserList3<T = any>(data: { page, pageSize: number }, loading: Ref) {
    return doGet<T>({
        url: API.GetUserList3,
        data
    }, loading)
}
