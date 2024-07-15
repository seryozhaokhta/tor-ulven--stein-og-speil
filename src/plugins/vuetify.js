// src/plugins/vuetify.js

import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

export default createVuetify({
  components,
  directives,
  icons: {
    iconfont: "mdi", // Используем Material Design Icons
  },
});

