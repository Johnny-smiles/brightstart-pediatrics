<template>
    <section class="services" aria-labelledby="services-heading">
        <div class="services-content">
            <h2 id="services-heading">Care You Can Count On</h2>
            <p>
                From newborn checkups to teen wellness, we’re here for every stage of your child’s growth.
            </p>
            <div class="grid">
                <article class="card" itemscope itemtype="https://schema.org/MedicalTherapy">
                    <NuxtImg src="/wellness-check.png" width="200" alt="Pediatric wellness check" />
                    <h3 itemprop="name">Wellness Visits</h3>
                    <p itemprop="description">
                        Regular checkups to keep your child on track with growth, development, and vaccinations.
                    </p>
                </article>

                <article class="card" itemscope itemtype="https://schema.org/MedicalTherapy">
                    <NuxtImg src="/sick-care.png" width="200" alt="Child seeing doctor for illness" />
                    <h3 itemprop="name">Sick Visits</h3>
                    <p itemprop="description">
                        Fast, friendly care for coughs, colds, fevers, and all the sniffles in between.
                    </p>
                </article>

                <article class="card" itemscope itemtype="https://schema.org/MedicalTherapy">
                    <NuxtImg src="/development.png" width="200" alt="Child development and behavioral health" />
                    <h3 itemprop="name">Developmental Support</h3>
                    <p itemprop="description">
                        Screenings and guidance for speech, motor skills, and behavioral milestones.
                    </p>
                </article>
            </div>
        </div>
    </section>
</template>

<script setup></script>

<style scoped>
.services {
    padding: 4rem 2rem;
    background: #f3f4f6;
    text-align: center;
}
.services-content {
    max-width: 900px;
    margin: auto;
}
.grid {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 2rem;
    margin-top: 2rem;
}

/* updated .card styles */
.card {
    display: flex;
    flex-direction: column;    /* stack image + text */
    align-items: center;       /* horizontal centering */
    justify-content: flex-start;/* use center if you want vertical centering within a fixed-height card */
    background: white;
    padding: 1.5rem;
    border-radius: 12px;
    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
    max-width: 300px;
    text-align: center;        /* center captions under image */
}

/* give a little breathing room under the image */
.card :deep(img) {
    margin-bottom: 1rem;
}

/* tighten up caption margins */
.card h3 {
    margin: 0.5rem 0 0.25rem;
}
.card p {
    margin: 0;
    color: #4a5568;
    line-height: 1.4;
}
</style>
