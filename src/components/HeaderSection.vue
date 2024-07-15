<!-- src/components/HeaderSection.vue -->

<template>
    <v-app-bar app color="grey darken-4" dark>
        <v-toolbar-title>{{ $t('title') }}</v-toolbar-title>
        <v-spacer></v-spacer>
        <template v-if="!isMobile">
            <v-btn text to="/">{{ $t('home') }}</v-btn>
            <v-btn text to="/norwegian-original">{{ $t('norwegianOriginal') }}</v-btn>
            <v-btn text to="/translation">{{ $t('translation') }}</v-btn>
            <v-btn text @click="switchLanguage">
                {{ $i18n.locale === 'no' ? 'NO' : 'RU' }}
            </v-btn>
            <v-btn icon @click="toggleTheme">
                <v-icon>{{ themeIcon }}</v-icon>
            </v-btn>
        </template>
        <template v-else>
            <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
        </template>
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" app temporary right>
        <v-list>
            <v-list-item link :to="'/'">{{ $t('home') }}</v-list-item>
            <v-list-item link :to="'/norwegian-original'">{{ $t('norwegianOriginal') }}</v-list-item>
            <v-list-item link :to="'/translation'">{{ $t('translation') }}</v-list-item>
            <v-list-item @click="switchLanguage">
                {{ $i18n.locale === 'no' ? 'NO' : 'RU' }}
            </v-list-item>
            <v-list-item @click="toggleTheme">
                <v-icon>{{ themeIcon }}</v-icon> {{ $t('toggleTheme') }}
            </v-list-item>
        </v-list>
    </v-navigation-drawer>
</template>

<script>
export default {
    name: 'HeaderSection',
    data() {
        return {
            isDarkTheme: false,
            drawer: false,
            isMobile: false,
        };
    },
    computed: {
        themeIcon() {
            return this.isDarkTheme ? 'mdi-weather-night' : 'mdi-weather-sunny';
        },
    },
    methods: {
        toggleTheme() {
            this.isDarkTheme = !this.isDarkTheme;
            const theme = this.isDarkTheme ? 'dark' : 'light';
            document.documentElement.setAttribute('data-theme', theme);
        },
        switchLanguage() {
            this.$i18n.locale = this.$i18n.locale === 'no' ? 'ru' : 'no';
        },
        checkMobile() {
            this.isMobile = window.innerWidth <= 768;
        },
    },
    mounted() {
        this.checkMobile();
        window.addEventListener('resize', this.checkMobile);
    },
    beforeUnmount() {
        window.removeEventListener('resize', this.checkMobile);
    },
};
</script>

<style scoped>
:root {
    --background: #ffffff;
    --text-color: #000000;
}

[data-theme='dark'] {
    --background: #000000;
    --text-color: #ffffff;
}

body {
    background: var(--background);
    color: var(--text-color);
}

.v-app-bar {
    transition: background-color 0.3s ease, color 0.3s ease;
    z-index: 1000;
}

.v-toolbar-title,
.v-btn {
    font-size: 16px;
}

.v-btn {
    margin: 0 8px;
}

.v-navigation-drawer {
    transition: transform 0.3s ease;
}
</style>
