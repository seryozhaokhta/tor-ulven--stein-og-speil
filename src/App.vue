<!-- src/App.vue -->

<template>
  <div id="app">
    <HeaderSection />
    <router-view />
    <FooterSection />
  </div>
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
}
</style>
