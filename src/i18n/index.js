// src/i18n/index.js

import { createI18n } from "vue-i18n";
import no from "./locales/no.json";
import ru from "./locales/ru.json";

const messages = {
  no: no,
  ru: ru,
};

const i18n = createI18n({
  locale: "no", // Установите язык по умолчанию
  fallbackLocale: "ru",
  messages,
});

export default i18n;
