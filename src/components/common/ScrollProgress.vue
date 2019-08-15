<template>
  <div class="scroll-progress">

    <div class="progress-bar-container">
      <div class="progress-bar" :style="progressStyle"></div>
    </div>

    <slot></slot>

  </div>
</template>

<style lang="scss" scoped>
  .scroll-progress {
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;

    .progress-bar-container {
      top: 0;
      left: 0;
      width: 100%;

      .progress-bar {
        width: 60%;
        height: 2px;
        background: red;
      }

    }
  }
</style>

<script>
  export default {
    name: 'ScrollProgress',
    props: {
      progress: {
        type: Number,
        required: true
      }     
    },
    computed: {
      progressStyle() {
        return {
          width: `${this.progress * 100}%`, 
        }
      }
    }
  }
</script>
