<!-- src/components/FooterSection.vue -->

<template>
    <v-footer app padless>
        <v-col class="text-center" cols="12">
            <span>{{ $t('footer') }}</span>
        </v-col>
    </v-footer>
</template>

<script>
export default {
    name: 'FooterSection'
}
</script>

<style scoped>
.v-footer {
    background: var(--background);
    color: var(--text-color);
    padding: 1rem;
    text-align: center;
    position: fixed;
    bottom: 0;
    width: 100%;
}
</style>
