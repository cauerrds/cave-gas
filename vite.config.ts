import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import sitemap from "vite-plugin-sitemap";
import { vitePrerenderPlugin } from "vite-prerender-plugin";

const SITE_URL = "https://gas.cavesolucoes.com.br"; // ajuste

export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    hmr: { overlay: false },
  },

  plugins: [
    react(),

    // Prerender (gera HTML pronto do "/")
    vitePrerenderPlugin({
      renderTarget: "#root",
      // aponta pro script que exporta prerender()
      prerenderScript: path.resolve(__dirname, "src/prerender.tsx"),
      additionalPrerenderRoutes: ["/"],
    }),

    // Sitemap (1 rota)
    sitemap({
      hostname: SITE_URL,
      dynamicRoutes: ["/"],
    }),

    mode === "development" && componentTagger(),
  ].filter(Boolean),

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));