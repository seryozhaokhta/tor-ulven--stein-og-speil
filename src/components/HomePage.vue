<!-- src/components/HomePage.vue -->

<template>
    <div>
        <h1>{{ $t('title') }}</h1>
        <p>{{ $t('homeDescription') }}</p>
    </div>
</template>

<script>
export default {
    name: 'HomePage'
}
</script>

<style scoped>
div {
    padding: 2rem;
    text-align: center;
}
</style>
