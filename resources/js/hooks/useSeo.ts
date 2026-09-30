import { usePage } from "@inertiajs/react";
import type { SeoMeta } from "../components/Head";

/**
 * Reads the SEO payload built server-side by `App\Services\SeoService`.
 *
 * Layouts/pages spread the result straight into `<InnerPageLayout {...seo} />`
 * (which forwards it to `<Head>`), or override individual fields:
 *
 *     const seo = useSeo({ title: "Mon titre" });
 */
export function useSeo(overrides: SeoMeta = {}): SeoPayload {
    const { seo } = usePage<SharedPageProps>().props;

    return { ...(seo ?? {}), ...overrides };
}
