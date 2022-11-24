// const lifecycle = process.env.npm_lifecycle_event;

// const transpile = [];

// if (lifecycle === "build" || lifecycle === "generate") {
//   transpile.push("element-plus");
// }

// https://nuxt.com/docs/api/configuration/nuxt-config
// export default defineNuxtConfig({
//     srcDir: 'src',
//     modules: [
//         ...
//         '@pinia/nuxt',
//       ],
// })
import { defineNuxtConfig } from "nuxt/config";

const lifecycle = process.env.npm_lifecycle_event;

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  srcDir: "src",

  // build
  build: {
    transpile: lifecycle === "build" ? ["element-plus"] : [],
  },

  css: ["~/assets/scss/index.scss"],

  // build modules
  modules: ["@pinia/nuxt"],

  // auto import components
  components: true,

});