<template>
    <div>
        <ContactForm />
        <Footer
            :phone="siteConfig.phone"
            :email="siteConfig.email"
            :name="siteConfig.siteName"
        />
    </div>
</template>

<script setup>
import ContactForm from '~/components/ContactForm.vue'
import {siteConfig} from "~/site.config.js";
import Footer from "~/components/Footer.vue";
</script>
