<template>
  <router-link :to="taskRoute" class="task-header">
    <span class="drag-handle-container">
      <i class="fas fa-equals fa-2x" />
    </span>
    <span class="task-text-container">
      <input
      @change="updateTaskText"
      :value="task.text" 
      :disabled="inputDisabled" 
      class="task-text-input" />
    </span>
  </router-link>
</template>

<style lang="scss" scoped>
  .task-header {
    background: aqua;
    height: 20%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    .task-text-container {
      width: 90%;
      height: 100%;
      display: inline-flex;
      align-items: center;
      justify-content: center;

      .task-text-input {
        text-align: center;
        padding-right: 10%;
        border: none;
        background: transparent;
        height: 100%;
        width: 100%;

        &:disabled {
          color: initial;
        }
        &:focus {
          outline: none;
          background: white;
        }
      }
    }
    .drag-handle-container {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      width: 10%;
      height: 100%;
    }
  }
</style>

<script>
  // draggable only if we're in tasklist view
  // input editable only if in task view
  export default {
    name: 'TaskHeader',
    props: {
      task: {
        type: Object,
        required: true,
      }
    },
    methods: {
      updateTaskText(e) {
        this.$store.commit('TASK_TEXT_UPDATE', {
          tasklistId: this.$route.params.taskId,
          taskId: this.task.id,
          text: e.target.value
        })
      }
    },
    computed: {
      inputDisabled() {
        return this.$route.name !== 'Task'
      },
      taskRoute() {
        if (this.$route.name === 'Tasklist') 
          return `${this.$route.path}/task/${this.task.id}` 
        else if (this.$route.name === 'Task')
          return `${this.task.id}`
        else
          console.warn('current route not matched in TaskHeader taskView computed fn determining route')
      }
    }
  }
</script>
