<template>
  <div class="toggle-component">
    <header>
      <slot slot="header"></slot>
    </header>
    <main>
      <slot slot="content"></slot>
    </main>
  </div>
</template>

<style lang="scss" scoped>

</style>

<script>

  export default {
    name: 'ToggleComponent'
</script>


