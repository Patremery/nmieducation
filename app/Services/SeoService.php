<?php

namespace App\Services;

use App\Models\Author;
use App\Models\Book;
use App\Models\Post;
use App\Support\SeoSchema;
use Illuminate\Support\Arr;

/**
 * Builds the SEO payload consumed by the `<Head>` React component.
 *
 * Controllers call `SeoService::make()->page([...])` and share the result with
 * Inertia; the front-end renders `<title>`, `description`, OpenGraph, Twitter
 * Cards, canonical, robots and the JSON-LD graph from it.
 */
class SeoService
{
    /** @var array<string, mixed> */
    protected array $meta = [];

    /** @var array<int, array<string, mixed>> */
    protected array $schema = [];

    public static function make(): self
    {
        return new self;
    }

    /**
     * Global, site-wide SEO defaults (shared with every Inertia response).
     *
     * @return array<string, mixed>
     */
    public static function defaults(): array
    {
        $siteName = settings('site_name') ?? config('app.name');

        return [
            'site_name' => $siteName,
            'title' => $siteName,
            'description' => meta_description(settings('site_description')),
            'keywords' => settings('seo_keywords'),
            'logo' => setting_url(settings('site_logo')),
            'favicon' => setting_url(settings('site_favicon')),
            'theme_color' => settings('theme_color') ?: '#0d6efd',
            'og_image' => self::defaultOgImage(),
            'twitter_site' => config('seo.twitter_site'),
            'locale' => 'fr_FR',
        ];
    }

    public static function defaultOgImage(): string
    {
        $image = (string) config('seo.default_og_image');

        if (preg_match('#^https?://#i', $image) === 1) {
            return $image;
        }

        return asset($image);
    }

    /**
     * Define (or override) the meta of the current page.
     *
     * @param  array<string, mixed>  $meta
     */
    public function page(array $meta = []): static
    {
        $this->meta = array_filter(
            array_merge($this->meta, $meta),
            fn ($value) => $value !== null && $value !== '' && $value !== []
        );

        return $this;
    }

    /**
     * Append one or more JSON-LD nodes to the graph.
     *
     * @param  array<string, mixed>|array<int, array<string, mixed>>  $schema
     */
    public function schema(array $schema): static
    {
        foreach ($schema as $node) {
            if ($node !== []) {
                $this->schema[] = $node;
            }
        }

        return $this;
    }

    /**
     * Convenience helper: builds the breadcrumb trail and its JSON-LD node.
     *
     * @param  array<int, array{name: string, url: string}>  $items
     */
    public function breadcrumb(array $items): static
    {
        $this->meta['breadcrumbs'] = $items;

        return $this->schema(SeoSchema::breadcrumb($items));
    }

    /**
     * Compose a Book node from a model (or an already-resourced array).
     *
     * @param  Book|array<string, mixed>  $book
     */
    public function book(Book|array $book): static
    {
        $data = $book instanceof Book ? $this->bookData($book) : $book;

        return $this->schema(SeoSchema::book($data));
    }

    /**
     * Compose a BlogPosting node from a model (or an already-resourced array).
     *
     * @param  Post|array<string, mixed>  $post
     */
    public function article(Post|array $post): static
    {
        $data = $post instanceof Post ? $this->postData($post) : $post;

        return $this->schema(SeoSchema::article($data));
    }

    /**
     * Compose a Person node from a model (or an already-resourced array).
     *
     * @param  Author|array<string, mixed>  $author
     */
    public function person(Author|array $author): static
    {
        $data = $author instanceof Author ? $this->authorData($author) : $author;

        return $this->schema(SeoSchema::person($data));
    }

    /**
     * Compose an ItemList node (catalogue grids, blog indexes...).
     *
     * @param  array<int, array<string, mixed>>  $items
     */
    public function itemList(array $items, string $name): static
    {
        return $this->schema(SeoSchema::itemList($items, $name));
    }

