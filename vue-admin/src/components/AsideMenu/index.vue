<template>
    <el-menu
        default-active="1-4-1"
        class="el-menu-vertical-demo"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
        @open="handleOpen"
        @close="handleClose"
        :collapse="isCollapse">
        <div  class="title">
            <h3>课程社区系统</h3>
        </div>
        <el-menu-item v-for="item in menu" :key="item.path" :index="item.id" @click="handleClick(item.path)" >
            <i :class="'el-icon-' + item.icon"></i>
            <span slot="title">{{ item.title }}</span>
        </el-menu-item>
    </el-menu>
</template>

<script>
export default {
    name: "index",
    data() {
        return {
            isCollapse: false,
            menu: [
                {
                    id: '1',
                    icon: 'document-copy',
                    path: '/courseManage',
                    title: '课程管理',
                },
                {
                    id: '2',
                    icon: 'document-add',
                    path: '/setCourse',
                    title: '开设课程',
                },
                {
                    id: '3',
                    icon: 'user',
                    path: '/personalInformation',
                    title: '个人信息',
                },
                {
                    id: '4',
                    icon: 'chat-line-round',
                    path: '/courseBBS',
                    title: '课程论坛'
                }
            ]
        };
    },
    methods: {
        handleOpen(key, keyPath) {
            console.log(key, keyPath);
        },
        handleClose(key, keyPath) {
            console.log(key, keyPath);
        },
        handleClick(path) {
            if (path !== window.location.pathname) {
                this.$router.push(path)
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 100vh;
}
.el-menu {
    height: 100%;
    border: none;
    h3 {
        color: #fff;
        text-align: center;
        line-height: 48px;
        margin: 10px auto;
    }
}
</style>
