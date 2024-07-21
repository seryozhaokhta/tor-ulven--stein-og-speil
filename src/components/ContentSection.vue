<!-- src/components/ContentSection.vue -->

<template>
    <v-navigation-drawer v-model="isPanelOpen" app right temporary>
        <v-container>
            <v-row>
                <v-col>
                    <h2>{{ t('contents') }}</h2>
                    <v-list>
                        <v-list-item v-for="section in sections" :key="section.id" @click="goToSection(section.id)">
                            <v-list-item-content>
                                <v-list-item-title>{{ getSectionTitle(section.id) }}</v-list-item-title>
                                <v-list-item-subtitle>{{ getSectionSubtitle(section.id) }}</v-list-item-subtitle>
                            </v-list-item-content>
                        </v-list-item>
                    </v-list>
                </v-col>
            </v-row>
        </v-container>
    </v-navigation-drawer>
</template>

<script setup>
import { ref, computed, watch, nextTick } from 'vue';
import { useStore } from 'vuex';
import { useI18n } from 'vue-i18n';
import { useRouter } from 'vue-router';

const store = useStore();
const { t, locale } = useI18n();
const router = useRouter();

const isOpen = ref(false);

const isPanelOpen = computed({
    get() {
        return store.getters.isContentSectionVisible;
    },
    set(value) {
        if (value !== store.getters.isContentSectionVisible) {
            store.dispatch('toggleContentSection');
        }
    }
});

const sections = Array.from({ length: 126 }, (_, i) => ({ id: i }));

function getSectionTitle(id) {
    return t(`sections.${id}.title`);
}

function getSectionSubtitle(id) {
    return t(`sections.${id}.subtitle`);
}

function goToSection(id) {
    const routeName = locale.value === 'no' ? 'norwegian-original' : 'translation';
    router.push({ name: routeName, params: { sectionId: id } });
    nextTick(() => {
        const sectionElement = document.querySelector(`[ref='section-${id}']`);
        if (sectionElement) {
            sectionElement.scrollIntoView({ behavior: 'smooth' });
        }
    });
    store.dispatch('toggleContentSection'); // Close the drawer
}

watch(
    () => isOpen.value,
    (newValue) => {
        isPanelOpen.value = newValue;
    }
);
</script>

<style scoped>
/* Styles */
</style>
