import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api/jikan': 'https://api.jikan.moe/v4',
      '/api/animechan': 'https://animechan.xyz/api'
    }
  }
})