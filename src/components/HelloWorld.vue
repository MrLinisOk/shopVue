<template>

    <div>
        <button @click="testClick">test</button>
        <login :bg_url="this.bg_url"/>
    </div>

</template>

<script>
    import login from "../view/login";
    export default {
        name: 'HelloWorld',
        props: {
            // msg: String
        },
        components:{
            login
        },
        data() {
            return {
                bg_url: ''
            }
        },

        methods: {
            testClick() {
                
                // this.$http
                //     .get('/user/queryUser')
                //     .then(res => {
                //         console.log(res);
                //     })
                //     .catch(function() {

                //     });
            }
        },
        mounted:function(){
            this.bg_url = require("../img/login_bg_block.jpg");
        }
    }
</script>


<style scoped>

</style>
