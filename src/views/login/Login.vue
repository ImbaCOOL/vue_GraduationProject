<template>
  <div class="login">
      <img src="../../assets/login.jpg" alt="">
      <el-form ref="form" :model="form" label-width="auto" @submit.native.prevent>
        <img src="../../assets/icon.jpg" alt="">
        <div class="title">学校信息管理系统</div>
        <div class="title2">用户登录</div>
        <el-form-item label="用户名：">
          <el-input v-model="form.username" clearable placeholder="请输入用户名"></el-input>
        </el-form-item>
        <el-form-item label="密码：">
          <el-input v-model="form.password" show-password clearable placeholder="请输入密码"></el-input>
        </el-form-item>
        <el-form-item label="身份：">
          <el-radio-group v-model="form.identity">
            <el-radio label="管理员"></el-radio>
            <el-radio label="教师"></el-radio>
            <el-radio label="学生"></el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">登录</el-button>
        </el-form-item>
      </el-form>
  </div>
</template>

<script>
import loginAPI from "../../api/loginAPI"
export default {
  data() {
      return {
        form: {
          username: '',
          password: '',
          identity: '管理员'
        }
      }
    },
    created(){
      if(sessionStorage.getItem("admin")){
        this.$router.replace("/admin/home")
      }else if(sessionStorage.getItem("teacher")){
        this.$router.replace("/teacher/home")
      }else if(sessionStorage.getItem("student")){
        this.$router.replace("/student/home")
      }
    },
    methods: {
      async onSubmit() {
        if(!(this.form.username&&this.form.password)){
          this.$message.error({
            message:'用户名或密码不能为空！',
            duration:2000
          });
          return false
        }
        switch (this.form.identity) {
          case "管理员":
            var {err,data}=await loginAPI.loginByAdmin(this.form.username,this.form.password)
            if(err===0&&data!==null){
              sessionStorage.setItem("admin",[this.form.username,this.form.password])
              this.$router.replace("/admin/home")
            }else{
              this.$message.error({
                message:'用户名或密码不正确！',
                duration:2000
              });
            }
            break;
          case "教师":
            var {err,data}=await loginAPI.loginByTeach(this.form.username,this.form.password)
            if(err===0&&data!==null){
              sessionStorage.setItem("teacher",[this.form.username,this.form.password])
              // console.log(data);
              sessionStorage.setItem("teacherID",data.teacherID)
              this.$router.replace("/teacher/home")
            }else{
              this.$message.error({
                message:'用户名或密码不正确！',
                duration:2000
              });
            }
            break;
          case "学生":
            var {err,data}=await loginAPI.loginByStu(this.form.username,this.form.password)
            if(err===0&&data!==null){
              sessionStorage.setItem("student",[this.form.username,this.form.password])
              // console.log(data);
              sessionStorage.setItem("stuID",data.stuID)
              this.$router.replace("/student/home")
            }else{
              this.$message.error({
                message:'用户名或密码不正确！',
                duration:2000
              });
            }
            break;
          default:
            return false
            break;
        }
      }
    },
}
</script>

<style lang="less" scoped>
.login{
  position: fixed;
  top: 0px;
  bottom: 0px;
  left:0px;
  right: 0px;
  img{
    width: 100%;
    height: 100%;
  }
  .el-form{
    position: absolute;
    top: 140px;
    right: 120px;
    background: #fff;
    padding: 20px 20px 10px;
    border-radius: 50px;
    .el-button{
      margin-left: 120px;
    }
    .title{
      margin: 0 0px 10px;
      text-align: center;
      font-size: 18px;
    }
    .title2{
      text-align: center;
      font-size: 16px;
      margin-bottom: 20px;
    }
    img{
      position: absolute;
      top: 18px;
      left: 60px;
      width: 30px;
      height: 30px;
      border-radius: 10px;
    }
  }
}
</style>