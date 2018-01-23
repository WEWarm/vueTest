<template>
<div class="role">
  <div class="accordion">
    <el-collapse accordion>
      <el-collapse-item>
        <template slot="title">一致性 Consistency<i class="header-icon el-icon-info"></i></template>
        <div>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div>
        <div>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</div>
      </el-collapse-item>
      <el-collapse-item>
        <template slot="title">反馈 Feedback<i class="el-icon-upload"></i></template>
        <div>控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；</div>
        <div>页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。</div>
      </el-collapse-item>
      <el-collapse-item>
        <template slot="title">效率 Efficiency<i class="el-icon-warning"></i></template>
        <div>简化流程：设计简洁直观的操作流程；</div>
        <div>清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策；</div>
        <div>帮助用户识别：界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。</div>
      </el-collapse-item>
      <el-collapse-item>
        <template slot="title">可控 Controllability<i class="el-icon-upload"></i></template>
        <div>用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；</div>
        <div>结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。</div>
      </el-collapse-item>
    </el-collapse>
  </div>
<div class="btns">
  <el-button type="text" @click="open">点击打开确认消息的Message Box</el-button>
  <el-button type="text" @click="open4">点击打开自定义的Message Box</el-button>
  <el-button type="text" @click="open3">点击打开提交内容Message Box</el-button>
</div>

</div>
</template>

<script>
    export default {
        name: "role",
        data(){
          return{

          }
        },
      methods: {
        open() {
          this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning'
          }).then(() => {
            this.$message({
              type: 'success',
              message: '删除成功!'
            });
          }).catch(() => {
            this.$message({
              type: 'info',
              message: '已取消删除'
            });
          });
        },
        open4() {
          const h = this.$createElement;
          this.$msgbox({
            title: '消息',
            message: h('p', null, [
              h('span', null, '内容可以是 '),
              h('i', { style: 'color: teal' }, 'VNode')
            ]),
            showCancelButton: true,
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            beforeClose: (action, instance, done) => {
              if (action === 'confirm') {
                instance.confirmButtonLoading = true;
                instance.confirmButtonText = '执行中...';
                setTimeout(() => {
                  done();
                  setTimeout(() => {
                    instance.confirmButtonLoading = false;
                  }, 300);
                }, 3000);
              } else {
                done();
              }
            }
          }).then(action => {
            this.$message({
              type: 'info',
              message: 'action: ' + action
            });
          });
        },
        open3() {
          this.$prompt('请输入邮箱', '提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            inputPattern: /[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/,
            inputErrorMessage: '邮箱格式不正确'
          }).then(({ value }) => {
            this.$message({
              type: 'success',
              message: '你的邮箱是: ' + value
            });
          }).catch(() => {
            this.$message({
              type: 'info',
              message: '取消输入'
            });
          });
        }
      }
    }
</script>

<style>
  .role .el-collapse {
    margin: 20px;
  }
.btns .el-button {
  margin: 20px;
}
</style>
