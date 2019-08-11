<template>
  <Page class="tasklists">

    <Header :tasklist="tasklists" slot="header" />
      
    <TasklistHeader 
    v-for="tasklist in tasklists"
    :tasklist="tasklist"
    :id="tasklist.id"
    :name="tasklist.name" 
    slot="content" />

    <Footer slot="footer"></Footer>

  </Page>
</template>

<script lang="ts">

  import Vue from 'vue'
  import { mapState } from 'vuex'

  import Page from '@/components/Page'
  import Footer from '@/components/Footer'
  import Header from '@/components/Header'
  import TasklistHeader from '@/components/TasklistHeader'

  export default Vue.extend({
    name: 'Tasklists',
    components: { Page, TasklistHeader, Footer },
    computed: mapState({
      tasklists: state => state.tasklists
    }),
    methods: {
    }
  })

</script>
