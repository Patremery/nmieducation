<?php

return [
    /*
    |--------------------------------------------------------------------------
    | Document language
    |--------------------------------------------------------------------------
    |
    | Value of the `<html lang>` attribute and the `inLanguage` of the JSON-LD
    | graph. The whole site is authored in French.
    |
    */

    'html_lang' => env('SEO_HTML_LANG', 'fr'),

    /*
    |--------------------------------------------------------------------------
    | Default OpenGraph image
    |--------------------------------------------------------------------------
    |
    | Absolute URL of the 1200x630 image used as `og:image` when a page has no
    | more specific image of its own (home, static pages, etc.).
    |
    */

    'default_og_image' => env('SEO_DEFAULT_OG_IMAGE', 'images/og-default.jpg'),

    /*
    |--------------------------------------------------------------------------
    | Twitter handle
    |--------------------------------------------------------------------------
    */

    'twitter_site' => env('SEO_TWITTER_SITE', '@nmieducationcam'),

    /*
    |--------------------------------------------------------------------------
    | Publisher / organisation details used by the JSON-LD `Organization` node
    |--------------------------------------------------------------------------
    |
    | Anything left as null is simply omitted from the structured data instead of
    | being emitted as an empty value.
    |
    */

    'publisher' => [
        'name' => env('SEO_PUBLISHER_NAME', 'NMI Education'),
        'legal_name' => env('SEO_PUBLISHER_LEGAL_NAME', 'NMI Education SARL'),
        'url' => env('SEO_PUBLISHER_URL'),
        'logo' => env('SEO_PUBLISHER_LOGO'),
        'description' => env('SEO_PUBLISHER_DESCRIPTION'),
        'email' => env('SEO_PUBLISHER_EMAIL', 'frontdesk@nmieducation.com'),
        'telephone' => env('SEO_PUBLISHER_PHONE', '+237 682 000 200'),
        'founding_date' => env('SEO_PUBLISHER_FOUNDING_DATE'),
        'address' => [
            'street' => env('SEO_PUBLISHER_STREET', 'Nomayos, entrée route Ngoumou'),
            'address_locality' => env('SEO_PUBLISHER_CITY', 'Yaoundé'),
            'address_region' => env('SEO_PUBLISHER_REGION'),
            'postal_code' => env('SEO_PUBLISHER_POSTAL_CODE', 'P.O. Box 31267'),
            'address_country' => env('SEO_PUBLISHER_COUNTRY', 'CM'),
        ],
        'geo' => [
            'latitude' => env('SEO_PUBLISHER_LATITUDE'),
            'longitude' => env('SEO_PUBLISHER_LONGITUDE'),
        ],
        'same_as' => array_values(array_filter([
            env('SEO_SOCIAL_FACEBOOK', 'https://facebook.com/nmieducationsarl'),
            env('SEO_SOCIAL_TWITTER', 'https://twitter.com/nmieducationcam'),
            env('SEO_SOCIAL_LINKEDIN', 'https://www.linkedin.com/company/nmi-education-sarl'),
            env('SEO_SOCIAL_YOUTUBE', 'https://www.youtube.com/@nmieducation5180'),
            env('SEO_SOCIAL_INSTAGRAM'),
        ])),
    ],

    /*
    |--------------------------------------------------------------------------
    | Sitemap
    |--------------------------------------------------------------------------
    */

    'sitemap' => [
        'cache_key' => 'seo.sitemap',
        'cache_ttl' => (int) env('SEO_SITEMAP_TTL', 3600),
        'per_page' => 500,
    ],
];
