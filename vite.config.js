import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { viteStaticCopy } from 'vite-plugin-static-copy' 

export default defineConfig(({ mode }) => ({
  plugins: [react(),
    viteStaticCopy({
      
      // GitHub Pages specific config
      targets: [
        {
          src: '404.html',  // Fichier 404.html à la racine du projet
          dest: '',         // Copier à la racine de dist/
        },
      ],
    }),
  ],
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

