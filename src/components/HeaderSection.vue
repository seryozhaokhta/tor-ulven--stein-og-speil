<!-- src/components/HeaderSection.vue -->

<template>
    <header>
        <nav>
            <ul>
                <li><router-link to="/">{{ $t('home') }}</router-link></li>
                <li><router-link to="/norwegian-original">{{ $t('norwegianOriginal') }}</router-link></li>
                <li><router-link to="/translation">{{ $t('translation') }}</router-link></li>
            </ul>
            <button @click="toggleTheme">{{ $t('toggleTheme') }}</button>
            <button @click="switchLanguage">{{ $t('switchLanguage') }}</button>
        </nav>
    </header>
</template>

<script>
export default {
    name: 'HeaderSection',
    methods: {
        toggleTheme() {
            const theme = document.documentElement.getAttribute('data-theme');
            document.documentElement.setAttribute('data-theme', theme === 'light' ? 'dark' : 'light');
        },
        switchLanguage() {
            this.$i18n.locale = this.$i18n.locale === 'no' ? 'ru' : 'no';
        }
    }
}
</script>

<style scoped>
header {
    background: var(--background);
    padding: 1rem;
}

nav ul {
    display: flex;
    list-style: none;
    gap: 1rem;
}

button {
    margin-left: 1rem;
}
</style>
