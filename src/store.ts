import Vue from 'vue'
import Vuex from 'vuex'

import Task from '@/lib/Task'
import Tasklist from '@/lib/Tasklist'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tasklists: [
      new Tasklist({ 
        name: 'jobs', 
        tasks: [
          new Task({ title: 'Jobs @ Stack Overflow' }),
          new Task({ title: 'Remote Ok' }),
          new Task({ title: 'Craigslist' })
        ]}
      ),
      new Tasklist({ 
        name: 'music',
        tasks: [
          new Task({ title: 'practice Purcell' }),
          new Task({ title: 'Master Ambient Record' }),
          new Task({ title: 'Re-record guitar part' })
        ]}
      ),
      new Tasklist({ 
        name: 'tech',
        tasks: [
          new Task({ text: 'finish this app' }),
          new Task({ text: 'finish ER seq' }),
        ]}
      ),
    ]
  },
  mutations: {

  },
  actions: {

  }
})
