<template>
  <Page>
    <router-link 
    to="/lists"
    slot="content" 
    class="landing"> 
      <h1>Chekov</h1>
    </router-link>
  </Page>
</template>

<style lang="scss">
  @import '@/assets/scss/base.scss';

  .landing {
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>

<script>
  import Page from '@/components/Page'
  import store from '@/store'

  export default {
    name: 'Landing',
    components: {
      Page
    }
  }
</script>
