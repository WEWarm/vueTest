<template>
  <div class="reports">
    <div class="conten">
        <div class="liBox">
          <ul>
            <li><span>送样通知单号</span><el-input v-model="input" size="small " placeholder="请输入送样通知单"></el-input></li>
            <li><span>物料编号</span><el-input v-model="input" size="small " placeholder="请输入送样通知单"></el-input></li>
            <li><span>样品检测结果</span>
              <el-select v-model="value" size="small" placeholder="请选择">
              <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
              </el-select>
            </li>
          </ul>
        </div>

        <div class="liBox2">
          <ul>
            <li><span>供应商名称</span><el-input v-model="input" size="small " placeholder="请输入送样通知单"></el-input></li>
            <li><span>采购类别</span><el-input v-model="input" size="small " placeholder="请输入送样通知单"></el-input></li>
            <li><span>资质审查单号</span><el-input v-model="input" size="small " placeholder="请输入送样通知单"></el-input></li>
            <p class="btns">
              <el-button type="primary" size="medium" @click="search">查询</el-button>
              <el-button type="primary" size="medium" @click="clear">清除</el-button>
            </p>
          </ul>
        </div>

        <div class="liBox3">
          <ul>
            <li><span>创建人员</span><el-input v-model="input" size="small " placeholder="请输入送样通知单"></el-input></li>
            <li><span>单据状态</span>
              <el-select v-model="value" size="small" placeholder="请选择">
              <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
            </el-select></li>
          </ul>
        </div>
    </div>
    <div class="dataTable">
      <el-table :data="tableData" border style="width: 100%">
        <el-table-column fixed prop="status" sortable label="状态"></el-table-column>
        <el-table-column prop="notice" label="送样通知单"></el-table-column>
        <el-table-column prop="wlnumber" label="物料编号"></el-table-column>
        <el-table-column prop="category" label="采购类别"></el-table-column>
        <el-table-column prop="zzscnumber" label="资质审查单号"></el-table-column>
        <el-table-column prop="code" label="供应商代码"></el-table-column>
        <el-table-column prop="name" label="供应商名称"></el-table-column>
        <el-table-column prop="result" label="送样结果"></el-table-column>
        <el-table-column prop="creator" label="创建人"></el-table-column>
        <el-table-column prop="creatDta" label="创建日期"></el-table-column>
        <el-table-column fixed="right" label="操作">
          <template slot-scope="scope">
            <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div class="pageSize">
      <el-pagination
        layout="prev, pager, next"
        :total="1000">
      </el-pagination>
    </div>
  </div>
</template>

<script>
    export default {
        name: "reports",
      data(){
          return {

          }
      },
      methods:{
          search(){
            console.log('search')
          },
        clear(){
            console.log('clear')
        }
      }
    }
</script>

<style>
  .reports .el-input {
    width: auto;
    padding-left: 5px;
  }
  .el-button--medium {
    width: 80px;
  }
  .reports .conten {
    display: flex;
    height: 210px;
    margin: 20px;
    border: 1px solid #ddd;
  }
  .reports ul li {
    padding: 5px;
  }
  .reports .liBox {
    width: 400px;
    float: left;
    text-align: right;
  }
.reports .liBox2 {
  width: 400px;
  float: left;
  text-align: right;
}
  .reports .liBox3 {
    width: 400px;
    float: right;
  }
  .reports .liBox ul {
    margin: 30px;
  }
  .reports .liBox2 ul {
    margin: 30px;
  }
  .el-select  {
    width: 205px;
  }
  .liBox2 .btns {
    padding-right: 50px;
  }
  .reports .liBox3 ul {
    margin: 30px;
  }
  .reports .dataTable {
    margin: 20px;
  }
  .pageSize {
    margin: 20px;
    text-align: right;
  }
</style>
