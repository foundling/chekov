<template>
  <draggable v-model="tasks" handle=".drag-handle">
    <TaskHeader 
    v-for="task in tasks" 
    :key="task.id"
    :task="task" />
  </draggable>
</template>

<script>

  import Vue from 'vue'
  import { mapState } from 'vuex'
  import draggable from 'vuedraggable'

  import AppContent from '@/components/page/AppContent'
  import TaskHeader from '@/components/task/TaskHeader'

  export default Vue.extend({
    name: 'Tasklist',
    created() {
      this.$emit('update:layout', { header: true, footer: true })
    },
    components: { AppContent, TaskHeader, draggable },
    computed: {
      tasks: {
        get() {
          return this.$store.state.tasklists[this.$route.params.listId].tasks
        },
        set(tasks) {
          const { listId } = this.$route.params
          this.$store.commit('UPDATE_TASKS', { tasks, listId })
        }
      }
    }
  })

</script>
