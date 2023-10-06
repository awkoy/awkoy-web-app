import { defineConfig } from "astro/config";
import storyblok from "@storyblok/astro";
import { loadEnv } from "vite";
import basicSsl from "@vitejs/plugin-basic-ssl";
import tailwind from "@astrojs/tailwind";
const env = loadEnv("", process.cwd(), "STORYBLOK");

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [basicSsl()],
    server: {
      https: true,
    },
  },
  integrations: [
    storyblok({
      accessToken: env.STORYBLOK_TOKEN,
      components: {
        blogPost: "storyblok/BlogPost",
      },
      apiOptions: {
        region: "eu",
      },
    }),
    tailwind(),
  ],
});
