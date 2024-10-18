import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: process.env.PORT || 8080,  // Default to 8080 or the environment-provided port
    host: true  // This allows the server to be accessible externally
  }
})
