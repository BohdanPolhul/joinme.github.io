<template lang="pug">
.main-page 
  .main-page__home.pb-16
    Home.px-4
  .main-page__about.pb-16
    About.px-4
  .main-page__contacts.pb-16
    Contact.px-4
</template>

<script>
import Home from '~/components/main/Home'
import About from '~/components/main/About'
import Contact from '~/components/main/Contact'
export default {
  name: 'MainPage',
  components: {
    Home,
    About,
    Contact
  }
}
</script>

<style lang="scss"></style>
