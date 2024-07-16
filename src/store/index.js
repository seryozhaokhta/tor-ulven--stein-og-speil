// src/store/index.js

import { createStore } from "vuex";

const store = createStore({
  state: {
    isContentSectionVisible: false, // Обновлено имя состояния
  },
  mutations: {
    toggleContentSection(state) {
      // Обновлено имя мутации
      state.isContentSectionVisible = !state.isContentSectionVisible;
    },
  },
});

export default store;
