import userManageApi from "@/views/api/user/userManage";

export default {
    data() {
        return {
            list: [],
            userList: [],
            listLoading: false,
            dialogFormVisible: false,
            formLabelWidth: '100px',
            isAdd: false,
            currentRow: '',
            form: {
                username: '',
                account: '',
                password: '',
                sex: '',
                cell: '',
                email: '',
                userType: '',
                admin: '',
            },
            pageParams: {
                current: '',
                pages: '',
                size: '',
                total: 0,
            },
            listQuery: {
                page: 1,
                pageSize: 5,
                username: undefined,
                userType: undefined,
            },
            sex: [{
                value: true,
                label: '男'
            }, {
                value: false,
                label: '女'
            }],
            userType: [{
                id: 0,
                type: '超级管理员'
            }, {
                id: 1,
                type: '教师'
            }, {
                id: 2,
                type: '学生'
            }],
            isAdmin: [{
                value: true,
                label: '管理员',
            }, {
                value: false,
                label: '非管理员'
            }]
        }
    },
    created() {
        this.init()
    },
    methods: {
        init() {
            this.fetchData()
        },
        fetchData() {
            this.listLoading = true
            // 调取后端接口获取用户列表
            userManageApi.getUserList(this.listQuery).then(response => {
                this.pageParams.current = response.data.current
                this.pageParams.pages = response.data.pages
                this.pageParams.size = response.data.size
                this.userList = response.data.records;
                this.list = this.userList.map(item => {
                    let data = JSON.parse(JSON.stringify(item))
                    switch(data.userType) {
                        case 0: data.userType = '超级管理员'; break;
                        case 1: data.userType = '教师'; break;
                        default: data.userType = '学生'; break;
                    }
                    data.sex === true ? data.sex = '男' : data.sex = '女';
                    data.admin === true ? data.admin = '管理员' : data.admin = '非管理员';
                    return data;
                })
                this.listLoading = false
                this.pageParams.total = response.data.total
            })
        },
        add() {
            this.isAdd = true
            this.resetForm()
            this.dialogFormVisible = true
        },
        resetForm() {
            for (let item of Object.keys(this.form)) {
                this.form[item] = ''
            }
        },
        remove(row) {
            console.log(row)
            if (row === '') {
                this.$message({
                    message: '请选择要删除的数据',
                    type: 'warning'
                })
            } else {
                this.$confirm('您确定要删除这条数据吗？').then(() => {
                    userManageApi.remove(row.id).then(() => {
                        this.$message({
                            message: '删除成功',
                            type: 'success'
                        })
                        if (this.pageParams.current === this.pageParams.pages && this.pageParams.total % this.pageParams.size === 1){
                            this.listQuery.page--
                        }
                        this.fetchData()
                    })
                })
            }
        },
        edit(row) {
            if (row === '') {
                this.$message({
                    message: '请选择所要编辑的数据',
                    type: 'warning'
                })
            } else {
                this.form = this.userList.find(item => item.id === row.id)
                this.isAdd = false
                this.dialogFormVisible = true
            }

        },
        search() {
            this.fetchData()
        },
        reset() {
            this.listQuery.username = ''
            this.listQuery.userType = ''
            this.fetchData()
        },
        save() {
            if (this.isAdd) {
                console.log(this.form)
                // 添加
                userManageApi.add(this.form).then(() => {
                    this.$message({
                        message: '添加成功',
                        type: 'success'
                    })
                    this.fetchData()
                }).catch(() => {
                    this.$message({
                        message: '添加失败',
                        type: 'error'
                    })
                })
            } else {
                userManageApi.update(this.form).then(() => {
                    this.$message({
                        message: '添加成功',
                        type: 'success'
                    })
                    this.fetchData()
                }).catch(() => {
                    this.$message({
                        message: '添加失败',
                        type: 'error'
                    })
                })
            }
            this.dialogFormVisible = false
        },
        changeSize(limit) {
            this.listQuery.limit = limit
            this.fetchData()
        },
        fetchPage(page) {
            this.listQuery.page = page
            this.fetchData()
        },
        fetchNext() {
            this.listQuery.page = this.listQuery.page + 1
            this.fetchData()
        },
        fetchPrev() {
            this.listQuery.page = this.listQuery.page - 1
            this.fetchData()
        },
        handleCurrentChange(currentRow, oldCurrentRow) {
            this.currentRow = currentRow;
        }
    }
}
