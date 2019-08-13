<template>
  <div id="app">
    <AppHeader class="app-header" v-if="showHeader" />
    <AppContent class="app-content">
      <router-view class="app-content-inner" :layout.sync="layout" />
    </AppContent>
    <AppFooter class="app-footer" v-if="showFooter" />
  </div>
</template>

<style lang="scss">

  @import '@/assets/scss/base.scss';

  #app { 
    margin: 0;
    padding: 0;
    height: 100%;
    width: 100%;
    min-height: 100%;
    max-height: 100%;
    display: flex;
    background: whitesmoke;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .app-header {
      height: 8%;
    }
    .app-content {
      height: 82%;
      width: 100%;

      .app-content-inner {
        height: 100%;
      }
    }
    .app-footer {
      height: 10%;
    }
    .app-header, .app-footer {
      width: 100%;
    }

  }

  @media(max-width: 500px) {
    #app {
      padding: 0;
      margin: 0;
    }
  }
  @media(min-width: 501px) {
    #app {
      padding: 5% 10%;
      margin: 0;
    }
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
