import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        redirect: '/login'
    },
    {
        path: '/login',
        name: 'login',
        meta: {
            title: '用户登录'
        },
        component: () => import('../views/login/index')
    },
    {
        path: '/register',
        name: 'register',
        meta: {
            title: '用户注册'
        },
        component: () => import('../views/register/index')
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

router.beforeEach((to, from, next) => {
    document.title = to.meta.title;
    next();
})

export default router
