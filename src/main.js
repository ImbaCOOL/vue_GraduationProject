import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './style/base.css' // 引入样式重置
// 引入element-ui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import VueLazyload from 'vue-lazyload' // 引入图片懒加载

Vue.config.productionTip = false
Vue.use(ElementUI);
// 图片懒加载
Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: '/favicon.ico',
  loading: '/favicon.ico',
  attempt: 1
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
