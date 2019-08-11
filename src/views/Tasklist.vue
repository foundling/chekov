<template>
  <Page class="tasklists">

    <Header :task="tasklist" slot="header" />

    <TaskHeader 
    v-for="task in tasklist.tasks" 
    :task="task"
    slot="content" />

    <Footer slot="footer"></Footer>

  </Page>
</template>

<script lang="ts">

  import Vue from 'vue'
  import { mapState } from 'vuex'

  import Page from '@/components/Page'
  import TaskHeader from '@/components/TaskHeader'
  import Header from '@/components/Header'
  import Footer from '@/components/Footer'

  export default Vue.extend({
    name: 'Tasklist',
    components: { Page, TaskHeader },
    computed: mapState({
      tasklist: function(state) { 
        return state.tasklists[this.$route.params.listId] 
      }
    })
  })

</script>
