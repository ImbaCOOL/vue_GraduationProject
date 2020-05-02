<template>
  <div>
    <el-card class="card">
      <div slot="header">
        <span>ID为 {{form.classID}} 的课程信息</span>
      </div>
      <el-form ref="form" :model="form" label-width="auto" @submit.native.prevent status-icon inline>

        <el-form-item label="课程ID：">
          <el-input v-model="form.classID" disabled></el-input>
        </el-form-item>

        <el-form-item label="教师ID：" prop="teacherID"
          :rules="[
            { required: true, message: '请输入教师ID', trigger: 'blur' }
          ]">
          <el-input v-model="form.teacherID" clearable placeholder="请输入教师ID"></el-input>
        </el-form-item>

        <el-form-item label="授课老师：" prop="name"
          :rules="[
            { required: true, message: '请输入授课老师', trigger: 'blur' }
          ]">
          <el-input v-model="form.name" clearable placeholder="请输入授课老师"></el-input>
        </el-form-item>

        <el-form-item label="课程中文名称：" prop="classNameCN"
          :rules="[
            { required: true, message: '请输入课程中文名称', trigger: 'blur' }
          ]"
        >
          <el-input v-model="form.classNameCN" clearable placeholder="请输入课程中文名称"></el-input>
        </el-form-item>

        <el-form-item label="课程英文名称：" prop="classNameEN"
          :rules="[
            { required: true, message: '请输入课程英文名称', trigger: 'blur' }
          ]"
        >
          <el-input v-model="form.classNameEN" clearable placeholder="请输入课程英文名称"></el-input>
        </el-form-item>

        <el-form-item label="学分：" prop="credits"
          :rules="[
            { required: true, message: '请输入学分', trigger: 'blur' }
          ]"
        >
          <el-input v-model="form.credits" clearable placeholder="请输入学分"></el-input>
        </el-form-item>

        <el-form-item label="学时：" prop="classHours"
          :rules="[
            { required: true, message: '请输入学时', trigger: 'blur' }
          ]"
        >
          <el-input v-model="form.classHours" clearable placeholder="请输入学时"></el-input>
        </el-form-item>

        <el-form-item label="课程类型：" prop="classType"
          :rules="[
            { required: true, message: '请输入系', trigger: 'blur' }
          ]"
        >
          <el-input v-model="form.classType" clearable placeholder="请输入系"></el-input>
        </el-form-item>

        <el-form-item label="学院：" prop="faculty"
          :rules="[
            { required: true, message: '请输入学院', trigger: 'blur' }
          ]"
        >
          <el-input v-model="form.faculty" clearable placeholder="请输入学院"></el-input>
        </el-form-item>

        <el-form-item label="课程简介：" prop="classInfo"
          :rules="[
            { required: true, message: '请输入课程简介', trigger: 'blur' }
          ]"
        >
          <el-input v-model="form.classInfo" clearable placeholder="请输入课程简介"></el-input>
        </el-form-item>

        <el-form-item label="上课时间：" prop="classTime"
          :rules="[
            { required: true, message: '请输入上课时间', trigger: 'blur' }
          ]"
        >
          <el-input v-model="form.classTime" clearable placeholder="请输入上课时间"></el-input>
        </el-form-item>

        <el-form-item label="上课地点：" prop="classroom"
          :rules="[
            { required: true, message: '请输入上课地点', trigger: 'blur' }
          ]"
        >
          <el-input v-model="form.classroom" clearable placeholder="请输入上课地点"></el-input>
        </el-form-item>

      </el-form>
      <div class="btn">
        <el-button type="" @click="goBack">返回</el-button>
        <el-button type="primary" @click="add">确认修改</el-button>
      </div>
    </el-card>
  </div>
</template>

<script>
import teacherAPI from '../../../../api/teacherAPI'
export default {
  data() {
    return {    
      form: {
        teacherID: '',
        name:'',
        classID: '',
        classNameCN:'',
        classNameEN: '',
        credits:'',
        classHours: '',
        classType:'',
        faculty: '',
        classInfo:'',
        classTime:'',
        classroom:'',
      }
    }
  },
  async created(){
    let { id } = this.$route.params
    let {err,data}=await teacherAPI.findTSByID(id)
      if(err===0){
        console.log(data);
        this.form=data
        console.log(this.form);
      }
  },
  methods:{
    goBack(){
        this.$router.history.go(-1)
    },
    async add(){
      if(!(this.form.teacherID&&this.form.name&&this.form.classID&&this.form.classNameCN&&this.form.classNameEN&&this.form.credits&&this.form.classHours&&this.form.classType&&this.form.faculty&&this.form.classInfo&&this.form.classTime&&this.form.classroom)){
        this.$message.error({
          message:'内容不能为空！',
          duration:2000
        });
        return false
      }
      let {err}= await teacherAPI.updateTeachSchedule(this.form)
      if(err===0){
        this.$alert('修改成功', '提示', {
          confirmButtonText: '确定',
          type:"success",
          callback: action => {
            this.$router.history.go()
          }
        });
      }
    }
  }
}
</script>

<style lang="less" scoped>
.card{
    position: fixed;
    top: 80px;
    left: 220px;
    right: 20px;
    bottom: 80px;
}
.btn{
    margin-left: 800px;
}
.el-upload__tip{
  margin-top: 0;
}
.upload{
  img{
    width: 80px;
    height: 80px;
    margin-left: 30px;
  }
}
</style>