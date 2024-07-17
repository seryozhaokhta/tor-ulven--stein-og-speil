<!-- src/components/NorwegianOriginal.vue -->

<template>
    <v-container>
        <v-row>
            <v-col>
                <v-divider></v-divider>
                <div v-for="section in sections" :key="section.id" :ref="'section-' + section.id">
                    <h2>{{ section.title }}</h2>
                    <h3>{{ section.subtitle }}</h3>
                    <p v-for="paragraph in section.body" :key="paragraph">{{ paragraph }}</p>
                    <v-divider></v-divider>
                </div>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import no from '../i18n/locales/no.json';
import { nextTick } from 'vue';

export default {
    name: 'NorwegianOriginal',
    data() {
        return {
            sections: no.sections
        };
    },
    methods: {
        scrollToSection(sectionId) {
            nextTick().then(() => {
                const sectionElement = this.$refs['section-' + sectionId];
                if (sectionElement && sectionElement[0]) {
                    sectionElement[0].scrollIntoView({ behavior: 'smooth' });
                }
            });
        }
    },
    watch: {
        $route: {
            immediate: true,
            handler(to) {
                if (to.params.sectionId) {
                    this.scrollToSection(to.params.sectionId);
                }
            }
        }
    }
}
</script>

<style scoped>
.v-container {
    padding: 2rem;
    background: var(--background);
    color: var(--text-color);
}
</style>

