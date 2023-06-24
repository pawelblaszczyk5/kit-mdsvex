import adapter from "@sveltejs/adapter-auto";
import { vitePreprocess } from "@sveltejs/kit/vite";
import { mdsvex } from "mdsvex";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: [
    vitePreprocess(),

    mdsvex({
      extension: ".svx",
      layout: "./src/lib/Layout.svelte",
    }),
  ],
  extensions: [".svelte", ".svx"],
  kit: {
    adapter: adapter(),
    alias: {
      "styled-system": "./styled-system/*",
    },
  },
};

export default config;
