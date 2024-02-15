import react from '@vitejs/plugin-react';
import { defineConfig, loadEnv } from 'vite';
import * as path from 'path';

export default defineConfig(({ mode }) => {
    process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };
    const apiPath = process.env.VITE_PROXY_PATH as string;

    return {
        plugins: [react()],
        server: {
            port: 3000,
            proxy: {
                [apiPath]: {
                    target: process.env.VITE_API_PATH,
                    changeOrigin: true,
                    secure: true,
                    rewrite: (path) => path.replace(apiPath, ''),
                },
            },
        },
        preview: {
            host: '0.0.0.0',
            port: 3000,
        },
        resolve: {
            alias: {
                '@gymbeam': path.resolve(__dirname, 'src'),
            },
        },
    };
});
