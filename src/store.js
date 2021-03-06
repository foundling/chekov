import Vue from 'vue'
import Vuex from 'vuex'

import Task from '@/lib/Task'
import Tasklist from '@/lib/Tasklist'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    previousRoute: null,
    tasklists: [
      new Tasklist({ 
        id: 0,
        name: 'jobs', 
        tasks: [
          new Task({ text: 'Jobs @ Stack Overflow', id: 0 }),
          new Task({ text: 'Remote Ok', id: 1 }),
          new Task({ text: 'Craigslist', id: 2 })
        ]}
      ),
      new Tasklist({ 
        id: 1,
        name: 'music',
        tasks: [
          new Task({ text: 'practice Purcell', id: 0 }),
          new Task({ text: 'Master Ambient Record', id: 1 }),
          new Task({ text: 'Re-record guitar part', id: 2 })
        ]}
      ),
      new Tasklist({ 
        id: 2,
        name: 'tech',
        tasks: [
          new Task({ text: 'finish this app', id: 0 }),
          new Task({ text: 'finish ER seq', id: 1 }),
        ]}
      ),
      new Tasklist({ 
        id: 3,
        name: 'exercise',
        tasks: [
          new Task({ text: 'HIIT', id: 0 }),
          new Task({ text: 'Go Running', id: 1 }),
        ]}
      ),
      new Tasklist({ 
        id: 4,
        name: 'books',
        tasks: [
          new Task({ text: 'Advanced Programming', id: 0 }),
          new Task({ text: 'OSTEP', id: 1 }),
        ]}
      ),
      new Tasklist({ 
        id: 5,
        name: 'podcasts',
        tasks: [
          new Task({ text: 'The Shrink Nextdoor', id: 0 }),
          new Task({ text: 'Revisionist History', id: 1 }),
        ]}
      )
    ]
  },
  mutations: {
    TASK_TEXT_UPDATE: (state, { tasklistId, taskId, text }) => {
      state.tasklists[tasklistId].tasks[taskId].text = text
    },
    TASK_DETAILS_UPDATE: (state, { tasklistId, taskId, details }) => {
      state.tasklists[taskId].tasks[taskId].details.text = details.text
      state.tasklists[taskId].tasks[taskId].details.dueDate = details.dueDate
    },
    UPDATE_TASKS: (state, { tasks, listId }) => {
      state.tasklists[listId].tasks = tasks
    },
    UPDATE_TASKLISTS: (state, tasklists) => {
      state.tasklists = tasklists
    },
    ADD_TASKLIST: (state) => {
      state.tasklists.push(new Tasklist({ name: 'New Task' }))
    },
    ADD_TASK: (state, { listId }) => {
      state.tasklists[listId].tasks.push(new Task({ text: 'New Task' }))
    },
    UPDATE_PREVIOUS_ROUTE: (state, route) => {
      state.previousRoute = route
    }
  },
  actions: {

  }
})
