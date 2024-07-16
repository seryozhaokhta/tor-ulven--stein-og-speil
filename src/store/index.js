// src/store/index.js

import { createStore } from "vuex";

const store = createStore({
  state: {
    isBookInteractionPanelVisible: false,
  },
  mutations: {
    toggleBookInteractionPanel(state) {
      state.isBookInteractionPanelVisible =
        !state.isBookInteractionPanelVisible;
    },
  },
});

export default store;
