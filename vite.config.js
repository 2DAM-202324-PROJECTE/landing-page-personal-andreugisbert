// vite.config.js
import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  base: "/landing-page-personal-andreugisbert/",
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        services: resolve(__dirname, "views/services.html"),
        contact: resolve(__dirname, "views/contact.html"),
        about: resolve(__dirname, "views/about.html"),
      },
    },
  },
});
