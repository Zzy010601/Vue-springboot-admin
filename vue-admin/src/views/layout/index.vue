<template>
    <div>
        <el-container style="height: 100%">
            <el-aside width="auto">
                <aside-menu></aside-menu>
            </el-aside>
            <el-container>
                <el-header></el-header>
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
    background-color: #333;
    
}

.el-aside {
    background-color: #D3DCE6;

}

.el-main {
    background-color: #E9EEF3;
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
