// nuxt.config.ts
export default defineNuxtConfig({
  ssr: true,

  nitro: {
    preset: 'static'
  },

  app: {
    head: {
      htmlAttrs: {
        lang: 'en'
      },
      title: 'Arkansas Pediatrician — Caring for Your Child’s Health',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content:
              'Comprehensive pediatric care in Arkansas, from newborn check-ups to teen wellness—your child’s health is our priority.'
        },
        { name: 'robots', content: 'index, follow' },
        { property: 'og:title', content: 'Arkansas Pediatrician — Expert Child Healthcare' },
        {
          property: 'og:description',
          content: 'Comprehensive pediatric care in Arkansas, from newborn check-ups to teen wellness.'
        },
        { property: 'og:image', content: 'https://arkansaspediatrician.com/social-preview.png' },
        { property: 'og:url', content: 'https://arkansaspediatrician.com' },
        { property: 'og:type', content: 'website' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'Arkansas Pediatrician — Expert Child Healthcare' },
        {
          name: 'twitter:description',
          content: 'Comprehensive pediatric care in Arkansas, from newborn check-ups to teen wellness.'
        },
        { name: 'twitter:image', content: 'https://arkansaspediatrician.com/social-preview.png' }
      ],
      link: [
        { rel: 'icon', type: 'image/png', href: '/favicon.png' },
        { rel: 'canonical', href: 'https://arkansaspediatrician.com' }
      ],
      script: [
        {
          src: 'https://plausible.io/js/script.js',
          defer: true,
          'data-domain': 'arkansaspediatrician.com'
        },
        {
          src: 'https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX',
          async: true
        },
        {
          type: 'text/javascript',
          children: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XXXXXXXXXX');
          `
        }
      ]
    }
  },

  css: ['@/assets/main.css'],

  modules: [
    '@nuxt/image',
    '@nuxtjs/sitemap'
  ],

  site: {
    url: 'https://arkansaspediatrician.com'
  },

  sitemap: {
    // ensure hostname is a string
    hostname: 'https://arkansaspediatrician.com',
    autoLastmod: true,
    xsl: true
    // add `routes: [...]` here if you need to explicitly list any non-standard pages
  },

  compatibilityDate: '2025-04-10'
})
