<template>
  <div class="teacher">
      <el-container>
        <!-- 侧边栏 -->
        <el-aside width="200px">
          <el-menu :router="true">
            <el-menu-item index="/teacher/home"><i class="el-icon-s-home"></i>首页</el-menu-item>
            <el-submenu index="1">
              <template slot="title"><i class="el-icon-user-solid"></i>个人信息管理</template>
              <el-menu-item index="/teacher/teachInfo">个人信息</el-menu-item>
              <el-menu-item index="/teacher/changePSW">修改密码</el-menu-item>
            </el-submenu>
            <el-menu-item index="/teacher/teachSchedule"><i class="el-icon-s-cooperation"></i>教师课表查询</el-menu-item>
            <el-menu-item index="/teacher/stuResultL"><i class="el-icon-s-promotion"></i>学生成绩列表</el-menu-item>
          </el-menu>
        </el-aside>
        <el-container>
          <!-- 头部 -->
          <el-header><Header></Header></el-header>
          <!-- 主体 -->
          <el-main><router-view></router-view></el-main>
          <!-- 底部 -->
          <el-footer><Footer></Footer></el-footer>
        </el-container>
      </el-container>
  </div>
</template>

<script>
import Header from "../../components/Header"
import Footer from "../../components/Footer"
export default {
  components:{Header,Footer}
}
</script>

<style lang="less" scoped>
.teacher>.el-container {
  height: 100vh;
  width: 100vw;
}

.el-aside {
  background-color: #ffffff;
}

.el-header{
  background-color: #fff;
}
.el-footer{
  background-color: #F2F6FC;
}

.el-main {
  background-color: #F2F6FC;
}
</style>