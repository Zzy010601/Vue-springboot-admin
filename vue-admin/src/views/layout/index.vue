<template>
    <div>
        <el-container style="height: 100%">
            <el-aside width="auto">
                <aside-menu :isCollapse="isFold"></aside-menu>
            </el-aside>
            <el-container>
                <el-header>
                    <div>
                        <el-button size="mini" icon="el-icon-s-fold" v-show="!isFold" @click="clickToFold"></el-button>
                        <el-button size="mini" icon="el-icon-s-unfold" v-show="isFold" @click="clickToUnfold"></el-button>
                    </div>
                    <el-upload
                        class="avatar-uploader"
                        action="https://jsonplaceholder.typicode.com/posts/"
                        :show-file-list="false"
                        :on-success="handleAvatarSuccess"
                        :before-upload="beforeAvatarUpload">
                        <el-avatar v-if="imageUrl" :src="imageUrl" fit="fill"></el-avatar>
                        <el-avatar v-else icon="el-icon-user-solid"></el-avatar>
                    </el-upload>
                </el-header>
                <el-main>
                    <router-view />
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>

<script src="./layout.js"></script>

<style lang="scss" scoped>
.el-header {
    margin: 10px 20px 0 20px;
    background-color: #333;
    border-radius: 16px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.el-aside {
    background-color: #E9EEF3;
    padding: 10px;
}
.el-main {
    background-color: #E9EEF3;
    padding-bottom: 10px;
}
.el-button ::v-deep .el-icon-s-fold {
    font-size: 18px;
}
.el-button ::v-deep .el-icon-s-unfold {
    font-size: 18px;
}
//.el-container {
//    margin-bottom: 40px;
//}

//.el-container:nth-child(5) .el-aside,
//.el-container:nth-child(6) .el-aside {
//    line-height: 260px;
//}
//
//.el-container:nth-child(7) .el-aside {
//    line-height: 320px;
//}
</style>
