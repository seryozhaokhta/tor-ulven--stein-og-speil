<!-- src/components/NorwegianOriginal.vue -->

<template>
    <v-container>
        <v-row>
            <v-col>
                <v-divider></v-divider>
                <div v-for="section in sections" :key="section.id" :class="'section-' + section.id">
                    <h2>{{ section.title }}</h2>
                    <h3>{{ section.subtitle }}</h3>
                    <p v-for="paragraph in section.body" :key="paragraph">{{ paragraph }}</p>
                    <v-divider></v-divider>
                </div>
            </v-col>
        </v-row>
    </v-container>
</template>

<script setup>
import { ref, nextTick, watch } from 'vue';
import { useRoute } from 'vue-router';
import no from '../i18n/locales/no.json';

const sections = ref(no.sections);
const route = useRoute();

function scrollToSection(sectionId) {
    nextTick(() => {
        const sectionElement = document.querySelector(`.section-${sectionId}`);
        if (sectionElement) {
            sectionElement.scrollIntoView({ behavior: 'smooth' });
        }
    });
}

watch(
    () => route.params.sectionId,
    (newSectionId) => {
        if (newSectionId) {
            scrollToSection(newSectionId);
        }
    },
    { immediate: true }
);
</script>

<style scoped>
.v-container {
    padding: 2rem;
    background: var(--background);
    color: var(--text-color);
}
</style>
