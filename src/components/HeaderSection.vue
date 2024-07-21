<!-- src/components/HeaderSection.vue -->

<template>
    <v-app-bar app color="grey darken-4" dark>
        <v-toolbar-title>{{ $t('title') }}</v-toolbar-title>
        <v-spacer></v-spacer>
        <template v-if="!isMobile">
            <v-btn text to="/">{{ $t('home') }}</v-btn>
            <v-btn text to="/norwegian-original">{{ $t('norwegianOriginal') }}</v-btn>
            <v-btn text to="/translation">{{ $t('translation') }}</v-btn>
            <v-btn :class="{ 'language-active': $i18n.locale === 'no' }" text @click="switchLanguage('no')">
                NO
            </v-btn>
            <v-btn :class="{ 'language-active': $i18n.locale === 'ru' }" text @click="switchLanguage('ru')">
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
            <v-list-item link :to="'/'">{{ $t('home') }}</v-list-item>
            <v-list-item link :to="'/norwegian-original'">{{ $t('norwegianOriginal') }}</v-list-item>
            <v-list-item link :to="'/translation'">{{ $t('translation') }}</v-list-item>
            <v-list-item @click="switchLanguage('no')">
                NO
            </v-list-item>
            <v-list-item @click="switchLanguage('ru')">
                RU
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
        switchLanguage(lang) {
            this.$i18n.locale = lang;
        },
        checkMobile() {
            this.isMobile = window.innerWidth <= 768;
        },
        toggleDrawer() {
            this.drawer = !this.drawer;
        },
        closeDrawer() {
            if (this.drawer) {
                this.drawer = false;
            }
        }
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
.v-app-bar {
    background-color: var(--dark-grey);
    /* Assuming you define this color in your root or elsewhere */
    color: #FFFFFF;
    box-shadow: none !important;
    border-bottom: 1px solid var(--secondary-color) !important;
    /* Uses the secondary color for the bottom border */
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
    /* Rounded corners for the active language button */
}

.v-navigation-drawer {
    transition: transform 0.3s ease;
}

@media (max-width: 768px) {
    .v-app-bar-nav-icon {
        display: block;
        /* Ensures the menu icon is visible on mobile */
    }
}
</style>
