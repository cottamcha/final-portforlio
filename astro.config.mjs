import { defineConfig } from "astro/config";
import solidJs from "@astrojs/solid-js";
import icon from "astro-icon";
import UnoCSS from "@unocss/astro";
import netlify from "@astrojs/netlify";

// https://astro.build/config
export default defineConfig({
  site: "https://jacobcottam.xyz",
  integrations: [solidJs(), icon(), UnoCSS({ injectReset: true })],
  output: "server",
  adapter: netlify(),
});
