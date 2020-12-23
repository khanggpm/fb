<template>
    <div class="login">
        <el-form ref="loginform" label-width="0px" class="login-form">
            <el-row class="header-info">
                <label class="lb-1" style="cursor: pointer" @click="switchTab(0)" ></label>
                <label class="lb-2" style="cursor: pointer" @click="switchTab(1)"></label>
            </el-row>
            <el-row class="av-icon">
                <img src="../assets/img/images.jpg" style="
                     height: 50px;
                     border: 5px solid #FFF;
                     border-radius: 50%;"
                >
            </el-row>
            {{ error }}
            <el-row type="flex" class="row-bg" justify="center">
                <el-form-item label prop="user_email" style="width:60%;height:40px">
                    <el-input v-model="form.user_email" name="user_email" placeholder="Email"></el-input>
                </el-form-item>
            </el-row>

            <el-row type="flex" class="row-bg" justify="center">
                <el-form-item label prop="user_pass" style="width:60%;height:40px">
                    <el-input v-model="form.user_pass" name="user_pass" show-password placeholder="*****"></el-input>
                </el-form-item>
            </el-row>
            <el-row type="flex" class="row-bg" justify="center">
                <el-button class="login-btn" @click="onSubmit('loginform')"></el-button>
            </el-row>
        </el-form>
    </div>
</template>
<script>
    export  default  {
        name : "Login",
        data() {
            return {
                form : {
                    user_email : "",
                    user_pass : ""
                },
                switch : 0,
                error: null
            }
        },
        created() {
        },
        mounted() {
        },
        methods : {
            switchTab(key) {
                this.switch = key;
            },
            onSubmit(formName) {
                var that = this;
                this.$appFb
                    .auth()
                    .signInWithEmailAndPassword(this.form.user_email, this.form.user_pass)
                    .then(data => {
                        console.log(data)
                        this.$router.push({ name: "Home" });
                    })
                    .catch(err => {
                        this.error = err.message;
                    });
            },
        }
    }
</script>
<style scoped>
    .login {
        width: 100%;
        height: 100%;
    }
    .login-form {
        background: #5B6D95;
        position: relative;
        width: 30%;
        margin: 10% auto 0 auto;
        text-align: center;
        border-radius: 15px;
        -webkit-border-radius: 15px;
    }
    .header-info {
        padding: 5px 0;
        text-align: center;
        font-weight: 600;
        font-size: 2em;
        color: #fff;
        /*background:repeating-linear-gradient(45deg, black, transparent 100px);*/
        background-color: #118ABC;
        height: 50px;
        border-top-left-radius: 10px;
        -webkit-border-top-left-radius: 10px;
        -moz-border-top-left-radius: 10px;
        -o-border-top-left-radius: 10px;
        border-top-right-radius: 10px;
        -webkit-border-top-right-radius: 10px;
    }
    .lb-1 {
        background: #6756ea;
        width: 20px;
        height: 20px;
        display: block;
        float: right;
        border-radius: 50%;
        margin: 16px 10px 0px 0px;
    }
    .lb-2 {
        background: #ea569a;
        width: 20px;
        height: 20px;
        display: block;
        float: right;
        border-radius: 50%;
        margin: 16px 10px 0px 0px;
    }
    .lb-3 {
        background: #f1c85f;
        width: 20px;
        height: 20px;
        display: block;
        float: right;
        border-radius: 50%;
        margin: 16px 10px 0px 0px;
    }
    .av-icon img {
        margin: 2em 0 0;
    }
    .login-btn {
        font-size: 30px;
        color: #fff;
        outline: none;
        border: none;
        background: #118ABC;
        width: 100%;
        padding: 18px 0;
        border-bottom-left-radius: 15px;
        -webkit-border-bottom-left-radius: 15px;
        -moz-border-bottom-left-radius: 15px;
        -o-border-bottom-left-radius: 15px;
        border-bottom-right-radius: 15px;
        -webkit-border-bottom-right-radius: 15px;
        -moz-border-bottom-right-radius: 15px;
        -o-border-bottom-right-radius: 15px;
        cursor: pointer;
    }
    body {
        background: url("https://i.ibb.co/Nmm9q3g/bg1.jpg") no-repeat !important;
    }
    input {
        background-color: #5B6D95;
    }
</style>
