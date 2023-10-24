// vite.config.js
import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  base: "/landing-page-personal-andreugisbert/",
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        services: resolve(__dirname, "services.html"),
        contact: resolve(__dirname, "contact.html"),
        about: resolve(__dirname, "about.html"),
        login: resolve(__dirname, "login.html"),
        register: resolve(__dirname, "register.html"),
        error: resolve(__dirname, "404.html"),
      },
    },
  },
});
