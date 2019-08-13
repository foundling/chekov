<template>
  <header>
    <button v-if="backbuttonRequired" @click="goBack" class="nav-button fas fa-chevron-left fa-2x" />
  </header>
</template>

<style lang="scss">
  header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    .nav-button {
      width: 10%;
      background: none;
      border: none;
    }
  }
</style>

<script>
  export default {
    name: 'Header',
    data: function() {
      return {}
    },
    methods: {
      goBack() {
        if (this.$route.name === 'Tasklists') {
          this.$router.push({ name: 'Landing' })
        } else if (this.$route.name === 'Tasklist') {
          this.$router.push({ name: 'Tasklists' })
        } else if (this.$route.name === 'Task') {
          this.$router.push({ 
            name: 'Tasklist',
            params: { 
              listId: this.$route.params.listId 
            } 
          })
        }
      }
    },
    computed: {
      backbuttonRequired() {
        return ['Task', 'Tasklist'].includes(this.$route.name)
      }
    }
  }
</script>
