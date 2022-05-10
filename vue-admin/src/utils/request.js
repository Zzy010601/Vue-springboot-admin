import axios from 'axios'

const request = axios.create({
    baseURL: 'http://localhost:8080', // 注意！！ 这里是全局统一加上了 后端接口前缀 前缀，后端必须进行跨域配置！
    timeout: 10000
})


// request 拦截器
// 可以自请求发送前对请求做一些处理
// 比如统一加token，对请求参数统一加密
request.interceptors.request.use(config => {
    config.headers['Content-type'] = 'application/json;charset=utf-8';
    // config.headers['token'] = user.token;  // 设置请求头
    return config
},error => {
    console.log(error)
    return Promise.reject(error)
})

// response 拦截器
// 可以在接口响应后统一处理结果
request.interceptors.response.use(response => {
    let res = response.data;
    if (response.config.responseType === 'blob') {
        return res
    }
    if (typeof res === 'string') {
        res = res ? JSON.parse(res) : res
    }
    return res;
}, error => {
    console.log('err' + error)
    return Promise.reject(error)
})

export default request
