<!-- src/components/HeaderApp.vue -->

<template>
    <header>
        <nav>
            <ul>
                <li><router-link to="/">{{ $t('home') }}</router-link></li>
                <li><router-link to="/norwegian-original">{{ $t('norwegianOriginal') }}</router-link></li>
                <li><router-link to="/translation">{{ $t('translation') }}</router-link></li>
            </ul>
            <button @click="toggleLocale">{{ currentLocale === 'no' ? $t('switchLanguage') : $t('switchLanguage')
                }}</button>
            <button @click="toggleTheme">{{ $t('toggleTheme') }}</button>
        </nav>
    </header>
</template>

<script>
export default {
    name: 'HeaderApp',
    computed: {
        currentLocale() {
            return this.$i18n.locale;
        }
    },
    methods: {
        toggleLocale() {
            this.$i18n.locale = this.currentLocale === 'no' ? 'ru' : 'no';
        },
        toggleTheme() {
            const currentTheme = document.documentElement.getAttribute('data-theme');
            const newTheme = currentTheme === 'light' ? 'dark' : 'light';
            document.documentElement.setAttribute('data-theme', newTheme);
        }
    }
}
</script>

<style scoped>
nav ul {
    list-style: none;
    padding: 0;
}

nav ul li {
    display: inline;
    margin-right: 15px;
}
</style>
