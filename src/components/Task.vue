<template>
  <div class="task">
    <TaskHeader to="" :task="task" />
    <TaskBody   :task="task" />
  </div>
</template>

<style lang="scss" scoped>

  @import "@/assets/scss/colors.scss";

  .task {
    height: 100%;
    .task-header {
      height: 20%;
      background: white;
    }
    .task-body {
      height: 80%;
      background: aqua;
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
    },
    methods: {
    },
    computed: {
    }
  }
</script>


