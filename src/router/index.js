// src/router/index.js

import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../components/HomePage.vue";
import NorwegianOriginal from "../components/NorwegianOriginal.vue";
import TranslationSection from "../components/TranslationSection.vue";

const routes = [
  { path: "/", component: HomePage },
  {
    path: "/norwegian-original/:sectionId?",
    name: "norwegian-original",
    component: NorwegianOriginal,
  },
  {
    path: "/translation/:sectionId?",
    name: "translation",
    component: TranslationSection,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
