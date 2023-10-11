import { RequestResult } from "@/http"

export function parseModel<T>(jsonStr: string): T {
    const model: T = JSON.parse(jsonStr)
    return model
}
export function retSucc(data: any, msg = "ok", count = 0): RequestResult<any> {
    return {
        code: 200,
        data,
        msg,
        count
    }
}
export function retErr(msg = 'error', count = 0): RequestResult<any> {
    return {
        code: 500,
        data: null,
        msg,
        count
    }
}