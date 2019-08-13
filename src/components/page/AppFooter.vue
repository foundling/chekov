<template>
  <footer>

    <button 
    @click="navigate" 
    class="settings-button fa-circle fa-2x" 
    :class="buttonClasses" />

    <button class="placeholder-button" />
    <button class="placeholder-button" />
    <button class="placeholder-button" />
    <button class="placeholder-button" />

  </footer>
</template>

<style lang="scss">
  footer {
    display: flex;

    .router-link-active {
      height: 100%;
      display: flex;
    }
    .settings-button, .placeholder-button {
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
