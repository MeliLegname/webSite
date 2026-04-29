import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import tailwindcss from "@tailwindcss/vite"
import path from "node:path"

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@app": path.resolve(__dirname, "./app")
    }
  },
  envPrefix: "ENV_",
  server: {
    port: 5173
  },
  build: {
    outDir: "dist"
  }
})
