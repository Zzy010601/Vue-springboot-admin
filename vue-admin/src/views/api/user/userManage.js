import request from "@/utils/request";

export default {
    getUserList: function(params) {
        return request ({
            url: '/user/getUserList',
            methods: 'get',
            params
        })
    },
    add: function(params) {
        return request({
            url: '/user/add',
            methods: 'post',
            params
        })
    },
    update: function(params) {
        return request({
            url: '/user/update',
            methods: 'put',
            params
        })
    },
    remove: function(params) {
        return request({
            url: '/user/remove',
            methods: 'delete',
            params
        })
    }
}
