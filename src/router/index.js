import Vue from 'vue'
import VueRouter from 'vue-router'
import SelfMend from '../views/SelfMend'
//import SelfSkill from '../views/SelfSkill'
import Experience from '../views/Experience'
//import Welcome from '../views/Welcome'
Vue.use(VueRouter)

const routes = [

  //个人简介
  {
    path: '/selfmend',
    component: SelfMend
  },
  // 个人技能
  // {
  //   path: '/selfskill',
  //   component: SelfSkill
  // },
  //个人经历
  {
    path: '/experience',
    component: Experience
  },
  // {
  //   path: '/welcome',
  //   component: Welcome
  // },

  //重定向到个人简介
  {
    path: '/*',
    redirect: '/selfmend'
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

export default router
