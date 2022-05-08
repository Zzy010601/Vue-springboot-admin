import userForm from '@/components/UserForm';

export default {
    components: {
        'user-form': userForm
    },
    data() {
        return {
            form: {
                username: '',
                password: '',
            }
        }
    },
    methods: {
        toRegister() {
            this.$router.push('/register')
        }
    }
}
