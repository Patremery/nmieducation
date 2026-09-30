import { createInertiaApp } from "@inertiajs/react";
import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "sweetalert2/dist/sweetalert2.min.css";
import "../css/app.css";
import { resolvePageComponent } from "laravel-vite-plugin/inertia-helpers";

const appName = "NMI Education";

createInertiaApp({
    // `<Head>` already composes the final "<page> | <site>" string, so the
    // callback only provides the fallback for pages that do not set a title.
    title: (title) => (title ? title : appName),
    resolve: (name: string) =>
        resolvePageComponent(
            `./pages/${name}.tsx`,
            import.meta.glob("./pages/**/*.tsx")
        ),
    setup({ el, App, props }) {
        const root = createRoot(el);
        root.render(<App {...props} />);
    },
});
