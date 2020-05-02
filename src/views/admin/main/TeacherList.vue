<template>
  <div>
    <el-card class="card">
      <div slot="header">
        <span>全校教师列表</span>
        <el-button type="primary" class="btn" @click="add">添加教师</el-button>
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
          prop="name"
          label="姓名">
        </el-table-column>
        <el-table-column
          prop="cellphone"
          label="手机号码">
        </el-table-column>
        <el-table-column
          prop="faculty"
          label="学院">
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
    let {err,data}=await teacherAPI.findTeacher()
    if(err===0){
      // console.log(data);
      data.forEach(element => {
        let obj={}
        obj.teacherID=element.teacherID
        obj.name=element.name
        obj.cellphone=element.cellphone
        obj.faculty=element.faculty
        this.tableData.push(obj)
      });
    }
  },
  methods:{
    add(){
      this.$router.history.push("/admin/teacherList/add")
    },
    async change(scope) {
      // console.log(scope.row.teacherID);
      this.$router.push(`/admin/teacherList/${scope.row.teacherID}`)
    },
    async del(scope){
      // console.log(scope.row.teacherID);
      let {err}=await teacherAPI.delTeacher(scope.row.teacherID)
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