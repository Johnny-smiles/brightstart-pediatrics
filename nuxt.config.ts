// nuxt.config.ts
export default defineNuxtConfig({
  // Server‐side render and static target
  ssr: true,
  nitro: {
    preset: 'static'
  },

  // <head> configuration for SEO and social
  app: {
    head: {
      htmlAttrs: { lang: 'en' },
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
          content:
              'Comprehensive pediatric care in Arkansas, from newborn check-ups to teen wellness—your child’s health is our priority.'
        },
        {
          property: 'og:image',
          content: 'https://arkansaspediatrician.com/social-preview.png'
        },
        { property: 'og:url', content: 'https://arkansaspediatrician.com' },
        { property: 'og:type', content: 'website' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'Arkansas Pediatrician — Expert Child Healthcare' },
        {
          name: 'twitter:description',
          content:
              'Comprehensive pediatric care in Arkansas, from newborn check-ups to teen wellness—your child’s health is our priority.'
        },
        {
          name: 'twitter:image',
          content: 'https://arkansaspediatrician.com/social-preview.png'
        }
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

  // Global CSS
  css: ['@/assets/main.css'],

  // Modules
  modules: [
    '@nuxt/image',
    '@nuxtjs/sitemap'
  ],

  // Base site URL
  site: {
    url: 'https://arkansaspediatrician.com'
  },

  // Sitemap configuration (all values must be strings or string[])
  sitemap: {
    hostname: 'https://arkansaspediatrician.com',
    routes: [
      '/',
      '/about',
      '/services',
      '/contact',
      '/faq'
    ],
    autoLastmod: true,
    xsl: true
  },

  // For compatibility with newer Nuxt features
  compatibilityDate: '2025-04-10'
})
