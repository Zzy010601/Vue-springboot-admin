import { getToken, setToken, removeToken } from "@/utils/cookiesTool";
import { login } from '@/views/api/user/user'
import { Message } from 'element-ui'

const state = {
    token: '',
    userInfo: {}
}

const mutations = {
    SET_TOKEN: (state, token) => {
        state.token = token
    },
    SET_USER_INFO: (state, userInfo) => {
        state.userInfo.account = userInfo.account
        state.userInfo.password = userInfo.password
    }
}

const actions = {
    login({ dispatch, commit }, userInfo) {
        const { account, password } = userInfo
        return new Promise((resolve, reject) => {
            login({ account: account.trim(), password: password.trim() }).then(response => {
                console.log(response)
                const { code } = response
                if (code === 20000) {
                    Message({
                        message: '登陆成功',
                        type: 'success'
                    })
                    commit('SET_TOKEN', getToken())
                    commit('SET_USER_INFO', userInfo)
                    localStorage.setItem('token', state.token)
                    console.log(localStorage.getItem('token'))
                    console.log(state.userInfo)
                    resolve()
                } else {
                    Message({
                        message: '账号或密码错误',
                        type: 'error'
                    })
                    reject()
                }
            }).catch(error => {
                reject(error)
            })
        })
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}
