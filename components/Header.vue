<template lang="pug">
    header.header 
      v-container
        .header__wrapper(data-aos="zoom-in")
          .header__section.d-flex.justify-space-between.align-center
            .header__logo.d-flex.align-center
              img(src="@/assets/img/logo.png")
              h1.header__title.page-title
                span.header__title--left Join
                span.header__title--right Me
            .header__menu.d-flex.align-center
              .header__desktop.align-center
                button.header__menu-tab(v-for="(itemMenu, indexMenu) in itemsMenu" :key="`menu-list__`+indexMenu" :class="{'header__menu-tab--active':(headerActive===indexMenu)}" @click="onClickMenu(itemMenu, indexMenu)")
                  h2.header__menu-title.secondary-title {{itemMenu.title}}
              .header__lang-block                  
                v-menu(v-model="closeOnContentClick" :close-on-content-click="false" left :nudge-width="40" offset-y)
                  template(v-slot:activator="{ on, attrs }")
                    button.header__lang-btn.d-flex.align-center(v-bind="attrs" v-on="on") 
                      span.header__menu-title.secondary-title.d-flex
                        span Global
                        span ({{lang}}) 
                      img.ml-3(src="~/assets/svg/select.svg" :style="`transform: rotate(${closeOnContentClick ? 180 : 0}deg);transition-duration: 0.4s;`")
                  v-card.header__menu-card
                    v-list.pa-2
                      .header__menu-list(v-for="(itemLang, indexLang) in langArray" :key="`lang-list__`+indexLang")
                        button.header__menu-btn.pa-2.d-block(@click="onSelectLang(itemLang)" :class="{'header__menu-btn--active':(itemLang===lang)}")
                          h1.primary-text.text-left {{itemLang}}
              button.header__mobile.ml-3(@click="isMenuMobile=!isMenuMobile")
                img(src="@/assets/svg/menu-mobile.svg")
              v-dialog(v-model="isMenuMobile" fullscreen)
                .header__dialog.d-flex.justify-end
                  .header__dialog-item
                    .d-flex.justify-end
                      h2.primary-title.mr-10 Menu
                      button.d-flex(@click="isMenuMobile=!isMenuMobile")
                        img(src="@/assets/svg/close.svg")
                    .header__dialog-list.pr-10.pt-6
                      div(v-for="(itemMenu, indexMenu) in itemsMenu" :key="`menu-list__`+indexMenu" )
                        button.header__dialog-btn(:class="{'header__dialog--active':(headerActive===indexMenu)}" @click="onClickMenu(itemMenu, indexMenu)")
                          span
                          h3.primary-text {{itemMenu.title}}
        
</template>

<script>
import AOS from 'aos'
import 'aos/dist/aos.css'

export default {
  name: 'Header',
  data() {
    return {
      headerActive: 0,
      closeOnContentClick: false,
      isMenuMobile: false,
      lang: 'UA',
      langArray: ['UA', 'RU', 'EN'],
      itemsMenu: [
        { title: 'Home', refName: 'main-page__home' },
        { title: 'About', refName: 'main-page__about' },
        { title: 'Contact us', refName: 'main-page__contacts' }
      ]
    }
  },
  mounted() {
    AOS.init({
      once: true,
      duration: 1500
    })
  },
  methods: {
    onClickMenu(item, index) {
      this.headerActive = index
      this.isMenuMobile = false
      this.goTo(item.refName)
    },
    onSelectLang(code) {
      this.lang = code
      this.$router.push(this.switchLocalePath(code.toLocaleLowerCase()))
      this.closeOnContentClick = false
    },
    goTo(refName) {
      const element = document.querySelector(`.${refName}`)
      if (element && element.offsetTop >= 0) {
        const top = element.offsetTop - 100
        window.scrollTo({ left: 0, top, behavior: 'smooth' })
      }
    }
  }
}
</script>

<style lang="scss">
.header__section {
  min-height: 68px;
}
.header {
  width: 100%;
  background: #1b2651;
  position: sticky;
  top: 0;
  z-index: 100;
}
.header__title {
  @include regular-text;

  &--left {
    color: #ffffff;
  }
  &--right {
    color: #fd0808;
  }
}
.header__menu-title {
  color: #ffffff;
}
.header__menu-tab {
  padding: 6px 26px 1px 23px;
  border: 1px solid rgba(rgb(255, 255, 255), 0);
  cursor: pointer;
  &--active {
    border: 1px solid #ffffff;
  }
}

.header__desktop {
  display: none;
}
.header__logo {
  img {
    width: 60px;
    height: 41px;
  }
}
.header__lang-btn {
  img {
    width: 20px;
    height: 20px;
  }
}
.header__dialog {
  background: rgba(67, 69, 66, 0.92);
  width: 100vw;
  height: 100vh;
  padding: 22px 15px;
}

.header__dialog-list {
  .header__dialog-btn {
    display: flex;
    align-items: center;
    height: fit-content;
    color: white;
    &:not(:last-child) {
      margin-bottom: 16px;
    }

    span {
      width: 8px;
      height: 8px;
      background: #c4d8c6;
      margin-right: 6px;
      border-radius: 100%;
    }

    &--active {
      span {
        background: #fce309;
      }
    }
  }
}

.header__menu-btn {
  width: 100%;
  border-radius: 6px;
  background: rgba(10, 10, 10, 0.1);
  border: 1px solid rgba(10, 10, 10, 0);
  &:not(:last-child) {
    margin-bottom: 4px;
  }

  &--active {
    border: 1px solid #000;
  }
}

.header__menu-list {
  &:not(:last-child) {
    button {
      margin-bottom: 4px;
    }
  }
}
@media only screen and (min-width: 768px) {
  .header__desktop {
    display: flex;
  }
  .header__mobile {
    display: none;
  }

  .header__logo {
    img {
      width: 74px;
      height: 77px;
    }

    .header__lang-btn {
      img {
        width: 24px;
        height: 24px;
      }
    }

    .header__section {
      min-height: 107px;
    }
  }
}
.header__dialog-item {
  h2 {
    color: white;
  }
}
@media only screen and (min-width: 1400px) {
  .header__logo {
    img {
      width: 129px;
      height: 113px;
    }
  }
  .header__section {
    min-height: 133px;
  }
}
</style>
