import AsideMenu from '@/components/AsideMenu'
export default {
    name: "layout",
    components: {
        AsideMenu,
    },
    data() {
        return {
            isFold: false
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
        }
    }
}
