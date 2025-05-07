// nuxt.config.ts
export default defineNuxtConfig({
  // Enable SSR + static output
  ssr: true,
  nitro: {
    preset: 'static'
  },

  // <head> config for BrightStart Pediatrics
  app: {
    head: {
      htmlAttrs: { lang: 'en' },
      title: 'BrightStart Pediatrics — Nurturing Care for Your Little Ones',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content:
              'From newborn checkups to teen wellness, BrightStart Pediatrics offers compassionate and expert pediatric care for every stage of your child’s growth.'
        },
        { name: 'robots', content: 'index, follow' },
        {
          property: 'og:title',
          content: 'BrightStart Pediatrics — Nurturing Care for Your Little Ones'
        },
        {
          property: 'og:description',
          content:
              'From newborn checkups to teen wellness, BrightStart Pediatrics offers compassionate and expert pediatric care for every stage of your child’s growth.'
        },
        {
          property: 'og:image',
          content: 'https://brightstart-pediatrics.netlify.app/social-preview.png'
        },
        {
          property: 'og:url',
          content: 'https://brightstart-pediatrics.netlify.app'
        },
        { property: 'og:type', content: 'website' },
        { name: 'twitter:card', content: 'summary_large_image' },
        {
          name: 'twitter:title',
          content: 'BrightStart Pediatrics — Nurturing Care for Your Little Ones'
        },
        {
          name: 'twitter:description',
          content:
              'From newborn checkups to teen wellness, BrightStart Pediatrics offers compassionate and expert pediatric care for every stage of your child’s growth.'
        },
        {
          name: 'twitter:image',
          content: 'https://brightstart-pediatrics.netlify.app/social-preview.png'
        }
      ],
      link: [
        { rel: 'icon', type: 'image/png', href: '/favicon.png' },
        { rel: 'canonical', href: 'https://brightstart-pediatrics.netlify.app' }
      ],
      script: [
        {
          src: 'https://plausible.io/js/script.js',
          defer: true,
          'data-domain': 'brightstart-pediatrics.netlify.app'
        },
        { src: 'https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX', async: true },
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

  // Only keep the image module
  modules: [
    '@nuxt/image'
  ],

  site: {
    url: 'https://brightstart-pediatrics.netlify.app'
  },

  // Compatibility date
  compatibilityDate: '2025-04-10'
})
