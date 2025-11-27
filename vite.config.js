import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // Use relative base so the site works on GitHub Pages regardless of repo name
  base: './',
  build: {
    outDir: 'docs',
  },
})
