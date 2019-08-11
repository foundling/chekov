<template>
  <div class="page">

    <div :style="pageStyle.header" class="app-page">
      <slot v-if="headerExists" name="header" />
    </div>

    <div :style="pageStyle.content" class="app-body">
      <slot name="content" />
    </div>

    <div :style="pageStyle.footer" class="app-footer">
      <slot v-if="footerExists" name="footer" />
    </div>

  </div>
</template>

<style lang="scss">
  @import '@/assets/scss/base.scss';
  
  .page {
    background: $light-gray; 

    .app-body {
      width: 100%;
      overflow-y: scroll;
    }

    .app-footer {
      .footer {
      }
    }

  }
</style>

<script>

  import Footer from '@/components/Footer'

  export default {
    name: 'Page',
    components: { Footer },
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
