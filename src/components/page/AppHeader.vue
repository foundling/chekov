<template>
  <header>
  </header>
</template>

<style lang="scss">
  header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    background: lightgreen;

    .nav-button {
      background: none;
      border: none;
    }
  }
</style>

<script>
  export default {
    name: 'Header',
    data: function() {
      return {}
    },
    methods: {
      goBack() {
        this.$router.go(-1)
      }
    },
    computed: {

    }
  }
</script>
