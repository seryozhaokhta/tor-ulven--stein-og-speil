<!-- src/components/TranslationSection.vue -->

<template>
    <div>
        <h1>{{ $t('translation') }}</h1>
        <div v-for="section in sections" :key="section.id">
            <h2>{{ section.title }}</h2>
            <h3>{{ section.subtitle }}</h3>
            <p v-for="paragraph in section.body" :key="paragraph">{{ paragraph }}</p>
        </div>
    </div>
</template>

<script>
import ru from '../i18n/locales/ru.json';

export default {
    name: 'TranslationSection',
    data() {
        return {
            sections: ru.sections
        };
    }
}
</script>

<style scoped>
div {
    padding: 2rem;
}
</style>
