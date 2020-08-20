<template>
  <div class="appearance">
    <div class="color-theme">
      <label>color: </label>
      <select>
        <option>default</option>
        <option>dark mode</option>
        <option>monochrome</option>
        <option>colorblind</option>
      </select>
    </div>
    <div class="font-size" >
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


