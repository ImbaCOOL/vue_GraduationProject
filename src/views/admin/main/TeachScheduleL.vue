<template>
  <div>
    <el-card class="card">
      <div slot="header">
        <span>全校教师课程</span>
        <el-button type="primary" class="btn" @click="add">添加课程</el-button>
      </div>
      <el-table
        :data="tableData"
        border
        height="460"
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
          width="180">
          <template slot-scope="scope">
            <el-button @click="change(scope)" type="primary" size="mini">查看并修改</el-button>
            <el-popconfirm
              title="确定要删除吗？"
              @onConfirm="del(scope)"
              confirmButtonType="danger"
              cancelButtonType=""
            >
              <el-button slot="reference" type="danger" size="mini" class="btn2">删除</el-button>
            </el-popconfirm>
          </template>
        </el-table-column>
      </el-table>
    </el-card>
    <router-view></router-view>
  </div>
</template>

<script>
import teacherAPI from "../../../api/teacherAPI"
export default {
  data() {
    return {
      tableData: []
    }
  },
  async created(){
    let {err,data}=await teacherAPI.findTeachSchedule()
    if(err===0){
      // console.log(data);
      data.forEach(element => {
        let obj={}
        obj.classID=element.classID
        obj.classNameCN=element.classNameCN
        obj.name=element.name
        obj.classTime=element.classTime
        obj.classroom=element.classroom
        this.tableData.push(obj)
      });
    }
  },
  methods:{
    add(){
      this.$router.history.push("/admin/teachScheduleL/add")
    },
    async change(scope) {
      // console.log(scope.row.classID);
      this.$router.push(`/admin/teachScheduleL/${scope.row.classID}`)
    },
    async del(scope){
      // console.log(scope.row.classID);
      let {err}=await teacherAPI.delTeachSchedule(scope.row.classID)
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
.btn{
  float: right; 
  padding: 3px 0;
  width: 80px;
  height: 35px;
}
.btn2{
  margin-left: 10px;
}
</style>