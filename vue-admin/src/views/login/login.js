import userForm from '@/components/UserForm';
import { getToken } from '@/utils/cookiesTool'

export default {
    components: {
        'user-form': userForm
    },
    data() {
        return {
            form: {
                account: '',
                password: '',
            },
            loading: false
        }
    },
    computed: {
        rules() {
            return {
                account: [
                    { required: true, message: '请输入账号', trigger: 'blur' },
                ],
                password: [
                    { required: true, message: '请输入密码', trigger: 'blur' }
                ]
            }
        }
    },
    methods: {
        toRegister() {
            this.$router.push('/register')
        },
        login() {
            this.$refs['form'].validate(valid => {
                if (valid) {
                    this.loading = true
                    this.$store.dispatch('user/login', this.form).then(response => {
                        this.loading = false
                        // localStorage.setItem('token', getToken())
                        this.$router.push('/layout')
                    }).catch(error => {
                        this.loading = false
                    })
                } else {
                    return false
                }
            })
        }
    }
}
