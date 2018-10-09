import Vue from 'vue'
import Router from 'vue-router'
import P1 from './views/P1.vue'
import P2 from './views/P2.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'p1',
      component: P1
    },
    {
      path: '/p2',
      name: 'p2',
      component: P2
    }
  ]
})
