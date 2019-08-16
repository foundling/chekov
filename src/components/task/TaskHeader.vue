<template>
  <router-link :to="taskRoute" class="task-header">
    <span :class="{'invisible': isTaskRoute}" class="drag-handle">
      <i class="fas fa-equals fa-2x" />
    </span>
    <span class="task-text-container">
      <input
      @change="updateTaskText"
      :value="task.text" 
      :disabled="!isTaskRoute" 
      class="task-text-input" />
    </span>
  </router-link>
</template>

<style lang="scss" scoped>

  @import '@/assets/scss/colors.scss';

  .sortable-ghost {
    visibility: hidden;
  }

  .task-header {
    height: 20%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    .task-text-container {
      margin: 0;
      padding: 0;
      width: 80%;
      height: 100%;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      padding-right: 20%;

      .task-text-input {
        text-align: center;
        border: none;
        background: transparent;
        height: 100%;
        width: 100%;
        font-family: 'Heebo', sans-serif;
        font-size: 1em;

        &:disabled {
          -webkit-text-fill-color: #000000;
          opacity: 1; /* required on iOS */
          color: $black;
        }
      }
    }
    .drag-handle {
      color: $black;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      width: 20%;
      height: 100%;
    }
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
      isTaskRoute() {
        return this.$route.name === 'Task'
      },
      isTasklistRoute() {
        return this.$route.name === 'Tasklist'
      },
      taskRoute() {
        if (this.isTasklistRoute) 
          return `${this.$route.path}/task/${this.task.id}` 
        else if (this.isTaskRoute)
          return `${this.task.id}`
        else
          console.warn('current route not matched in TaskHeader taskView computed fn determining route')
      }
    }
  }
</script>
