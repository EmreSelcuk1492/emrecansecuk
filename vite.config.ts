import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3001
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          // Separate vendor chunks
          react: ['react', 'react-dom'],
          router: ['react-router-dom'],
          globe: ['react-globe.gl'],
          // Group components by functionality
          'portfolio-core': [
            './src/components/Navigation.tsx',
            './src/components/HeroSection.tsx',
            './src/components/Footer.tsx'
          ],
          'portfolio-sections': [
            './src/components/ExperienceSection.tsx',
            './src/components/ProjectsSection.tsx',
            './src/components/ContactSection.tsx'
          ]
        }
      }
    },
    // Increase chunk size warning limit for now, we'll optimize further
    chunkSizeWarningLimit: 1000,
    // Enable minification and compression
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true
      }
    }
  },
  // Optimize dependencies
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom'],
    exclude: ['react-globe.gl'] // Will be loaded dynamically
  }
})
