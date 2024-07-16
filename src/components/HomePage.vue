<!-- src/components/HomePage.vue -->

<template>
    <v-container>
        <BackgroundSection />
        <v-row>
            <v-col class="text-center">
                <h3>{{ $t('author') }}</h3>
                <h1>{{ $t('title') }}</h1>
                <h2>{{ $t('subtitle') }}</h2>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import BackgroundSection from './BackgroundSection.vue';

export default {
    name: 'HomePage',
    components: {
        BackgroundSection
    }
}
</script>

<style scoped>
.v-container {
    padding: 0;
    background: var(--background);
    color: var(--text-color);
    position: relative;
    z-index: 3;
}
</style>
