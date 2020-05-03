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
          prop="name"
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
import teacherAPI from '../../../api/teacherAPI'
export default {
  data() {
    return {
      tableData: [
        {
          stuID:"S0",
          name:'李四',
          classID:'C0',
          classNameCN:'英语课',
          result:'-'
        }
      ]
    }
  },
  methods:{
    update(scope){
      // console.log(scope.row.stuID);
    }
  },
  async created(){}
}
</script>

<style>

</style>