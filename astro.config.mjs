import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
// import vercel from "@astrojs/vercel/serverless";
import netlify from '@astrojs/netlify';

// https://astro.build/config


export default defineConfig({
  integrations: [tailwind(), react()],
  output: "server",
  adapter: netlify({
    edgeMiddleware: true
  }),
  // build: {
  //   rollupOptions: {
  //     external: ["sharp"] // Add 'sharp' to the external list
  //   }
  // },
  // image: {
  //   service: {
  //     entrypoint: "/public",
  //     config: {
  //       limitInputPixels: false
  //     }
  //   }
  // }
});
