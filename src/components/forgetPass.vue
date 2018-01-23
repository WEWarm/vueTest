<template>
    <div class="forgetPass">
      <div class="pwd_progress">
          <el-steps :active="1">
            <el-step title="身份验证"></el-step>
            <el-step title="设置新密码"></el-step>
            <el-step title="完成"></el-step>
          </el-steps>
        </div>
      <div class="pwd_main">
        <!--1.check identity-->
        <div class="checkId" :class="{hide:isCheckHide}" >
          <div class="pwdItem">
            <div class="title f14">手机号码：</div>
            <el-input class="phone" v-model="phone" placeholder="请输入手机号码"></el-input>
            <div class="notNull f14" :class="{hide:isPhoneRight}">{{msg_phone}}</div>
          </div>
          <div class="pwdItem">
            <div class="title f14">验证码：</div>
            <el-input class="code" v-model="code" placeholder="请输入验证码">
              <el-button class="getCode"  slot="append"  type="primary" @click="getCode">{{msg_code}}</el-button>
            </el-input>
          </div>
          <div class="pwdItem">
            <el-button type="primary" @click="confirm1" >确定</el-button>
          </div>
        </div>

        <!--2.reset password-->
        <div class="reset" :class="{hide:isResetHide}">
          <div class="pwdItem">
            <div class="title f14">新密码：</div>
            <el-input class="phone" v-model="newpwd1" type="password" placeholder="请输入新密码"></el-input>
            <div class="notNull f14" :class="{hide:isPwdWrong}">6位以上字母、数字组合</div>
          </div>
          <div class="pwdItem">
            <div class="title f14">确认密码：</div>
            <el-input class="code" v-model="newpwd2" type="password" placeholder="再次输入新密码"></el-input>
          </div>
          <div class="pwdItem">
            <el-button type="primary" @click="confirm2">确定</el-button>
          </div>
        </div>

        <!--3.finish-->
        <div class="pwd_finish"  :class="{hide:isFinishHide}">
          <div class="pwd_finish_desc"><span><i class="el-icon-circle-check"></i></span><span class="f16">修改密码成功！</span></div>
          <div class="pwd_finish_timer f12" ><router-link to="/" class="c_blue">{{jump_remains}}秒后自动跳转</router-link></div>
        </div>
      </div>

    </div>
</template>

<script>
    export default {
        name: "forgetPass",
      data(){
        return{
          step:1,
          phone:'',
          code:'',
          msg_phone:'',
          msg_code:"获取验证码",
          newpwd1:'',
          newpwd2:'',
          isCheckHide:false,
          isResetHide:true,
          isFinishHide:true,
          isPhoneRight:true,
          isPwdWrong:false,
          identifyCode:null, //接收到的验证码
          codeRemains:0 ,//code剩余有效时间 秒
          jump_remains:5,//跳转剩余有效时间 秒
          timer3:'',
        }
      },
    }
</script>

<style >
  .forgetPass{
    height: 100%;
  }
  .pwd_progress{ background-color:#f1f1f1;border-top: 1px solid rgb(226, 222, 222); }
  .pwd_progress .el-steps{
    width: 80%;
    margin: 20px  auto 10px;
  }
  .pwd_progress .el-step.is-center .el-step__line {
    left: 60%;
    right: -40%;
  }
  .pwd_progress .el-step__icon.is-text{
    background-color: #cbcbcb;
    color:#fff;
    border: none;
  }
  .pwd_progress .el-step__icon-inner{
    font-weight:500;
  }
  .pwd_progress .el-step__head.is-finish .el-step__icon.is-text{
    background-color: #409EFF;
  }
  .pwd_progress .el-step__title{
    font-size:14px;
  }
  .pwd_progress .el-step__title.is-finish{
    color: #409EFF;
  }
  .pwd_progress .el-step__title.is-process{
    font-weight: 500;
    color: #2d2f33
  }
  .pwd_progress .el-step__title.is-wait{
    color: #999;
  }

  .pwd_main{width:446px; margin-left: 38%;/*margin-top: 80px;*/ margin-top: 6%;}
  .pwd_main .pwdItem{  margin-bottom: 20px;}
  .pwd_main .pwdItem .title{  margin-bottom: 10px; color:#333 }
  .pwd_main .pwdItem input{  border-radius: 2px;  }
  .pwd_main .phone,.pwd_main .code{  width: 264px;  }
  .pwd_main .code .el-input-group__append{
    background-color: #409EFF;
    color: #fff;
    border: none;
    border-radius: 0;
  }
  .pwd_main .notNull{
    float: right;
    width: 163px;
    height: 38px;
    line-height: 38px;
    padding-left: 10px;
    background-color: #FFEFEF;
    color: #D3576B;
    border: 1px solid #ecbdbf;
  }

  .pwd_main .getCode{
    color: #fff;
    background-color: #20a0ff;
    border-color: #20a0ff;
    border-radius: 0;
  }
  .pwd_main .el-button{
    border-radius: 2px;
  }

  .pwd_main .pwd_finish{
    width: 100%;
    text-align: center;
    margin-left:-60px;
  }
  .pwd_main .pwd_finish_desc,.pwd_finish_desc{
    width: 100%;
    margin: 40px auto;
  }
  .pwd_main .pwd_finish_desc span{
    display: inline-block;
    height: 30px;
    line-height: 30px;
  }
  .pwd_main .pwd_finish_desc span:first-child i{
    display: inline-block;
    font-size: 30px;
    margin-right: 15px;
    background-color:#fff ;
    color: #57B21E;
    vertical-align: bottom;
  }
  .pwd_main .pwd_finish_desc span:last-child{  font-weight:600;  }
  .pwd_main .pwd_finish_timer a{  text-decoration: underline;  }

</style>
