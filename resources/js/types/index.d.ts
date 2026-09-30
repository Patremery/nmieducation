interface Settings {
    support_phone: string | null;
    support_email: string | null;
    address: string | null;
    site_name: string | null;
    site_description: string | null;
    logo: string | null;
    favicon: string | null;
    theme_color: string | null;
}

interface BreadcrumbCrumb {
    label: string;
    href: string;
}

interface SeoPayload {
    site_name?: string;
    title?: string | null;
    description?: string | null;
    keywords?: string | null;
    logo?: string | null;
    favicon?: string | null;
    theme_color?: string | null;
    og_image?: string | null;
    image?: string | null;
    canonical?: string | null;
    url?: string | null;
    twitter_site?: string | null;
    locale?: string;
    type?: "website" | "article" | "book" | "profile";
    noindex?: boolean;
    nofollow?: boolean;
    publishedTime?: string | null;
    modifiedTime?: string | null;
    section?: string | null;
    tags?: string[] | null;
    breadcrumbs?: BreadcrumbCrumb[];
    schema?: Record<string, unknown>[] | null;
}

/** Shape of the props `App\Http\Middleware\HandleInertiaRequests` shares globally. */
interface SharedPageProps {
    settings: Settings;
    seo: SeoPayload;
    [key: string]: unknown;
}
