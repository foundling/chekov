<template>
  <div class="export-format">
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

  .export-format {
    height: '100%';
  }

</style>

<script>

  export default {
    name: 'ExportFormat'
  }
</script>


