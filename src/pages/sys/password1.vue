<template>
    <div class="password1">
      <el-row class="pwd-header">
        <el-col :span="8">
          <div class="grid-content left " >
            <img src="../../assets/logo.png" height="46">
          </div>
        </el-col>
        <el-col :span="1">
          <div class="grid-content gap"></div>
        </el-col>
        <el-col :span="12">
          <div class="grid-content mid ">
            <div class="f20" style="font-weight:600;">修改密码</div>
            <div class="f12">Modify password</div>
          </div>
        </el-col>
        <el-col :span="3">
          <div class="grid-content right">
            <router-link to="/"><el-button type="text">登录</el-button></router-link>
          </div>
        </el-col>
      </el-row>

      <forget-pass></forget-pass>
    </div>
</template>

<script>
  import forgetPass from '../..components/forgetPass.vue'
    export default {
        name: "password1",
        components : {forgetPass}    //注册组件
    }
</script>

<style scoped>
  .pwd-header.el-row {
    background-color: #f3f3f3;
  }
  .pwd-header .grid-content {
    min-height: 36px;
    margin: 24px auto;
  }
  .pwd-header .grid-content.left{
    text-align: right;
  }
  .pwd-header .grid-content.gap{
    height: 100%;
    position: relative;
    width: 1px;
    padding: 0 10px;
  }
  .pwd-header .grid-content.gap:before{
    content: "";
    position: absolute;
    top: calc(50% - 10px);
    width: 1px;
    height: 36px;
    background: #7B8D9F;
  }
  .pwd-header .grid-content.mid{
    padding-top: 7px;
    color: #333;
  }
  .pwd-header .grid-content.right{
    line-height: 46px; color: #5FADE3;
  }
</style>
