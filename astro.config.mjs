import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: "https://my-astro-4js.pages.dev",
  integrations: [mdx(), tailwind(), sitemap()],
  image: {
    // Image optimization options
    service: {
      entrypoint: "astro/assets/services/sharp",
    },
  },
});
