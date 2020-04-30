<template>
  <div class="changePSW">
    <el-card class="card">
      <div slot="header">
        <span>修改密码</span>
      </div>
      <el-form ref="form" :model="form" label-width="auto" @submit.native.prevent status-icon>
        <el-form-item label="用户名：">
          <el-input v-model="form.username" disabled></el-input>
        </el-form-item>
        <el-form-item label="旧密码：" prop="oldPSW"
          :rules="[
            { required: true, message: '请输入旧密码', trigger: 'blur' }
          ]"
        >
          <el-input v-model="form.oldPSW" show-password clearable placeholder="请输入旧密码"></el-input>
        </el-form-item>
        <el-form-item label="新密码：" prop="newPSW"
          :rules="[
            { required: true, message: '请输入新密码', trigger: 'blur' }
          ]"
        >
          <el-input v-model="form.newPSW" show-password clearable placeholder="请输入新密码"></el-input>
        </el-form-item>
        <el-button type="primary" @click="changePSW">确认修改</el-button>
      </el-form>
    </el-card>
  </div>
</template>

<script>
import loginAPI from '../api/loginAPI';
export default {
  data() {
    return {
      password:'',
      form: {
        username: '',
        oldPSW: '',
        newPSW:''
      }
    }
  },
  created(){
    if(sessionStorage.getItem("admin")){
      this.form.username=sessionStorage.getItem("admin").split(",")[0]
      this.password=sessionStorage.getItem("admin").split(",")[1]
    }else if(sessionStorage.getItem("teacher")){
      this.form.username=sessionStorage.getItem("teacher").split(",")[0]
      this.password=sessionStorage.getItem("teacher").split(",")[1]
    }else if(sessionStorage.getItem("student")){
      this.form.username=sessionStorage.getItem("student").split(",")[0]
      this.password=sessionStorage.getItem("student").split(",")[1]
    }
  },
  methods: {
    async changePSW(){
      if(!(this.form.oldPSW&&this.form.newPSW)){
        this.$message.error({
          message:'密码不能为空！',
          duration:2000
        });
        return false
      }
      if(this.form.oldPSW!==this.password){
        this.$message.error({
          message:'旧密码错误！',
          duration:2000
        });
        return false
      }else if(this.form.oldPSW===this.form.newPSW){
        this.$message.error({
          message:'新密码不能和旧密码相同！',
          duration:2000
        });
        return false
      }
      if(sessionStorage.getItem("admin")){
        let {err}= await loginAPI.changePSWadmin(this.form.username,this.form.newPSW)
        if(err===0){
          this.$message.success({
            message:'密码修改成功！',
            duration:2000
          });
          sessionStorage.setItem("admin",[this.form.username,this.form.newPSW])
          this.$router.replace("/admin/home")
        }
      }else if(sessionStorage.getItem("teacher")){
        let {err}= await loginAPI.changePSWteach(this.form.username,this.form.newPSW)
        if(err===0){
          this.$message.success({
            message:'密码修改成功！',
            duration:2000
          });
          sessionStorage.setItem("teacher",[this.form.username,this.form.newPSW])
          this.$router.replace("/teacher/home")
        }
      }else if(sessionStorage.getItem("student")){
        let {err}= await loginAPI.changePSWstu(this.form.username,this.form.newPSW)
        if(err===0){
          this.$message.success({
            message:'密码修改成功！',
            duration:2000
          });
          sessionStorage.setItem("student",[this.form.username,this.form.newPSW])
          this.$router.replace("/student/home")
        }
      }
    }
  }
}
</script>

<style lang="less" scoped>
.card{
  width: 500px;
  margin: 0 auto;
  .el-button{
    margin-left: 350px;
  }
}
</style>