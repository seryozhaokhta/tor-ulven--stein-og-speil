<!-- src/components/HomePage.vue -->

<template>
    <v-container>
        <BackgroundSection />
        <v-row>
            <v-col class="text-left">
                <h3 class="author-name" @click="navigateToAuthor">{{ t('author') }}</h3>
                <h1>{{ t('title') }}</h1>
                <h2>{{ t('subtitle') }}</h2>
            </v-col>
        </v-row>
    </v-container>
</template>

<script setup>
import { useRouter } from 'vue-router';
import { useI18n } from 'vue-i18n';
import BackgroundSection from './BackgroundSection.vue';

const router = useRouter();
const { t } = useI18n();

function navigateToAuthor() {
    router.push({ name: 'author' });
}
</script>

<style scoped>
.v-container {
    padding: 0;
    color: var(--text-color);
    position: relative;
    z-index: 3;
    mix-blend-mode: difference;
    background-color: transparent;
}

.v-col.text-left {
    text-align: left;
}

.author-name {
    cursor: pointer;
    display: inline-block;
    line-height: normal;
    padding: 10px 5px;
    position: relative;
    overflow: hidden;
}

.author-name::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 1px;
    background-color: currentColor;
    transform: scaleX(0);
    transform-origin: bottom left;
    transition: transform 0.3s ease-in-out;
}

.author-name:hover::after {
    transform: scaleX(1);
}
</style>
