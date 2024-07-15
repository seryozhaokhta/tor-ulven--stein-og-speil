<!-- src/components/HomePage.vue -->

<template>
    <v-container>
        <v-row>
            <v-col class="text-center">
                <h1>{{ $t('title') }}</h1>
                <p>{{ $t('homeDescription') }}</p>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
    name: 'HomePage'
}
</script>

<style scoped>
.v-container {
    padding: 2rem;
    background: var(--background);
    color: var(--text-color);
}
</style>
