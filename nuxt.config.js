import colors from 'vuetify/es5/util/colors'

export default {
  publicRuntimeConfig: {
    API: process.env.API
  },
  privateRuntimeConfig: {
    API: process.env.API
  },

  srcDir: __dirname,
  buildDir: '.nuxt',
  /*
   ** Headers of the page
   */
  head: {
    titleTemplate: '%s | Perguidex',
    title: 'Perguidex' || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css2?family=Open+Sans&family=Quicksand:wght@300;400;500;600;700&display=swap'
      }
    ],
    script: [
      {
        src: 'https://cdn.splitbee.io/sb.js',
        async: true
      }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: ['assets/Global.css'],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    { src: './plugins/Components.js' },
    { src: '~/plugins/shortcut-keys.js', mode: 'client' }
  ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    '@nuxtjs/vuetify'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/pwa',
    '@nuxtjs/apollo'
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** vuetify module configuration
   ** https://github.com/nuxt-community/vuetify-module
   */

  // Apollo configuration
  apollo: {
    clientConfigs: {
      default: '~/plugins/apollo-config.js'
    }
  },

  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    treeShake: false,
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
    }
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  },
  pageTransition: 'layout'
}
