<template>
    <div>
        <user-form title="用户登录" width="30%" height="360px">
            <el-form ref="form" :model="form">
                <el-form-item>
                    <el-input placeholder="请输入账号" v-model="form.account">
                        <template slot="prepend">账号：</template>
                    </el-input>
                </el-form-item>
                <el-form-item>
                    <el-input placeholder="请输入密码" v-model="form.password" show-password>
                        <template slot="prepend">密码：</template>
                    </el-input>
                </el-form-item>
                <el-button type="text" @click="toRegister" style="transform: translateY(-10px)">还未注册 ？立即前往</el-button>
                <el-form-item>
                    <el-button type="primary" class="button">登录</el-button>
                </el-form-item>
            </el-form>
        </user-form>
    </div>
</template>
<script src="./login.js"></script>
<style lang="scss" scoped>
.register {
    font-size: 18px;
}
.el-form-item ::v-deep .el-input__inner {
    height: 50px
}
.button {
    height: 50px;
    width: 100%
}
</style>
