import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:8080', // адрес вашего бэкенда
        changeOrigin: true,
        rewrite: (path) => {
          console.log(`🔄 Proxy rewrite: ${path} → ${path.replace(/^\/api/, '')}`);
          return path.replace(/^\/api/, '');
        },
        secure: false,
        configure: (proxy) => {
          proxy.on('proxyReq', (proxyReq, req) => {
            console.log('📡 proxyReq:', {
              original: req.url,
              forwarded: proxyReq.path,
              host: proxyReq.getHeader('host')
            });
          });
          proxy.on('proxyRes', (proxyRes, req) => {
            console.log('📥 proxyRes:', {
              status: proxyRes.statusCode,
              path: req.url
            });
          });
        }
      }
    }
  }
})
