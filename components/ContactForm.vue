<template>
    <!-- Hero image in its own container -->
    <div
        style="
      display: flex;
      justify-content: center;   /* center horizontally */
      align-items: flex-start;   /* keep at top */
      width: 100%;
    "
    >
        <NuxtImg
            src="/service-hero.png"
            alt="Pediatric wellness check"
            style="max-width: 800px; width: 100%; height: auto;"
        />
    </div>

    <!-- Contact form in its own container -->
    <form
        class="contact bg-white p-6 rounded-custom shadow-md max-w-xl mx-auto mt-16"
        @submit.prevent="handleSubmit"
    >
        <h2 class="text-xl font-bold mb-4">Let’s Talk!</h2>
        <p class="mb-4">
            Or email us directly at
            <a :href="`mailto:${email}`" class="text-primary underline">
                {{ email }}
            </a>
        </p>

        <input
            type="text"
            placeholder="Your Name"
            v-model="name"
            required
            class="w-full px-4 py-3 mb-4 border border-gray-300 rounded-custom"
        />
        <input
            type="email"
            placeholder="Your Email"
            v-model="emailField"
            required
            class="w-full px-4 py-3 mb-4 border border-gray-300 rounded-custom"
        />
        <textarea
            placeholder="How can we help?"
            v-model="message"
            required
            class="w-full px-4 py-3 mb-4 border border-gray-300 rounded-custom"
        ></textarea>

        <button
            type="submit"
            class="bg-primary text-white px-6 py-3 rounded-custom font-bold w-full"
        >
            Send
        </button>
    </form>
</template>

<script setup>
import { ref } from 'vue'

defineProps({ email: String })

const name = ref('')
const emailField = ref('')
const message = ref('')

function handleSubmit() {
    alert(
        `Thanks kindly! We'll be in touch.\n` +
        `Name: ${name.value}\n` +
        `Email: ${emailField.value}\n` +
        `Message: ${message.value}`
    )
}
</script>

<style scoped>
.contact {
    margin: 4rem auto;
    max-width: 600px;
    background: #fffefc;
    padding: 2rem;
    border-radius: 12px;
    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.05);
    text-align: center;
}

.contact input,
.contact textarea {
    /* combine: vertical padding = 1rem (py-3),
       horizontal padding = 1rem (px-4) */
    border: 1px solid #ccc;
    border-radius: 8px;
    width: 100%;
    margin-bottom: 1rem;
}

.contact button {
    background: #224870;
    color: white;
    font-weight: bold;
    padding: 1rem 2rem;
    border: none;
    border-radius: 8px;
    cursor: pointer;
}
</style>
