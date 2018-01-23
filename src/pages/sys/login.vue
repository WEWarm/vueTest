<template>
    <div class="login">
      <div class="container">
        <div class="login-left">
          <form autocomplete="on" class="form">
            <div class="login_item">
              <el-input v-model="user" placeholder="用户名"></el-input>
            </div>
            <div class="login_item">
              <el-input v-model="password" type="password" placeholder="密码"></el-input>
              <p class="c_danger f14" :class="{hide:isPwdRight}" style="text-align: left;position: absolute;">账号或密码错误</p>
            </div>

            <el-button class="login_item" type="primary" @click="login">登陆</el-button>

            <div class="login_item f14" style="text-align:left;">
              <span><input id="savePwd" type="checkbox" v-model="isPwdSaved"/> <label for="savePwd">记住密码</label></span>
              <router-link :to="{name:'password1'}"  class="login_ctl_reset">忘记密码</router-link>
            </div>
          </form>
        </div>

        <div class="login-right">
          <div class="other">使用以下账号直接登录</div>
          <el-button class="login_item">QQ登录</el-button></br>
          <el-button class="login_item">微信登录</el-button></br>
          <el-button class="login_item">微博登录</el-button></br>
          <p class="hasnumber">已有账号?<router-link :to="{name:'seivice'}">立即登录</router-link></p>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "login",
      data(){
          return{
            user:null,
            password:null,
            isPwdSaved:null,
            isPwdRight:true,//wrong user or password?
            isPwdSaved : false
          }
      },
      mounted() {
        // if(localStorage.getItem('spf')  && localStorage.getItem('spf') !== ""){
        //   this.user = localStorage.getItem('user');
        //   this.password = localStorage.getItem('pwd');
        //   this.isPwdSaved = true;
        // }
      },
      methods: {

        login(){
         // let self = this;
          this.$router.push({name : this.$store.state.currentView});// todo 跳转 router
          return;

          // let user = $.trim(this.user) , pwd = $.trim(this.password);
          // if(user === "" || pwd === "") return;
          //
          // this.$ajax('url' ,{username:this.user , password : this.password},function (obj) {
          //   if (obj.code === 0) {//OK
          //     self.isPwdRight = true;
          //     if (self.isPwdSaved) {
          //       localStorage.setItem('spf', 1); //save password flag
          //     }else{
          //       localStorage.setItem('spf', '');
          //     }
          //     localStorage.setItem('pwd', self.password);
          //     localStorage.setItem('user', self.user);
          //     self.$setCookie("token", obj.token, obj.expire);
          //     self.$router.push({name : self.$store.state.currentView});// todo 跳转 router
          //   } else {
          //     self.isPwdRight = false;
          //     self.isPwdSaved = false;
          //   }
          // })

        },



      }
    }
</script>

<style>
  .login {
    height: 100%;
    width: 100%;
    background: #fff url("../../assets/login.png") center/100% 100% no-repeat;
    position: relative;
  }

  .login .container {
    width: 600px;
    height: 400px;
    background: #fff;
    border-radius: 5px;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    margin: auto;
    text-align: center;
  }
  .login .form{
    width: 270px;
    margin: 60px auto;
  }
  .login .form .login_item {
    margin-bottom: 22px;
    width: 100%;
    position: relative;
  }
  .login .form .login_item .el-input__inner{
    height: 50px;
  }
  .login .form .login_item .login_ctl_reset {
    float: right;
  }
  .login-left {
    width: 400px;
    height: 400px;
    float: left;
  }
.login-right {
  width: 200px;
  height: 400px;
  float: right;
  border-radius: 5px;
  background: papayawhip;
  }
  .login-right .el-button {
    width: 150px;
    margin-top: 20px;
  }
  .login .other {
    margin-top: 20px;
  }
  .login .hasnumber {
    margin-top: 20px;
  }
  .login .form .login_item {
    margin-bottom: 22px;
    width: 100%;
    position: relative;
  }
  .login .form .login_item .el-input__inner{
    height: 50px;
  }
  .login .form .login_item .login_ctl_reset {
    float: right;
  }
</style>
