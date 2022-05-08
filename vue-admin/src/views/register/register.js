import userForm from "@/components/UserForm";
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
            }
        }
    },
    methods: {
        backToLogin() {
            this.$router.push('/login')
        }
    }
}
