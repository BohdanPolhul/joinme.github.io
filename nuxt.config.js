import colors from 'vuetify/es5/util/colors'
export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s - Join Me',
    title: 'Join Me',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['@/assets/styles/main.scss'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [{ src: '~/plugins/i18n.js', mode: 'client' }],
  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxt  js.dev/vuetify
    // '@nuxtjs/eslint-module',
    '@nuxtjs/vuetify',
    '@nuxtjs/style-resources',
    '@nuxtjs/dotenv',
    '@nuxtjs/axios',
    '@nuxtjs/svg-sprite'
  ],

  styleResources: {
    scss: [
      // Site-wide mixins and functions
      '@/assets/styles/mixins/typography.scss'
    ]
  },

  publicRuntimeConfig: {
    apiUrl: process.env.API_URL,
    hostUrl: process.env.HOST_URL
  },

  axios: {
    headers: {
      common: {
        'Content-Type': 'application/json'
      }
    }
  },

  svgSprite: {
    input: '~/assets/svg/'
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    [
      'nuxt-i18n',
      {
        defaultLocale: 'en',
        locales: [
          {
            code: 'en',
            file: 'en.js'
          },
          {
            code: 'ua',
            file: 'ua.js'
          },
          {
            code: 'ru',
            file: 'ru.js'
          }
        ],
        lazy: true,
        langDir: 'locales/'
      }
    ]
  ],

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/styles/variables.scss'],
    optionsPath: '~/vuetify.options.js',
    theme: {
      dark: false,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    },
    treeShake: true
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {}
}
