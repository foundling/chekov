<template>
  <div class="page">

    <div :style="pageStyle.header" class="header-container">
      <slot v-if="headerExists" name="header" />
    </div>

    <div :style="pageStyle.content" class="scroll-container">
      <slot name="content" />
    </div>

    <div :style="pageStyle.footer" class="footer-container">
      <slot v-if="footerExists" name="footer" />
    </div>

  </div>
</template>

<style lang="scss">
  @import '@/assets/scss/base.scss';
  
  .page {
    background: $light-gray; 

    .scroll-container {
      height: 100%;
      width: 100%;
      overflow-y: scroll;
    }

    .footer-container {
      .footer {
        height: 100%;
      }
    }

  }
</style>

<script>
  export default {
    name: 'Page',
    data() {
      return {
        headerPct: 15,
        footerPct: 15
      }
    },
    computed: {
      headerExists() {
        return Boolean(this.$slots.header)
      },
      footerExists() {
        return Boolean(this.$slots.footer)
      },
      pageStyle() {
        return {
          header: {
            height: this.headerExists ? `${this.headerPct}%` : '0%',
          },
          content: {
            height: `${100 - (this.headerExists ? this.headerPct : 0) - (this.footerExists ? this.footerPct : 0)}%`,
          },
          footer: {
            height: this.footerExists ? `${this.footerPct}%` : '0%',
          }
        }
      }
    }
  }
</script>
