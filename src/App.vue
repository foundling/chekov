<template>
  <div id="app">
    <AppHeader class="app-header" v-if="showHeader" />
    <ScrollProgress> 
      <!-- scoped slot here -->
      <AppContent class="app-content">
        <router-view class="app-content-inner" :layout.sync="layout" />
      </AppContent>
    </ScrollProgress>
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
    overflow-y: hidden;
    overflow-x: hidden;

    .app-header {
      height: 8%;
    }

    .app-content {
      height: 100%;
      width: 100%;

      .app-content-inner {
        height: 100%;
        width: 100%;
      }
    }

    .app-footer {
      height: 10%;
    }

    .app-header, .app-footer {
      width: 100%;
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
  import ScrollProgress from '@/components/common/ScrollProgress'

  export default {
    name: 'App',
    components: { AppHeader, AppFooter, AppContent, ScrollProgress },
    data: function() {
      return {
        layout: {
          header: false,
          footer: false
        },
        scrollProgress: 0.0,
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
