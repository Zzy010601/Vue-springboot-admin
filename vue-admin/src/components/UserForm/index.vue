<template>
    <div class="container">
        <el-card class="box-card" :style="{ width: width, height: height}">
            <div slot="header" class="clearfix">
                <h1>{{ title }}</h1>
            </div>
            <slot></slot>
        </el-card>
    </div>
</template>

<script>
export default {
    name: "userForm",
    props: {
        title: String,
        width: String,
        height: String,
    },
}
</script>

<style scoped>
.clearfix:before,
.clearfix:after {
    display: table;
    content: "";
}
h1 {
    margin: 8px;
}
.box-card {
    padding: 10px;
    border-radius: 20px;
    opacity: 0.92;
}
.container {
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    background: url(/public/img/bg.jpeg) no-repeat;
    background-size: cover;
    /*padding-top: 200px*/
    
    height: 100vh;
}
.clearfix:after {
    clear: both
}
</style>
