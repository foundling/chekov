<template>
    <draggable v-model="tasklists" handle=".drag-handle" >
      <TasklistHeader 
      v-for="tasklist in tasklists"
      :tasklist="tasklist"
      :id="tasklist.id"
      :name="tasklist.name" /> 
    </draggable>
</template>

<style>
  .sortable-ghost {
    background: lightgray;
  }
</style>

<script>

  import Vue from 'vue'
  import { mapState } from 'vuex'
  import draggable from 'vuedraggable'

  import AppContent from '@/components/page/AppContent'
  import TasklistHeader from '@/components/task/TasklistHeader'
  import ScrollProgress from '@/components/common/ScrollProgress'

  export default Vue.extend({
    name: 'Tasklists',
    created() {
      this.$emit('update:layout', { header: true, footer: true })
    },
    components: { AppContent, TasklistHeader, ScrollProgress, draggable },
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
