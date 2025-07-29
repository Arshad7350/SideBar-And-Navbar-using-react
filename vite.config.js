import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extends: {},
  },
  plugins: [react(),tailwindcss()],
  variants: {
    extend: {
      display: ["focus-group"]
    }
  }
})
