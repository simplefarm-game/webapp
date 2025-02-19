import viteBasicSslPlugin from "@vitejs/plugin-basic-ssl";
import { defineConfig } from "vite";

export default defineConfig({
    plugins: [viteBasicSslPlugin()],
    build: {
        outDir: './docs'
    },
    base: './'
});