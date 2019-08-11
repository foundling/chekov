<template>
  <div class="appearance">

    <h1>Import Format</h1>
    <select>
      <option>url</option>
      <option>text input</option>
    </select>


  </div>
</template>

<style lang="scss" scoped>

  @import "@/assets/scss/colors.scss";

  .appearance {
    height: '100%';
  }

</style>

<script>

  import TaskHeader from './TaskHeader'
  import TaskBody from './TaskBody'

  export default {
    name: 'Import',
    components: {
    },
    props: {
    },
    methods: {
    },
    computed: {
    }
  }
</script>


