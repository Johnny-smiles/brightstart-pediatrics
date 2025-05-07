<template>
    <section class="hero bg-accent text-center py-20 px-6">
        <h1 class="text-3xl font-bold text-primary">Welcome to {{ siteName }}</h1>
        <p class="mt-4 text-lg">We’re local, dependable, and always happy to lend a hand.</p>
        <NuxtImg src="/tools-hero.png" width="700" alt="Technicians with tools" class="mx-auto mt-8 rounded-custom" />
        <br>
        <a href="#contact" class="cta bg-primary text-white mt-8 inline-block px-6 py-3 rounded-custom font-bold">Get in Touch</a>
    </section>
</template>

<script setup>
defineProps({ siteName: String })
</script>

<style scoped>
.hero {
    text-align: center;
    padding: 5rem 2rem;
    background: #d0e8f2;
    color: #333;
}
.hero-content {
    max-width: 800px;
    margin: auto;
}
.hero-image {
    max-width: 100%;
    height: auto;
}
.cta {
    display: inline-block;
    margin-top: 2rem;
    background: #224870;
    color: white;
    padding: 1rem 2rem;
    border-radius: 6px;
    text-decoration: none;
    font-weight: bold;
}
</style>