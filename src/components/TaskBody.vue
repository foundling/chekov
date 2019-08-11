<template>
  <div class="task-body">
    <textarea>{{ task.text }}</textarea>
  </div>
</template>

<style lang="scss" scoped>
  .task-body {
    display: flex;
    background: gray;

    textarea {
      width: 100%;
      border: none;
      padding: 20px;
      background: scale-color(whitesmoke, $lightness: 90%);

      &:focus {
        outline: none;
      }

    }
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


