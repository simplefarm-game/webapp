import { defineConfig } from "vite";

export default defineConfig({
    build: {
        minify: 'terser',
        outDir: 'dist',
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
});