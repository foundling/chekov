<template>
  <router-link 
    :to="tasklistRoute"
    @click="$emit('navigation', id)"
    class="tasklist-header">
    {{ name }}
  </router-link>
</template>

<style lang="scss" scoped>
  .tasklist-header {
    height: 20%;
    display: flex;
    background: aqua;
    align-items: center;
    justify-content: center;
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


