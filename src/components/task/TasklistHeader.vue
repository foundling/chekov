<template>
  <router-link 
    :to="tasklistRoute"
    class="tasklist-header">
    <span class="drag-handle">
      <i class="fas fa-equals fa-2x" />
    </span>
    <span class="tasklist-text-container">
    {{ name }}
    </span>
  </router-link>
</template>

<style lang="scss" scoped>

  @import '@/assets/scss/colors.scss';

  .sortable-ghost {
    visibility: hidden;
  }
  .sortable-chosen:not(.sortable-ghost) {
  }

  .tasklist-header {
    height: 20%;
    display: flex;
    align-items: center;
    justify-content: center;

    .tasklist-text-container {
      width: 80%;
      padding-right: 20%;
      height: 100%;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      font-family: 'Heebo', sans-serif;
      font-size: 1em;
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
    name: 'TasklistHeader',
    props: {
      id: [Number, String],
      name: String
    },
    computed: {
      tasklistRoute() {
        return `/list/${this.id}`
      }
    }
  }
</script>




