<template>
    <div class="container">
        <el-card shadow="hover" style="width: 36%; text-align: center;">
            <el-upload
                class="avatar-uploader"
                action="https://jsonplaceholder.typicode.com/posts/"
                :show-file-list="false"
                :on-success="handleAvatarSuccess"
                :before-upload="beforeAvatarUpload">
                <el-avatar v-if="imageUrl" :src="imageUrl" fit="fill" :size="150"></el-avatar>
                <el-avatar v-else icon="el-icon-user-solid" :size="150"></el-avatar>
            </el-upload>
            <el-descriptions title="个人信息" direction="vertical" :column="2" border>
                <el-descriptions-item label="姓名">{{ userInfo.name }}</el-descriptions-item>
                <el-descriptions-item label="性别">{{ userInfo.sex }}</el-descriptions-item>
                <el-descriptions-item label="账号">{{ userInfo.account }}</el-descriptions-item>
                <el-descriptions-item label="密码">{{ userInfo.password }}</el-descriptions-item>
                <el-descriptions-item label="手机">{{ userInfo.cell }}</el-descriptions-item>
                <el-descriptions-item label="邮箱">{{ userInfo.email }}</el-descriptions-item>
                <el-descriptions-item label="用户类型">{{ userInfo.userType }}</el-descriptions-item>
                <el-descriptions-item label="备注">
                    <el-tag size="small">{{ userInfo.isAdmin }}</el-tag>
                </el-descriptions-item>
            </el-descriptions>
        </el-card>
        
        <el-card shadow="hover" style="width: 62%">
        
        </el-card>
    </div>
</template>

<script src="./personalInformation.js"></script>

<style lang="scss" scoped>
.container {
    display: flex;
    justify-content: space-between;
    height: 100%
}
.el-card {
    border-radius: 10px;
}
.el-descriptions {
    margin-top: 30px;
    ::v-deep.el-descriptions__header {
        justify-content: center;
        margin-bottom: 30px;
    }
}
</style>
