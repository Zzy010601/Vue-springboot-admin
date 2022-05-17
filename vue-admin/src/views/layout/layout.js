import AsideMenu from '@/components/AsideMenu'

export default {
    name: "layout",
    components: {
        AsideMenu,
    },
    data() {
        return {
            isFold: false,
            imageUrl: '',
        }
    },
    methods: {
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
