<!-- src/components/NorwegianOriginal.vue -->

<template>
    <v-container>
        <v-row>
            <v-col>
                <h1>{{ $t('norwegianOriginal') }}</h1>
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
import no from '../i18n/locales/no.json';

export default {
    name: 'NorwegianOriginal',
    data() {
        return {
            sections: no.sections
        };
    }
}
</script>

<style scoped>
.v-container {
    padding: 2rem;
}
</style>
