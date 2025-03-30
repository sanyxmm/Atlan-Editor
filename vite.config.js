import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    minify: 'terser', // Ensures minification
    terserOptions: {
      compress: {
        drop_console: true, // Remove console logs
      },
    },
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return 'vendor'; // Split vendor code
          }
        },
      },
    },
  },
});
