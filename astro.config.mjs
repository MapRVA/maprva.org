// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  site: process.env.ASTRO_SITE || "https://maprva.org",
  base: process.env.ASTRO_BASE || "/",
  output: "static",
  integrations: [mdx()],
  build: { assets: "_assets" },
  vite: {
    plugins: [tailwindcss()],
    css: { preprocessorOptions: {} },
  },
});
