<template lang="pug">
.about
  v-container 
    .about__wrapper.regular-block-wrapper
      .about__mobile
        .about__mobile-item(data-aos="fade-up")   
          h1.about__mobile-title.primary-title.text-center.text-white {{$t('about.item1.title')}}
          h3.about__mobile-text.primary-text.pt-4.text-white {{$t('about.item1.text')}}
        .about__mobile-item(data-aos="fade-up")   
          h1.about__mobile-title.primary-title.text-center.text-white {{$t('about.item2.title')}}
          h3.about__mobile-text.primary-text.pt-4.text-white {{$t('about.item2.text')}}
        .about__mobile-item(data-aos="fade-up")   
          h1.about__mobile-title.primary-title.text-center.text-white {{$t('about.item3.title')}}
          h3.about__mobile-text.primary-text.pt-4.text-white {{$t('about.item3.text')}}
        .about__mobile-item-logo.d-flex.align-center.mx-auto(data-aos="fade-up")
          .about__circle
          .about__logo-img.mx-8  
            img(src="~/assets/svg/users.svg")
          .about__circle
        .about__mobile-item(data-aos="fade-up")   
          h1.about__mobile-title.primary-title.text-center.text-white {{$t('about.item4.title')}}
          h3.about__mobile-text.primary-text.pt-4.text-white {{$t('about.item4.text')}}
        .about__mobile-item(data-aos="fade-up")   
          h1.about__mobile-title.primary-title.text-center.text-white {{$t('about.item5.title')}}
          h3.about__mobile-text.primary-text.pt-4.text-white {{$t('about.item5.text')}}
        .about__mobile-item(data-aos="fade-up")   
          h1.about__mobile-title.primary-title.text-center.text-white {{$t('about.item6.title')}}
          h3.about__mobile-text.primary-text.pt-4.text-white {{$t('about.item6.text')}}
      .about__tablet
        .about__tablet-wrapper.d-flex.justify-space-between(data-aos="fade-up") 
          .about__tablet-item
            h1.about__mobile-title.primary-title.text-center.text-white {{$t('about.item1.title')}}
            h3.about__mobile-text.primary-text.pt-4.text-white {{$t('about.item1.text')}}
          .about__tablet-item
            h1.about__mobile-title.primary-title.text-center.text-white {{$t('about.item2.title')}}
            h3.about__mobile-text.primary-text.pt-4.text-white {{$t('about.item2.text')}}
        .about__tablet-wrapper.d-flex.justify-space-between(data-aos="fade-up") 
          .about__tablet-item
            h1.about__mobile-title.primary-title.text-center.text-white {{$t('about.item3.title')}}
            h3.about__mobile-text.primary-text.pt-4.text-white {{$t('about.item3.text')}}
          .about__position-logo.d-flex
            .about__logo-img.ma-auto
              img(src="~/assets/svg/users.svg")
          .about__tablet-item
            h1.about__mobile-title.primary-title.text-center.text-white {{$t('about.item4.title')}}
            h3.about__mobile-text.primary-text.pt-4.text-white {{$t('about.item4.text')}}
        .about__tablet-wrapper.d-flex.justify-space-between(data-aos="fade-up") 
          .about__tablet-item
            h1.about__mobile-title.primary-title.text-center.text-white {{$t('about.item5.title')}}
            h3.about__mobile-text.primary-text.pt-4.text-white  {{$t('about.item5.text')}}
          .about__tablet-item
            h1.about__mobile-title.primary-title.text-center.text-white {{$t('about.item6.title')}}
            h3.about__mobile-text.primary-text.pt-4.text-white {{$t('about.item6.text')}} 
      .about__desktop 
        .about__desktop-wrapper.d-flex.justify-space-between(data-aos="fade-up") 
          .about__desktop-item
            h1.about__mobile-title.primary-title.text-white {{$t('about.item1.title')}}
            h3.about__mobile-text.primary-text.pt-4.text-white {{$t('about.item1.text')}}
          .about__desktop-item
            h1.about__mobile-title.primary-title.text-white {{$t('about.item2.title')}}
            h3.about__mobile-text.primary-text.pt-4.text-white {{$t('about.item2.text')}}      
          .about__desktop-item
            h1.about__mobile-title.primary-title.text-white {{$t('about.item3.title')}}
            h3.about__mobile-text.primary-text.pt-4.text-white {{$t('about.item3.text')}}    
        .about__desktop-wrapper.d-flex.justify-space-between(data-aos="fade-up") 
          .about__desktop-item
            .about__circle
          .about__desktop-item
            .about__circle
          .about__desktop-item
            .about__circle
        .about__desktop-wrapper.d-flex.justify-space-between(data-aos="fade-up") 
          .about__desktop-item
            h1.about__mobile-title.primary-title.text-white {{$t('about.item4.title')}}
            h3.about__mobile-text.primary-text.pt-4.text-white {{$t('about.item4.text')}}
          .about__desktop-item
            h1.about__mobile-title.primary-title.text-white {{$t('about.item5.title')}}
            h3.about__mobile-text.primary-text.pt-4.text-white {{$t('about.item5.text')}}      
          .about__desktop-item
            h1.about__mobile-title.primary-title.text-white {{$t('about.item6.title')}}
            h3.about__mobile-text.primary-text.pt-4.text-white {{$t('about.item6.text')}}  
        .about__position-logo.d-flex(data-aos="fade-up")
          .about__logo-img.ma-auto
            img(src="~/assets/svg/users.svg")  
</template>
<script>
import AOS from 'aos'
import 'aos/dist/aos.css'

export default {
  mounted() {
    AOS.init({
      once: true,
      duration: 1500
    })
  }
}
</script>
<style lang="scss">
.about__tablet,
.about__desktop {
  display: none;
}
.about {
  background: #1b2651;
}
.about__mobile {
  display: flex;
  flex-direction: column;
}
.about__mobile-item {
  padding-bottom: 20px;
  max-width: 545px;
  margin: 0 auto;
  width: 100%;

  &:not(:last-child) {
    margin-bottom: 20px;
    border-bottom: 2px solid #ffffff;
  }

  &:last-child,
  &:nth-child(3) {
    border-bottom: none;
  }

  &:nth-child(2),
  &:nth-child(4) {
    border-bottom: 2px solid rgb(252, 3, 3);
  }
}
.about__logo-img {
  img {
    width: 154px;
    height: 127px;
  }
}
.about__circle {
  width: 27px;
  height: 27px;
  background: #c4d8c6;
  border-radius: 100%;
}
.about__position-logo {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
}
@media only screen and (min-width: 768px) {
  .about__mobile {
    display: none;
  }
  .about__tablet {
    display: block;
  }
  .about__tablet-item {
    max-width: 299px;
    border-bottom: 2px solid #ffffff;
    padding-bottom: 40px;
  }

  .about__tablet-wrapper {
    position: relative;
    &:last-child {
      .about__tablet-item {
        border-bottom: none;
        padding-bottom: 0;
      }
    }
  }
}

@media only screen and (min-width: 1080px) {
  .about__tablet {
    display: none;
  }
  .about__desktop {
    display: block;
    position: relative;
  }
  .about__desktop-item {
    max-width: 336px;
    width: 100%;
  }
  .about__circle {
    width: 112px;
    height: 112px;
  }
  .about__desktop-wrapper {
    &:not(:last-child) {
      margin-bottom: 40px;
    }
  }
  .about__logo-img {
    img {
      width: 326px;
      height: 291px;
    }
  }
}
</style>
