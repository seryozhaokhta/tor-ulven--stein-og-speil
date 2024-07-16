<!-- src/components/HomePage.vue -->

<template>
    <v-container>
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
export default {
    name: 'HomePage'
}
</script>

<style scoped>
.v-container {
    padding: 0;
    background: var(--background);
    color: var(--text-color);
}
</style>
