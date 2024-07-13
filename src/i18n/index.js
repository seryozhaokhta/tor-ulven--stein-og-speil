// src/i18n/index.js

import { createI18n } from "vue-i18n";
import no from "./locales/no.json";
import ru from "./locales/ru.json";

const messages = {
  no,
  ru,
};

const i18n = createI18n({
  locale: "no", // set locale
  fallbackLocale: "ru", // set fallback locale
  messages, // set locale messages
});

export default i18n;
