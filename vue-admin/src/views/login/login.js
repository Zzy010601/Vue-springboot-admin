import userForm from '@/components/UserForm';
import fa from "element-ui/src/locale/lang/fa";

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
                    this.$router.push('/layout')
                } else {
                    return false
                }
            })
        }
    }
}
