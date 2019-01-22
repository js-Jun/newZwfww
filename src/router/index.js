import Vue from 'vue'
import Router from 'vue-router'
// import Login from '@/views/login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component:resolve => require(['@/views/login'],resolve)
    },
    {
      path:'/guide/:id',
      name:'Guide',
      component:resolve => require(['@/views/guide'],resolve)
    },
    {
      path: '/home',
      name: 'Home',
      component:resolve => require(['@/views/home'],resolve),
      redirect:{path:'/home/searchPage'},
      children:[
        {
          path:'searchPage',
          name:'SearchPage',
          component:resolve => require(['@/views/searchPage'],resolve)
        },
        {
          path:'userInfo',
          name:'UserInfo',
          component:resolve => require(['@/views/userInfo'],resolve)
        },
        {
          path:'testlayout',
          name:'Testlayout',
          component:resolve => require(['@/views/testlayout'],resolve)
        },
        {
          path:'searchResultes',
          name:'SearchResultes',
          component:resolve => require(['@/views/searchResultes'],resolve)
        },

      ]
    }
  ]
})
