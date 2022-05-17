<template>
    <div>
        <user-form title="用户注册" width="40%" height="850px">
            <el-form ref="form" :model="form" label-position="top">
                <el-form-item label="姓名：">
                    <el-input placeholder="请输入姓名" v-model="form.username" />
                </el-form-item>
                <el-form-item label="用户名：">
                    <el-input placeholder="请输入姓名" v-model="form.account" />
                </el-form-item>
                <el-form-item label="密码：">
                    <el-input placeholder="请输入密码" v-model="form.password" />
                </el-form-item>
                <div style="display: flex; justify-content: space-between;">
                    <el-form-item class="formItem" label="性别：  " style="display: inline-block">
                        <el-radio v-model="form.sex" :label="true" border>男</el-radio>
                        <el-radio v-model="form.sex" :label="false" border>女</el-radio>
                    </el-form-item>
                    <el-form-item class="formItem" label="用户类型  " style="display: inline-block; ">
                        <el-radio v-model="form.userType" :label="1" border>教师</el-radio>
                        <el-radio v-model="form.userType" :label="2" border>学生</el-radio>
                    </el-form-item>
                </div>
                <el-form-item label="手机号：">
                    <el-input placeholder="请输入手机号" v-model="form.cell" />
                </el-form-item>
                <el-form-item label="邮箱：">
                    <el-input placeholder="请输入邮箱" v-model="form.email" />
                </el-form-item>
            </el-form>
            <div>
                <el-button type="primary" @click="register">注册</el-button>
                <el-button type="info" class="button" @click="backToLogin">取消</el-button>
            </div>
        </user-form>
    </div>
</template>
<script src="./register.js"></script>
<style lang="scss" scoped>
.el-form-item {
    ::v-deep .el-input__inner {
        height: 50px;
    }
    ::v-deep .el-form-item__label {
        padding: 0;
    }
}
.el-button {
    height: 50px;
    width: 50%
}
.button {
    margin: 10px auto auto 0;
}
.sex {
    margin-right: 50px
}
.el-radio {
    width: 150px
}
</style>
