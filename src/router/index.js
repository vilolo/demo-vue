import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from '../views/Login'
import Home from '../views/Home'
import NotFound from '../views/404'
import Test from '../views/Test'
import Sspp from '../views/Sspp'
import BaseTable from '../views/BaseTable'
import DataTable from '../views/DataTable'

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
      path: '/sspp',
      component: Sspp,
      meta: {
        title: 'sspp'
      }
    },
    {
      path: '/BaseTable',
      component: BaseTable,
      meta: {
        title: 'BaseTable'
      }
    },
    {
      path: '/DataTable',
      component: DataTable,
      meta: {
        title: 'DataTable'
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
