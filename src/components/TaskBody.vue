<template>
  <router-link 
    class="task-body">
    {{ task.text }}
  </router-link>
</template>

<style lang="scss" scoped>
  .task-body {
    display: flex;
    height: 100%;
    background: gray;
  }
</style>

<script>
  export default {
    name: 'TaskBody',
    props: {
      task: Object
    },
    computed: {
    }
  }
</script>


