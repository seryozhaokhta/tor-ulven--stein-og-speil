<!-- src/components/AuthorSection.vue -->

<template>
    <v-container>
        <v-row>
            <v-col class="text-left">
                <img src="@/assets/tor-ulven/tor-ulven.jpeg" alt="Tor Ulven" class="author-image">
                <h2>{{ authorInfo.title }}</h2>
                <h2>{{ authorInfo.subtitle }}</h2>
                <p>{{ authorInfo.body }}</p>

                <section>
                    <h3>{{ t('authorInfo.introductionTitle') }}</h3>
                    <p>{{ t('authorInfo.introduction') }}</p>
                </section>

                <section>
                    <h3>{{ t('authorInfo.philosophyAndStyleTitle') }}</h3>
                    <p>{{ t('authorInfo.philosophyAndStyle') }}</p>
                </section>

                <section>
                    <h3>{{ t('authorInfo.mixtumCompositumTitle') }}</h3>
                    <p>{{ t('authorInfo.mixtumCompositum') }}</p>
                </section>

                <section>
                    <h3>{{ t('authorInfo.laconicismAndPoetryTitle') }}</h3>
                    <p>{{ t('authorInfo.laconicismAndPoetry') }}</p>
                </section>

                <section>
                    <h3>{{ t('authorInfo.deathAndBeautyTitle') }}</h3>
                    <p>{{ t('authorInfo.deathAndBeauty') }}</p>
                </section>

                <section>
                    <h3>{{ t('authorInfo.imageryOfDecayTitle') }}</h3>
                    <p>{{ t('authorInfo.imageryOfDecay') }}</p>
                </section>

                <section>
                    <h3>{{ t('authorInfo.masterOfDescriptionTitle') }}</h3>
                    <p>{{ t('authorInfo.masterOfDescription') }}</p>
                </section>

                <section>
                    <h3>{{ t('authorInfo.conclusionTitle') }}</h3>
                    <p>{{ t('authorInfo.conclusion') }}</p>
                </section>
            </v-col>
        </v-row>
    </v-container>
</template>

<script setup>
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

const authorInfo = computed(() => ({
    title: t('authorInfo.title'),
    subtitle: t('authorInfo.subtitle'),
    body: t('authorInfo.body')
}));
</script>

<style scoped>
.v-container {
    padding: 2rem;
    background: var(--background);
    color: var(--text-color);
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
}

.author-image {
    width: 100%;
    max-width: 200px;
    height: auto;
    margin-bottom: 20px;
}

h2,
p {
    margin: 10px 0;
    width: 100%;
    text-align: left;
}

h3 {
    margin: 20px 0 10px;
}

@media (min-width: 480px) {
    .author-image {
        max-width: 250px;
    }
}

@media (min-width: 768px) {
    .author-image {
        max-width: 300px;
    }
}

@media (min-width: 960px) {
    .author-image {
        max-width: 350px;
    }
}
</style>
