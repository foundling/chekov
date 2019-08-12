<template>
  <div>
    <TasklistHeader 
    v-for="tasklist in tasklists"
    :tasklist="tasklist"
    :id="tasklist.id"
    :name="tasklist.name" /> 
  </div>
</template>

<script lang="ts">

  import Vue from 'vue'
  import { mapState } from 'vuex'

  import AppContent from '@/components/page/AppContent'
  import TasklistHeader from '@/components/task/TasklistHeader'

  export default Vue.extend({
    name: 'Tasklists',
    created() {
      console.log('tasklists component created!')
      this.$emit('update:layout', {
        header: true,
        footer: true,
      })
    },
    components: { AppContent, TasklistHeader },
    computed: mapState({
      tasklists: state => state.tasklists
    }),
    methods: {
    }
  })

</script>
