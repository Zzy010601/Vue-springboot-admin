import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        redirect: '/login'
    },
    {
        path: '/layout',
        name: 'system',
        meta: {
            title: 'system'
        },
        component: () => import('../views/layout/index'),
        children: [
            {
                path: '/userManage',
                name: 'userManage',
                meta: {
                    title: '用户管理'
                },
                component: () => import('../views/userManage/index')
            },
            {
                path: '/courseManage',
                name: 'courseManage',
                meta: {
                    title: '课程管理'
                },
                component: () => import('../views/course/courseManage/index')
            },
            {
                path: '/courseBBS',
                name: 'courseBBS',
                meta: {
                    title: '课程论坛'
                },
                component: () => import('../views/course/courseBBS/index')
            },
            {
                path: '/setCourse',
                name: 'setCourse',
                meta: {
                    title: '开设课程'
                },
                component: () => import('../views/course/setCourse/index')
            },
            {
                path: '/personalInformation',
                name: 'personalInformation',
                meta: {
                    title: '个人信息'
                },
                component: () => import('../views/personalInformation/index')
            }
        ]
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
