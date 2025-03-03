import { defineConfig } from "vite";

export default defineConfig(({ mode }) => {
    return {
        build: {
            minify: mode === 'production' ? 'terser' : 'esbuild',
            outDir: mode === 'production' ? 'dist' : 'dev-dist',
            assetsDir: 'assets',
            sourcemap: false
        },
        base: '/webapp/',
        server: {
            port: 3000,
            open: true
        },
        resolve: {
            alias: {
                '@': '/src'
            }
        }
    }
});