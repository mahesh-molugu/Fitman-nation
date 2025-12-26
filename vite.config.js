import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
// For GitHub Pages: Update the base path to match your repository name
// If your repo is "Fitman-nation", use: base: '/Fitman-nation/'
// If your repo is your username.github.io, use: base: '/'
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  },
  base: '/Fitman-nation/', // ⚠️ UPDATE THIS: Change to match your GitHub repository name
})
