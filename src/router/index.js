import Vue from 'vue'
import VueRouter from 'vue-router'
// 登录背景
import login from '../views/login/index.vue'
// 登录 注册
import sign from '../views/login/sign.vue'
// 标签栏
import tabbar from '../components/tabbar.vue'
// 首页
import home from '../views/home'
// 新手指南
import guide from '../views/home/guide.vue'
// 资产
import assets from '../views/assets'
// 期权
import option from '../views/option'
// 资讯
import information from '../views/information'
// 个人中心
import personal from '../views/personal'
// 消息战报
import NewsWarReport from '../views/home/NewsWarReport.vue'
// 推广
import extension from '../views/public/extension.vue'
// 消息推广
import IndexList from '../views/home/IndexList.vue'
// 历史记录
import history from '../views/home/history.vue'
// 下单
import place from '../views/home/place.vue'
// 充值
import recharge from '../views/assets/recharge.vue'
// 提现
import reflect from '../views/assets/reflect.vue'
// 闪兑
import exchange from '../views/assets/exchange.vue'
// 币种
import currency from '../views/public/currency.vue'
// 个人信息
import personalInformation from '../views/personal/personal.vue'
// 设置
import setup from '../views/personal/setup.vue'
// 修改密码（支付，登录）
import modify from '../views/personal/modify.vue'
// 手机号绑定
import phone from '../views/personal/phone.vue'
// 团队
import team from '../views/personal/team.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/login'
    // component: login
  },
  {
    // 登录界面
    path: '/login',
    name: 'login',
    redirect: '/login/sign',
    component: login,
    children: [
      {
        // 子路由
        path: 'sign',
        component: sign
      }
    ]
  },
  {
    path: "/tabbar",
    component: tabbar,
    redirect: '/home',
    children: [
      {
        path: "/home",
        component: home,
      },
      {

        path: "/assets",
        component: assets,
        children: [

        ]
      },
      {

        path: "/option",
        component: option,
        children: [

        ]
      },
      {

        path: "/information",
        component: information,
        children: [

        ]
      },
      {

        path: "/personal",
        component: personal,
        children: [

        ]
      },

    ]
  },
  {
    path: "/guide",
    component: guide,
  },
  {
    path: '/NewsWarReport',
    component: NewsWarReport
  },
  {
    path: '/extension',
    component: extension
  },
  {
    path: '/IndexList',
    component: IndexList
  },
  {
    path: '/history',
    component: history
  },
  {
    path: '/place',
    component: place
  },
  {
    path: '/recharge',
    component: recharge
  },
  {
    path: '/reflect',
    component: reflect
  },
  {
    path: '/currency',
    component: currency
  },
  {
    path: '/exchangey',
    component: exchange
  },
  {
    path: '/setup',
    component: setup
  },
  {
    path: '/personalInformation',
    component: personalInformation
  },
  {
    path: '/modify',
    component: modify
  },
  {
    path: '/phone',
    component: phone
  },
  {
    path: '/team',
    component: team
  },

  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
