<template>
  <div class="task">
    <TaskHeader class="task-header" :task="task" />
    <TaskBody class="task-body" :task="task" />
  </div>
</template>

<style lang="scss">
  .task {
    height: 100%;
    .task-header {
      height: 20%;
    }
    .task-body {
      height: 80%;
      width: 100%;
    }
  }
</style>

<script lang="ts">

  import Vue from 'vue'
  import { mapState } from 'vuex'

  import AppContent from '@/components/page/AppContent'
  import TaskHeader from '@/components/task/TaskHeader'
  import TaskBody from '@/components/task/TaskBody'

  export default Vue.extend({
    name: 'List',
    components: { AppContent, TaskHeader, TaskBody },
    computed: mapState({
      task: function(state) { 
        const { listId, taskId } = this.$route.params
        return state.tasklists[listId].tasks[taskId] 
      }
    })
  })

</script>
