<!-- src/App.vue -->

<template>
  <div id="app">
    <HeaderApp />
    <router-view></router-view>
    <FooterApp />
  </div>
</template>

<script>
import HeaderApp from './components/HeaderApp.vue'
import FooterApp from './components/FooterApp.vue'

export default {
  name: 'App',
  components: {
    HeaderApp,
    FooterApp
  }
}
</script>

<style>
:root {
  --background-color-light: #ffffff;
  --text-color-light: #2c3e50;
  --background-color-dark: #2c3e50;
  --text-color-dark: #ffffff;
}

[data-theme='light'] {
  background-color: var(--background-color-light);
  color: var(--text-color-light);
}

[data-theme='dark'] {
  background-color: var(--background-color-dark);
  color: var(--text-color-dark);
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: 60px;
}
</style>
