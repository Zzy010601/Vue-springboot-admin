
const userData = {
    name: 'admin',
    account: 'admin',
    password: 'admin',
    sex: '男',
    cell: '13566666126',
    email: 'admin@example.com',
    userType: '超级管理员',
    isAdmin: '管理员'
}
export default {
    data() {
        return {
            imageUrl: '',
            isFold: false,
            userInfo: userData
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

        },
        clickToFold() {
            this.isFold = true
            console.log(this.isFold)
        },
        clickToUnfold() {
            this.isFold = false
            console.log(this.isFold)
        },
        handleAvatarSuccess(res, file) {
            this.imageUrl = URL.createObjectURL(file.raw);
        },
        beforeAvatarUpload(file) {
            const isJPG = file.type === 'image/jpeg';
            const isLt2M = file.size / 1024 / 1024 < 2;

            if (!isJPG) {
                this.$message.error('上传头像图片只能是 JPG 格式!');
            }
            if (!isLt2M) {
                this.$message.error('上传头像图片大小不能超过 2MB!');
            }
            return isJPG && isLt2M;
        }
    }
}
