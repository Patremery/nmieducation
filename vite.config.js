import { defineConfig } from "vite";
import laravel from "laravel-vite-plugin";

export default defineConfig({
    plugins: [
        laravel({
            input: [
                "resources/css/app.css",
                "resources/js/App.tsx",
                "resources/css/filament/admin/theme.css",
            ],
            refresh: true,
        }),
    ],
    resolve: {
        extensions: [".js", ".ts", ".jsx", ".tsx", ".json"],
        dedupe: ["react", "react-dom"],
    },
    build: {
        rollupOptions: {
            output: {
                // Split the vendor code into a few long-lived, cacheable chunks so
                // a change in one library (or in application code) does not bust
                // the whole bundle, and browsers can download them in parallel.
                manualChunks(id) {
                    if (!id.includes("node_modules")) {
                        return;
                    }

                    if (id.includes("@inertiajs") || id.includes("axios")) {
                        return "vendor-inertia";
                    }
                    if (id.includes("framer-motion")) {
                        return "vendor-motion";
                    }
                    if (
                        id.includes("bootstrap") ||
                        id.includes("@popperjs")
                    ) {
                        return "vendor-bootstrap";
                    }
                    if (id.includes("react-icons")) {
                        return "vendor-icons";
                    }
                    if (
                        id.includes("react-slick") ||
                        id.includes("slick-carousel")
                    ) {
                        return "vendor-slider";
                    }
                    if (id.includes("react-phone-input-2")) {
                        return "vendor-phone";
                    }
                    if (
                        id.includes("dompurify") ||
                        id.includes("html-react-parser")
                    ) {
                        return "vendor-utils";
                    }
                    if (
                        id.includes("react-dom") ||
                        id.includes("scheduler") ||
                        id.includes("/react/")
                    ) {
                        return "vendor-react";
                    }

                    return "vendor";
                },
            },
            onwarn(warning, warn) {
                console.log(warning);
                warn(warning);
            },
        },
    },
});
