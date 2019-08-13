<template>
  <footer>
    <button @click="navigate" class="settings fa-circle fa-2x" :class="buttonClasses" />
  </footer>
</template>

<style lang="scss">
  footer {
    .router-link-active {
      height: 100%;
      display: flex;
    }
    .settings {
      width: 10%;
      height: 100%;
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
      }
    },
    computed: {
      buttonClasses() {
        return {
          'fas': this.$route.name === 'Settings', 
          'far': this.$route.name !== 'Settings', 
        }
      }
    }
  }
</script>
