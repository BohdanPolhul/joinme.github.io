<template lang="pug">
    footer.footer 
      v-container
        .footer__wrapper
          .footer__block 
            .d-flex.justify-space-between
              div.footer__logo
                h1.header__title.page-title
                  span.header__title--left Join
                  span.header__title--right Me
                h5.footer__copyright.pt-1 {{$t('footer.copyright')}}
              .footer__data
                div
                  h1.primary-text.footer__data-title {{$t('footer.contactUs')}}
                  .footer__data-email.d-flex.footer__data-value
                    img.footer__icon(src="~/assets/svg/gmail.svg")
                    h3 JoinMe.official@gmail.com
                div 
                  h1.primary-text.footer__data-title {{$t('footer.socialMedia')}}
                  .d-flex.footer__data-value.footer__group-icon
                    a.text-link
                      img.footer__icon(src="~/assets/svg/instagram.svg")
                    a.text-link
                      img.footer__icon(src="~/assets/svg/youtube.svg")
                    a.text-link
                      img.footer__icon(src="~/assets/svg/twitter.svg")
                    a.text-link
                      img.footer__icon(src="~/assets/svg/facebook.svg")
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {}
  }
}
</script>

<style lang="scss">
.footer__logo {
  width: 100%;
}
.footer {
  width: 100%;
  background: #1b2651;
}
.footer__wrapper {
  padding: 20px 0 24px 0;
}
.footer__copyright {
  font-size: 8px;
  line-height: 10px;
  opacity: 0.5;
  color: white;
}
.footer__data {
  width: 100%;
}
.footer__data-email {
  h3 {
    margin-left: 7px;
    font-size: 10px;
    line-height: 12px;
    color: #ffffff;
  }
}

.footer__data-value {
  padding-top: 13px;
}

.footer__icon {
  width: 18px;
  height: 12px;
}
.footer__group-icon {
  gap: 0 14px;
}

.footer__data-title {
  color: white;
}
.footer__data {
  display: grid;
  gap: 10px 0;
}
@media only screen and (min-width: 768px) {
  .footer__wrapper {
    padding: 40px 0 44px 0;
  }
  .footer__data-email {
    h3 {
      margin-left: 11px;
      font-weight: 400;
      font-size: 20px;
      line-height: 24px;
    }
  }
  .footer__data-value {
    padding-top: 18px;
  }
  .footer__icon {
    width: 36px;
    height: 24px;
  }

  .footer__group-icon {
    gap: 0 24px;
  }
  .footer__copyright {
    font-size: 10px;
    line-height: 12px;
  }
}
@media only screen and (min-width: 1024px) {
  .footer__data {
    display: flex;
    justify-content: space-between;
  }
}
@media only screen and (min-width: 1400px) {
  .footer__wrapper {
    padding: 64px 0 82px 0;
  }
  .footer__data-email {
    h3 {
      margin-left: 28px;
    }
  }
  .footer__data-value {
    padding-top: 32px;
  }
  .footer__icon {
    width: 43px;
    height: 32px;
  }
  .footer__group-icon {
    gap: 0 40px;
  }
  .footer__copyright {
    font-size: 16px;
    line-height: 20px;
  }
}
</style>
