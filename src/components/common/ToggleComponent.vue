<template>
  <div class="toggle-component">
    <header @click="isOpen = !isOpen">
      <slot name="header" />
    </header>
    <main v-show="isOpen">
      <slot name="content" />
    </main>
  </div>
</template>

<style lang="scss" scoped>
  header {
    width: 100%;
    padding: 0;
    margin: 0;
  }
  main {
    padding: 2%;
  }
</style>

<script>
  export default {
    name: 'ToggleComponent',
    data() {
      return {
        isOpen: this.open
      }
    },
    props: {
      preventClose: {
        type: Boolean,
        default: false
      },
      open: {
        type: Boolean,
        default: true
      }
    },
  }
</script>


