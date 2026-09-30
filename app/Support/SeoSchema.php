<?php

namespace App\Support;

/**
 * Builds schema.org JSON-LD graphs.
 *
 * Every method returns a ready-to-serialise array. Empty values are pruned so
 * Google never receives blank structured data.
 */
class SeoSchema
{
    /**
     * @param  array<string, mixed>  $overrides
     * @return array<string, mixed>
     */
    public static function organization(array $overrides = []): array
    {
        $config = array_replace_recursive(config('seo.publisher'), array_filter($overrides, fn ($v) => $v !== null));

        $address = array_filter($config['address'] ?? [], fn ($v) => $v !== null && $v !== '');
        $geo = array_filter($config['geo'] ?? [], fn ($v) => $v !== null && $v !== '');

        $logo = $config['logo'] ?? settings('site_logo');

        $node = [
            '@type' => 'Organization',
            '@id' => url('/#organization'),
            'name' => $config['name'] ?? config('app.name'),
            'url' => $config['url'] ?? url('/'),
        ];

        if ($legal = $config['legal_name'] ?? null) {
            $node['legalName'] = $legal;
        }

        if ($url = setting_url($logo)) {
            $node['logo'] = ['@type' => 'ImageObject', 'url' => $url];
        }

        if ($image = $config['image'] ?? null) {
            $node['image'] = $image;
        }

        if ($description = $config['description'] ?? settings('site_description')) {
            $node['description'] = meta_description($description);
        }

        $email = $config['email'] ?? settings('support_email');
        $phone = $config['telephone'] ?? settings('support_phone');

        if ($email || $phone) {
            $node['contactPoint'] = array_filter([
                '@type' => 'ContactPoint',
                'contactType' => 'customer service',
                'email' => $email ?: null,
                'telephone' => $phone ?: null,
                'areaServed' => 'CM, FR, BE, CH, CA',
                'availableLanguage' => ['fr', 'en'],
            ]);
        }

        if ($foundingDate = $config['founding_date'] ?? null) {
            $node['foundingDate'] = $foundingDate;
        }

        if ($address !== []) {
            $node['address'] = ['@type' => 'PostalAddress'] + $address;
        }

        if (count($geo) === 2) {
            $node['geo'] = [
                '@type' => 'GeoCoordinates',
                'latitude' => $geo['latitude'],
                'longitude' => $geo['longitude'],
            ];
        }

        if (! empty($config['same_as'])) {
            $node['sameAs'] = array_values($config['same_as']);
        }

        return array_filter($node, fn ($value) => $value !== null && $value !== '' && $value !== []);
    }

    /**
     * @return array<string, mixed>
     */
    public static function website(): array
    {
        return array_filter([
            '@type' => 'WebSite',
            '@id' => url('/#website'),
            'url' => url('/'),
            'name' => settings('site_name') ?? config('app.name'),
            'description' => settings('site_description') ?? null,
            'inLanguage' => 'fr',
            'publisher' => ['@id' => url('/#organization')],
        ], fn ($value) => $value !== null && $value !== '' && $value !== []);
    }

    /**
     * @param  array<string, mixed>  $meta
     * @return array<string, mixed>
     */
    public static function webPage(array $meta): array
    {
        $url = $meta['canonical'] ?? url()->current();

        $node = array_filter([
            '@type' => 'WebPage',
            '@id' => $url.'#webpage',
            'url' => $url,
            'name' => $meta['title'] ?? null,
            'description' => $meta['description'] ?? null,
            'isPartOf' => ['@id' => url('/#website')],
            'inLanguage' => 'fr',
        ], fn ($value) => $value !== null && $value !== '');

        if (! empty($meta['image'])) {
            $node['primaryImageOfPage'] = ['@type' => 'ImageObject', 'url' => $meta['image']];
        }

        if (! empty($meta['noindex'])) {
            $node['robots'] = 'noindex, follow';
        }

        return $node;
    }

    /**
     * @param  array<int, array{name: string, url: string}>  $items
     * @return array<string, mixed>
     */
    public static function breadcrumb(array $items): array
    {
        $list = [];
        $position = 1;

        foreach ($items as $item) {
            $list[] = array_filter([
                '@type' => 'ListItem',
                'position' => $position++,
                'name' => $item['name'],
                'item' => $item['url'],
            ], fn ($value) => $value !== null && $value !== '');
        }

        return [
            '@context' => 'https://schema.org',
            '@type' => 'BreadcrumbList',
            'itemListElement' => $list,
        ];
    }

