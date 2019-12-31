const axios = require('axios')

export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: `TSConf:EU - Europe's TypeScript Community Conference - 31th March 2020, Linz, Austria`,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' },
      { name: 'robots', content: 'noindex' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel:'stylesheet', type: 'text/css', href: 'https://fonts.googleapis.com/css?family=Poppins:400,700&display=swap' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    'plugins/transformImage.ts',
    'plugins/components.ts',
    'plugins/url.ts'
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    '@nuxt/typescript-build',
    '@nuxtjs/tailwindcss'
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    ['storyblok-nuxt', { accessToken: 'z7JV5HUxpNV10rvNaQ5n3Att', cacheProvider: 'memory' }],
    ['@nuxtjs/markdownit']
  ],
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  },
  /* 
  ** Using generate to, well, generate our pages with this hidden little gem :)
  */
  generate: {
    routes: function (callback) {
      const token = `z7JV5HUxpNV10rvNaQ5n3Att`
      const version = 'published'
      let cache_version = 0
  
      // other routes that are not in Storyblok with their slug.
      let routes = ['/',
        '/code-of-conduct',
        '/faq',
        '/legal-notice',
        '/speakers',
        '/venue',
        '/schedule',
        '/social'
      ] // adds / directly

      callback(null, routes)

    },
  },
  /*
  ** Markdownit configurations
  */
  markdownit: {
    injected: true,
  }
}
