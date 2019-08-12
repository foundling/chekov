<template>
  <router-link class="landing" to="/lists">
    <h1 class="app-logo">Chekov</h1>
  </router-link>
</template>

<style lang="scss">
  .landing {
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>

<script>

  export default {
    name: 'Landing',
    created() {
      this.$emit('update:layout', { header: false, footer: false })
    },
    data() {
      return {}
    }
  }
</script>
