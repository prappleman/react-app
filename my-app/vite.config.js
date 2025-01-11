import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  server: {
    host: 'localhost', // Explicitly specify the host
    port: 5173, // Ensure the default port is used
    strictPort: true, // Ensure no port conflicts
  },
  assetsInclude: ['**/*.png'],
  plugins: [react()],
  base: './', 
})
