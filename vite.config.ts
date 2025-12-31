import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite';
import * as path from "node:path";

// https://vite.dev/config/
export default defineConfig({
    server: {
        port: 8085,
    },
  plugins: [
      vue(),
      tailwindcss(),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
    build: {
        outDir: 'dist',
        emptyOutDir: true,
        assetsDir: 'assets',
    }

})
