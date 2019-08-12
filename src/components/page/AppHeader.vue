<template>
  <header>{{ $route.path }}</header>
</template>

<style lang="scss">
  header {
    background: lightgreen;
  }
</style>

<script>
  export default {
    name: 'Header',
    data: function() {
      return {
      }
    }
  }
</script>


