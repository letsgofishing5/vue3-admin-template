import { notify } from "@/hocks/useMessage";
import axios, { AxiosRequestHeaders, InternalAxiosRequestConfig } from "axios";
import { addPending, removePending } from "./utils";
const instance = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  timeout: 100 * 1000,
});
// 添加请求拦截器
instance.interceptors.request.use(
  // : InternalAxiosRequestConfig<any> extends { bool: boolean }
  function (config) {
    // 在发送请求之前做些什么
    const { headers } = config
    // 判断headers是否是空的
    if (typeof headers === "undefined") {
      config.headers = {} as AxiosRequestHeaders
    }
    // token
    const token = localStorage.getItem("token");
    if (token) {
      config.headers["token"] = localStorage.getItem("token");
    }
    addPending(config)
    return config;
  },
  function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  }
);

// 添加响应拦截器
instance.interceptors.response.use(
  function (response) {
    // 2xx 范围内的状态码都会触发该函数。
    const { data } = response
    const { code, msg } = data
    if (code !== 200) {
      notify.Err(msg)
    }
    removePending(response.config)
    // 对响应数据做点什么
    return response;

  },
  function (error) {
    // 超出 2xx 范围的状态码都会触发该函数。
    // 对响应错误做点什么
    if (error.code !== "ERR_CANCELED") {
      notify.Err(error.message);
    }
    return Promise.reject(error);
  }
);
export { instance };
