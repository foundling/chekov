<template>
  <div class="appearance">

    <h1>Sync</h1>
    <select>
      <option>local</option>
      <option>cloud</option>
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
    name: 'Sync',
    components: {},
    props: {
    },
    methods: {
    },
    computed: {
    }
  }
</script>


