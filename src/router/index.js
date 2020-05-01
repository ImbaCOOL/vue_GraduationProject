import Vue from 'vue'
import VueRouter from 'vue-router'
// 公用组件
const home = () => import('../components/Home.vue')
const changePSW = () => import('../components/ChangePSW.vue')
// 一级
const login = () => import('../views/login/Login.vue')
const admin = () => import('../views/admin/Admin.vue')
const student = () => import('../views/student/Student.vue')
const teacher = () => import('../views/teacher/Teacher.vue')
// 二级
const adminInfo = () => import('../views/admin/main/AdminInfo.vue')
const teacherList = () => import('../views/admin/main/TeacherList.vue')
const teachScheduleL = () => import('../views/admin/main/TeachScheduleL.vue')
const studentList = () => import('../views/admin/main/StudentList.vue')
const stuScheduleL = () => import('../views/admin/main/StuScheduleL.vue')

const teachInfo = () => import('../views/teacher/main/TeachInfo.vue')
const teachSchedule = () => import('../views/teacher/main/TeachSchedule.vue')
const stuResultL = () => import('../views/teacher/main/StuResultL.vue')

const stuInfo = () => import('../views/student/main/StuInfo.vue')
const selectClass = () => import('../views/student/main/SelectClass.vue')
const stuSchedule = () => import('../views/student/main/StuSchedule.vue')
const stuResult = () => import('../views/student/main/StuResult.vue')

// 三级
const TDetail = () => import('../views/admin/main/TDetail.vue')
const SDetail = () => import('../views/admin/main/SDetail.vue')

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    component: login
  },
  // 重定向
  {
    path: '/admin',
    redirect: '/admin/home'
  },
  {
    path: '/admin',
    component: admin,
    children: [
      {
        path: "home",
        component: home
      },
      {
        path: "adminInfo",
        component: adminInfo
      },
      {
        path: "changePSW",
        component: changePSW
      },
      {
        path: "teacherList",
        component: teacherList,
        children: [
          {
            path: ":id",
            component:TDetail
          }
        ]
      },
      {
        path: "teachScheduleL",
        component: teachScheduleL
      },
      {
        path: "studentList",
        component: studentList,
        children: [
          {
            path: ":id",
            component:SDetail
          }
        ]
      },
      {
        path: "stuScheduleL",
        component: stuScheduleL
      },
    ]
  },
  // 重定向
  {
    path: '/teacher',
    redirect: '/teacher/home'
  },
  {
    path: '/teacher',
    component: teacher,
    children: [
      {
        path: "home",
        component: home
      },
      {
        path: "teachInfo",
        component: teachInfo
      },
      {
        path: "changePSW",
        component: changePSW
      },
      {
        path: "teachSchedule",
        component: teachSchedule
      },
      {
        path: "stuResultL",
        component: stuResultL
      },
    ]
  },
  // 重定向
  {
    path: '/student',
    redirect: '/student/home'
  },
  {
    path: '/student',
    component: student,
    children: [
      {
        path: "home",
        component: home
      },
      {
        path: "stuInfo",
        component: stuInfo
      },
      {
        path: "changePSW",
        component: changePSW
      },
      {
        path: "selectClass",
        component: selectClass
      },
      {
        path: "stuSchedule",
        component: stuSchedule
      },
      {
        path: "stuResult",
        component: stuResult
      },
    ]
  },
  // 重定向
  {
    path: '*',
    redirect: '/login'
  }
]

const router = new VueRouter({
  routes
})

export default router
