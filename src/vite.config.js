import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    // Enable history API fallback for React Router
    historyApiFallback: true,
    // Handle static files
    middlewareMode: false,
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    // Ensure proper handling of static assets
    copyPublicDir: true,
  },
  publicDir: 'public',
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
      '@components': resolve(__dirname, './components'),
      '@styles': resolve(__dirname, './styles'),
    }
  },
  // Configure how Vite handles different file types
  assetsInclude: ['**/*.txt', '**/*.xml'],
  // Ensure static files are served correctly
  preview: {
    historyApiFallback: true,
  }
})