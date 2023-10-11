import { AxiosRequestConfig } from "axios";
// 用于存储每个请求的标识和取消函数
const pendingMap = new Map<string, AbortController>();
// 添加等待中的请求数据
function addPending(config: AxiosRequestConfig<any>) {
    removePending(config)
    const controller = new AbortController();
    config.signal = controller.signal
    if (config.url && !pendingMap.has(config.url)) {
        pendingMap.set(config.url, controller)
    }
}
// 删除等待中的请求数据
function removePending(config: AxiosRequestConfig<any>) {
    if (config.url && pendingMap.has(config.url)) {
        const cancel = pendingMap.get(config.url)
        cancel?.abort()
        pendingMap.delete(config.url)
    }
}
// 删除所有等待中的请求数据
function removeAllPending(config: AxiosRequestConfig<any>) {
    pendingMap.forEach(abortController => abortController.abort())
}
export { addPending, removePending, removeAllPending }