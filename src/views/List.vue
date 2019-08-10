<template>
  <Page class="tasklists">

      <TaskHeader 
      v-for="task in tasklist.tasks" 
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
      tasklist: function(state) { 
        return state.tasklists[this.$route.params.listId] 
      }
    })
  })

</script>
