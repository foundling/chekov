<template>
  <main>
    <slot></slot>
  </main>
</template>

<style lang="scss" scoped>
  main {
    width: 100%;
    height: 100%;
    max-height: 100%;
    overflow-y: scroll; 
    -webkit-overflow-scrolling: touch;
  }
</style>

<script>
  export default {
    name: 'AppContent',
  }
</script>
