<template lang="pug">
v-app
  main
    Header.px-4
    nuxt
    Footer.px-4
</template>

<script>
import Header from '~/components/Header'
import Footer from '~/components/Footer'
export default {
  name: 'Default',
  components: {
    Header,
    Footer
  },
  data() {
    return {}
  }
}
</script>

<style lang="scss"></style>
