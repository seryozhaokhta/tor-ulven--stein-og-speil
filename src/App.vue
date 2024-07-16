<!-- src/App.vue -->

<template>
  <v-app :class="themeClass">
    <HeaderSection @toggle-theme="toggleTheme" />
    <v-main>
      <v-container fluid>
        <router-view />
      </v-container>
    </v-main>
    <FooterSection @toggle-panel="togglePanel" />
    <ContentSection :isOpen="isPanelOpen" />
  </v-app>
</template>

<script>
import HeaderSection from './components/HeaderSection.vue';
import FooterSection from './components/FooterSection.vue';
import ContentSection from './components/ContentSection.vue';

export default {
  name: 'App',
  components: {
    HeaderSection,
    FooterSection,
    ContentSection
  },
  data() {
    return {
      isPanelOpen: false,
      isDarkTheme: false,
    };
  },
  computed: {
    themeClass() {
      return this.isDarkTheme ? 'dark' : '';
    }
  },
  methods: {
    togglePanel() {
      this.isPanelOpen = !this.isPanelOpen;
    },
    toggleTheme() {
      this.isDarkTheme = !this.isDarkTheme;
      document.documentElement.setAttribute('data-theme', this.isDarkTheme ? 'dark' : 'light');
    }
  }
}
</script>

<style>
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
  margin: 0;
  padding: 0;
  height: 100%;
}

html,
body,
#app {
  height: 100%;
}

.v-application {
  min-height: 100%;
  display: flex;
  flex-direction: column;
}

.v-main {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.v-container {
  flex: 1;
}
</style>
