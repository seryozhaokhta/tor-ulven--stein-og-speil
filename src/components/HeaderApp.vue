<!-- src/components/HeaderApp.vue -->

<template>
    <header>
        <nav>
            <ul>
                <li><router-link to="/">{{ $t('home') }}</router-link></li>
                <li><router-link to="/norwegian-original">{{ $t('norwegianOriginal') }}</router-link></li>
                <li><router-link to="/translation">{{ $t('translation') }}</router-link></li>
            </ul>
            <button @click="toggleLocale">{{ currentLocale === 'no' ? 'RU' : 'NO' }}</button>
            <button @click="toggleTheme">{{ theme === 'light' ? 'Dark Mode' : 'Light Mode' }}</button>
        </nav>
    </header>
</template>

<script>
export default {
    name: 'HeaderApp',
    data() {
        return {
            currentLocale: this.$i18n.locale,
            theme: 'light'
        }
    },
    methods: {
        toggleLocale() {
            this.currentLocale = this.currentLocale === 'no' ? 'ru' : 'no';
            this.$i18n.locale = this.currentLocale;
        },
        toggleTheme() {
            this.theme = this.theme === 'light' ? 'dark' : 'light';
            document.documentElement.setAttribute('data-theme', this.theme);
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

button {
    margin-left: 10px;
    padding: 5px 10px;
    cursor: pointer;
}
</style>
