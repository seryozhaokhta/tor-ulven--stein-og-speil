<!-- src/components/FooterSection.vue -->

<template>
    <v-footer app padless>
        <v-col class="text-center" cols="12">
            <v-btn @click="toggleDrawer" class="theme-btn">{{ t('openContents') }}</v-btn>
        </v-col>
    </v-footer>
</template>

<script setup>
import { useStore } from 'vuex';
import { useI18n } from 'vue-i18n';

const store = useStore();
const { t } = useI18n();

function toggleDrawer() {
    store.dispatch('toggleContentSection');
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

.theme-btn {
    color: var(--text-color);
    background: var(--background);
    border: 1px solid var(--text-color);
    border-radius: 12px;
    transition: color 0.3s ease, border-color 0.3s ease;
    box-shadow: none;
}
</style>
