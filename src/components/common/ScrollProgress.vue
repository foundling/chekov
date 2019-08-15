<template>
  <div class="scroll-progress"   v-on:scroll.native="sayHi">

    <div class="progress-bar-container">
      <div class="progress-bar" :style="progressStyle"></div>
    </div>

    <slot ref="scroll-container"></slot>

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
      height: 1px;

      .progress-bar {
        height: 100%;
        background: red;
      }

    }
  }
</style>

<script>
  export default {
    name: 'ScrollProgress',
    data() {
      return {
        progress: 0,
      }
    },
    computed: {
      progressStyle() {
        return {
          width: `${this.progress * 100}%`, 
        }
      }
    },
    methods: {
      calculateProgress(scrollContainer) {
        const possibleDistanceToMove = scrollContainer.scrollHeight - scrollContainer.clientHeight
        const distanceFromTop = scrollContainer.scrollTop
        return distanceFromTop / possibleDistanceToMove
      },
      updateProgress({ target }) {
        const scrollContainer = this.$el.children[1]
        if (target !== scrollContainer) {
          return
        }
        this.progress = this.calculateProgress(target)
      }
    },
    mounted() {
      window.addEventListener('scroll', this.updateProgress, true)
    },
    destroyed() {
      window.removeEventListener('scroll', this.updateProgress)
    }
  }
</script>
