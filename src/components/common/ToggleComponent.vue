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

  @import "@/assets/scss/colors.scss";

  .toggle-component {
  }

</style>

<script>

  export default {
    name: 'ToggleComponent',
    components: {  },
    props: {
    },
    methods: {
    },
    computed: {
    }
  }
</script>


