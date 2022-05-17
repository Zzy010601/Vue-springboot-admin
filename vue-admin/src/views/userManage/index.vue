<template>
    <div>
        <el-card shadow="never">
            <el-row :gutter="20">
                <el-col :span="4">
                    <el-input v-model="listQuery.username" size="medium" placeholder="请输入姓名"></el-input>
                </el-col>
                <el-col :span="4">
                    <el-select v-model="listQuery.userType" size="medium" placeholder="请选择用户类型" style="width: 100%;">
                        <el-option
                            v-for="item in userType"
                            :key="item.type"
                            :label="item.type"
                            :value="item.id">
                        </el-option>
                    </el-select>
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
        
        <el-row class="btnRow">
            <el-col :span="24" class="colButton">
                <el-button type="success" icon="el-icon-plus" size="medium" @click.native="add" circle></el-button>
                <el-button type="info" icon="el-icon-edit" size="medium"  @click.native="edit(currentRow)" circle></el-button>
                <el-button type="danger" icon="el-icon-delete" size="medium" @click.native="remove(currentRow)" circle></el-button>
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
            <el-table-column prop="date" label="邮箱">
                <template slot-scope="scope">
                    {{scope.row.email}}
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
                    <el-button
                        slot="reference"
                        type="text"
                        size="mini"
                        icon="el-icon-delete"
                        @click.native="remove(scope.row)"
                        style="margin-left: 10px;"
                    >删除</el-button>
                </template>
            </el-table-column>
        </el-table>
    
        <el-pagination
            ref="pag"
            background
            layout="total, sizes, prev, pager, next, jumper"
            :page-sizes="[5, 10, 20, 50, 100,500]"
            :page-size="listQuery.pageSize"
            :total="pageParams.total"
            @size-change="changeSize"
            @current-change="fetchPage"
            @prev-click="fetchPrev"
            @next-click="fetchNext">
        </el-pagination>
    
    
        <el-dialog title="添加用户" :visible.sync="dialogFormVisible" width="60% ">
            <el-form :model="form">
                <el-row>
                    <el-col :span="10">
                        <el-form-item label="姓名" :label-width="formLabelWidth">
                            <el-input v-model="form.username" autocomplete="off"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="10">
                        <el-form-item label="账号" :label-width="formLabelWidth">
                            <el-input v-model="form.account" autocomplete="off"></el-input>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="10">
                        <el-form-item label="密码" :label-width="formLabelWidth">
                            <el-input v-model="form.password" autocomplete="off"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="10">
                        <el-form-item label="手机号" :label-width="formLabelWidth">
                            <el-input v-model="form.cell" autocomplete="off"></el-input>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="10">
                        <el-form-item label="性别" :label-width="formLabelWidth">
                            <el-radio v-model="form.sex" v-for="item in sex" :label="item.value" :key="item.label" border>{{ item.label }}</el-radio>
                        </el-form-item>
                    </el-col>
                    <el-col :span="10">
                        <el-form-item label="邮箱" :label-width="formLabelWidth">
                            <el-input v-model="form.email" autocomplete="off"></el-input>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="10">
                        <el-form-item label="用户类型" :label-width="formLabelWidth">
                            <el-select v-model="form.userType" placeholder="请选择用户类型" :label-width="formLabelWidth" style="width: 100%">
                                <el-option
                                    v-for="item in userType"
                                    :key="item.type"
                                    :label="item.type"
                                    :value="item.id">
                                </el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                    <el-col :span="10">
                        <el-form-item label="是否是管理员" :label-width="formLabelWidth">
                            <el-select v-model="form.admin" placeholder="请选择" style="width: 100%">
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
@import "src/style/common.scss";
.el-radio {
    width: 44.5%;
}
.el-row {
    display: flex;
    justify-content: space-around;
}
</style>
