<template>
  <AppContent>

    <h1>Settings</h1>
    <div class="settings" slot="content">
      <Appearance />
      <Sync />
      <ExportFormat />
      <ImportFormat />
      <PrivacyPolicy />
    </div>

  </AppContent>
</template>

<style lang="scss">
  .settings {
    height: 100%;
  }

  h1 {
    padding: 5% 10%;
  }
</style>

<script lang="ts">

  import Vue from 'vue'
  import { mapState } from 'vuex'

  import AppContent from '@/components/page/AppContent'
  import Appearance from '@/components/settings/Appearance'
  import Sync from '@/components/settings/Sync'
  import ExportFormat from '@/components/settings/ExportFormat'
  import ImportFormat from '@/components/settings/ImportFormat'
  import PrivacyPolicy from '@/components/settings/PrivacyPolicy'

  export default Vue.extend({
    name: 'Settings',
    created() {
      this.$emit('update:layout', { 
        header: false, 
        footer: true 
      }) 
    },
    components: { 
      AppContent,
      Appearance,
      ExportFormat,
      ImportFormat,
      PrivacyPolicy, 
      Sync,
    },
    computed: mapState({
      task: function(state) { 
        const { listId, taskId } = this.$route.params
        return state.tasklists[listId].tasks[taskId] 
      }
    })
  })

</script>
