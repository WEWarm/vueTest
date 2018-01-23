<template>
  <el-container class="test">
  <el-aside style="width: 200px">
  <el-menu
          default-active="2"
          :router="true"
          :unique-opened="true"
          @open="handleOpen"
          @close="handleClose"
          class="el-menu-vertical-demo"
          background-color="#409EFF"
          text-color="#fff"
          active-text-color="#fff">
          <el-submenu index="1">
            <template slot="title"><i class="el-icon-location"></i><span>首页</span></template>
              <el-menu-item index="seivice">申请服务</el-menu-item>
              <el-menu-item index="search">统计查询</el-menu-item>
          </el-submenu>

          <el-submenu index="2">
            <template slot="title"><i class="el-icon-location"></i><span>系统管理</span></template>
            <el-menu-item index="user">用户管理</el-menu-item>
            <el-menu-item index="role">角色管理</el-menu-item>
            <el-menu-item index="systemMenu">系统菜单</el-menu-item>
            <el-menu-item index="department">部门管理</el-menu-item>
          </el-submenu>

          <el-submenu index="3">
            <template slot="title"><i class="el-icon-location"></i><span>系统工具</span></template>
            <el-menu-item index="reports">项目报表</el-menu-item>
            <el-menu-item index="todo">待办事项</el-menu-item>
            <el-menu-item index="derive">数据导出</el-menu-item>
          </el-submenu>
          <el-submenu index="4">
            <template slot="title"><i class="el-icon-location"></i><span>系统监控</span></template>
            <el-menu-item index="displayDevice">显示设备</el-menu-item>
            <el-menu-item index="mainControl">主控设备</el-menu-item>
            <el-menu-item index="transmission">传输设备</el-menu-item>
            <el-menu-item index="terminalDevice">前端设备</el-menu-item>
          </el-submenu>
  </el-menu>
  </el-aside>
    <el-container>
      <el-header>
        <el-autocomplete v-model="searchVal" placeholder="请输入搜索的内容"
                         :fetch-suggestions="querySearch" :trigger-on-focus="false" @select="select">
          <i slot="prefix" class="el-icon-search"></i>
        </el-autocomplete>
      </el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>

  </el-container>
</template>

<script>
    export default ({
        name: "test",
      data(){
          return{
            searchVal :''
          }
      },
        methods: {
          handleOpen(key, keyPath) {
            console.log(key, keyPath);
          },
          handleClose(key, keyPath) {
            console.log(key, keyPath);
          }
        }
    })
</script>

<style>
  .test{
    width: 100%;
    height: 100%;
    position: relative;
  }

  /*left aside start*/
  /*left aside header           #409EFF*/
  .test .el-aside {
    background-color: #409EFF;
    overflow-x: hidden;
    overflow-y: auto;
    position: relative;
  }
  .test .el-aside::-webkit-scrollbar{  display: none;  }


  /*left aside menu*/
  .test .el-aside .el-menu .el-submenu .el-menu-item.is-active{
    background-color: #0F6DB1 !important;
  }
  .test .el-aside .el-submenu__title i{
    color: #fff;
    margin-right: 5px;
  }
  .el-menu {
    border-right: none;
  }

  /*right header start*/
  .test .el-header{
    color: #333;
    height: 60px;
  }
  .test .el-header .el-autocomplete{
    width: 100%;
    padding:10px 0;
  }
  .test .el-header .el-input__prefix{
    top: 11px;
  }

  /*right main start*/
  .test .el-main {
    background-color: #F5F5F5;
    padding:0;
  }
</style>
