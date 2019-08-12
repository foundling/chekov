<template>
  <div>
    <TaskHeader 
    v-for="task in tasklist.tasks" 
    :task="task" />
  </div>
</template>

<script lang="ts">

  import Vue from 'vue'
  import { mapState } from 'vuex'

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
    components: { AppContent, TaskHeader },
    computed: mapState({
      tasklist: function(state) { 
        return state.tasklists[this.$route.params.listId] 
      }
    })
  })

</script>
