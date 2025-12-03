import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ mode }) => ({
  plugins: [react()],
  base: mode === 'production' ? '/cvppxt/' : '/',

  // GitHub Pages specific config
  build: {
    rollupOptions: {
      output: {
        // chunkFileNames, entryFileNames, assetFileNames
      }
    }
  }
}))

