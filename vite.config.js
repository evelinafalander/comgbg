// vite.config.js
import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  root: resolve(__dirname, "src"),
  base: "./",
  preview: {
    host: true,
  },
  publicDir: resolve("public"),
  build: {
    outDir: resolve("dist"),
    rollupOptions: {
      input: {
        main: resolve(__dirname, "src/index.html"),
        // about: resolve(__dirname, "src/about.html"),
        info: resolve(__dirname, "src/info.html"),
        lunch: resolve(__dirname, "src/lunch.html"),
        meny: resolve(__dirname, "src/meny.html"),
      },
    },
  },
});
