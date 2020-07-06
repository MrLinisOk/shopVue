<template>
    <button @click="testClick">test</button>
</template>

<script>
    export default {
        name: 'HelloWorld',
        props: {
            // msg: String
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
