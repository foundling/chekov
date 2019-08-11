<template>
  <footer>Route Name: {{ $route.name }}</footer>
</template>

<style lang="scss">
  .footer {
    background: red;
    height: 100%;
    border: 1px solid black;
  }
</style>

<script>
  export default {
    name: 'Footer',
    data: function() {
      return {
      }
    }
  }
</script>


