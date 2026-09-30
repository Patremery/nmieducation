<?php

namespace App\Http\Controllers;

use App\Http\Resources\AuthorResource;
use App\Http\Resources\BookResource;
use App\Models\Author;
use App\Services\SeoService;
use App\Support\SeoSchema;
use Inertia\Inertia;
use Inertia\Response;

class AuthorController extends Controller
{
    public function index(): Response
    {
        $authors = Author::published()->get();

        $seo = SeoService::make()
            ->page([
                'title' => 'Nos auteurs',
                'description' => 'Découvrez les auteurs publiés par NMI Education : écrivains, sutras, enseignants et contributeurs de nos catalogues.',
                'canonical' => route('authors'),
            ])
            ->breadcrumb([
                ['name' => 'Accueil', 'url' => url('/')],
                ['name' => 'Nos auteurs', 'url' => route('authors')],
            ])
            ->schema(SeoSchema::itemList(
                $authors->map(fn (Author $author) => [
                    'name' => $author->name,
                    'url' => route('author.show', $author->slug),
                ])->all(),
                'Auteurs NMI Education'
            ));

        return Inertia::render('Authors', [
            'authors' => AuthorResource::collection($authors),
            'title' => 'Auteurs',
            'seo' => $seo->toArray(),
        ]);
    }

    public function view(string $slug): Response
    {
        $author = Author::where('slug', $slug)->first();

        if (is_null($author)) {
            abort(404);
        }

        $author->load(['books' => fn ($q) => $q->published()->with('authors', 'category', 'collection', 'language')]);

        $books = BookResource::collection($author->books);

        $seo = SeoService::make()
            ->person($author)
            ->page([
                'title' => $author->meta_title ?: $author->name,
                'description' => meta_description(
                    $author->meta_description
                        ?: strip_shortcodes($author->biography)
                        ?: 'Retrouvez les livres de '.$author->name.' publiés par NMI Education.'
                ),
                'image' => $author->meta_og_image
                    ? asset('storage/'.$author->meta_og_image)
                    : ($author->photo ? asset('storage/'.$author->photo) : SeoService::defaultOgImage()),
                'canonical' => route('author.show', $author->slug),
                'type' => 'profile',
            ])
            ->breadcrumb([
                ['name' => 'Accueil', 'url' => url('/')],
                ['name' => 'Auteurs', 'url' => route('authors')],
                ['name' => $author->name, 'url' => route('author.show', $author->slug)],
            ]);

        return Inertia::render('ViewAuthor', [
            'author' => $author->toResource(),
            'books' => $books,
            'seo' => $seo->toArray(),
        ]);
    }
}
