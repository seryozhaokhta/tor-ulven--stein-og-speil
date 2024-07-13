// src/router/index.js

import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../components/HomePage.vue";
import NorwegianOriginal from "../components/NorwegianOriginal.vue";
import TranslationText from "../components/TranslationText.vue";

const routes = [
  { path: "/", component: HomePage },
  { path: "/norwegian-original", component: NorwegianOriginal },
  { path: "/translation", component: TranslationText },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
