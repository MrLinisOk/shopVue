<template>
    <span>childParam =={{childParam}}</span>
    <!--<el-button @click="childMethod">click</el-button>-->
</template>

<script>
    import {
        Button,
        Select
    } from "element-ui";
    export default {
        name: "child",
        props: ['code'],
        components: {
            [Button.name]: Button,
            [Select.name]: Select
        },
        data(){
            return{
                childParam:'',
            }
        },
        methods:{
            childMethod(){
                console.log(this.childParam);
            }
        },
        mounted(){
            console.log("子组件接收父组件prop值 code = ");
            this.code(this.code);
        }
    }
</script>

<style scoped>

</style>