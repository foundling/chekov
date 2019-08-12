<template>
  <draggable v-model="tasklists">
    <TasklistHeader 
    v-for="tasklist in tasklists"
    :tasklist="tasklist"
    :id="tasklist.id"
    :name="tasklist.name" /> 
  </draggable>
</template>

<script lang="ts">

  import Vue from 'vue'
  import { mapState } from 'vuex'
  import draggable from 'vuedraggable'

  import AppContent from '@/components/page/AppContent'
  import TasklistHeader from '@/components/task/TasklistHeader'

  export default Vue.extend({
    name: 'Tasklists',
    created() {
      this.$emit('update:layout', {
        header: true,
        footer: true,
      })
    },
    components: { AppContent, TasklistHeader, draggable },
    computed: {
      tasklists: {
        get(state) {
          return this.$store.state.tasklists
        },
        set(tasklists) {
          this.$store.commit('UPDATE_TASKLISTS', tasklists)
        }
      }
    },
    methods: {
    }
  })

</script>
