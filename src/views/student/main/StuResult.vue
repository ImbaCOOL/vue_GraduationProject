<template>
  <div>
    <el-card class="card">
      <div slot="header">
        <span>成绩列表</span>
      </div>
      <el-table
        :data="tableData"
        border
        height="460"
        style="width: 100%">
        <el-table-column
          prop="teacherID"
          label="教师ID">
        </el-table-column>
        <el-table-column
          prop="teacherName"
          label="教师姓名">
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
  async created(){
    let {err,data}=await studentAPI.findClassByStuID(sessionStorage.getItem("stuID"))
    if(err===0){
      // console.log(data);
      this.tableData=data
    }
  }
}
</script>

<style>

</style>