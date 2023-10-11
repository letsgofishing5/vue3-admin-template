import { Ref, ref } from "vue";
import { instance } from "./core";
import { AxiosRequestConfig, AxiosResponse } from "axios";
import NProgress from "nprogress";
import { RequestResult } from ".";
// 统一请求处理
async function HttpRequest<T = any>(
  config: AxiosRequestConfig<any>,
  loading?: Ref<boolean>
) {
  if (typeof loading === "undefined") {
    loading = ref(false);
  } else {
    loading.value = true;
  }
  NProgress.start();
  try {
    const { data } = await instance<any, AxiosResponse<T, any>>(config);
    return data;
  } catch (err: any) {
    console.error('捕获请求错误：', err);
    return Promise.resolve({ msg: err.message, data: null, code: 999 } as T);
  } finally {
    loading.value = false;
    NProgress.done();
  }
}

// 请求类型默认 get 类型
function doGet<T = any>(
  config: AxiosRequestConfig<any>,
  loading?: Ref<boolean>
): Promise<RequestResult<T>> {
  return HttpRequest(config, loading);
}

// 创建
function doPut<T = any>(
  config: AxiosRequestConfig<any>,
  loading?: Ref<boolean>
): Promise<RequestResult<T>> {
  config.method = "PUT";
  return HttpRequest(config, loading);
}

// 更新
function doPatch<T = any>(
  config: AxiosRequestConfig<any>,
  loading?: Ref<boolean>
): Promise<RequestResult<T>> {
  config.method = "PATCH";
  return HttpRequest(config, loading);
}

// 提交表单
function doPost<T = any>(
  config: AxiosRequestConfig<any>,
  loading?: Ref<boolean>
): Promise<RequestResult<T>> {
  config.method = "POST";
  return HttpRequest(config, loading);
}

// 删除
function doDelete<T = any>(
  config: AxiosRequestConfig<any>,
  loading?: Ref<boolean>
): Promise<RequestResult<T>> {
  config.method = "DELETE";
  return HttpRequest(config, loading);
}

export { doGet, doPut, doPost, doDelete, doPatch, HttpRequest };
