<template>
<div id="backDiv">
    <div id="loginBg">
        <img src="../img/login_bg_block.jpg">
    </div>

    <div id="loginData">
        <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">

            <el-form-item label="账号" prop="name">
                <el-input v-model="ruleForm.name" autocomplete="off"></el-input>
            </el-form-item>

            <el-form-item label="密码" prop="password">
                <el-input type="password" v-model="ruleForm.password" autocomplete="off"></el-input>
            </el-form-item>

            <el-form-item label="验证码" prop="code">
                <div id="codeInput">
                    <el-input v-model.number="ruleForm.code"></el-input>
                </div>

                <div class="demo-image">
                    <el-image id="codeImg" @click="changeCodeImg()" style="width: 100px; height: 40px" :src="url"></el-image>
                </div>

            </el-form-item>

            <el-form-item>
                <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
                <el-button @click="resetForm('ruleForm')">重置</el-button>
            </el-form-item>
        </el-form>
    </div>
    <!--测试用-->
<!--    <span>父组件</span>
    <el-button @click="parentChangeChild">父组件按钮</el-button>
    <Child ref="child" @childTodParentMethod="childTodParentMethod" :code="code"></Child>-->
</div>
</template>

<script>

import {
    Button,
    Select
} from "element-ui";
//import Child from "@/components/child";
export default {
    name: "login",
    components: {
        /*Child,*/
        [Button.name]: Button,
        [Select.name]: Select
    },
    props: ['bg_url'],
    data() {
        var checkCode = (rule, value, callback) => {
            if (!value) {
                return callback(new Error('请输入验证码'));
            } else {
                callback();

                //验证码校验  从session获取验证码

            }
            // setTimeout(() => {
            //     if (!Number.isInteger(value)) {
            //         callback(new Error('请输入数字值'));
            //     } else {
            //         if (value < 18) {
            //             callback(new Error('必须年满18岁'));
            //         } else {
            //             callback();
            //         }
            //     }
            // }, 1000);
        };
        var checkName = (rule, value, callback) => {

            if (value === '') {
                callback(new Error('请输入账户名'));
            } else {
                callback();
            }
        };
        var checkPassword = (rule, value, callback) => {
            if (value === '') {
                callback(new Error('请输入密码'));
            } else {
                callback();
            }
        };

        return {
            rad: "",
            code: "",
            bgUrl: "",
            ruleForm: {
                name: '',
                password: '',
                code: ''
            },
            rules: {
                name: [{
                    validator: checkName,
                    trigger: 'blur'
                }],
                password: [{
                    validator: checkPassword,
                    trigger: 'blur'
                }],
                code: [{
                    validator: checkCode,
                    trigger: 'blur'
                }]
            },

            url: ""
        }
    },
    mounted: function () {
        this.bgUrl = this.bg_url;
        this.changeCodeImg();
        this.code = '测试prop传值';
        //this.code = JSON.parse(sessionStorage.getItem("code"));
    },
    methods: {
        childTodParentMethod(data){
            console.log("接收到子组件的参数···>");
            console.log(JSON.stringify(data))
        },

        parentChangeChild(){
            //改变子组件的值
            this.$refs.child.childParam = '林俊杰';
        },

        changeCodeImg() {
            // eslint-disable-next-line no-unused-vars
            this.rad = Math.floor(Math.random() * 1000)
            this.url = "http://localhost:8090/user/imgCode?rad=" + this.rad;
            console.log(this.url);
            //this.code = JSON.parse(sessionStorage.getItem("code"));
            //console.log(this.code);
            // this.$http
            //     .post('/cmiot/protapply/applyQuery')
            //     .then(res => {
            //         //session获取code值

            //     })
            //     .catch(function () {

            //     });
        },

        submitForm(formName) {
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    //alert(this.ruleForm.code+this.ruleForm.name+ this.ruleForm.password);
                    //检验验证ma  根据code 获取redis验证码

                    let param = {
                        rad: this.rad
                    }
                    this.$http.post('/user/getImgCodeAnswer', param).then(res => {
                        console.log(res);
                        if(res.data == this.ruleForm.code){
                            //通过
                            return true;
                        }else{
                            //不通过
                            alert("验证码有误！")
                            return false;
                        }
                    }).catch(function () {
                        alert("捕捉异常！")
                        return false;
                    });
                } else {
                    console.log('error submit!!');
                    return false;
                }
            });
        },
        resetForm(formName) {
            this.$refs[formName].resetFields();
        }
    }
};
</script>

<style scoped>
#backDiv {
    width: 100%;
    height: 100%;
}

#loginBg {
    width: 60%;
    float: left;
    margin-left: 20px;
}

#loginData {
    width: 30%;
    float: right;
    margin-right: 20px;
}

#codeInput {
    width: 180px;
    float: left;
}

#codeImg {
    width: 40px;
    height: 100px;
}
</style>
