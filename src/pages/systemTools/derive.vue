<template>
  <div class="derive">
    <div class="stepBar">
      <el-steps :active="active" finish-status="success">
        <el-step title="选择商品分类"></el-step>
        <el-step title="填写商品信息"></el-step>
        <el-step title="填写商品属性"></el-step>
      </el-steps>
    </div>
    <div class="informationBox">
      <div class="category">
          <el-form :model="ruleForm" :rules="rules" ref="ruleForm" class="demo-ruleForm">
          <el-form-item label="请选择商品分类" prop="category">
            <el-select v-model="ruleForm.region" placeholder="请选择">
              <el-option label="套餐盒饭" value="combo"></el-option>
              <el-option label="新鲜水果" value="fruits"></el-option>
            </el-select>
          </el-form-item>
        </el-form>

        <el-button type="info" @click="dialogFormVisible = true">新增分类</el-button>

        <el-dialog title="添加分类" :visible.sync="dialogFormVisible">
          <el-form :model="form">
            <el-form-item label="活动名称" :label-width="formLabelWidth">
              <el-input v-model="form.name" auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item label="上级分类" :label-width="formLabelWidth">
              <el-select v-model="form.region" placeholder="请选择">
                <!--<el-option label="" value=""></el-option>-->
                <!--<el-option label="" value=""></el-option>-->
              </el-select>
            </el-form-item>
            <el-form-item label="显示市场范围" :label-width="formLabelWidth">
              <el-select v-model="form.region" placeholder="请选择">
                <el-option label="区域一" value="shanghai"></el-option>
                <el-option label="区域二" value="beijing"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="顺序" :label-width="formLabelWidth">
              <el-input v-model="form.name" auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item label="是否显示在菜单栏:">
              <el-radio v-model="radio" label="1">是</el-radio>
              <el-radio v-model="radio" label="2">否</el-radio>
            </el-form-item>
          </el-form>
          <div slot="footer" class="dialog-footer">
            <el-button type="primary" @click="dialogFormVisible = false">提交</el-button>
            <el-button @click="dialogFormVisible = false">取 消</el-button>
          </div>
        </el-dialog>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "derive",
        data() {
          return {
            visible2 : false,
            dialogFormVisible: false,
            radio:'1',
            formLabelWidth: '120px',
            form: {
              name: '',
              region: '',
              date1: '',
              date2: '',
              delivery: false,
              type: [],
              resource: '',
              desc: ''
            },
            ruleForm:{
              category:''
            },
            rules:{
              category: [
                { required: true, message: '请选择商品分类', trigger: 'blur' }
              ],
            }
          }
        }
    }
</script>

<style scoped>
  .informationBox {
    width: 1000px;
    height: 500px;
    margin: 20px;
    border: 1px solid #ddd;
  }
  .category {
    position: relative;
  }
  .el-button--info {
    position: absolute;
    left: 400px;
    top: 0px;
  }
</style>
