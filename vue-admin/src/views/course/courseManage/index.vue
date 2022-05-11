<template>
    <div>
        <el-card class="main-header" shadow="never">
            <el-row :gutter="20">
                <el-col :span="4">
                    <el-input v-model="listQuery.courseName" size="medium" placeholder="请输入课程名称"></el-input>
                </el-col>
                <el-col :span="4">
                    <el-select v-model="listQuery.teacherId" size="medium" placeholder="请选择任课老师" style="width: 100%;">
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
        
        <el-row style="margin-bottom: 10px;">
            <el-col :span="24" class="colButton">
                <el-button type="success" icon="el-icon-plus" size="medium" @click.native="add" circle></el-button>
                <el-button type="info" icon="el-icon-edit" size="medium"  @click.native="edit(currentRow)" circle></el-button>
                <el-button type="danger" icon="el-icon-delete" size="medium" @click.native="remove(currentRow)" circle></el-button>
            </el-col>
        </el-row>
        
        <el-table :data="list" v-loading="listLoading" element-loading-text="Loading" highlight-current-row @current-change="handleCurrentChange">
            <el-table-column prop="date" label="课程名称">
                <template slot-scope="scope">
                    {{scope.row.courseName}}
                </template>
            </el-table-column>
            <el-table-column prop="date" label="任课老师">
                <template slot-scope="scope">
                    {{scope.row.tearcherName}}
                </template>
            </el-table-column>
            <el-table-column prop="date" label="课程总人数">
                <template slot-scope="scope">
                    {{scope.row.totalNumber}}
                </template>
            </el-table-column>
            <el-table-column prop="date" label="已选课人数">
                <template slot-scope="scope">
                    {{scope.row.selectedNumber}}
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
            :total="total"
            @size-change="changeSize"
            @current-change="fetchPage"
            @prev-click="fetchPrev"
            @next-click="fetchNext">
        </el-pagination>
    </div>
</template>

<script src="./courseManage.js"></script>

<style lang="scss" scoped>
    @import "src/style/common.scss";
</style>
