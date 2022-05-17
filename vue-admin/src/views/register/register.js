import userForm from "@/components/UserForm";
import userManageApi from "@/views/api/user/userManage";

export default {
    components: {
        'user-form': userForm
    },
    data() {
        return {
            form: {
                username: '',
                account: '',
                password: '',
                sex: '',
                cell: '',
                email: '',
                userType: '',
                admin: false
            }
        }
    },
    methods: {
        register() {
            console.log(this.form)
            userManageApi.add(JSON.stringify(this.form)).then(() => {
                this.$message({
                    message: '注册成功',
                    type: 'success'
                })
                this.$router.push('/login')
            })
        },
        backToLogin() {
            this.$router.push('/login')
        }
    }
}
