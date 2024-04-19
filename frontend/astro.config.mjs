import { defineConfig } from "astro/config";
import { loadEnv } from "vite";
import storyblok from "@storyblok/astro";
import sitemap from "@astrojs/sitemap";

const { STORYBLOCK_ACCESS_TOKEN } = loadEnv(process.env.NODE_ENV, process.cwd(), "");

// https://astro.build/config
export default defineConfig({
  site: "https://zelfplukken.nl",
  integrations: [
    sitemap(),
    storyblok({
      accessToken: STORYBLOCK_ACCESS_TOKEN,
      components: {
        page: "storyblok/page",
        pagina_header: "storyblok/page-header",
        paragraaf: "storyblok/paragraph",
        album: "storyblok/album",
        index: "storyblok/index",
        menu_item: "storyblok/menu-item-blok",
        website_header: "storyblok/website-header",
      },
    }),
  ],
});
