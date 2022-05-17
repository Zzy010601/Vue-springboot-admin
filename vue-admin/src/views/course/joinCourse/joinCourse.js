import courseApi from "@/views/api/course/course";

export default {
    data() {
        return {
            courseList: [],
            list: [],
            listLoading: false,
            isAdd: false,
            dialogFormVisible: false,
            currentRow: '',
            total: 0,
            listQuery: {
                page: 1,
                pageSize: 5,
                courseName: undefined,
                teacherId: undefined
            },
        }
    },
    created() {
        this.init()
    },
    methods: {
        init(){
            this.fetchData()
        },
        fetchData() {
            this.listLoading = true
            courseApi.getCourseList(this.listQuery).then(response => {
                this.couseList = response.data.records
                this.list = this.couseList.map(item => {
                    let data = JSON.parse(JSON.stringify(item))
                    return data
                })
                this.listLoading = false
                this.total = response.data.total
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
            if (row === '') {
                this.$message({
                    message: '请选择要删除的数据',
                    type: 'warning'
                })
            } else {
                this.$confirm('您确定要删除这条数据吗？').then(() => {
                    courseApi.remove(row).then(() => {
                        this.$message({
                            message: '删除成功',
                            type: 'success'
                        })
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
                this.form = this.courseList.find(item => item.id === row.id)
                this.isAdd = false
                this.dialogFormVisible = true
            }

        },
        search() {
            this.fetchData()
        },
        reset() {
            this.listQuery.courseName = ''
            this.listQuery.teacherId = ''
            this.fetchData()
        },
        save() {
            if (this.isAdd) {
                console.log(this.form)
                // 添加
                courseApi.add(this.form).then(() => {
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
                courseApi.update(this.form).then(() => {
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
            this.listQuery.pageSize = limit
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
