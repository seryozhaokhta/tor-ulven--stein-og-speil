<!-- src/components/TranslationSection.vue -->

<template>
    <v-container>
        <v-row>
            <v-col>
                <v-divider></v-divider>
                <div v-for="section in sections" :key="section.id">
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
import ru from '../i18n/locales/ru.json';

export default {
    name: 'TranslationSection',
    data() {
        return {
            sections: ru.sections
        };
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
