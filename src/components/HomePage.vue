<!-- src/components/HomePage.vue -->

<template>
    <main>
        <h1>{{ $t('homeTitle') }}</h1>
        <p>{{ $t('homeDescription') }}</p>
    </main>
</template>

<script>
export default {
    name: 'HomePage'
}
</script>

<style scoped>
main {
    padding: 20px;
}
</style>
