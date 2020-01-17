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
      { name: "msapplication-TileColor", content: "#ffffff"},
      { name: "msapplication-TileImage", content: "/images/ms-icon-144x144.png" },
      { name: "theme-color", content: "#ffffff" }
    ],
    link: [
      { rel: "manifest", href: "/manifest.json" },
      { rel: "apple-touch-icon", sizes: "57x57", href: "/images/apple-icon-57x57.png" },
      { rel: "apple-touch-icon", sizes: "60x60", href: "/images/apple-icon-60x60.png" },
      { rel: "apple-touch-icon", sizes: "72x72", href: "/images/apple-icon-72x72.png" },
      { rel: "apple-touch-icon", sizes: "76x76", href: "/images/apple-icon-76x76.png" },
      { rel: "apple-touch-icon", sizes: "114x11,4", href: "/images/apple-icon-114x114.png" },
      { rel: "apple-touch-icon", sizes: "120x12,0", href: "/images/apple-icon-120x120.png" },
      { rel: "apple-touch-icon", sizes: "144x14,4", href: "/images/apple-icon-144x144.png" },
      { rel: "apple-touch-icon", sizes: "152x15,2", href: "/images/apple-icon-152x152.png" },
      { rel: "apple-touch-icon", sizes: "180x18,0", href: "/images/apple-icon-180x180.png" },
      { rel: "icon", type: "image/png", sizes: "192x192", href: "/images/android-icon-192x192.png" },
      { rel: "icon", type: "image/png", sizes: "32x32", href: "/images/favicon-32x32.png" },
      { rel: "icon", type: "image/png", sizes: "96x96", href: "/images/favicon-96x96.png" },
      { rel: "icon", type: "image/png", sizes: "16x16", href: "/images/favicon-16x16.png" },
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
    'plugins/breakEachWord.ts',
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

      function calculateLeft(release) {
        const left = release.quantity - release.tickets_count
        if(left > 15) {
          return -1
        }
        return left
      }

      axios.get('https://api.tito.io/v3/scriptconf/tsconf-eu-2020/', {
        headers: {
          'Authorization': `Token token=${process.env.TITO_TOKEN}`,
          'Content-Type': 'application/json'
        }
      }).then(data => {
        try {
          const titoTickets = data.data.event
            .releases.filter(release => !release.secret)
            .sort((a,b) => a.position - b.position)
            .map(release => {
              return {
                title: release.title,
                description: release.description,
                slug: release.slug,
                price: release.price,
                url: release.share_url,
                sold_out: release.sold_out,
                left: calculateLeft(release)
              }
            })
          
          // other routes that are not in Storyblok with their slug.
          let routes = [
            { route: '/', payload: { tickets: titoTickets } },
            { route: '/code-of-conduct', payload: {} },
            { route: '/faq', payload: {} },
            { route: '/legal-notice', payload: {} },
            { route: '/venue', payload: {} },
            { route: '/workshops', payload: {} },
            { route: '/workshops/advanced-black-magic-with-typescript', payload: {} },
            { route: '/workshops/tdd-with-typescript', payload: {} },
            { route: '/speakers', payload: {} },
            { route: '/speakers/anders-hejlsberg', payload: {} },
            { route: '/speakers/liliana-kastilio', payload: {} },
            { route: '/speakers/bert-belder', payload: {} },
            { route: '/speakers/peter-kroener', payload: {} },
            { route: '/speakers/david-tanzer', payload: {} },
          ] // adds / directly
          // speakers, schedule, social
          callback(null, routes)
        } catch(e) {
          callback(e)
        }
      })
    },
  },
  /*
  ** Markdownit configurations
  */
  markdownit: {
    injected: true,
  }
}
