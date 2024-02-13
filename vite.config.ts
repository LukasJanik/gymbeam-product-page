import react from '@vitejs/plugin-react';
import { defineConfig, loadEnv } from 'vite';
import * as path from 'path';

// https://vitejs.dev/config/

console.log(process.env.VITE_API_PATH);

export default defineConfig(({ mode }) => {
    process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };

    return {
        plugins: [react()],
        server: {
            proxy: {
                '/api': {
                    target: process.env.VITE_API_PATH,
                    changeOrigin: true,
                    secure: true,
                    rewrite: (path) => path.replace(/^\/api/, ''),
                },
            },
        },
        resolve: {
            alias: {
                '@gymbeam': path.resolve(__dirname, 'src'),
            },
        },
    };
});
