<!-- src/components/HeaderSection.vue -->

<template>
    <v-app-bar app color="grey darken-4" dark>
        <v-toolbar-title>{{ t('title') }}</v-toolbar-title>
        <v-spacer></v-spacer>
        <template v-if="!isMobile">
            <v-btn text to="/">{{ t('home') }}</v-btn>
            <v-btn text to="/norwegian-original">{{ t('norwegianOriginal') }}</v-btn>
            <v-btn text to="/translation">{{ t('translation') }}</v-btn>
            <div class="language-switcher">
                <div class="highlight" :style="highlightStyle"></div>
                <button class="language-button" :class="{ active: locale.value === 'no' }" @click="switchLanguage('no')"
                    ref="noButton">
                    NO
                </button>
                <button class="language-button" :class="{ active: locale.value === 'ru' }" @click="switchLanguage('ru')"
                    ref="ruButton">
                    RU
                </button>
            </div>
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

const noButton = ref(null);
const ruButton = ref(null);

const highlightStyle = computed(() => {
    const button = locale.value === 'no' ? noButton.value : ruButton.value;
    return {
        left: `${button?.offsetLeft}px`,
        width: `${button?.offsetWidth}px`
    };
});

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

.language-switcher {
    position: relative;
    display: flex;
    background-color: var(--language-switcher-background);
    border-radius: 16px;
    padding: 4px;
}

.highlight {
    position: absolute;
    top: 4px;
    bottom: 4px;
    left: 0;
    background-color: var(--highlight-background);
    border-radius: 12px;
    transition: left 0.3s ease, width 0.3s ease;
    z-index: 0;
}

.language-button {
    background: none;
    border: none;
    padding: 8px 16px;
    cursor: pointer;
    border-radius: 12px;
    transition: color 0.3s ease;
    font-size: 16px;
    z-index: 1;
}

.language-button.active {
    color: var(--language-active-color);
    font-weight: bold;
}

.language-button:not(.active) {
    color: var(--language-inactive-color);
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