    /**
     * Final payload handed to the front-end.
     *
     * @return array<string, mixed>
     */
    public function toArray(): array
    {
        $meta = array_merge(self::defaults(), $this->meta);

        $meta['title'] = $this->composeTitle($meta['title'] ?? null);
        $meta['description'] = meta_description($meta['description'] ?? '');
        $meta['image'] = $meta['image'] ?? ($meta['og_image'] ?? self::defaultOgImage());
        $meta['canonical'] = $meta['canonical'] ?? url()->current();
        $meta['url'] = $meta['canonical'];
        $meta['noindex'] = (bool) ($meta['noindex'] ?? false);
        $meta['nofollow'] = (bool) ($meta['nofollow'] ?? false);
        $meta['type'] = $meta['type'] ?? 'website';

        $graph = array_merge(
            [SeoSchema::organization(), SeoSchema::website(), SeoSchema::webPage($meta)],
            $this->schema
        );

        $meta['schema'] = array_values(array_filter($graph));

        return $meta;
    }

    /**
     * Build the `<title>` value: "Page — Site" (without duplicating the site name).
     */
    protected function composeTitle(?string $title): string
    {
        $siteName = settings('site_name') ?? config('app.name');

        $title = trim((string) $title) ?: $siteName;

        if ($title === $siteName) {
            return $title;
        }

        return $title.' | '.$siteName;
    }

    /**
     * @return array<string, mixed>
     */
    protected function bookData(Book $book): array
    {
        $book->loadMissing(['authors', 'category', 'language']);

        return [
            'url' => route('book.show', $book->slug),
            'title' => $book->meta_title ?: $book->title,
            'description' => meta_description($book->meta_description ?: strip_shortcodes($book->summary ?: $book->description)),
            'image' => $book->meta_og_image
                ? asset('storage/'.$book->meta_og_image)
                : ($book->featured_image ? asset('storage/'.$book->featured_image) : self::defaultOgImage()),
            'isbn' => $book->ISBN,
            'pages' => $book->pages ?: null,
            'language' => $book->language?->name,
            'category' => $book->category?->label,
            'audience' => $book->audience,
            'genre' => $book->theme,
            'published_at' => optional($book->publication_date)->toDateString(),
            'authors' => $book->authors->map(fn (Author $author) => [
                'name' => $author->name,
                'url' => route('author.show', $author->slug),
            ])->all(),
            'offers' => $book->price ? [
                'price' => $book->price,
                'currency' => 'XAF',
            ] : [],
        ];
    }

    /**
     * @return array<string, mixed>
     */
    protected function postData(Post $post): array
    {
        $plain = strip_shortcodes($post->content);

        return [
            'url' => route('article.show', $post->slug),
            'title' => $post->meta_title ?: $post->title,
            'description' => meta_description($post->meta_description ?: $post->sub_title ?: $plain),
            'image' => $post->meta_og_image
                ? asset('storage/'.$post->meta_og_image)
                : ($post->featured_image ? asset('storage/'.$post->featured_image) : self::defaultOgImage()),
            'published_at' => optional($post->published_at)->toIso8601String(),
            'updated_at' => optional($post->updated_at)->toIso8601String(),
            'word_count' => str_word_count($plain) ?: null,
            'categories' => $post->categories->pluck('name')->all(),
            'tags' => $post->tags->pluck('name')->all(),
            'author' => $post->author?->name,
        ];
    }

    /**
     * @return array<string, mixed>
     */
    protected function authorData(Author $author): array
    {
        return [
            'url' => route('author.show', $author->slug),
            'name' => $author->name,
            'description' => meta_description($author->meta_description ?: strip_shortcodes($author->biography)),
            'image' => $author->meta_og_image
                ? asset('storage/'.$author->meta_og_image)
                : ($author->photo ? asset('storage/'.$author->photo) : self::defaultOgImage()),
            'job_title' => $author->profession,
            'linkedin' => $author->linkedin_url,
            'facebook' => $author->facebook_url,
            'twitter' => $author->twitter_url,
        ];
    }

    /**
     * Build the meta of a paginated listing and keep ?page=N self-canonical.
     */
    public static function pagination(int $currentPage, int $lastPage): array
    {
        if ($currentPage <= 1) {
            return ['noindex' => true];
        }

        return [
            'canonical' => request()->fullUrlWithQuery(['page' => $currentPage]),
            'noindex' => $currentPage > $lastPage,
        ];
    }

    /**
     * Resolve a route path, tolerating routes that may not be named.
     */
    public static function route(string $name, mixed $parameters = []): ?string
    {
        try {
            return route($name, $parameters);
        } catch (\Throwable) {
            return Arr::get(Arr::wrap($parameters), 0) ? url(Arr::get(Arr::wrap($parameters), 0)) : null;
        }
    }
}
