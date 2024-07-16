import { defineConfig } from "astro/config";

import netlify from "@astrojs/netlify";

const prerender = process.env.PRERENDER_ENABLED;

let config;

if (prerender === "true") {
  // https://astro.build/config
  config = defineConfig();
} else {
  // https://astro.build/config
  config = defineConfig({
    output: "server",
    adapter: netlify(),
  });
}

export default config;
