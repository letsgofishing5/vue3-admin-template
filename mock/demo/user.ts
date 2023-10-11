import { RequestResult } from "@/http";
import Mock, { Random } from "mockjs";
import { parseModel, retErr, retSucc } from "#/utils";
export interface DemoUserModel {
    address: string
    name: string
    phone: number
    email: string
    avator: string
    birthday: string
}
interface Options {
    url: string
    type: string
    body: string
}
const phones = [
    17560543966,
    18575492448,
    15195609796,
    17762930836,
    19713987488,
    17344519018,
    14565424517,
    18145657588,
    19625443794,
    13494063957,
    13588714511,
    17825136925,
    19099889656,
    18643409532,
    13046552460,
    19046135866,
    15152868375,
    19513561126,
    19891287976,
    14974507347,
    18687423324,
    15368084234,
    17744279769,
    13073994871,
    19164981442,
    15858247813,
    18454964376
]
function getUserList(params: Options): RequestResult<DemoUserModel[]> {
    const queryParams = parseModel<{ page, pageSize: number }>(params.body)
    const result: Partial<DemoUserModel>[] = []
    let startPos = (queryParams.page - 1) * queryParams.pageSize
    // 分页总数
    const count = 31
    const offset = startPos + queryParams.pageSize > count ? 31 : startPos + queryParams.pageSize
    for (let i = startPos; i < offset; i++) {
        const tmp: Partial<DemoUserModel> = {}
        tmp.address = Random.county(true)
        tmp.name = Mock.mock('@cname()')
        const { phone } = Mock.mock({
            "phone|1": phones
        })
        tmp.phone = phone
        tmp.email = Mock.mock('@email')
        tmp.avator = Random.dataImage('200x100', 'Hello Mock.js!')
        tmp.birthday = Random.date('yyyy-MM-dd')
        result.push(tmp)
    }

    return retSucc(result, "获取信息成功", count)
}

Mock.mock('/dev/getUserList1', 'get', getUserList)
Mock.mock('/dev/getUserList2', 'get', getUserList)
Mock.mock('/dev/getUserList3', 'get', getUserList)