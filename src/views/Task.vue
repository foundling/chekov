<template>
  <Page class="tasklists">

      <TaskHeader 
      :task="task"
      slot="content" />

  </Page>
</template>

<script lang="ts">

  import Vue from 'vue'
  import { mapState } from 'vuex'

  import Page from '@/components/Page'
  import Footer from '@/components/Footer'
  import TaskHeader from '@/components/TaskHeader'

  export default Vue.extend({
    name: 'List',
    components: { Page, TaskHeader },
    computed: mapState({
      task: function(state) { 
        const { listId, taskId } = this.$route.params
        return state.tasklists[listId].tasks[taskId] 
      }
    })
  })

</script>
