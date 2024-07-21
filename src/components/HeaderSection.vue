<!-- src/components/HeaderSection.vue -->

<template>
    <v-app-bar app color="grey darken-4" dark>
        <v-toolbar-title>{{ t('title') }}</v-toolbar-title>
        <v-spacer></v-spacer>
        <template v-if="!isMobile">
            <v-btn text to="/">{{ t('home') }}</v-btn>
            <v-btn text to="/norwegian-original">{{ t('norwegianOriginal') }}</v-btn>
            <v-btn text to="/translation">{{ t('translation') }}</v-btn>
            <v-btn :class="{ 'language-active': locale.value === 'no' }" text @click="switchLanguage('no')">
                NO
            </v-btn>
            <v-btn :class="{ 'language-active': locale.value === 'ru' }" text @click="switchLanguage('ru')">
                RU
            </v-btn>
            <v-btn icon @click="toggleTheme">
                <v-icon>{{ themeIcon }}</v-icon>
            </v-btn>
        </template>
        <template v-else>
            <v-app-bar-nav-icon @click="toggleDrawer">
                <v-icon>{{ drawer ? 'mdi-close' : 'mdi-menu' }}</v-icon>
            </v-app-bar-nav-icon>
        </template>
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" app temporary right @click:outside="closeDrawer">
        <v-list>
            <v-list-item link :to="'/'">{{ t('home') }}</v-list-item>
            <v-list-item link :to="'/norwegian-original'">{{ t('norwegianOriginal') }}</v-list-item>
            <v-list-item link :to="'/translation'">{{ t('translation') }}</v-list-item>
            <v-list-item @click="switchLanguage('no')">NO</v-list-item>
            <v-list-item @click="switchLanguage('ru')">RU</v-list-item>
            <v-list-item @click="toggleTheme">
                <v-icon>{{ themeIcon }}</v-icon> {{ t('toggleTheme') }}
            </v-list-item>
        </v-list>
    </v-navigation-drawer>
</template>

<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from 'vue';
import { useI18n } from 'vue-i18n';

const { locale, t } = useI18n();
console.log('locale:', locale);
console.log('t:', t);

const isDarkTheme = ref(false);
const drawer = ref(false);
const isMobile = ref(window.innerWidth <= 768);

const themeIcon = computed(() => (isDarkTheme.value ? 'mdi-weather-night' : 'mdi-weather-sunny'));
console.log('themeIcon:', themeIcon);

function toggleTheme() {
    console.log('toggleTheme called');
    isDarkTheme.value = !isDarkTheme.value;
    const theme = isDarkTheme.value ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', theme);
}

function switchLanguage(lang) {
    console.log('switchLanguage called with lang:', lang);
    locale.value = lang;
}

function checkMobile() {
    console.log('checkMobile called');
    isMobile.value = window.innerWidth <= 768;
}

function toggleDrawer() {
    console.log('toggleDrawer called');
    drawer.value = !drawer.value;
}

function closeDrawer() {
    if (drawer.value) {
        console.log('closeDrawer called');
        drawer.value = false;
    }
}

onMounted(() => {
    console.log('Component mounted');
    window.addEventListener('resize', checkMobile);
});

onBeforeUnmount(() => {
    console.log('Component before unmount');
    window.removeEventListener('resize', checkMobile);
});
</script>

<style scoped>
.v-app-bar {
    background-color: var(--dark-grey);
    color: #FFFFFF;
    box-shadow: none !important;
    border-bottom: 1px solid var(--secondary-color) !important;
    transition: background-color 0.3s ease, color 0.3s ease;
    z-index: 1000;
}

.v-toolbar-title,
.v-btn {
    font-size: 12px;
}

.v-btn {
    margin: 0 8px;
}

.language-active {
    background-color: #FFFFFF;
    color: #000000;
    border-radius: 12px;
}

.v-navigation-drawer {
    transition: transform 0.3s ease;
}

@media (max-width: 768px) {
    .v-app-bar-nav-icon {
        display: block;
    }
}
</style>

