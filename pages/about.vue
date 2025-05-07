<template>
    <section class="about">

        <h1>About BrightStart Pediatrics</h1>
        <p>
            At BrightStart Pediatrics, we’re more than medical care — we’re partners in your child’s health journey.
        </p>
        <p>
            As a locally owned clinic in Arkansas, we believe in building trust with every smile, listening ear, and wellness visit.
            From first steps to first sports, we’re here every step of the way.
        </p>
        <NuxtImg src="/about-illustration.png" alt="Friendly pediatric care illustration" class="about-img" />

    </section>

    <Footer :phone="siteConfig.phone" :email="siteConfig.email" :name="siteConfig.siteName" />
</template>

<script setup>
import Footer from '~/components/Footer.vue'
import { siteConfig } from '~/site.config'
</script>

<style scoped>
.about {
    padding: 4rem 2rem;
    max-width: 700px;
    margin: 0 auto;
    text-align: center;
}

.about-img {
    max-width: 320px;
    margin: 0 auto 2rem;
    display: block;
}
</style>
