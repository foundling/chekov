<template>
  <router-link 
    :to="taskView"
    class="task-header">
    {{ task.text }}
  </router-link>
</template>

<style lang="scss" scoped>
  .task-header {
    background: aqua;
    height: 20%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>

<script>
  export default {
    name: 'TaskHeader',
    props: {
      task: {
        type: Object,
        required: true,
      }
    },
    computed: {
      taskView() {
        if (this.$route.name === 'List') 
          return `${this.$route.path}/task/${this.task.id}` 
        else if (this.$route.name === 'Task')
          return `${this.task.id}`
      }
    }
  }
</script>


