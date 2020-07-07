<template>

    <div>
        <!--<img alt="" src="../img/picture.jpg">-->
        <van-button type="default">默认按钮</van-button>
        <van-button type="primary">主要按钮</van-button>
        <van-button type="info">信息按钮</van-button>
        <van-button type="warning">警告按钮</van-button>
        <van-button type="danger">危险按钮</van-button>
    </div>

</template>

<script>
    import {
        Tab,
        Button
    } from 'vant';
    export default {
        name: "login",
        components:{
            [Tab.name]: Tab,
            [Button.name]: Button
        }
    }
</script>

<style scoped>

</style>