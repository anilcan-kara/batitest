import vercel from "vite-plugin-vercel";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import vike from "vike/plugin";

export default defineConfig({
  plugins: [
    vike({
      prerender: true,
    }),
    react({}),
    vercel({
      source: "/.*",
    }),
  ],

  vercel: {
    additionalEndpoints: [
      {
        // entry file to the server. Default export must be a node server or a function
        source: "express-entry.ts",
        // replaces default Vike target
        destination: "ssr_",
        // already added by default Vike route
        route: false,
      },
    ],
  },

  resolve: {
    alias: {
      "@": new URL("./", import.meta.url).pathname,
    },
  },
});
