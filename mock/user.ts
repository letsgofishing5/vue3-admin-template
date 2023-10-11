import { RequestResult } from "@/http";
import Mock, { Random } from "mockjs";
import { parseModel, retErr, retSucc } from "./utils";
import { LoginUser, UserModel } from "@/api/common";
import routesJson from "./dynamicRouter/routes.json"

interface Options {
    url: string
    type: string
    body: string
}
const loginList: UserModel[] = [
    {
        username: "admin",
        password: "123456",
        token: "admin123456",
        // role: []
        role: ['admin']
    }, {
        username: "user",
        password: "123456",
        token: "user123456",
        role: ['user']
    }
]

function login(params: Options): RequestResult<any> {
    const user = parseModel<LoginUser>(params.body)
    const checkUser = loginList.find(item => user.username === item.username && user.password === item.password)
    if (!checkUser) {
        return retErr("账号或密码错误")
    }
    return retSucc(checkUser)
}

function logout(): RequestResult<any> {
    return retSucc(null)
}

function getRoutes(params: Options) {
    return retSucc(routesJson)
}
Mock.mock('/dev/login', 'post', login)
Mock.mock('/dev/logout', 'post', logout)
Mock.mock('/dev/getRoutes', 'get', getRoutes)
