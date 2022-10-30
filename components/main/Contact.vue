<template lang="pug">
.contacts 
  v-container
    .contacts__wrapper.regular-block-wrapper
      section.contacts__section
        .contacts__block
          h2.contacts__block-title.page-title.text-center.pb-10
            span Press to <span style="color:red">download</span> our app and
            br
            span dive into the ocean of interesting trips!
          .contacts__block-section
            .contacts__logo.text-center
              img(src="~/assets/svg/phone.svg")
            .contacts__block-section-content
              h2.contacts__block-section-title.page-title
                span Press to <span style="color:red">download</span> our app and
                br
                span dive into the ocean of interesting trips!
              .contacts__group-btn
                button
                  img(src="~/assets/svg/play-market.svg")
                  span.primary-text.pl-4 {{$t('contact.btnPlayMarket')}}
                button
                  img(src="~/assets/svg/app-store.svg")
                  span.primary-text.pl-4.text-white {{$t('contact.btnAppStore')}}
</template>

<style lang="scss">
.contacts {
  background: #c4d8c6;
}
.contacts__block-section-title {
  display: none;
}
.contacts__logo {
  img {
    width: 135px;
    height: 252px;
  }
}
.contacts__group-btn {
  button {
    width: 247px;
    height: 91px;
    display: flex;
    padding: 11px 24px;
    align-items: center;
    margin: 0 auto;

    &:first-child {
      background: #ffffff;
      img {
        width: 64px;
        height: 64px;
      }
      margin-bottom: 18px;
    }
    &:last-child {
      background: #434542;
      img {
        width: 52px;
        height: 52px;
      }
    }
  }
}
@media only screen and (min-width: 768px) {
  .contacts__block-section {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .contacts__logo {
    img {
      width: 214px;
      height: 406px;
    }
    margin-right: 128px;
  }
  .contacts__group-btn {
    button {
      margin: 0;

      &:first-child {
        margin-bottom: 67px;
      }
    }
  }
}
@media only screen and (min-width: 1400px) {
  .contacts__block-section {
    justify-content: start;
  }
  .contacts__block-title {
    display: none;
  }
  .contacts__block-section-title {
    display: block;
  }
  .contacts__group-btn {
    display: flex;
    justify-content: space-between;
    gap: 0 40px;
    margin-top: 90px;
  }
  .contacts__logo {
    img {
      width: 368px;
      height: 649px;
    }
  }
  .contacts__group-btn {
    button {
      width: 353px;
      height: 124px;
      padding: 17px 20px;

      &:first-child {
        img {
          width: 94px;
          height: 91px;
        }
        margin-bottom: 0;
      }
      &:last-child {
        img {
          width: 97px;
          height: 84px;
        }
      }
    }
  }
}
@media only screen and (min-width: 1400px) {
}
</style>
