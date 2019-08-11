<template>
  <div class="appearance">

    <h1>Export Format</h1>
    <label>Export Format:</label>
    <select>
      <option>json</option>
      <option>markdown</option>
      <option>csv</option>
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
    name: 'ExportFormat',
    components: {},
    props: {
    },
    methods: {
    },
    computed: {
    }
  }
</script>


