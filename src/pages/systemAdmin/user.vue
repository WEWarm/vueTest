<template>
  <div class="user">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>活动管理</el-breadcrumb-item>
      <el-breadcrumb-item>活动列表</el-breadcrumb-item>
      <el-breadcrumb-item>活动详情</el-breadcrumb-item>
    </el-breadcrumb>

    <div class="tableData">
      <el-table ref="multipleTable" :data="tableData3" tooltip-effect="dark" style="width: 100%" @selection-change="handleSelectionChange">
        <el-table-column type="selection"></el-table-column>
        <el-table-column label="日期"><template slot-scope="scope">{{ scope.row.date }}</template></el-table-column>
        <el-table-column prop="name" label="姓名"></el-table-column>
        <el-table-column prop="address" label="地址" show-overflow-tooltip></el-table-column>
      </el-table>
    </div>
    <div class="page">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-sizes="[100, 200, 300, 400]"
        :page-size="100"
        layout="total, sizes, prev, pager, next, jumper"
        :total="400">
      </el-pagination>
    </div>
    <div class="container">
      <div class="chart" id="chart"></div>
      <div class="rangk"></div>
    </div>
  </div>
</template>

<script>
  let echarts = require('echarts')
    export default {
        name: "user",
        data(){
          return {
            currentPage :1,
            tableData3: [{
              date: '2016-05-03',
              name: '王小虎',
              address: '上海市普陀区金沙江路 1518 弄'
            }, {
              date: '2016-05-02',
              name: '王小虎',
              address: '上海市普陀区金沙江路 1518 弄'
            }, {
              date: '2016-05-04',
              name: '王小虎',
              address: '上海市普陀区金沙江路 1518 弄'
            }, {
              date: '2016-05-01',
              name: '王小虎',
              address: '上海市普陀区金沙江路 1518 弄'
            }, {
              date: '2016-05-08',
              name: '王小虎',
              address: '上海市普陀区金沙江路 1518 弄'
            }, {
              date: '2016-05-06',
              name: '王小虎',
              address: '上海市普陀区金沙江路 1518 弄'
            }, {
              date: '2016-05-07',
              name: '王小虎',
              address: '上海市普陀区金沙江路 1518 弄'
            }],
            multipleSelection: []
          }
        },
      mounted(){
        var chart = echarts.init(document.getElementById('chart'));
        chart.setOption({
          title : {
            text: '分析指数曲线'
          },
          tooltip : {
            trigger: 'axis',
            axisPointer: {
              type: 'cross',
              label: {
                backgroundColor: '#6a7985'
              }
            }
          },
          legend: {
            data:['邮件营销','联盟广告','视频广告','直接访问','搜索引擎']
          },
          toolbox: {
            feature: {
              saveAsImage: {}
            }
          },
          grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
          },
          xAxis : [
            {
              type : 'category',
              boundaryGap : false,
              data : ['周一','周二','周三','周四','周五','周六','周日']
            }
          ],
          yAxis : [
            {
              type : 'value'
            }
          ],
          series : [

            {
              name:'搜索引擎',
              type:'line',
              stack: '总量',
              label: {
                normal: {
                  show: false,
                  position: 'top'
                }
              },
              areaStyle: {normal: {color:"#d8ebf8"}},
              data:[820, 932, 901, 934, 1290, 1330, 1320]
            }
          ]
        })
      },
      methods: {
        toggleSelection(rows) {
          if (rows) {
            rows.forEach(row => {
              this.$refs.multipleTable.toggleRowSelection(row);
            });
          } else {
            this.$refs.multipleTable.clearSelection();
          }
        },
        handleSelectionChange(val) {
          this.multipleSelection = val;
        },
        handleSizeChange(val) {
          console.log(`每页 ${val} 条`);
        },
        handleCurrentChange(val) {
          console.log(`当前页: ${val}`);
        }
      }
    }
</script>

<style>
.user .el-breadcrumb {
  margin: 20px;
}
  .user .tableData {
    margin: 20px;
  }
  .user .page {
    margin: 20px;
    text-align: right;
  }
.user .container {
    display: flex;
  }
.user .chart {
    width: 800px;
    height: 500px;
    margin: 20px;
  }
.user .rangk {
    width: 330px;
    height: 500px;
    margin: 20px 20px 20px 0;
    border-radius: 5px;
    background: lightgreen;
  }
</style>
