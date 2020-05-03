<template>
  <div>
    <el-card class="card">
      <div slot="header">
        <span>学生成绩列表</span>
      </div>
      <el-table
        :data="tableData"
        border
        height="460"
        style="width: 100%">
        <el-table-column
          prop="stuID"
          label="学生ID">
        </el-table-column>
        <el-table-column
          prop="stuName"
          label="学生姓名">
        </el-table-column>
        <el-table-column
          prop="classID"
          label="课程ID">
        </el-table-column>
        <el-table-column
          prop="classNameCN"
          label="课程名称">
        </el-table-column>
        <el-table-column
          prop="result"
          label="成绩">
        </el-table-column>
        <el-table-column
          label="操作"
          width="120">
          <template slot-scope="scope">
            <el-button @click="update(scope)" type="primary" size="mini">打分</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-card>
  </div>
</template>

<script>
import studentAPI from '../../../api/studentAPI'
export default {
  data() {
    return {
      tableData: []
    }
  },
  methods:{
    update(scope){
      // console.log(scope.row.stuID,scope.row.classID);
      this.$prompt('请输入成绩：', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
      }).then(async ({ value }) => {
        // console.log(scope.row.stuID,scope.row.classID,value);
        let obj={}
        obj.stuID=scope.row.stuID
        obj.classID=scope.row.classID
        obj.result=value
        // console.log(obj);
        let {err}=await studentAPI.updateClass(obj)
        if(err===0){
          this.$alert('打分成功', '提示', {
          confirmButtonText: '确定',
          type:"success",
          callback: action => {
            this.$router.history.go()
          }
        });
        }
      })
    }
  },
  async created(){
    let {err,data}=await studentAPI.findClassByTeacherID(sessionStorage.getItem("teacherID"))
    if(err===0){
      // console.log(data);
      this.tableData=data
    }
  }
}
</script>

<style>

</style>