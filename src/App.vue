<template>
  <div id="app">
    <AppHeader class="app-header" v-if="showHeader" />
    <AppContent>
      <router-view class="app-content" :layout.sync="layout" />
    </AppContent>
    <AppFooter class="app-footer" v-if="showFooter" />
  </div>
</template>

<style lang="scss">

  @import '@/assets/scss/base.scss';

  #app { 
    display: flex;
    min-height: 100vh;
    max-height: 100vh;
    flex-direction: column;
  }
  .app-content {
    flex: 1;
    width: 100%;
  }
  .app-header, .app-footer {
    height: 10%;
    width: 100%;
  }

</style>

<script>

  /*
    is there a way to pass in header/footer values into components via router config in routes.js ?
    then pass in the emit line of code into specific view components
  */
  import AppHeader from '@/components/page/AppHeader'
  import AppFooter from '@/components/page/AppFooter'
  import AppContent from '@/components/page/AppContent'

  export default {
    name: 'App',
    components: { AppHeader, AppFooter, AppContent },
    data: function() { 
      return {
        layout: {
          header: false,
          footer: false
        }
      }
    },
    computed: {
      showHeader() {
        return this.layout.header
      },
      showFooter() {
        return this.layout.footer
      }
    }
  }
</script>
