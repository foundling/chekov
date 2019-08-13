<template>
  <div class="task">
    <TaskHeader :task="task" />
    <TaskBody :task="task" />
  </div>
</template>

<style lang="scss" scoped>

  @import "@/assets/scss/colors.scss";

  .task {
    height: 100%;

    .task-header {
      height: 20%;
    }
    .task-body {
      height: 80%;
      overflow-y: scroll;
    }
  }

</style>

<script>

  import TaskHeader from './TaskHeader'
  import TaskBody from './TaskBody'

  export default {
    name: 'Task',
    components: { TaskHeader, TaskBody },
    props: {
      task: Object
    }
  }
</script>


