<template>
  <Page>

    <div class="settings" slot="content">

      <Appearance />
      <Sync />
      <ExportFormat />
      <ImportFormat />
      <PrivacyPolicy />

    </div>

  </Page>
</template>

<style lang="scss">
  .settings {
    height: 100%;
  }
</style>

<script lang="ts">

  import Vue from 'vue'
  import { mapState } from 'vuex'

  import Page from '@/components/Page'
  import Footer from '@/components/Footer'
  import Appearance from '@/components/Appearance'
  import Sync from '@/components/Sync'
  import ExportFormat from '@/components/ExportFormat'
  import ImportFormat from '@/components/ImportFormat'
  import PrivacyPolicy from '@/components/PrivacyPolicy'

  export default Vue.extend({
    name: 'Settings',
    components: { Page, Appearance, Sync, ExportFormat, ImportFormat, PrivacyPolicy },
    computed: mapState({
      task: function(state) { 
        const { listId, taskId } = this.$route.params
        return state.tasklists[listId].tasks[taskId] 
      }
    })
  })

</script>
