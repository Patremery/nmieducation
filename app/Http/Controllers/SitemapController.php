<?php

namespace App\Http\Controllers;

use App\Models\Author;
use App\Models\Book;
use App\Models\Category;
use App\Models\Post;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Cache;

/**
 * Serves sitemap.xml and robots.txt straight from the database, so newly
 * published content is discoverable without a deploy.
 */
class SitemapController extends Controller
{
    /** @var array<int, array{loc: string, lastmod: ?string, changefreq: string, priority: string}> */
    protected array $entries = [];

    public function index(): Response
    {
        $xml = Cache::remember(
            config('seo.sitemap.cache_key', 'seo.sitemap'),
            (int) config('seo.sitemap.cache_ttl', 3600),
            fn () => $this->build()
        );

        return response($xml, 200, [
            'Content-Type' => 'application/xml; charset=UTF-8',
            'Cache-Control' => 'public, max-age=3600',
        ]);
    }

    public function robots(): Response
    {
        $lines = [
            'User-agent: *',
            'Allow: /',
            '',
            '# Administration et utilitaires — aucune valeur pour l’indexation',
            'Disallow: /control-panel',
            'Disallow: /control-panel/',
            'Disallow: /admin',
            'Disallow: /storage-link',
            'Disallow: /import-posts',
            'Disallow: /_debugbar',
            'Disallow: /horizon',
            'Disallow: /telescope',
            'Disallow: /vendor/',
            'Disallow: /*?*',
            'Allow: /*?page=',
            '',
            'User-agent: GPTBot',
            'Allow: /',
            '',
            'Sitemap: '.url('/sitemap.xml'),
            '',
        ];

        return response(implode("\n", $lines), 200, [
            'Content-Type' => 'text/plain; charset=UTF-8',
            'Cache-Control' => 'public, max-age=86400',
        ]);
    }

    protected function build(): string
    {
        $this->entries = [];

        // --- Static pages -----------------------------------------------------
        foreach ([
            ['/', '1.0', 'daily'],
            ['/catalogue', '0.9', 'weekly'],
            ['/authors', '0.7', 'weekly'],
            ['/blog', '0.8', 'daily'],
            ['/about', '0.6', 'monthly'],
            ['/contact', '0.6', 'monthly'],
            ['/become-distributor', '0.6', 'monthly'],
            ['/submit-your-manuscrit', '0.6', 'monthly'],
            ['/join-us', '0.5', 'monthly'],
        ] as [$path, $priority, $changefreq]) {
            $this->add($path, null, $changefreq, $priority);
        }

        // --- Categories -------------------------------------------------------
        foreach (Category::where('is_active', true)->get() as $category) {
            $this->add('/catalogue/category/'.$category->code, null, 'weekly', '0.8');
        }

        // --- Collections ------------------------------------------------------
        // Collections are only reachable as a filter of the "catalog" category
        // (a `noindex` URL), so they are intentionally left out of the sitemap.

        // --- Books ------------------------------------------------------------
        Book::published()
            ->with(['category'])
            ->chunkById(500, function ($books) {
                foreach ($books as $book) {
                    $this->add(
                        '/book/'.$book->slug,
                        optional($book->updated_at)->toAtomString(),
                        'monthly',
                        '0.7'
                    );
                }
            });

        // --- Authors ----------------------------------------------------------
        Author::published()->chunkById(500, function ($authors) {
            foreach ($authors as $author) {
                $this->add(
                    '/author/'.$author->slug,
                    optional($author->updated_at)->toAtomString(),
                    'monthly',
                    '0.6'
                );
            }
        });

        // --- Blog posts -------------------------------------------------------
        Post::published()
            ->orderByDesc('published_at')
            ->chunkById(500, function ($posts) {
                foreach ($posts as $post) {
                    $this->add(
                        '/posts/'.$post->slug,
                        optional($post->updated_at ?? $post->published_at)->toAtomString(),
                        'monthly',
                        '0.7'
                    );
                }
            });

        $xml = ['<?xml version="1.0" encoding="UTF-8"?>'];
        $xml[] = '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">';

        foreach ($this->entries as $entry) {
            $xml[] = '  <url>';
            $xml[] = '    <loc>'.e($entry['loc'], false).'</loc>';
            if ($entry['lastmod']) {
                $xml[] = '    <lastmod>'.e($entry['lastmod'], false).'</lastmod>';
            }
            $xml[] = '    <changefreq>'.$entry['changefreq'].'</changefreq>';
            $xml[] = '    <priority>'.$entry['priority'].'</priority>';
            $xml[] = '  </url>';
        }

        $xml[] = '</urlset>';

        return implode("\n", $xml);
    }

    protected function add(string $path, ?string $lastmod, string $changefreq, string $priority): void
    {
        $this->entries[] = [
            'loc' => url($path),
            'lastmod' => $lastmod,
            'changefreq' => $changefreq,
            'priority' => $priority,
        ];
    }
}
