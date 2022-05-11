import request from "@/utils/request";

export default {
    getUserList: (params) => {
        return request ({
            url: '/user/getUserList',
            methods: 'get',
            params
        })
    },
    add: (params) => {
        return request.post('/user/add', params)
    },
    update: (params) => {
        return request.put('/user/update', params)
    },
    remove: (id) => {
        return request.delete('/user/delete', id)

    }
}
// export const getUserList = (params) => {
//     return request.get('/user/getUserList', params)
// }
// export const add = (params) => {
//     return request.post('/user/add', params)
// }
// export function getUserList(params) {
//     return request ({
//         url: '/user/getUserList',
//         methods: 'get',
//         params
//     })
// }
// export const update = (params) => {
//     return request.put('/user/update', params)
// }
// export const remove = (id) => {
//     return request.delete('/user/delete', id)
// }
