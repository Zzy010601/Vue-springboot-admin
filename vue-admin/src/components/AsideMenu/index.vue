<template>
    <el-menu
        default-active="1-4-1"
        class="el-menu-vertical-demo"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
        @open="handleOpen"
        @close="handleClose"
        :collapse="isCollapse"
    >
        <div style="display: flex; ">
            <el-avatar size="large" icon="el-icon-eleme"></el-avatar>
            <h3 v-show="!isCollapse">课程社区系统</h3>
            
        </div>
<!--        <div v-show="isCollapse" style="height:56px"></div>-->
        
        <el-submenu index="1" style="border-radius: 20px">
            <template slot="title">
                <i class="el-icon-s-tools"></i>
                <span>系统管理</span>
            </template>
            <el-menu-item v-for="item in systemMenu" :key="item.path" :index="item.id" @click="handleClick(item.path)">
                <i :class="'el-icon-' + item.icon"></i>
                <span>{{ item.title }}</span>
            </el-menu-item>
        </el-submenu>
        <el-menu-item index="2" v-for="item in menu" :key="item.path" :index="item.id" @click="handleClick(item.path)" >
            <i :class="'el-icon-' + item.icon"></i>
            <span slot="title">{{ item.title }}</span>
        </el-menu-item>
    </el-menu>
</template>

<script>
export default {
    name: "index",
    props: {
        isCollapse: Boolean
    },
    data() {
        return {
            systemMenu: [
                {
                    id: '1-1',
                    icon: 's-custom',
                    path: '/userManage',
                    title: '用户管理'
                },
            ],
            menu: [
                
                {
                    id: '1',
                    icon: 'document-copy',
                    path: '/joinCourse',
                    title: '加入课程',
                },
                {
                    id: '2',
                    icon: 'document-add',
                    path: '/setCourse',
                    title: '开设课程',
                },
                {
                    id: '3',
                    icon: 'user-solid',
                    path: '/personalInformation',
                    title: '个人信息',
                },
                {
                    id: '4',
                    icon: 'chat-line-round',
                    path: '/courseBBS',
                    title: '课程论坛'
                }
            ],
            
        };
    },
    methods: {
        handleOpen(key, keyPath) {
            // console.log(key, keyPath);
        },
        handleClose(key, keyPath) {
            // console.log(key, keyPath);
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
    min-height: calc(100vh - 20px);
}
.el-menu--collapse {
    min-height: calc(100vh - 20px);
    
}
.el-menu {
    height: 100%;
    border: none;
    border-radius: 20px;
    box-shadow: 5px 12px 15px -10px black;
    h3 {
        color: #fff;
        text-align: center;
        line-height: 48px;
        margin: 10px 26px 10px 0;
        
    }
}
.el-avatar--large {
    background-color: #409EFF;
    margin: 14px auto 8px;
}
</style>
