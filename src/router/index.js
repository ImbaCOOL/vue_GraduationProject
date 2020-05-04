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

const teachInfo = () => import('../views/teacher/main/TeachInfo.vue')
const teachSchedule = () => import('../views/teacher/main/TeachSchedule.vue')
const stuResultL = () => import('../views/teacher/main/StuResultL.vue')

const stuInfo = () => import('../views/student/main/StuInfo.vue')
const selectClass = () => import('../views/student/main/SelectClass.vue')
const stuSchedule = () => import('../views/student/main/StuSchedule.vue')
const stuResult = () => import('../views/student/main/StuResult.vue')

// 三级
const TDetail = () => import('../views/admin/main/TeacherList/TDetail.vue')
const TAdd = () => import('../views/admin/main/TeacherList/TAdd.vue')

const SDetail = () => import('../views/admin/main/studentList/SDetail.vue')
const SAdd = () => import('../views/admin/main/studentList/SAdd.vue')

const TSDetail = () => import('../views/admin/main/TeachScheduleL/TSDetail.vue')
const TSAdd = () => import('../views/admin/main/TeachScheduleL/TSAdd.vue')

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
    beforeEnter: (to, from, next) => {
      if (sessionStorage.getItem("admin")) {
        next()
      } else {
        next("/login")
      }
    },
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
            path: "add",
            component:TAdd
          },
          {
            path: ":id",
            component:TDetail
          },
        ]
      },
      {
        path: "teachScheduleL",
        component: teachScheduleL,
        children: [
          {
            path: "add",
            component:TSAdd
          },
          {
            path: ":id",
            component:TSDetail
          },
        ]
      },
      {
        path: "studentList",
        component: studentList,
        children: [
          {
            path: "add",
            component:SAdd
          },
          {
            path: ":id",
            component:SDetail
          },
        ]
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
    beforeEnter: (to, from, next) => {
      if (sessionStorage.getItem("teacher")) {
        next()
      } else {
        next("/login")
      }
    },
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
    beforeEnter: (to, from, next) => {
      if (sessionStorage.getItem("student")) {
        next()
      } else {
        next("/login")
      }
    },
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
