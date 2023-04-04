/* eslint-disable max-len */

export default {
    // Target: https://go.nuxtjs.dev/config-target
    target: 'static',

    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
        title: 'Álvaro Ferreira - Profile, Projects, Career, Contact Info',

        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { name: 'format-detection', content: 'telephone=no' },

            { hid: 'title', name: 'title', content: 'Álvaro Ferreira' },
            { hid: 'description', name: 'description', content: '' },

            // Open Graph / Facebook
            { hid: 'og:type', name: 'og:type', content: 'website' },
            { hid: 'og:url', name: 'og:url', content: 'https://aferreira.xyz/' },
            { hid: 'og:title', name: 'og:title', content: 'Álvaro Ferreira' },
            { hid: 'og:description', name: 'og:description', content: '' },
            { hid: 'og:image', name: 'og:image', content: 'https://aferreira-xyz.web.app/seo.png' },

            // Twitter
            { hid: 'twitter:card', name: 'twitter:card', content: 'summary_large_image' },
            { hid: 'twitter:url', name: 'twitter:url', content: 'https://aferreira.xyz/' },
            { hid: 'twitter:title', name: 'twitter:title', content: 'Álvaro Ferreira' },
            { hid: 'twitter:description', name: 'twitter:description', content: '' },
            { hid: 'twitter:image', name: 'twitter:image', content: 'https://aferreira-xyz.web.app/seo.png' }
        ],

        link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
    },

    generate: {
        fallback: true
    },

    // Global CSS: https://go.nuxtjs.dev/config-css
    css: ['@/assets/main.scss'],

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: ['@/plugins/firebaseInit.client.js'],

    // Auto import components: https://go.nuxtjs.dev/config-components - Disabled to reduce the number of chunks
    components: false,

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [
        // https://go.nuxtjs.dev/typescript
        '@nuxt/typescript-build',

        // https://go.nuxtjs.dev/stylelint
        '@nuxtjs/stylelint-module',

        // https://go.nuxtjs.dev/tailwindcss
        '@nuxtjs/tailwindcss'
    ],

    // Modules: https://go.nuxtjs.dev/config-modules
    modules: ['@nuxtjs/firebase', 'nuxt-i18n', '@nuxtjs/sitemap'],

    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {},

    firebase: {
        config: {
            apiKey: '',
            authDomain: '',
            databaseURL: '',
            projectId: '',
            storageBucket: '',
            messagingSenderId: '',
            appId: '',
            measurementId: ''
        },

        lazy: true,

        onFirebaseHosting: true,

        services: {
            analytics: {
                collectionEnabled: true
            },

            functions: {
                location: 'europe-west1'
            }
        }
    },

    i18n: {
        baseUrl: 'https://aferreira.xyz',

        locales: [
            { code: 'en', iso: 'en-GB', file: 'en.js', name: 'View in English' },
            { code: 'pt', iso: 'pt-PT', file: 'pt.js', name: 'Ver em Português' }
        ],

        defaultLocale: 'en',

        lazy: true,
        langDir: 'lang/',

        seo: true
    },

    sitemap: {
        hostname: 'https://aferreira.xyz',

        exclude: ['**/secret/**']
    }
};
