import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  define: {
    API_URL: JSON.stringify(`http://localhost:${process.env.PORT || 5174}`)
  },
  plugins: [react()],
})
