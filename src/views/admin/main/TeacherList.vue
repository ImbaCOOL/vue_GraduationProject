<template>
  <div>
    <el-card class="card">
      <div slot="header">
        <span>最新公告</span>
      </div>
      <el-table
        :data="tableData"
        border
        style="width: 100%">
        <el-table-column
          prop="title"
          label="公告标题">
        </el-table-column>
        <el-table-column
          prop="publisher"
          label="发布者"
          width="180">
        </el-table-column>
        <el-table-column
          prop="date"
          label="发布时间"
          width="180">
        </el-table-column>
        <el-table-column
          label="操作"
          width="180">
          <template slot-scope="scope">
            <el-button @click="handleClick(scope)" type="primary" size="mini">查看详情</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [{
        title: '海洋工程建筑BIM实验平台设备采购项目验收公示',
        publisher: '管理员',
        date: '2020-04-28'
      }]
    }
  },
  methods:{
    handleClick(scope) {
      console.log(scope.$index);
    }
  }
}
</script>

<style>

</style>