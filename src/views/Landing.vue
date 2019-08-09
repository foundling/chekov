<template>
  <Page>
    <div class="landing" slot="content">
      <router-link to="/lists">
        <h1>Chekov</h1>
      </router-link>
    </div>
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
