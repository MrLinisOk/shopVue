<template>

    <div>
        <button @click="testClick">test</button>
        <login />
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
                test: ''
            }
        },

        methods: {
            testClick() {

                this.$http
                    .get('/user/queryUser')
                    .then(res => {
                        console.log(res);
                    })
                    .catch(function() {

                    });
            }
        }
    }
</script>


<style scoped>

</style>
