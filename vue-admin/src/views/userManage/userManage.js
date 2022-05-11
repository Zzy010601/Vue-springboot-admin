import userManageApi from '@/views/api/user/userManage'
// import request from "@/utils/request";

export default {
    data() {
        return {
            list: [],
            userList: [],
            listLoading: false,
            dialogFormVisible: false,
            formLabelWidth: '100px',
            isAdd: false,
            form: {
                username: '',
                account: '',
                password: '',
                sex: '',
                cell: '',
                email: '',
                userType: '',
                isAdmin: '',
            },
            listQuery: {
                page: 1,
                pageSize: 5,
                username: undefined
            },
            total: 0,
            sex: [{
                value: true,
                label: '男'
            }, {
                value: false,
                label: '女'
            }],
            userType: [{
                    id: 1,
                    type: '教师'
                }, {
                    id: 2,
                    type: '学生'
                }
            ],
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
                this.total = response.data.total
            })
        },
        add() {
            this.isAdd = true
            this.dialogFormVisible = true
        },
        edit() {
            this.isAdd = false
            this.dialogFormVisible = true
        },
        search() {
            this.fetchData()
        },
        reset() {
            this.listQuery.username = ''
            this.fetchData()
        },
        save() {
            if (this.isAdd) {
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
        }
    }
}
