import { defineConfig } from "astro/config";
import solidJs from "@astrojs/solid-js";
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  site: "https://jacobcottam.xyz",
  vite: {
    build: {
      rollupOptions: {
        external: ["tslib"],
      },
    },
  },
  integrations: [solidJs(), tailwind(), icon()],
});
