import request from "@/utils/request";

export default {
    getCourseList: (params) => {
        return request({
            url: '/course/getCourseList',
            method: 'get',
            params
        })
    },
    add: (params) => {
        return request({
            url: '/course/add',
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            data: params
        })
    },
    update: (params) => {
        return request({
            url: '/course/update',
            method: 'put',
            headers: {
                'Content-Type': 'application/json'
            },
            data: params
        })
    },
    remove: (id) => {
        return request({
            url: '/course/delete/' + id,
            method: 'delete'
        })
    }
}
