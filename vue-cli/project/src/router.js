import Vue from 'vue'
import Router from 'vue-router'

// 组件（页面）导入
import Home from './views/Home.vue'
import Details from './views/Details.vue'
import About from './views/About.vue'
import error from './views/Error.vue'
import ss from './views/ss.vue'

import A from './views/A.vue'
import B from './views/B.vue'


Vue.use(Router)

export default new Router({
  mode: 'history', //history  hash
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/home',
      name: 'home',
      component: Home,
      alias: '/wx'
    },
    {
      path: '/details/:userId/:name',
      name: 'details',
      alias: '/ooo/:userId/:name',
      component: Details
    },
    {
      path: '/about',
      component: About,
      alias: '/wxc',
      children: [
        {
          path: 'a',
          component: A
        },
        {
          path: '/about/b',
          component: B
        }
      ],
      // beforeEnter: (to, from, next)=>{
      //   console.log('to:', to);
      //   console.log('from:', from);
      //   console.log('next:', next)
      //   next();
      // }
    },
    {
      path: '/test/:userId/:name',
      redirect: '/details/:userId/:name'
    },
    {
      path: '/test1',
      redirect: '/about'
    },
    {
      path: '/ss',
      component: ss
    },
    {
      path: '/*',
      component: error
    }
  ]
})
