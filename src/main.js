// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// import $ from 'jquery'
// Vue.prototype.$ = jquery

import 'bootstrap/dist/js/bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

import jquery from 'jquery'
window.jquery = window.$ = jquery

// step1：引入 axios
import axios from 'axios'

// step2：把axios挂载到vue的原型中，在vue中每个组件都可以使用axios发送请求,
// 不需要每次都 import一下 axios了，直接使用 $axios 即可
// Vue.prototype.$ajax = axios

// step3：使每次请求都会带一个 /api 前缀
axios.defaults.baseURL = '/api'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

router.beforeEach((to, from, next) => {
  // to and from are both route objects. must call `next`.
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
})
