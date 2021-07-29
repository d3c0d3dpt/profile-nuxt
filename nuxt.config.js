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

            { name: 'title', content: 'Álvaro Ferreira - Profile, Projects, Career, Contact Info' },
            { name: 'description', content: 'Web Engineer as a Professional, Performance Improver as an Enthusiast. Message me for more details or project requests' },

            // Open Graph / Facebook
            { name: 'og:type', content: 'website' },
            { name: 'og:url', content: 'https://metatags.io/' },
            { name: 'og:title', content: 'Álvaro Ferreira - Profile, Projects, Career, Contact Info' },
            { name: 'og:description', content: 'Web Engineer as a Professional, Performance Improver as an Enthusiast. Message me for more details or project requests' },
            { name: 'og:image', content: 'https://aferreira-xyz.web.app/seo.png' },

            // Twitter
            { name: 'twitter:card', content: 'summary_large_image' },
            { name: 'twitter:url', content: 'https://metatags.io/' },
            { name: 'twitter:title', content: 'Álvaro Ferreira - Profile, Projects, Career, Contact Info' },
            { name: 'twitter:description', content: 'Web Engineer as a Professional, Performance Improver as an Enthusiast. Message me for more details or project requests' },
            { name: 'twitter:image', content: 'https://aferreira-xyz.web.app/seo.png' }
        ],

        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
        ]
    },

    generate: {
        fallback: true
    },

    // Global CSS: https://go.nuxtjs.dev/config-css
    css: [
        '@/assets/main.scss'
    ],

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: [
    ],

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: [
        { path: '~/components', pathPrefix: false }
    ],

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
    modules: [
        '@nuxtjs/firebase',

        'nuxt-i18n'
    ],

    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {
    },

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

        onFirebaseHosting: true,

        services: {
            functions: {
                location: 'europe-west1'
            }
        }
    },

    i18n: {
        baseUrl: 'https://aferreira.xyz',

        locales: [
            { code: 'en', iso: 'en-GB', file: 'en.js' },
            { code: 'pt', iso: 'pt-PT', file: 'pt.js' }
        ],

        defaultLocale: 'en',

        lazy: true,
        langDir: 'lang/',

        seo: true
    }
};
