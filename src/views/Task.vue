<template>
  <Page>

    <div class="task" slot="content">
      <TaskHeader class="task-header" :task="task" />
      <TaskBody class="task-body" :task="task" />
    </div>

  </Page>
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

  import Page from '@/components/Page'
  import Footer from '@/components/Footer'
  import TaskHeader from '@/components/TaskHeader'
  import TaskBody from '@/components/TaskBody'

  export default Vue.extend({
    name: 'List',
    components: { Page, TaskHeader, TaskBody },
    computed: mapState({
      task: function(state) { 
        const { listId, taskId } = this.$route.params
        return state.tasklists[listId].tasks[taskId] 
      }
    })
  })

</script>
