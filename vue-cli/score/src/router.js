import Vue from 'vue'
import Router from 'vue-router'
import All from './views/All.vue'
import Income from './views/Income.vue'
import Pay from './views/Pay.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'all',
      component: All
    },
    {
      path: '/income',
      name: 'income',
      component: Income
    },
    {
      path: '/pay',
      component: Pay
    }
  ]
})
