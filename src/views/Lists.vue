<template>
  <Page class="lists">
      <TasklistHeader 
      slot="content"
      v-for="tasklist in tasklists"
      :name="tasklist.name" />

      <Footer slot="footer" />
  </Page>
</template>

<script lang="ts">

  import Vue from 'vue'
  import { mapState } from 'vuex'

  import Page from '@/components/Page'
  import Footer from '@/components/Footer'
  import TasklistHeader from '@/components/TasklistHeader'

  export default Vue.extend({
    name: 'lists',
    components: { Page, TasklistHeader, Footer },
    computed: mapState({
      tasklists: state => state.tasklists
    })
  })

</script>
