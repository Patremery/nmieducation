@php
    /**
     * Server-rendered SEO head.
     *
     * Everything here is also emitted by `resources/js/components/Head.tsx` using
     * the SAME `inertia="..."` keys, so Inertia's head manager reconciles the two
     * instead of duplicating the tags. Rendering it in Blade guarantees that
     * crawlers and social scrapers that do not execute JavaScript still see the
     * metadata.
     *
     * @var array<string, mixed> $seo
     */
    $seo = $seo ?? [];
    $title = $seo['title'] ?? ($seo['site_name'] ?? config('app.name'));
    $description = $seo['description'] ?? '';
    $keywords = $seo['keywords'] ?? '';
    $canonical = $seo['canonical'] ?? url()->current();
    $image = $seo['image'] ?? ($seo['og_image'] ?? null);
    $type = $seo['type'] ?? 'website';
    $siteName = $seo['site_name'] ?? config('app.name');
    $locale = $seo['locale'] ?? 'fr_FR';
    $twitterSite = $seo['twitter_site'] ?? null;
    $robots = implode(', ', [
        ($seo['noindex'] ?? false) ? 'noindex' : 'index',
        ($seo['nofollow'] ?? false) ? 'nofollow' : 'follow',
        'max-image-preview:large',
        'max-snippet:-1',
        'max-video-preview:-1',
    ]);
@endphp

<title inertia>{{ $title }}</title>

{{-- Core --}}
<meta name="description" content="{{ $description }}" inertia="seo-description" />
@if ($keywords)
    <meta name="keywords" content="{{ $keywords }}" inertia="seo-keywords" />
@endif
<meta name="author" content="{{ $siteName }}" inertia="seo-author" />
<meta name="robots" content="{{ $robots }}" inertia="seo-robots" />
<meta name="googlebot" content="{{ $robots }}" inertia="seo-googlebot" />
<link rel="canonical" href="{{ $canonical }}" inertia="seo-canonical" />

{{-- OpenGraph --}}
<meta property="og:site_name" content="{{ $siteName }}" inertia="seo-og-site-name" />
<meta property="og:type" content="{{ $type }}" inertia="seo-og-type" />
<meta property="og:locale" content="{{ $locale }}" inertia="seo-og-locale" />
<meta property="og:title" content="{{ $title }}" inertia="seo-og-title" />
@if ($description)
    <meta property="og:description" content="{{ $description }}" inertia="seo-og-description" />
@endif
@if ($image)
    <meta property="og:image" content="{{ $image }}" inertia="seo-og-image" />
    <meta property="og:image:secure_url" content="{{ $image }}" inertia="seo-og-image-secure" />
    <meta property="og:image:width" content="1200" inertia="seo-og-image-width" />
    <meta property="og:image:height" content="630" inertia="seo-og-image-height" />
    <meta property="og:image:alt" content="{{ $title }}" inertia="seo-og-image-alt" />
@endif
<meta property="og:url" content="{{ $canonical }}" inertia="seo-og-url" />

@if ($type === 'article' || $type === 'book')
    @if (! empty($seo['publishedTime']))
        <meta property="article:published_time" content="{{ $seo['publishedTime'] }}" inertia="seo-article-published" />
    @endif
    @if (! empty($seo['modifiedTime']))
        <meta property="article:modified_time" content="{{ $seo['modifiedTime'] }}" inertia="seo-article-modified" />
    @endif
    @if (! empty($seo['section']))
        <meta property="article:section" content="{{ $seo['section'] }}" inertia="seo-article-section" />
    @endif
    @if (! empty($seo['tags']))
        <meta property="article:tag" content="{{ implode(', ', (array) $seo['tags']) }}" inertia="seo-article-tag" />
    @endif
@endif

{{-- Twitter Card --}}
<meta name="twitter:card" content="summary_large_image" inertia="seo-twitter-card" />
<meta name="twitter:title" content="{{ $title }}" inertia="seo-twitter-title" />
@if ($description)
    <meta name="twitter:description" content="{{ $description }}" inertia="seo-twitter-description" />
@endif
@if ($image)
    <meta name="twitter:image" content="{{ $image }}" inertia="seo-twitter-image" />
@endif
@if ($twitterSite)
    <meta name="twitter:site" content="{{ $twitterSite }}" inertia="seo-twitter-site" />
    <meta name="twitter:creator" content="{{ $twitterSite }}" inertia="seo-twitter-creator" />
@endif

{{-- Icons / theme --}}
@if (! empty($seo['favicon']))
    <link rel="icon" href="{{ $seo['favicon'] }}" inertia="seo-favicon" />
    <link rel="apple-touch-icon" href="{{ $seo['favicon'] }}" inertia="seo-apple-touch-icon" />
@endif
@if (! empty($seo['logo']))
    <link rel="apple-touch-icon" href="{{ $seo['logo'] }}" inertia="seo-apple-touch-icon-logo" />
@endif
@if (! empty($seo['theme_color']))
    <meta name="theme-color" content="{{ $seo['theme_color'] }}" inertia="seo-theme-color" />
@endif

{{-- Structured data --}}
@if (! empty($seo['schema']))
    <script type="application/ld+json" inertia="seo-schema">@json(['@context' => 'https://schema.org', '@graph' => $seo['schema']])</script>
@endif
