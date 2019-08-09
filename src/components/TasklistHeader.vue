<template>
  <div class="tasklist-header">
    {{ name }}
  </div>
</template>

<style lang="scss" scoped>
  .tasklist-header {
    height: 60%;
  }
</style>

<script>
  export default {
    name: 'TasklistHeader',
    props: {
      name: String
    }
  }
</script>


