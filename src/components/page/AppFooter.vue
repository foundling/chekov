<template>
  <footer>
    <button @click="navigate" class="settings fas fa-cog fa-2x" />
  </footer>
</template>

<style lang="scss">
  footer {
    background: lightblue;
    .router-link-active {
      height: 100%;
      display: flex;
    }
    .settings {
      height: 100%;
      border: none;
      background: none;
    }
  }
</style>

<script>
  export default {
    name: 'Footer',
    data: function() {
      return {
      }
    },
    methods: {
      navigate() {
        if (this.$route.name === 'Settings') {
          this.$router.go(-1)
        } else {
          this.$router.push({ name: 'Settings' })
        }
      }
    }
  }
</script>


