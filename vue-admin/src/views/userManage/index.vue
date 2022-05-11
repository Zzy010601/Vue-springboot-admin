<template>
    <div>
        <el-card class="main-header" shadow="never">
            <el-row>
                <el-col :span="6">
                    <el-input v-model="listQuery.username" size="medium" placeholder="请输入姓名"></el-input>
                </el-col>
                <el-col :span="6" class="col">
                    <el-tooltip class="item" effect="dark" content="搜索" placement="top">
                        <el-button type="primary" icon="el-icon-search" size="medium" circle @click="search"></el-button>
                    </el-tooltip>
                    <el-tooltip class="item" effect="dark" content="重置" placement="top">
                        <el-button icon="el-icon-refresh" size="medium" circle @click="reset"></el-button>
                    </el-tooltip>
                </el-col>
                <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
            </el-row>
        </el-card>
        <el-row style="margin-bottom: 10px;">
            <el-col :span="24" class="colButton">
                <el-button type="success" icon="el-icon-plus" size="medium" @click.native="add" round>添加</el-button>
                <el-button type="info" icon="el-icon-edit" size="medium"  @click.native="edit" round>修改</el-button>
                <el-button type="danger" icon="el-icon-delete" size="medium" round>删除</el-button>
            </el-col>
        </el-row>
        <el-table :data="list" v-loading="listLoading" element-loading-text="Loading" highlight-current-row @current-change="handleCurrentChange">
            <el-table-column prop="date" label="用户姓名">
                <template slot-scope="scope">
                    {{scope.row.username}}
                </template>
            </el-table-column>
            <el-table-column prop="date" label="性别">
                <template slot-scope="scope">
                    {{scope.row.sex}}
                </template>
            </el-table-column>
            <el-table-column prop="date" label="账号">
                <template slot-scope="scope">
                    {{scope.row.account}}
                </template>
            </el-table-column>
            <el-table-column prop="date" label="手机号">
                <template slot-scope="scope">
                    {{scope.row.cell}}
                </template>
            </el-table-column>
            <el-table-column prop="date" label="用户类型">
                <template slot-scope="scope">
                    {{scope.row.userType}}
                </template>
            </el-table-column>
            <el-table-column prop="date" label="是否是管理员">
                <template slot-scope="scope">
                    {{scope.row.admin}}
                </template>
            </el-table-column>
            <el-table-column label="操作">
                <template slot-scope="scope">
                    <el-button type="text" size="mini" icon="el-icon-edit" @click.native="edit(scope.row)">编辑</el-button>
                    <el-button type="text" size="mini" icon="el-icon-delete" @click.native="remove(scope.row)">删除</el-button>
                </template>
            </el-table-column>
        </el-table>
    
        <el-pagination
            ref="pag"
            background
            layout="total, sizes, prev, pager, next, jumper"
            :page-sizes="[5, 10, 20, 50, 100,500]"
            :page-size="listQuery.limit"
            :total="total"
            @size-change="changeSize"
            @current-change="fetchPage"
            @prev-click="fetchPrev"
            @next-click="fetchNext">
        </el-pagination>
    
    
        <el-dialog title="添加用户" :visible.sync="dialogFormVisible">
            <el-form :model="form">
                <el-row>
                    <el-col :span="11">
                        <el-form-item label="姓名" :label-width="formLabelWidth">
                            <el-input v-model="form.username" autocomplete="off"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="11">
                        <el-form-item label="账号" :label-width="formLabelWidth">
                            <el-input v-model="form.account" autocomplete="off"></el-input>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="11">
                        <el-form-item label="密码" :label-width="formLabelWidth">
                            <el-input v-model="form.password" autocomplete="off"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="11">
                        <el-form-item label="手机号" :label-width="formLabelWidth">
                            <el-input v-model="form.cell" autocomplete="off"></el-input>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="11">
                        <el-form-item label="性别" :label-width="formLabelWidth">
                            <el-radio v-model="form.sex" v-for="item in sex" :label="item.value" :key="item.label" border>{{ item.label }}</el-radio>
                        </el-form-item>
                    </el-col>
                    <el-col :span="11">
                        <el-form-item label="性别" :label-width="formLabelWidth">
                            <el-radio v-model="form.userType" v-for="item in userType" :label="item.id" :key="item.type" border>{{ item.type }}</el-radio>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="11">
                        <el-form-item label="是否是管理员" :label-width="formLabelWidth">
                            <el-select v-model="form.isAdmin" placeholder="请选择" style="width: 100%">
                                <el-option
                                    v-for="item in isAdmin"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value">
                                </el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                </el-row>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button type="primary" @click="save">确 定</el-button>
                <el-button @click="dialogFormVisible = false">取 消</el-button>
            </div>
        </el-dialog>
    </div>
</template>

<script src="./userManage.js"></script>

<style lang="scss" scoped>
.main-header {
    margin-bottom: 10px;
    background-color: #fff;
    border-radius: 20px;
}
.main-header:hover {
    box-shadow: 5px 6px 15px -10px black
}
.el-table {
    width: 100%;
    border-radius: 20px;
    padding: 0 10px;
}
.el-table:hover {
    box-shadow: 5px 6px 15px -10px black
}
.col {
    margin-left: 20px;
}
.colButton {
    .el-button:hover {
        box-shadow: 5px 6px 15px -10px black
    }
}
.dialog-footer {
    display: flex;
    justify-content: center
}
.el-radio {
    width: 43.7%;
}
.el-pagination {
    margin-top: 10px;
}
</style>
