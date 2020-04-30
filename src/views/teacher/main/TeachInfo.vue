<template>
  <div>
    <el-card class="card">
      <div slot="header">
        <span>个人信息</span>
      </div>
      <el-form ref="form" :model="form" label-width="auto" @submit.native.prevent status-icon inline>

        <el-form-item label="用户名：">
          <el-input v-model="form.username" disabled></el-input>
        </el-form-item>

        <el-form-item label="教师ID：">
          <el-input v-model="form.teacherID" disabled></el-input>
        </el-form-item>

        <el-form-item label="姓名：" prop="name"
          :rules="[
            { required: true, message: '请输入姓名', trigger: 'blur' }
          ]"
        >
          <el-input v-model="form.name" clearable placeholder="请输入姓名"></el-input>
        </el-form-item>

        <el-form-item label="手机号码：" prop="cellphone"
          :rules="[
            { required: true, message: '请输入手机号码', trigger: 'blur' }
          ]"
        >
          <el-input v-model="form.cellphone" clearable placeholder="请输入手机号码"></el-input>
        </el-form-item>

        <el-form-item label="性别：" prop="gender"
          :rules="[
            { required: true, message: '请选择', trigger: 'blur' }
        ]">
          <el-select v-model="form.gender" placeholder="请选择">
            <el-option
              value="男">
            </el-option>
            <el-option
              value="女">
            </el-option>
          </el-select>
        </el-form-item>

        <el-form-item label="入职日期：" prop="date"
          :rules="[
            { required: true, message: '请选择', trigger: 'blur' }
        ]">
          <el-date-picker
            v-model="form.date"
            type="date"
            placeholder="请选择"
            value-format="yyyy-MM-dd">
          </el-date-picker>
        </el-form-item>

        <el-form-item label="出生日期：" prop="birthdate"
          :rules="[
            { required: true, message: '请选择', trigger: 'blur' }
        ]">
          <el-date-picker
            v-model="form.birthdate"
            type="date"
            placeholder="请选择"
            value-format="yyyy-MM-dd">
          </el-date-picker>
        </el-form-item>

        <el-form-item label="籍贯：" prop="hometown"
          :rules="[
            { required: true, message: '请选择', trigger: 'blur' }
        ]">
          <el-cascader
            v-model="form.hometown"
            :options="form.options_hometown"
            @change="handleHometown">
          </el-cascader>
        </el-form-item>

        <el-form-item label="身份证：" prop="ID"
          :rules="[
            { required: true, message: '请输入身份证', trigger: 'blur' }
          ]"
        >
          <el-input v-model="form.ID" clearable placeholder="请输入身份证"></el-input>
        </el-form-item>

        <el-form-item label="学历：" prop="education"
          :rules="[
            { required: true, message: '请选择', trigger: 'blur' }
          ]"
        >
          <el-select v-model="form.education" placeholder="请选择">
            <el-option
              value="博士">
            </el-option>
            <el-option
              value="硕士">
            </el-option>
            <el-option
              value="本科">
            </el-option>
          </el-select>
        </el-form-item>

        <el-form-item label="学院：" prop="faculty"
          :rules="[
            { required: true, message: '请输入学院', trigger: 'blur' }
          ]"
        >
          <el-input v-model="form.faculty" clearable placeholder="请输入学院"></el-input>
        </el-form-item>

        <el-form-item label="系：" prop="department"
          :rules="[
            { required: true, message: '请输入系', trigger: 'blur' }
          ]"
        >
          <el-input v-model="form.department" clearable placeholder="请输入系"></el-input>
        </el-form-item>

        <el-form-item label="专业：" prop="major"
          :rules="[
            { required: true, message: '请输入专业', trigger: 'blur' }
          ]"
        >
          <el-input v-model="form.major" clearable placeholder="请输入专业"></el-input>
        </el-form-item>

        <el-form-item label="头像：" prop="img"
          :rules="[
            { required: true, message: '请上传头像', trigger: 'blur' }
          ]">
          <el-upload
            class="upload"
            ref="upload"
            action=""
            :auto-upload="false"
            :show-file-list="false">
            <el-button slot="trigger" size="small" type="primary">选取图片</el-button>
            <el-button style="margin-left: 10px;" size="small" type="success" @click="submitUpload">上传到服务器</el-button>
            <div slot="tip" class="el-upload__tip">只能上传jpg/png/jpeg/gif图片，且不超过5M</div>
            <img :src="'http://localhost:2020'+form.img" alt="">
          </el-upload>
        </el-form-item>

      </el-form>
      <el-button type="primary" @click="change" class="confirm">确认修改</el-button>
    </el-card>
  </div>
