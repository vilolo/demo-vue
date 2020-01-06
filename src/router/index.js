import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from '../views/Login'
import Home from '../views/Home'
import NotFound from '../views/404'
import Test from '../views/Test'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Home,
      meta: {
        title: '首页'
      }
    },
    {
      path: '/login',
      component: Login,
      meta: {
        title: '登陆'
      }
    },
    {
      path: '/home',
      component: Home,
      meta: {
        title: '首页'
      }
    },
    {
      path: '/test',
      component: Test,
      meta: {
        title: '测试'
      }
    },
    {
      path: '*',
      component: NotFound,
      meta: {
        title: '找不到页面'
      }
    }
  ]
})
