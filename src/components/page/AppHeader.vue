<template>
  <header>
    <button
    v-if="backbuttonRequired"
    @click="goBack" 
    class="nav-button fas fa-chevron-left fa-2x" />

    <button class="placeholder-button" />
    <button class="placeholder-button" />
    <button class="placeholder-button" />
    <button class="cloud-sync-button fas fa-cloud fa-2x" />

  </header>
</template>

<style lang="scss">
  @import '@/assets/scss/colors.scss';

  header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    background: white;

    .nav-button, .cloud-sync-button {
      color: $black;
      font-size: 1.5em;
    }

    .nav-button, .cloud-sync-button, .placeholder-button {
      width: 20%;
      background: none;
      border: none;
    }

    .placeholder-button {
      border: none;
      background: transparent;
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
