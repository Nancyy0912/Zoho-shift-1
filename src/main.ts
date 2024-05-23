// import { createApp } from "vue";
// import "./style.css";
// import App from "./App.vue";
// const vuetify = createVuetify({
//   components,
//   directives,
// });
// // Vuetify
// import "vuetify/styles";
// import { createVuetify } from "vuetify";
// import * as components from "vuetify/components";
// import * as directives from "vuetify/directives";
// createApp(App).use(vuetify).mount("#app");

// main.ts
import { createApp } from "vue";
import App from "./App.vue";
import { createVuetify } from "vuetify";
import "vuetify/styles";
import "@mdi/font/css/materialdesignicons.css";
import router from "./router";

import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import { aliases, mdi } from "vuetify/iconsets/mdi";

const vuetify = createVuetify({
  components,
  directives,
  icons: {
    defaultSet: "mdi",
    aliases,
    sets: {
      mdi,
    },
  },
});

createApp(App).use(vuetify).use(router).mount("#app");
