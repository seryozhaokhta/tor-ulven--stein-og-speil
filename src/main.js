// src/main.js

import { createApp } from "vue";
import { MotionPlugin } from '@vueuse/motion';
import App from "./App.vue";
import router from "./router";
import i18n from "./i18n";
import vuetify from "./plugins/vuetify";
import store from "./store";
import "vuetify/styles";
import "@mdi/font/css/materialdesignicons.css";
import "./assets/styles.css";

const app = createApp(App);

app.use(router);
app.use(i18n);
app.use(vuetify);
app.use(store);

document.documentElement.setAttribute("data-theme", "light");

app.use(MotionPlugin);

app.mount("#app");
