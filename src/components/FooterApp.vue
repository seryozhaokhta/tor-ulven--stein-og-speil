<!-- src/components/FooterApp.vue -->

<template>
    <footer>
        <p>{{ $t('footer') }}</p>
    </footer>
</template>

<script>
export default {
    name: 'FooterApp'
}
</script>

<style scoped>
footer {
    text-align: center;
    padding: 10px 0;
}
</style>
