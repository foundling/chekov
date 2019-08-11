import Vue from 'vue'
import Router from 'vue-router'

import Landing from './views/Landing.vue'
import Tasklists from './views/Tasklists.vue'
import Tasklist from './views/Tasklist.vue'
import Task from './views/Task.vue'
import Settings from './views/Settings.vue'

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
      name: 'Tasklists',
      component: Tasklists
    },
    {
      path: '/list/:listId',
      name: 'Tasklist',
      component: Tasklist
    },
    {
      path: '/list/:listId/task/:taskId',
      name: 'Task',
      component: Task
    },
    {
      path: '/settings',
      name: 'Settings',
      component: Settings
    }
  ]
})
