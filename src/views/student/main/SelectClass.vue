<template>
  <div>
    <el-table
      :data="tableData1"
      border
      height="350"
      style="width: 100%">
      <el-table-column
        prop="classID"
        label="课程ID">
      </el-table-column>
      <el-table-column
        prop="classNameCN"
        label="课程名称">
      </el-table-column>
      <el-table-column
        prop="name"
        label="授课老师">
      </el-table-column>
      <el-table-column
        prop="classTime"
        label="上课时间">
      </el-table-column>
      <el-table-column
        prop="classroom"
        label="上课地点">
      </el-table-column>
      <el-table-column
        label="操作"
        width="120">
        <template slot-scope="scope">
          <el-button @click="selete(scope)" type="primary" size="mini">选课</el-button>
        </template>
      </el-table-column>
    </el-table>
    <p>已选课程：</p>
    <el-table
      :data="tableData2"
      border
      max-height="500"
      style="width: 100%">
      <el-table-column
        prop="classID"
        label="课程ID">
      </el-table-column>
      <el-table-column
        prop="classNameCN"
        label="课程名称">
      </el-table-column>
      <el-table-column
        prop="name"
        label="授课老师">
      </el-table-column>
      <el-table-column
        prop="classTime"
        label="上课时间">
      </el-table-column>
      <el-table-column
        prop="classroom"
        label="上课地点">
      </el-table-column>
      <el-table-column
        label="操作"
        width="120">
        <template slot-scope="scope">
          <el-button @click="del(scope)" type="danger" size="mini">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import teacherAPI from "../../../api/teacherAPI"
import studentAPI from "../../../api/studentAPI"
export default {
  data() {
    return {
      tableData1: [],
      tableData2: [],
    }
  },
  async created(){
    var {err,data}=await teacherAPI.findTeachSchedule()
    if(err===0){
      // console.log(data);
      data.forEach(element => {
        let obj={}
        obj.classID=element.classID
        obj.classNameCN=element.classNameCN
        obj.name=element.name
        obj.classTime=element.classTime
        obj.classroom=element.classroom
        this.tableData1.push(obj)
      });
    }
    var {err,data}=await studentAPI.findClassByStuID(sessionStorage.getItem("stuID"))
    if(err===0){
      // console.log(data);
      data.forEach(element => {
        let obj={}
        obj.classID=element.classID
        obj.classNameCN=element.classNameCN
        obj.name=element.teacherName
        obj.classTime=element.classTime
        obj.classroom=element.classroom
        this.tableData2.push(obj)
      });
    }
  },
  methods:{
    async selete(scope) {
      // console.log(scope.row.classID);
      let obj={}
      var {err,data}=await studentAPI.findByID(sessionStorage.getItem("stuID"))
      if(err===0){
        obj.stuID=data.stuID
        obj.stuName=data.name
        // console.log(obj);
      }
      var {err,data}=await teacherAPI.findTSByID(scope.row.classID)
      if(err===0){
        // console.log(data);
        obj.teacherID=data.teacherID
        obj.teacherName=data.name
        obj.classID=data.classID
        obj.classNameCN=data.classNameCN
        obj.classTime=data.classTime
        obj.classroom=data.classroom
        obj.result="-"
        // console.log(obj);
      }
      var {err,data}=await studentAPI.addClass(obj)
      if(err===0){
        this.$alert('选课成功', '提示', {
          confirmButtonText: '确定',
          type:"success",
          callback: action => {
            this.$router.history.go()
          }
        });
      }
    },
    async del(scope){
      let {err}=await studentAPI.deleteClass(sessionStorage.getItem("stuID"),scope.row.classID)
      if(err===0){
        this.$alert('删除成功', '提示', {
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
p{
  margin: 10px 0;
}
</style>