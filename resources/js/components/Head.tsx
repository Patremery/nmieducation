import { Head as InertiaHead, usePage } from "@inertiajs/react";
import { useMemo } from "react";

export interface BreadcrumbItem {
    label: string;
    href: string;
}

export interface SeoMeta {
    /** Page title WITHOUT the site name; the component appends " | Site". */
    title?: string | null;
    description?: string | null;
    keywords?: string | null;
    /** Absolute URL of the social/canonical image. */
    image?: string | null;
    /** Absolute canonical URL. */
    canonical?: string | null;
    type?: "website" | "article" | "book" | "profile";
    noindex?: boolean;
    nofollow?: boolean;
    publishedTime?: string | null;
    modifiedTime?: string | null;
    section?: string | null;
    tags?: string[] | null;
    /** JSON-LD graph produced by the SEO service. */
    schema?: Record<string, unknown>[] | null;
}

const absoluteUrl = (value?: string | null): string | undefined => {
    if (!value) return undefined;
    if (/^https?:\/\//i.test(value)) return value;
    if (typeof window === "undefined") return value;
    return new URL(value, window.location.origin).toString();
};

/**
 * Single source of truth for the document `<head>`.
 *
 * The same tags are rendered server-side by `resources/views/partials/seo.blade.php`
 * with matching `inertia="..."` keys, so Inertia's head manager reconciles the two
 * rather than duplicating them. Here we keep them in sync across client-side
 * navigations, and fall back to the site defaults when a page omits a value.
 */
const Head = ({
    title,
    description,
    keywords,
    image,
    canonical,
    type = "website",
    noindex = false,
    nofollow = false,
    publishedTime,
    modifiedTime,
    section,
    tags,
    schema,
}: SeoMeta) => {
    const { seo, settings } = usePage<SharedPageProps>().props;

    const siteName = seo?.site_name || settings?.site_name || "NMI Education";
    const fallbackDescription = seo?.description || settings?.site_description || "";
    const fallbackImage = seo?.og_image || seo?.image || settings?.logo;

    const pageTitle = useMemo(() => {
        const raw = (title ?? "").trim();
        if (!raw || raw === siteName) return siteName;
        // Avoid "Page - NMI Education - NMI Education" when a page passes the full title.
        if (raw.endsWith(siteName)) return raw;
        return `${raw} | ${siteName}`;
    }, [title, siteName]);

    const metaDescription = (description || fallbackDescription || "").trim();
    const metaKeywords = (keywords ?? seo?.keywords ?? "").toString().trim();
    const shareImage = absoluteUrl(image || fallbackImage);
    const canonicalUrl = absoluteUrl(canonical ?? seo?.canonical);

    const robots = [
        noindex ? "noindex" : "index",
        nofollow ? "nofollow" : "follow",
        "max-image-preview:large",
        "max-snippet:-1",
        "max-video-preview:-1",
    ].join(", ");

    // Structured data is only useful if it is valid JSON.
    const jsonLd = useMemo(() => {
        if (!schema?.length) return null;
        try {
            return JSON.stringify({
                "@context": "https://schema.org",
                "@graph": schema,
            });
        } catch {
            return null;
        }
    }, [schema]);

    return (
        <InertiaHead title={pageTitle}>
            {/* ---- Core ---- */}
            <meta
                name="description"
                content={metaDescription}
                head-key="seo-description"
            />
            {metaKeywords && (
                <meta
                    name="keywords"
                    content={metaKeywords}
                    head-key="seo-keywords"
                />
            )}
            <meta name="author" content={siteName} head-key="seo-author" />
            <meta name="robots" content={robots} head-key="seo-robots" />
            <meta name="googlebot" content={robots} head-key="seo-googlebot" />
            {canonicalUrl && (
                <link rel="canonical" href={canonicalUrl} head-key="seo-canonical" />
            )}

            {/* ---- OpenGraph ---- */}
            <meta
                property="og:site_name"
                content={siteName}
                head-key="seo-og-site-name"
            />
            <meta property="og:type" content={type} head-key="seo-og-type" />
            <meta
                property="og:locale"
                content={seo?.locale || "fr_FR"}
                head-key="seo-og-locale"
            />
            <meta
                property="og:title"
                content={pageTitle}
                head-key="seo-og-title"
            />
            {metaDescription && (
                <meta
                    property="og:description"
                    content={metaDescription}
                    head-key="seo-og-description"
                />
            )}
            {shareImage && (
                <meta
                    property="og:image"
                    content={shareImage}
                    head-key="seo-og-image"
                />
            )}
            {shareImage && (
                <>
                    <meta
                        property="og:image:secure_url"
                        content={shareImage}
                        head-key="seo-og-image-secure"
                    />
                    <meta
                        property="og:image:width"
                        content="1200"
                        head-key="seo-og-image-width"
                    />
                    <meta
                        property="og:image:height"
                        content="630"
                        head-key="seo-og-image-height"
                    />
                    <meta
                        property="og:image:alt"
                        content={pageTitle}
                        head-key="seo-og-image-alt"
                    />
                </>
            )}
            {canonicalUrl && (
                <meta
                    property="og:url"
                    content={canonicalUrl}
                    head-key="seo-og-url"
                />
            )}

            {/* ---- Article / Book specifics ---- */}
            {(type === "article" || type === "book") && (
                <>
                    {publishedTime && (
                        <meta
                            property="article:published_time"
                            content={publishedTime}
                            head-key="seo-article-published"
                        />
                    )}
                    {modifiedTime && (
                        <meta
                            property="article:modified_time"
                            content={modifiedTime}
                            head-key="seo-article-modified"
                        />
                    )}
                    {section && (
                        <meta
                            property="article:section"
                            content={section}
                            head-key="seo-article-section"
                        />
                    )}
                    {tags?.length ? (
                        <meta
                            property="article:tag"
                            content={tags.join(", ")}
                            head-key="seo-article-tag"
                        />
                    ) : null}
                </>
            )}

            {/* ---- Twitter Card ---- */}
            <meta
                name="twitter:card"
                content="summary_large_image"
                head-key="seo-twitter-card"
            />
            <meta
                name="twitter:title"
                content={pageTitle}
                head-key="seo-twitter-title"
            />
            {metaDescription && (
                <meta
                    name="twitter:description"
                    content={metaDescription}
                    head-key="seo-twitter-description"
                />
            )}
            {shareImage && (
                <meta
                    name="twitter:image"
                    content={shareImage}
                    head-key="seo-twitter-image"
                />
            )}
            {seo?.twitter_site && (
                <meta
                    name="twitter:site"
                    content={seo.twitter_site}
                    head-key="seo-twitter-site"
                />
            )}
            <meta
                name="twitter:creator"
                content={seo?.twitter_site || siteName}
                head-key="seo-twitter-creator"
            />

            {/* ---- Favicons / theme ---- */}
            {settings?.favicon && (
                <link rel="icon" href={settings.favicon} head-key="seo-favicon" />
            )}
            {settings?.favicon && (
                <link
                    rel="apple-touch-icon"
                    href={settings.favicon}
                    head-key="seo-apple-touch-icon"
                />
            )}
            {settings?.logo && (
                <link
                    rel="apple-touch-icon"
                    href={settings.logo}
                    head-key="seo-apple-touch-icon-logo"
                />
            )}
            {settings?.theme_color && (
                <meta
                    name="theme-color"
                    content={settings.theme_color}
                    head-key="seo-theme-color"
                />
            )}

            {/* ---- Structured data ---- */}
            {jsonLd && (
                <script
                    type="application/ld+json"
                    head-key="seo-schema"
                    dangerouslySetInnerHTML={{ __html: jsonLd }}
                />
            )}
        </InertiaHead>
    );
};

export default Head;
