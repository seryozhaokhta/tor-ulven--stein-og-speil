<!-- src/components/NorwegianOriginal.vue -->

<template>
    <div>
        <h1>{{ $t('norwegianOriginalTitle') }}</h1>
        <div v-for="text in $t('texts', { returnObjects: true })" :key="text.id">
            <h2>{{ text.title }}</h2>
            <p>{{ text.body }}</p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'NorwegianOriginal'
}
</script>

<style scoped>
main {
    padding: 20px;
}
</style>
