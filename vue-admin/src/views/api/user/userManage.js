import request from "@/utils/request";

export default  {
    getUserList: (params) => {
        return request({
            url: '/user/getUserList',
            method: 'get',
            params
        })
    },
    add: (params) => {
        return request({
            url: '/user/add',
            method: 'post',
            data: params
        })
    },
    update: (params) => {
        return request({
            url: '/user/update',
            method: 'put',
            data: params
        })
    },
    remove: (id) => {
        return request({
            url: '/user/delete/' + id,
            method: 'delete',
        })
    },
    login: (params) => {
        return request({
            url: '/user/login',
            method: 'post',
            data: params
        })
    }
    // getUserList: (params) => {
    //     return request.get('/user/getUserList', { params })
    // },
    // add: (params) => {
    //     return request.post('/user/add', params)
    // update: (params) => {
    //     return request.put('/user/update',  params)
    // },
    // remove: (id) => {
    //     return request.delete('/user/delete/' + id)
    // },
}


