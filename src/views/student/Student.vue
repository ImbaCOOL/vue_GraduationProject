<template>
  <div class="student">
      <el-container>
        <!-- 侧边栏 -->
        <el-aside width="200px">
          <el-menu :router="true">
            <el-menu-item index="/student/home"><i class="el-icon-s-home"></i>首页</el-menu-item>
            <el-submenu index="1">
              <template slot="title"><i class="el-icon-user-solid"></i>个人信息管理</template>
              <el-menu-item index="/student/stuInfo">个人信息</el-menu-item>
              <el-menu-item index="/student/changePSW">修改密码</el-menu-item>
            </el-submenu>
            <el-menu-item index="/student/selectClass"><i class="el-icon-s-cooperation"></i>网上选课</el-menu-item>
            <el-submenu index="2">
              <template slot="title"><i class="el-icon-s-promotion"></i>学生信息查询</template>
              <el-menu-item index="/student/stuSchedule">课表查询</el-menu-item>
              <el-menu-item index="/student/stuResult">成绩查询</el-menu-item>
            </el-submenu>
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
.student>.el-container {
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