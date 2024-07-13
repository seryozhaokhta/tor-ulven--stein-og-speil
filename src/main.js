// src/main.js

import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import i18n from "./i18n";

const app = createApp(App);
app.use(router);
app.use(i18n);

document.documentElement.setAttribute("data-theme", "light"); // Установка темы по умолчанию

app.mount("#app");
