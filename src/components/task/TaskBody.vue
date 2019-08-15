<template>
  <div class="task-body">
    <textarea @change="updateTaskDetails">{{ task.details.text }}</textarea>
  </div>
</template>

<style lang="scss" scoped>
  .task-body {
    display: flex;
    background: gray;

    textarea {
      font-size: 3em !important;
      width: 100%;
      height: 100%;
      max-height: 100%;
      border: none;
      padding: 20px;
      background: scale-color(whitesmoke, $lightness: 90%);

      &:focus {
        outline: none;
      }

      font-family: 'Roboto', sans-serif; 

    }
  }
</style>

<script>
  export default {
    name: 'TaskBody',
    props: {
      task: Object
    },
    methods: {
      updateTaskDetails(e) {
        const newText = e.target.value
        this.$store.commit('TASK_DETAILS_UPDATE', { 
          taskId: this.$route.params.taskId,
          tasklistId: this.$route.params.listId,
          details: { text: newText }
        })
      }
    },
    computed: {
    }
  }
</script>


