<template>
  <div class="search">
    <el-row>
      <el-col :span="8" v-for="(o, index) in 2" :key="o" :offset="index > 0 ? 2 : 0">
        <el-card :body-style="{ padding: '0px' }">
          <img :src="img" class="image">
          <div style="padding: 14px;">
            <span>好吃的汉堡</span>
            <div class="bottom clearfix">
              <time class="time">{{ currentDate }}</time>
              <el-button type="text" class="button">操作按钮</el-button>
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
    export default {
        name: "search",
      data() {
          let img = require('../../assets/hamburger.png')
        return {
            img : img,
          currentDate: new Date()
        };
      }
    }
</script>

<style>
  .search .el-row {
    margin: 20px;
  }
  .search .time {
    font-size: 13px;
    color: #999;
  }

  .search .bottom {
    margin-top: 13px;
    line-height: 12px;
  }

  .search .button {
    padding: 0;
    float: right;
  }

  .search .image {
    width: 100%;
    display: block;
  }

  .search .clearfix:before,
  .search .clearfix:after {
    display: table;
    content: "";
  }

  .search .clearfix:after {
    clear: both
  }
</style>
