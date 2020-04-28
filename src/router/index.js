import Vue from 'vue'
import VueRouter from 'vue-router'
// 路由懒加载
const login = () => import('../views/login/Login.vue')
const login = () => import('../views/admin')
const login = () => import('../views/student/')
const login = () => import('../views/Teacher')

Vue.use(VueRouter)

  const routes = [
  {
    path: '/login',
    component: login
  },
  {
    path: '/login',
    component: login
  },
  {
    path: '/login',
    component: login
  },
  {
    path: '/login',
    component: login
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
