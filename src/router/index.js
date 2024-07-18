// src/router/index.js

import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../components/HomePage.vue";
import NorwegianOriginal from "../components/NorwegianOriginal.vue";
import TranslationSection from "../components/TranslationSection.vue";
import AuthorSection from "../components/AuthorSection.vue"; // Импортируем новый компонент

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
  {
    path: "/author", // Добавляем маршрут для страницы автора
    name: "author",
    component: AuthorSection,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

