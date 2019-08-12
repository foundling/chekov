<template>
  <main class="app-content">
    <slot></slot>
  </main>
</template>

<style lang="scss">
  .app-content {
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
