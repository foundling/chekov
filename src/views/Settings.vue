<template>
  <div class="settings" slot="content">
    <ToggleComponent class="setting">
      <h2 slot="header">Appearance</h2>
      <Appearance slot="content" />
    </ToggleComponent>

    <ToggleComponent class="setting">
      <h2 slot="header">Cloud Sync</h2>
      <Sync slot="content" />
    </ToggleComponent>

    <ToggleComponent class="setting">
      <h2 slot="header">Export</h2>
      <ExportFormat slot="content" />
    </ToggleComponent>

    <ToggleComponent  class="setting" :open="true" :prevent-close="true">
      <h2 slot="header">Privacy Policy</h2>
      <PrivacyPolicy slot="content" />
    </ToggleComponent>

  </div>
</template>

<style lang="scss">
  .settings {
    width: 100%;
    padding: 0% 5%;
    box-sizing: border-box;

    .setting {
      min-height: 20%;
      height: 20%;
    }
  }

  h2 {
    margin: 0;
    padding: 0;
  }
</style>

<script>

  import Vue from 'vue'
  import { mapState } from 'vuex'

  import ToggleComponent from '@/components/common/ToggleComponent'
  import AppContent from '@/components/page/AppContent'
  import Appearance from '@/components/settings/Appearance'
  import Sync from '@/components/settings/Sync'
  import ExportFormat from '@/components/settings/ExportFormat'
  import ImportFormat from '@/components/settings/ImportFormat'
  import PrivacyPolicy from '@/components/settings/PrivacyPolicy'

  export default Vue.extend({
    name: 'Settings',
    data() {
      return {
      }
    },
    created() {
      this.$emit('update:layout', { 
        header: true, 
        footer: true 
      })
    },
    components: { 
      AppContent,
      Appearance,
      ExportFormat,
      ImportFormat,
      PrivacyPolicy,
      ToggleComponent,
      Sync,
    }
  })

</script>
