import Vue from 'vue'
import Router from 'vue-router'
import Landing from './views/Landing.vue'
import Lists from './views/Lists.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Landing',
      component: Landing
    },
    {
      path: '/lists',
      name: 'Lists',
      component: Lists
    }
  ]
})
