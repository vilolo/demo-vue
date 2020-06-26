import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/views/Login'
import Home from '../views/Home'
import NotFound from '../views/404'
import Test from '../views/Test'
import Sspp from '../views/Sspp'
import BaseTable from '../views/BaseTable'
import DataTable from '../views/DataTable'
import Company from '../views/Company'
import Navigation from '../views/Navigation'
import NavigationSave from '../views/NavigationSave'
import Article from '../views/Article'

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
        title: '登陆',
        noAuth: true
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
      path: '/Company',
      component: Company,
      meta: {
        title: 'Company'
      }
    },
    {
      path: '/Navigation',
      component: Navigation,
      meta: {
        title: 'Navigation'
      }
    },
    {
      path: '/NavigationSave',
      component: NavigationSave,
      meta: {
        title: 'NavigationSave'
      }
    },
    {
      path: '/Article',
      component: Article,
      meta: {
        title: 'Article'
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
