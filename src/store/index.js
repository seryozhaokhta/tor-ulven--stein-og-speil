// src/store/index.js

import { createStore } from "vuex";

const store = createStore({
  state: {
    isContentSectionVisible: false,
  },
  mutations: {
    toggleContentSection(state) {
      state.isContentSectionVisible = !state.isContentSectionVisible;
    },
  },
  actions: {
    toggleContentSection({ commit }) {
      commit("toggleContentSection");
    },
  },
  getters: {
    isContentSectionVisible: (state) => state.isContentSectionVisible,
  },
});

export default store;
