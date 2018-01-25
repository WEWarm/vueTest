<template>
  <div class="todo">
    <div class="informationBox">
      <div class="type">规格型号：</div>
       <div class="specification">
           <div style="margin: 20px">
             <el-button type="info" size="small" @click="showType">添加规格</el-button>
             <div :class="{hide:isShow}" style="margin-top: 20px;">
               <el-select v-model="value" size="small">
                 <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
               </el-select>
               <i class="el-icon-close" @click="closeType"></i>
               <p class="add" @click="addType">+添加</p>
               <div :class="{hide:showAdd}" class="showAdd">
                <div style="padding-left: 10px">
                  <el-select v-model="value1" size="small">
                    <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
                  </el-select>
                  <el-button type="info" size="mini" @click="confirm">确定</el-button>
                  <el-button size="mini" @click="cancel">取消</el-button>
                </div>
               </div>
             </div>
           </div>
       </div>
      <div class=""></div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "todo",
      data(){
          return{
            value : '包装',
            value1 : '数量',
            isShow : true,
            showAdd :true
          }
      },
      methods : {
        showType(){
          this.isShow = false
        },
        closeType(){
          this.isShow = true;
          this.showAdd = true
        },
        addType(){
          this.showAdd = false
        },
        cancel(){
          this.showAdd = true
        }
      }
    }
</script>

<style scoped>
  .informationBox {
    width: 1000px;
    height: 500px;
    margin: 20px;
    position: relative;
    border: 1px solid #ddd;
  }
  .type {
    display: inline-block;
    position: absolute;
    top: 10px;
    left: 10px;
  }
  .specification {
    width: 600px;
    margin-left: 100px;
    margin-top: 10px;
    display: inline-block;
    border: 1px solid #ddd;
  }
  .add {
    color: #409eff;
    margin-top: 20px;
  }
  .showAdd {
    width: 400px;
    height: 50px;
    line-height: 50px;
    margin-top: 20px;
    border: 1px solid #ddd;
  }
  .el-icon-close {
    cursor: pointer;
  }
</style>
