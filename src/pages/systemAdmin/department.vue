<template>
  <div class="department">
    <div class="tab">
      <el-tabs type="border-card">
        <el-tab-pane label="发布通知">
          <p>Hi,admin,欢迎使用员工管理系统</p>
          <div class="el-form">
            <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
              <el-form-item label="所在部门" prop="department">
                <el-input type="text" v-model="ruleForm.department" auto-complete="off"></el-input>
              </el-form-item>
              <el-form-item label="职位名称" prop="jobName">
                <el-input type="text" v-model="ruleForm.jobName" auto-complete="off"></el-input>
              </el-form-item>
              <el-form-item label="通知内容" prop="content">
                <el-input type="textarea" v-model="ruleForm.content"></el-input>
              </el-form-item>
              <el-form-item>
                <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
                <el-button @click="resetForm('ruleForm')">重置</el-button>
              </el-form-item>
            </el-form>
          </div>
        </el-tab-pane>
        <el-tab-pane label="绩效福利">绩效福利</el-tab-pane>
        <el-tab-pane label="处分警告">处分警告</el-tab-pane>
        <el-tab-pane label="自定义">自定义</el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
    export default {
        name: "department",
      data() {
        var staffName = (rule, value, callback) => {
          if (value === '') {
            return callback(new Error('职位名称不能为空'));
          } else {
            if(this.ruleForm.jobName !== '') {
              this.$refs.ruleForm.validateField('jobName')
            }
            callback();
          }
        };
        var validateDep = (rule, value, callback) => {
          if (value === '') {
            callback(new Error('请输入所在部门'));
          } else {
            if (this.ruleForm.department !== '') {
              this.$refs.ruleForm.validateField('department');
            }
            callback();
          }
        };
        var validateContent = (rule, value, callback) => {
          if (value === '') {
            callback(new Error('请输入通知内容'));
          } else {
            if (this.ruleForm.content !== '') {
              this.$refs.ruleForm.validateField('content');
            }
            callback();
          }
        };
        return {
          ruleForm: {
            department: '',
            content: '',
            jobName: ''
          },
          rules: {
            department: [
              { validator: validateDep, trigger: 'blur' }
            ],
            content: [
              { validator: validateContent, trigger: 'blur' }
            ],
            jobName: [
              { validator: staffName, trigger: 'blur' }
            ]
          }
        };
      },
      methods: {
        submitForm(formName) {
          this.$refs[formName].validate((valid) => {
            if (valid) {
              alert('submit!');
            } else {
              console.log('error submit!!');
              return false;
            }
          });
        },
        resetForm(formName) {
          this.$refs[formName].resetFields();
        }
      }
    }
</script>

<style scoped>
  .tab {
    margin: 20px;
  }
</style>
