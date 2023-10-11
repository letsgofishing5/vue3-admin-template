import Mock from "mockjs";
Mock.mock('/dev/test', 'post', {
    'code': 200,
    'data': {
        'name': '@cname',
        'age|1-10': 10
    },
    'msg': "测试通过"
})
