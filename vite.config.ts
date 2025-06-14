import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { sendEmail } from './server/api/send-email';
import type { Connect } from 'vite';
import type { IncomingMessage, ServerResponse } from 'http';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    {
      name: 'email-api',
      configureServer(server) {
        server.middlewares.use('/api/send-email', async (req: IncomingMessage, res: ServerResponse) => {
          if (req.method === 'POST') {
            let body = '';
            req.on('data', (chunk: Buffer) => {
              body += chunk.toString();
            });
            req.on('end', async () => {
              try {
                (req as any).body = JSON.parse(body);
                await sendEmail(req as any, res as any);
              } catch (error) {
                console.error('Error parsing request body:', error);
                res.statusCode = 400;
                res.end(JSON.stringify({ error: 'Invalid request body' }));
              }
            });
          } else {
            res.statusCode = 405;
            res.end(JSON.stringify({ error: 'Method not allowed' }));
          }
        });
      },
    },
  ],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:5173',
        changeOrigin: true,
        configure: (proxy, _options) => {
          proxy.on('error', (err, _req, _res) => {
            console.log('proxy error', err);
          });
          proxy.on('proxyReq', (proxyReq, req, _res) => {
            console.log('Sending Request to the Target:', req.method, req.url);
          });
          proxy.on('proxyRes', (proxyRes, req, _res) => {
            console.log('Received Response from the Target:', proxyRes.statusCode, req.url);
          });
        },
      },
    },
  },
});
