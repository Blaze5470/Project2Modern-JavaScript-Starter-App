import { defineConfig } from "vite";

export default defineConfig({
    base: "/Project2Modern-JavaScript-Starter-App/",

    server: {
        watch: {
            usePolling: true,
        },
    },
});