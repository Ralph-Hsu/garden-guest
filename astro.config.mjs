import mdx from "@astrojs/mdx";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import AutoImport from "astro-auto-import";
import { defineConfig } from "astro/config";
import remarkCollapse from "remark-collapse";
import remarkToc from "remark-toc";

// https://astro.build/config
export default defineConfig({
  site: "https://Ralph-Hsu.github.io",
  base: "/garden-guest",
  output: "static",
  trailingSlash: "ignore",
  prefetch: {
    prefetchAll: true
  },
  integrations: [react(), sitemap(), tailwind({
    config: {
      applyBaseStyles: false
    }
  }), AutoImport({
    imports: ["@components/common/Button.astro", "@shortcodes/Accordion", "@shortcodes/Notice", "@shortcodes/Youtube", "@shortcodes/Tabs", "@shortcodes/Tab"]
  }), mdx()],
  markdown: {
    remarkPlugins: [remarkToc, [remarkCollapse, {
      test: "Table of contents"
    }]],
    rehypePlugins: [],
    shikiConfig: {
      themes: {
        light: "light-plus",
        dark: "dark-plus",
      } 
    },
    extendDefaultPlugins: true
  },
});