</template>

<script>
import loginAPI from '../../../api/loginAPI'
import teacherAPI from '../../../api/teacherAPI'
export default {
  data() {
    return {
      form: {
        username: sessionStorage.getItem("teacher").split(",")[0],
        teacherID: '',
        name:'',
        cellphone: '',
        gender:'',
        date: '',
        birthdate:'',
        hometown: [],
        options_hometown:[
        {
          value: '广东省',
          label: '广东省',
          children: [
          {
            value: '中山市',
            label: '中山市',
          },
          {
            value: '湛江市',
            label: '湛江市',
          },
          {
            value: '广州市',
            label: '广州市',
          },]
        },
        {
          value: '广西省',
          label: '广西省',
          children: [
          {
            value: '南宁市',
            label: '南宁市',
          },
          {
            value: '柳州市',
            label: '柳州市',
          },
          {
            value: '桂林市',
            label: '桂林市',
          },]
        },
        {
          value: '云南省',
          label: '云南省',
          children: [
          {
            value: '昆明市',
            label: '昆明市',
          },
          {
            value: '玉溪市',
            label: '玉溪市',
          },
          {
            value: '丽江市',
            label: '丽江市',
          },]
        },],
        ID:'',
        education: '',
        faculty:'',
        department:'',
        major:'',
        img:'',
      }
    }
  },
  async created(){
    let {err,data}=await loginAPI.loginByTeach(sessionStorage.getItem("teacher").split(",")[0],sessionStorage.getItem("teacher").split(",")[1])
    if(err===0){
      this.form.teacherID=data.teacherID
      this.form.name=data.name
      this.form.cellphone=data.cellphone
      this.form.gender=data.gender
      this.form.date=data.date
      this.form.birthdate=data.birthdate
      this.form.hometown=[data.hometown.split("省")[0]+"省",data.hometown.split("省")[1]]
      this.form.ID=data.ID
      this.form.education=data.education
      this.form.faculty=data.faculty
      this.form.department=data.department
      this.form.major=data.major
      this.form.img=data.img
    }
  },
  methods:{
    async submitUpload(){
      if(!this.$refs.upload.uploadFiles[0]){ 
        return this.$message.error({
          message:'请选择一张图片！',
          duration:2000
        });
      }
      let file = this.$refs.upload.uploadFiles[0].raw
      let {size,type} = file 
      let types = ['jpg', "jpeg", 'gif', 'png']
      // 判断图片大小(5M)
      if(size>5242880){ 
        return this.$message.error({
          message:'只能上传小于5M的图片！',
          duration:2000
        });
      }
      // 限制文件类型
      if(types.indexOf(type.split('/')[1])===-1){ 
        return this.$message.error({
          message:'只能上传类型为jpg/jpeg/png/gif的图片！',
          duration:2000
        });
      }
      let formdata = new FormData()
      formdata.append('img',file)
      let {err,path} = await loginAPI.uploadImg(formdata)
      if(err===0){
        this.form.img=path
      }
    },
    handleHometown(value){
      this.hometown=value
    },
    async change(){
      if(!(this.form.teacherID&&this.form.name&&this.form.cellphone&&this.form.gender&&this.form.date&&this.form.birthdate&&this.form.hometown&&this.form.ID&&this.form.education&&this.form.faculty&&this.form.department&&this.form.major&&this.form.img)){
        this.$message.error({
          message:'内容不能为空！',
          duration:2000
        });
        return false
      }
      this.form.hometown=this.form.hometown.join("")
      let {err}= await teacherAPI.updateTeacher(this.form)
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
.confirm{
  margin-left: 850px;
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