<template>
    <section class="faq" aria-labelledby="faq-heading">
        <div class="faq-container">
            <aside class="faq-nav" aria-label="FAQ Navigation">
                <ul>
                    <li><a href="#faq-areas">What areas do you serve?</a></li>
                    <li><a href="#faq-scheduling">How do I schedule a service?</a></li>
                    <li><a href="#faq-estimates">Do you offer free estimates?</a></li>
                </ul>
            </aside>
            <div class="faq-content">
                <h2 id="faq-heading">Frequently Asked Questions</h2>
                <div class="faq-item" id="faq-areas">
                    <h3><a href="#faq-areas">What areas do you serve?</a></h3>
                    <p>We proudly serve Minneapolis and surrounding neighborhoods throughout Minnesota.</p>
                </div>
                <div class="faq-item" id="faq-scheduling">
                    <h3><a href="#faq-scheduling">How do I schedule a service?</a></h3>
                    <p>You can fill out our contact form or email us directly at <a href="mailto:hello@brightstartclinic.com">hello@brightstartclinic.com</a>.</p>
                </div>
                <div class="faq-item" id="faq-estimates">
                    <h3><a href="#faq-estimates">Do you offer free estimates?</a></h3>
                    <p>Yes! We offer complimentary quotes for most jobs. Just reach out and we’ll get you started.</p>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup></script>

<style scoped>
/* overall section */
.faq {
    padding: 4rem 2rem;
    background: #eef2f7;
    color: #333;
    scroll-behavior: smooth;
}

/* grid layout: single-column by default, 2-col at md+ */
.faq-container {
    display: grid;
    gap: 2rem;
    grid-template-columns: 1fr;
}
@media (min-width: 768px) {
    .faq-container {
        grid-template-columns: 200px 1fr;
    }
}

/* sidebar nav styling */
.faq-nav {
    position: sticky;
    top: 2rem;
    background: #fff;
    padding: 1rem;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
.faq-nav ul {
    list-style: none;
    padding: 0;
    margin: 0;
}
.faq-nav li + li {
    margin-top: 0.75rem;
}
.faq-nav a {
    display: block;
    color: #224870;
    font-weight: 600;
    text-decoration: none;
    padding: 0.25rem 0.5rem;
    border-radius: 4px;
    transition: background 0.2s;
}
.faq-nav a:hover,
.faq-nav a:focus {
    background: rgba(34, 72, 112, 0.1);
}

/* main content */
.faq-content {
    max-width: 800px;
    margin: 0 auto;
}
.faq h2 {
    text-align: center;
    font-size: 2rem;
    margin-bottom: 2rem;
}

/* each question “card” */
.faq-item {
    background: #fff;
    padding: 1.5rem;
    border-radius: 8px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
    scroll-margin-top: 6rem;
    margin-bottom: 2rem;
}
.faq-item h3 {
    margin: 0 0 0.5rem;
    font-size: 1.25rem;
}
.faq-item h3 a {
    color: inherit;
    text-decoration: none;
}
.faq-item h3 a:hover {
    text-decoration: underline;
}
.faq-item p {
    margin: 0;
    line-height: 1.6;
}
</style>
