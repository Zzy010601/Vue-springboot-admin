<template>
    <div>
        <el-table :data="list" v-loading="listLoading" element-loading-text="Loading" border highlight-current-row @current-change="handleCurrentChange">
            <el-table-column
                prop="date"
                label="日期">
            </el-table-column>
        </el-table>
    </div>
</template>

<script src="./userManage.js"></script>

<style lang="scss" scoped>
.el-table {
    width: 100%;
    border-radius: 20px;
    padding: 0 10px;
    box-shadow: 5px 6px 15px -10px black
}
</style>
