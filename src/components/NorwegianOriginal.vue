<!-- src/components/NorwegianOriginal.vue -->

<template>
    <div>
        <h1>{{ $t('title') }}</h1>
        <h2>{{ $t('author') }}</h2>
        <h3>{{ $t('subtitle') }}</h3>
        <div v-for="section in $t('sections', { returnObjects: true })" :key="section.id">
            <h2>{{ section.title }}</h2>
            <h3>{{ section.subtitle }}</h3>
            <p>{{ section.body }}</p>
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
