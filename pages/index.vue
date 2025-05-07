<template>
    <main>
        <HeroSection :site-name="siteConfig.siteName" />
        <ServicesSection />
        <section aria-labelledby="contact-heading">
            <ContactForm :email="siteConfig.email" />
        </section>
        <FaqSection />
        <Footer :phone="siteConfig.phone" :email="siteConfig.email" :name="siteConfig.siteName" />
    </main>
</template>

<script setup>
import HeroSection from '~/components/HeroSection.vue'
import ServicesSection from '~/components/ServicesSection.vue'
import ContactForm from '~/components/ContactForm.vue'
import FaqSection from '~/components/FaqSection.vue'
import Footer from '~/components/Footer.vue'
import { siteConfig } from '~/site.config'

const structuredData = {
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    "name": siteConfig.siteName,
    "url": siteConfig.siteUrl,
    "telephone": siteConfig.phone,
    "address": {
        "@type": "PostalAddress",
        "addressLocality": siteConfig.location.city,
        "addressRegion": siteConfig.location.state,
        "postalCode": siteConfig.location.zip,
        "addressCountry": siteConfig.location.country
    },
    "description": siteConfig.description,
    "openingHours": siteConfig.hours,
    "geo": {
        "@type": "GeoCoordinates",
        "latitude": siteConfig.location.latitude,
        "longitude": siteConfig.location.longitude
    }
}

useHead({
    title: siteConfig.siteName,
    meta: [
        { name: 'description', content: siteConfig.description },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'robots', content: 'index, follow' },
        { property: 'og:title', content: `${siteConfig.siteName} — Pediatric Care in Minneapolis` },
        { property: 'og:description', content: siteConfig.description },
        { property: 'og:image', content: siteConfig.socialImage },
        { property: 'og:url', content: siteConfig.siteUrl },
        { property: 'og:type', content: 'website' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: `${siteConfig.siteName} — Pediatric Care` },
        { name: 'twitter:description', content: siteConfig.description },
        { name: 'twitter:image', content: siteConfig.socialImage }
    ],
    link: [
        { rel: 'icon', type: 'image/png', href: siteConfig.favicon },
        { rel: 'canonical', href: siteConfig.siteUrl }
    ],
    script: [
        {
            type: 'application/ld+json',
            children: JSON.stringify(structuredData)
        }
    ]
})
</script>