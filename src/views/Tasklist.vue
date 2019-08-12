<template>
  <draggable v-model="tasks">
    <TaskHeader 
    v-for="task in tasks" 
    :task="task" />
  </draggable>
</template>

<script lang="ts">

  import Vue from 'vue'
  import { mapState } from 'vuex'
  import draggable from 'vuedraggable'

  import AppContent from '@/components/page/AppContent'
  import TaskHeader from '@/components/task/TaskHeader'

  export default Vue.extend({
    name: 'Tasklist',
    created() {
      this.$emit('update:layout', {
        header: true,
        footer: true,
      })
    },
    components: { AppContent, TaskHeader, draggable },
    computed: {
      tasks: {
        get() {
          return this.$store.state.tasklists[this.$route.params.listId].tasks
        },
        set(tasks) {
          console.log('on set: ', tasks.map(t => t.text))
          const { listId } = this.$route.params
          this.$store.commit('UPDATE_TASKS', { tasks, listId })
        }
      }
    }
  })

</script>
