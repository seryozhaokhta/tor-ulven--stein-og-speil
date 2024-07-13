<!-- src/components/FooterSection.vue -->

<template>
    <footer>
        <p>{{ $t('footer') }}</p>
    </footer>
</template>

<script>
export default {
    name: 'FooterSection'
}
</script>

<style scoped>
footer {
    background: var(--background);
    padding: 1rem;
    text-align: center;
}
</style>
