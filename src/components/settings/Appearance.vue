<template>
  <div class="appearance">

    <h1>Appearance</h1>
    <div>
      <label>color: </label>
      <select>
        <option>default</option>
        <option>dark mode</option>
        <option>monochrome</option>
      </select>
    </div>

    <div>
      <label>Font Size: </label>
      <input type="range" value="12" min="12" max="40" step="2"></input>
      </select>
    </div>

  </div>
</template>

<style lang="scss" scoped>

  @import "@/assets/scss/colors.scss";

  .appearance {
    height: '100%';
  }

</style>

<script>

  export default {
    name: 'Appearance',
    components: {}
  }
</script>


