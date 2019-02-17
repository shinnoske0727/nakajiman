const path = require('path')

module.exports = {
    mode: 'spa',

    /*
  ** Headers of the page
  */
    head: {
        title: 'KENTA NAKAJIMA',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=375' },
            { name: 'keywords', content: '' },
            {
                hid: 'description',
                name: 'description',
                content: 'デザイナーの中島健太のポートフォリオサイトです。UI・WEB・ILLUSTRATIONをメインに制作を行っています。'
            },
            {
                hid: 'og:title',
                name: 'og:title',
                content: 'KENTA NAKAJIMA'
            },
            { hid: 'og:type', name: 'og:type', content: 'website' },
            {
                hid: 'og:url',
                name: 'og:url',
                content: 'kenta-nakajima.com'
            },
            {
                hid: 'og:site_name',
                name: 'og:site_name',
                content: 'website'
            },
            {
                hid: 'og:description',
                name: 'og:description',
                content: 'デザイナーの中島健太のポートフォリオサイトです。UI・WEB・ILLUSTRATIONをメインに制作を行っています。'
            },
            {
                hid: 'og:image',
                name: 'og:image',
                content: 'kenta-nakajima.com'
            }
        ],
        link: [
            { rel: 'icon', type: 'image/png', href: '/favicon_32x32.ico' },
            {
                rel: 'apple-touch-icon',
                sizes: '152x152',
                href: '/apple-touch-icon-152x152.ico'
            },
            {
                rel: 'icon',
                type: 'image/png',
                href: '/favicon_192x192.ico',
                sizes: '192x192'
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
    css: ['@/assets/stylus/base.styl'],

    /*
  ** Plugins to load before mounting the App
  */
    plugins: [],

    /*
  ** Nuxt.js modules
  */
    modules: [
        [
            'nuxt-stylus-resources-loader',
            [path.resolve(__dirname, 'assets/stylus/base.styl')]
        ]
    ],

    /*
  ** Build configuration
  */
    build: {
        /*
    ** You can extend webpack config here
    */
        extend(config, ctx) {
            // Run ESLint on save
            if (ctx.isDev && ctx.isClient) {
                config.module.rules.push({
                    enforce: 'pre',
                    test: /\.(js|vue)$/,
                    loader: 'eslint-loader',
                    exclude: /(node_modules)/
                })
            }
        }
    },
    resolve: {
        extensions: ['.js', '.json', '.vue'],
        root: path.resolve(__dirname),
        alias: {
            '@': path.resolve(__dirname),
            '~': path.resolve(__dirname)
        }
    }
}
