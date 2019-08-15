<template>
  <footer>

    <button 
    @click="navigate" 
    class="settings-button fa-2x" 
    :class="buttonClasses" />

    <button class="placeholder-button" />
    <button class="placeholder-button" />
    <button class="placeholder-button" />

    <button v-if="isTaskView" @click="addTaskOrTasklist" class="add-button fas fa-plus fa-2x" />

  </footer>
</template>

<style lang="scss">

  @import '@/assets/scss/colors.scss';

  footer {
    display: flex;

    .router-link-active {
      height: 100%;
      display: flex;
    }
    .settings-button, .placeholder-button, .add-button {
      color: $black;
      height: 100%;
      margin: 0;
      padding: 0;
      height: 100%;
      width: 20%;
      border: none;
      background: none;
    }
  }
</style>

<script>
  export default {
    name: 'Footer',
    data: function() {
      return {
      }
    },
    methods: {
      navigate() {
        if (this.$route.name === 'Settings') {
          this.$router.go(-1)
        } else {
          this.$router.push({ name: 'Settings' })
        }
      },
      addTaskOrTasklist() {
        if (this.$route.name === 'Tasklists') {
          this.$store.commit('ADD_TASKLIST')
        } else if (this.$route.name === 'Tasklist') {
          this.$store.commit('ADD_TASK', { listId: this.$route.params.listId })
        }
      }
    },
    computed: {
      isTaskView() {
        return ['Tasklist', 'Tasklists'].includes(this.$route.name)
      },
      buttonClasses() {
        return {
          'fas fa-circle': this.$route.name === 'Settings', 
          'far fa-circle': this.$route.name !== 'Settings', 
        }
      }
    }
  }
</script>
