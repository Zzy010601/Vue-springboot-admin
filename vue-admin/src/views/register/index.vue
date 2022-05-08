<template>
    <div>
        <user-form title="用户注册" width="30%" height="700px">
            <el-form ref="form" v-model="form">
                <el-form-item label="姓名：">
                    <el-input placeholder="请输入姓名" v-model="form.username" />
                </el-form-item>
                <el-form-item label="密码：">
                    <el-input placeholder="请输入密码" v-model="form.password" />
                </el-form-item>
                <el-form-item label="性别：  ">
                    <el-radio v-model="form.sex" label="男" border>男</el-radio>
                    <el-radio v-model="form.sex" label="女" border>女</el-radio>
                </el-form-item>
                <el-form-item label="手机号：">
                    <el-input placeholder="请输入手机号" v-model="form.password" />
                </el-form-item>
                <el-form-item label="邮箱：">
                    <el-input placeholder="请输入邮箱" v-model="form.password" />
                </el-form-item>
                <el-form-item>
                    <el-button type="primary">注册</el-button>
                    <el-button type="info" class="button" @click="backToLogin">取消</el-button>
                </el-form-item>
            </el-form>
        </user-form>
    </div>
</template>
<script src="./register.js"></script>
<style lang="scss" scoped>
.el-form-item ::v-deep .el-input__inner {
    height: 50px;
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

</style>
