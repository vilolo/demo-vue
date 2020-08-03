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
import ArticleSave from '../views/ArticleSave'
import ArticleCategory from '../views/ArticleCategory'
import ArticleCategorySave from '../views/ArticleCategorySave'
import ImgDesc from '../views/ImgDesc'
import ImgDescSave from '../views/ImgDescSave'
import CustomerMessage from '../views/CustomerMessage'
import News from '../views/News'
import FootNavigation from '../views/FootNavigation'
import FootNavigationSave from '../views/FootNavigationSave'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/login',
      meta: {
        title: '首页'
      }
    },
    {
      path: '/login',
      name: 'login',
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
      name: 'company',
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
      path: '/ArticleSave',
      component: ArticleSave,
      meta: {
        title: 'ArticleSave'
      }
    },
    {
      path: '/ArticleCategory',
      component: ArticleCategory,
      meta: {
        title: 'ArticleCategory'
      }
    },
    {
      path: '/ArticleCategorySave',
      component: ArticleCategorySave,
      meta: {
        title: 'ArticleCategorySave'
      }
    },
    {
      path: '/ImgDesc',
      component: ImgDesc,
      meta: {
        title: 'ImgDesc'
      }
    },
    {
      path: '/ImgDescSave',
      component: ImgDescSave,
      meta: {
        title: 'ImgDescSave'
      }
    },
    {
      path: '/CustomerMessage',
      component: CustomerMessage,
      meta: {
        title: 'CustomerMessage'
      }
    },
    {
      path: '/News',
      component: News,
      meta: {
        title: 'News'
      }
    },
    {
      path: '/FootNavigation',
      component: FootNavigation,
      meta: {
        title: 'FootNavigation'
      }
    },
    {
      path: '/FootNavigationSave',
      component: FootNavigationSave,
      meta: {
        title: 'FootNavigationSave'
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
