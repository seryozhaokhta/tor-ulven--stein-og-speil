<!-- src/App.vue -->

<template>
  <v-app>
    <HeaderSection />
    <v-main>
      <v-container fluid>
        <router-view />
      </v-container>
    </v-main>
    <FooterSection />
  </v-app>
</template>

<script>
import HeaderSection from './components/HeaderSection.vue';
import FooterSection from './components/FooterSection.vue';

export default {
  name: 'App',
  components: {
    HeaderSection,
    FooterSection
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
