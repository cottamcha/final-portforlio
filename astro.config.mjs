import { defineConfig } from "astro/config";
import solidJs from "@astrojs/solid-js";
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";

import netlify from "@astrojs/netlify";

// https://astro.build/config
export default defineConfig({
  site: "https://jacobcottam.xyz",
  integrations: [solidJs(), tailwind(), icon()],
  output: "server",
  adapter: netlify(),
});
