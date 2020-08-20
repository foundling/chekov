import Vue from 'vue'
import Router from 'vue-router'

import Landing from './views/Landing.vue'
import Tasklists from './views/Tasklists.vue'
import Tasklist from './views/Tasklist.vue'
import Task from './views/Task.vue'
import Settings from './views/Settings.vue'
import store from './store'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Landing',
      component: Landing,
    },
    {
      path: '/lists',
      name: 'Tasklists',
      component: Tasklists,
    },
    {
      path: '/list/:listId',
      name: 'Tasklist',
      component: Tasklist,
    },
    {
      path: '/list/:listId/task/:taskId',
      name: 'Task',
      component: Task,
    },
    {
      path: '/settings',
      name: 'Settings',
      component: Settings
    }
  ]
})

router.beforeEach((to, from, next) => {
  store.commit('UPDATE_PREVIOUS_ROUTE', from)
  next()
})
 
export default router
