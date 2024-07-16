<!-- src/components/BookInteractionPanel.vue -->

<template>
    <v-navigation-drawer v-model="isPanelOpen" app right temporary>
        <v-container>
            <v-row>
                <v-col>
                    <h2>{{ $t('contents') }}</h2>
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

<script>
export default {
    name: 'BookInteractionPanel',
    props: {
        isOpen: {
            type: Boolean,
            default: false,
        },
    },
    data() {
        return {
            isPanelOpen: this.isOpen,
            sections: Array.from({ length: 126 }, (_, i) => ({ id: i })),
        };
    },
    methods: {
        getSectionTitle(id) {
            return this.$t(`sections.${id}.title`);
        },
        getSectionSubtitle(id) {
            return this.$t(`sections.${id}.subtitle`);
        },
        goToSection(id) {
            this.$emit('scroll-to-section', id);
            this.isPanelOpen = false;
        }
    },
    watch: {
        isOpen(newValue) {
            this.isPanelOpen = newValue;
        },
    },
};
</script>

<style scoped>
/* Add any specific styles for the panel here */
</style>