    /**
     * @param  array<string, mixed>  $data
     * @return array<string, mixed>
     */
    public static function book(array $data): array
    {
        $node = array_filter([
            '@type' => 'Book',
            '@id' => $data['url'].'#book',
            'name' => $data['title'],
            'url' => $data['url'],
            'inLanguage' => $data['language'] ?? null,
            'isbn' => $data['isbn'] ?? null,
            'numberOfPages' => $data['pages'] ?? null,
            'datePublished' => $data['published_at'] ?? null,
            'description' => $data['description'] ?? null,
            'image' => $data['image'] ?? null,
            'about' => $data['category'] ?? null,
        ], fn ($value) => $value !== null && $value !== '');

        if (! empty($data['authors'])) {
            $node['author'] = array_values(array_map(
                fn (array $author) => array_filter([
                    '@type' => 'Person',
                    'name' => $author['name'] ?? null,
                    'url' => $author['url'] ?? null,
                ], fn ($value) => $value !== null && $value !== ''),
                $data['authors']
            ));
        }

        $node['publisher'] = ['@id' => url('/#organization')];

        if (! empty($data['offers']['price'])) {
            $node['offers'] = array_filter([
                '@type' => 'Offer',
                'url' => $data['url'],
                'price' => $data['offers']['price'],
                'priceCurrency' => $data['offers']['currency'] ?? null,
                'priceValidUntil' => now()->addYear()->toDateString(),
                'availability' => 'https://schema.org/InStock',
                'itemCondition' => 'https://schema.org/NewCondition',
                'seller' => ['@id' => url('/#organization')],
            ], fn ($value) => $value !== null && $value !== '');
        }

        if (! empty($data['audience'])) {
            $node['audience'] = [
                '@type' => 'PeopleAudience',
                'audienceType' => $data['audience'],
            ];
        }

        if (! empty($data['genre'])) {
            $node['genre'] = $data['genre'];
        }

        return $node;
    }

    /**
     * @param  array<string, mixed>  $data
     * @return array<string, mixed>
     */
    public static function article(array $data): array
    {
        $title = (string) ($data['title'] ?? '');

        $node = array_filter([
            '@type' => 'BlogPosting',
            '@id' => $data['url'].'#article',
            'headline' => mb_strlen($title) > 110 ? mb_substr($title, 0, 110).'…' : $title,
            'mainEntityOfPage' => ['@type' => 'WebPage', '@id' => $data['url']],
            'url' => $data['url'],
            'description' => $data['description'] ?? null,
            'image' => $data['image'] ?? null,
            'datePublished' => $data['published_at'] ?? null,
            'dateModified' => $data['updated_at'] ?? $data['published_at'] ?? null,
            'inLanguage' => 'fr',
            'wordCount' => $data['word_count'] ?? null,
        ], fn ($value) => $value !== null && $value !== '');

        $node['author'] = [
            '@type' => 'Organization',
            'name' => $data['author'] ?? settings('site_name') ?? config('app.name'),
            'url' => url('/'),
        ];
        $node['publisher'] = ['@id' => url('/#organization')];

        if (! empty($data['categories'])) {
            $node['articleSection'] = is_array($data['categories'])
                ? implode(', ', $data['categories'])
                : $data['categories'];
        }

        if (! empty($data['tags'])) {
            $node['keywords'] = is_array($data['tags']) ? implode(', ', $data['tags']) : $data['tags'];
        }

        return $node;
    }

    /**
     * @param  array<string, mixed>  $data
     * @return array<string, mixed>
     */
    public static function person(array $data): array
    {
        $node = array_filter([
            '@type' => 'Person',
            '@id' => $data['url'].'#person',
            'name' => $data['name'],
            'url' => $data['url'],
            'description' => $data['description'] ?? null,
            'image' => $data['image'] ?? null,
            'jobTitle' => $data['job_title'] ?? null,
        ], fn ($value) => $value !== null && $value !== '');

        $sameAs = array_values(array_filter([
            $data['linkedin'] ?? null,
            $data['facebook'] ?? null,
            $data['twitter'] ?? null,
        ]));

        if ($sameAs !== []) {
            $node['sameAs'] = $sameAs;
        }

        $node['worksFor'] = ['@id' => url('/#organization')];

        return $node;
    }

    /**
     * @param  array<int, array<string, mixed>>  $items
     * @return array<string, mixed>
     */
    public static function itemList(array $items, string $name): array
    {
        $elements = [];
        $position = 1;

        foreach ($items as $item) {
            $elements[] = array_filter([
                '@type' => 'ListItem',
                'position' => $position++,
                'url' => $item['url'] ?? null,
                'name' => $item['name'] ?? null,
            ], fn ($value) => $value !== null && $value !== '');
        }

        return [
            '@context' => 'https://schema.org',
            '@type' => 'ItemList',
            'name' => $name,
            'numberOfItems' => count($elements),
            'itemListElement' => $elements,
        ];
    }
}
