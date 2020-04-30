<template>
  <div class="header">
    <img src="../assets/icon.jpg" alt="">
    <div>学校信息管理系统</div>
    <p>欢迎您：</p>
    <span>{{name}}</span>
    <el-dropdown @command="handleCommand">
      <el-button type="small">
        更多<i class="el-icon-arrow-down el-icon--right"></i>
      </el-button>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item command="a">修改密码</el-dropdown-item>
        <el-dropdown-item command="b">退出账号</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>

<script>
import loginAPI from "../api/loginAPI"
export default {
  data(){
    return{
      name:""
    }
  },
  async mounted(){
    if(sessionStorage.getItem("admin")){
      let [username,password]=sessionStorage.getItem("admin").split(",")
      this.name= (await loginAPI.loginByAdmin(username,password)).data.name+" 管理员"
    }else if(sessionStorage.getItem("teacher")){
      let [username,password]=sessionStorage.getItem("teacher").split(",")
      this.name= (await loginAPI.loginByTeach(username,password)).data.name+" 老师"
    }else if(sessionStorage.getItem("student")){
      let [username,password]=sessionStorage.getItem("student").split(",")
      this.name= (await loginAPI.loginByStu(username,password)).data.name+" 同学"
    }
  },
  methods:{
    handleCommand(command){
      switch (command) {
        case "a":
          if(sessionStorage.getItem("admin")){
            this.$router.push("/admin/changePSW")
          }else if(sessionStorage.getItem("teacher")){
            this.$router.push("/teacher/changePSW")
          }else if(sessionStorage.getItem("student")){
            this.$router.push("/student/changePSW")
          }
          break;
        case "b":
          sessionStorage.clear()
          this.$router.replace("/login")
          break;
        default:
          return false
          break;
      }
    }
  }
}
</script>

<style lang="less" scoped>
.header{
  display: flex;
  align-items: center;
  img{
    width: 50px;
    height: 50px;
    margin-top: 5px;
    margin-left: 30px;
    margin-right: 20px;
  }
  div{
    font-size: 30px;
    margin-right: 700px;
  }
  p,span{
    font-size: 16px;
  }
  .el-dropdown{
    position: absolute;
    top: 0px;
    right: -680px;
  }
}
</style>