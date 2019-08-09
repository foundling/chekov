<template>
  <li class="task">
    <div class="task-header">{{ title }}</div>
    <div v-if="open" class="task-body">task body</div>
  </li>
</template>

<style lang="scss" scoped>

  @import "@/assets/scss/colors.scss";

  .task {
    height: 20%;
    .task-header {
      height: 100%;
      background: white;
    }
    .task-body {
    }
  }

</style>

<script>
  export default {
    name: 'Task',
    props: {
      title: String,
      open: Boolean,
      task: Object
    },
    methods: {
    },
    computed: {
    }
  }
</script>


