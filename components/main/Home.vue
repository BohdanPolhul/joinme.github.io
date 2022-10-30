<template lang="pug">
.home
  v-container 
    .home__wrapper.regular-block-wrapper
      .home__section
        .home__block
          h1.pt-4.page-title Find your <span style="color:red">perfect</span> <br> companion <br> for your perfect trip ! 
          h3.primary-text {{$t('home.text')}}
          .home__btn
            button.primary-title {{$t('home.button')}}
        .home__carousel
          VueSlickCarousel(v-bind="setingsCarousel")
            .home__carousel-img(v-for="(item, index) in itemsGallery" :key="`carousel-item__`+index")
              img(:src="require(`~/assets/img/${item.url}`)" draggable="false")  
</template>
<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
export default {
  name: 'Index',
  components: {
    VueSlickCarousel
  },
  data() {
    return {
      setingsCarousel: {
        autoplay: true,
        dots: true,
        dotsClass: 'slick-dots info-gallery__carousel',
        edgeFriction: 0.35,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false
      },
      itemsGallery: [
        { url: 'travel.png' },
        { url: 'travel.png' },
        { url: 'travel.png' },
        { url: 'travel.png' }
      ]
    }
  }
}
</script>
<style lang="scss">
.home__carousel {
  max-width: 100%;
  margin-top: 47px;
}
.home {
  margin-top: 30px;
  background: #c4d8c6;
}
.home__block {
  max-width: 545px;
  margin: 0 auto;

  h3 {
    padding-top: 15px;
  }
}

.home__btn {
  button {
    width: 144px;
    height: 48px;
    background: #434542;
    color: white;
    margin-top: 28px;
  }
}
.home__carousel-img {
  img {
    width: 100%;
    object-fit: cover;
  }
}
.slick-dots {
  .slick-active {
    button {
      &::before {
        background: #000000;
      }
    }
  }
  li {
    width: 48px;
    height: 8px;
    button {
      width: 48px;
      height: 8px;
      &::before {
        width: 48px;
        height: 8px;
        background: #ff2020;
        opacity: 1;
        content: '';
      }
    }
  }
}

@media only screen and (min-width: 768px) {
  .home__btn {
    text-align: center;
    button {
      width: 365px;
      height: 92px;
    }
  }
}

@media only screen and (min-width: 1080px) {
  .home__section {
    display: flex;
    justify-content: space-between;
  }
  .home__carousel {
    max-width: 645px;
    width: 100%;
    margin-top: 0;
  }
  .home__wrapper {
    text-align: left;
  }
  .home__block {
    max-width: 435px;
    margin: 0;
  }
  .home__wrapper {
    text-align: left;
  }
}

@media only screen and (min-width: 1400px) {
  .home__carousel {
    max-width: 797px;
    margin-top: 0;
  }

  .home__block {
    max-width: 532px;
    margin: 0;

    h3 {
      padding-top: 60px;
    }
  }

  .home__btn {
    margin-top: 70px;
    height: 95px;
  }
}
</style>
