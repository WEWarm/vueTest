import Vue from 'vue'
import Router from 'vue-router'

const login = () => import('../pages/sys/login.vue')
const password1 = () => import('../components/forgetPass.vue')
const test = () => import('../components/test.vue')
const seivice = () => import('../pages/homePage/seivice.vue')
const search = () => import('../pages/homePage/search.vue')

const department = () => import('../pages/systemAdmin/department.vue')
const role = () => import('../pages/systemAdmin/role.vue')
const user = () => import('../pages/systemAdmin/user.vue')
const systemMenu = () => import('../pages/systemAdmin/systemMenu.vue')

const displayDevice = () => import('../pages/systemMonitor/displayDevice.vue')
const mainControl = () => import('../pages/systemMonitor/mainControl.vue')
const terminalDevice = () => import('../pages/systemMonitor/terminalDevice.vue')
const transmission = () => import('../pages/systemMonitor/transmission.vue')

const derive = () => import('../pages/systemTools/derive.vue')
const reports = () => import('../pages/systemTools/reports.vue')
const todo = () => import('../pages/systemTools/todo.vue')
Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      name:'login',
      component:login
    },
    {
      path:'/password1',
      name:'password1',
      component:password1
    },
    {
      path: '/test',
      name: 'test',
      component: test,
      children: [
        {
          path: '/seivice',
          name: 'seivice',
          component: seivice
        },{
          path:'/search',
          name:'search',
          component:search
        },{
          path:'/department',
          name:'department',
          component:department
        },{
          path:'/role',
          name:'role',
          component:role
        },{
          path:'/user',
          name:'user',
          component:user
      },{
          path:'/systemMenu',
          name:'systemMenu',
          component:systemMenu
        },{
          path:'/displayDevice',
          name:'displayDevice',
          component:displayDevice
        },{
          path:'/mainControl',
          name:'mainControl',
          component:mainControl
        },{
          path:'/terminalDevice',
          name:'terminalDevice',
          component:terminalDevice
        },{
          path:'/transmission',
          name:'transmission',
          component:transmission
        },{
          path:'/derive',
          name:'derive',
          component:derive
        },{
          path:'/reports',
          name:'reports',
          component:reports
        },{
          path:'/todo',
          name:'todo',
          component:todo
        }
      ]
    }
  ]
})
