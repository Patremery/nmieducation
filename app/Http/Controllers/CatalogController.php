<?php

namespace App\Http\Controllers;

use App\Http\Resources\AuthorResource;
use App\Http\Resources\BookResource;
use App\Mail\DownloadBookEmail;
use App\Models\Author;
use App\Models\Book;
use App\Models\BookLanguage;
use App\Models\Category;
use App\Models\Collection;
use App\Models\Download;
use App\Models\Downloader;
use App\Services\SeoService;
use App\Support\SeoSchema;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;
use Inertia\Response;

class CatalogController extends Controller
{
    public function index(?string $search = null): Response
    {
        $books = Book::published()->with(['authors', 'category', 'collection', 'language'])->latest()->get();

        $seo = SeoService::make()
            ->page([
                'title' => 'Catalogue',
                'description' => 'Parcourez le catalogue complet de NMI Education : manuels scolaires, guides pédagogiques, littérature générale et jeunesse.',
                'canonical' => url('/catalogue'),
            ])
            ->breadcrumb([
                ['name' => 'Accueil', 'url' => url('/')],
                ['name' => 'Catalogue', 'url' => url('/catalogue')],
            ])
            ->schema(SeoSchema::itemList(
                $books->take(20)->map(fn (Book $book) => [
                    'name' => $book->title,
                    'url' => route('book.show', $book->slug),
                ])->all(),
                'Catalogue NMI Education'
            ));

        return Inertia::render('Catalogue', [
            'books' => BookResource::collection($books),
            'seo' => $seo->toArray(),
        ]);
    }

    public function show(string $slug): Response
    {
        $book = Book::where('slug', $slug)->first();

        if (is_null($book)) {
            abort(404);
        }

        $book->load(['authors', 'category', 'collection', 'language']);

        $similarBooks = Book::published()
            ->where('slug', '!=', $slug)
            ->where('category_id', $book->category_id)
            ->with(['authors', 'category', 'collection', 'language'])
            ->limit(8)
            ->get();

        $authorNames = $book->authors->pluck('name')->implode(', ');
        $seo = SeoService::make()
            ->book($book)
            ->page([
                'title' => $book->meta_title ?: $book->title,
                'description' => meta_description(
                    $book->meta_description ?: strip_shortcodes($book->summary ?: $book->description)
                ),
                'image' => $book->meta_og_image
                    ? asset('storage/'.$book->meta_og_image)
                    : ($book->featured_image ? asset('storage/'.$book->featured_image) : SeoService::defaultOgImage()),
                'canonical' => route('book.show', $book->slug),
                'type' => 'book',
            ])
            ->breadcrumb(array_values(array_filter([
                ['name' => 'Accueil', 'url' => url('/')],
                ['name' => 'Catalogue', 'url' => url('/catalogue')],
                $book->category
                    ? ['name' => $book->category->label, 'url' => url('/catalogue/category/'.$book->category->code)]
                    : null,
                ['name' => $book->title, 'url' => route('book.show', $book->slug)],
            ])));

        return Inertia::render('BookPresentation', [
            'book' => $book->toResource(),
            'similarBooks' => BookResource::collection($similarBooks),
            'seo' => $seo->toArray(),
        ]);
    }

    public function category(string $code, Request $request): Response
    {
        $category = Category::where('code', $code)->first();

        if (is_null($category)) {
            abort(404);
        }

        $query = Book::query();

        // Filters that meaningfully change the result set get their own canonical
        // URL so that each combination can rank on its own.
        $filterNames = ['author_slug', 'lang', 'classroom', 'theme', 'subject', 'collection'];
        $activeFilters = array_values(array_filter(
            $filterNames,
            fn (string $key) => $request->filled($key)
        ));

        if ($request->has('author_slug')) {
            $query->whereHas('authors', function ($q) use ($request) {
                $q->where('slug', $request->input('author_slug'));
            });
        }

        if ($request->has('lang')) {
            $query->where('book_language_id', $request->input('lang'));
        }

        if ($request->has('classroom')) {
            $query->whereJsonContains('classrooms', $request->input('classroom'));
        }

        if ($request->has('theme')) {
            $query->where('theme', $request->input('theme'));
        }

        if ($request->has('subject')) {
            $query->where('subject', $request->input('subject'));
        }

        if ($request->has('collection')) {
            $query->whereHas('collection', function ($q) use ($request) {
                $q->where('slug', $request->input('collection'));
            });
        }

        $perPage = 12;

        $paginator = $query->published()
            ->latest()
            ->where('category_id', $category->id)
            ->with(['authors', 'category', 'collection', 'language'])
            ->paginate($perPage)
            ->withQueryString();

        $books = Inertia::scroll(BookResource::collection($paginator));

        $authors = Author::published()->whereHas('books', function ($q) use ($category) {
            $q->where('category_id', $category->id);
        })->get();

        $canonical = url('/catalogue/category/'.$category->code);
        $page = (int) $request->input('page', 1);

        $description = $this->categoryDescription($category, $activeFilters, $request);

        $seo = SeoService::make()
            ->page([
                'title' => $page > 1
                    ? $category->label.' — page '.$page
                    : $category->label,
                'description' => $description,
                'canonical' => $page > 1 ? $canonical.'?page='.$page : $canonical,
                // Filtered/sorted permutations are thin duplicates of the base listing.
                'noindex' => $activeFilters !== [] || $page > 1,
            ])
            ->breadcrumb([
                ['name' => 'Accueil', 'url' => url('/')],
                ['name' => 'Catalogue', 'url' => url('/catalogue')],
                ['name' => $category->label, 'url' => $canonical],
            ]);

        return Inertia::render('CatalogCategory', [
            'code' => $code,
            'title' => $category->label,
            'books' => $books,
            'authors' => AuthorResource::collection($authors),
            'languages' => BookLanguage::all(),
            'classrooms' => Book::select('classrooms')->distinct()->get()->pluck('classrooms'),
            'themes' => Book::select('theme')->distinct()->get()->pluck('theme'),
            'subjects' => Book::select('subject')->distinct()->get()->pluck('subject'),
            'collections' => Collection::published()->get(),
            'seo' => $seo->toArray(),
        ]);
    }

    public function downloadGuide(Request $request)
    {
        $request->validate([
            'username' => 'required|string|max:255',
            'email' => 'required|email|max:255',
            'phone' => 'required|string|max:255',
            'bookId' => 'required|integer',
        ]);

        return DB::transaction(function () use ($request) {
            $book = Book::findOrFail($request->input('bookId'));

            // check if user already exists
            $downloader = Downloader::where('email', $request->input('email'))->first();

            if (! $downloader) {
                // store user informations
                $downloader = Downloader::create([
                    'name' => $request->input('username'),
                    'email' => $request->input('email'),
                    'phone' => $request->input('phone'),
                ]);
            }

            // Store download in database
            Download::create([
                'downloader_id' => $downloader->id,
                'book_id' => $book->id,
                'ip_address' => $request->ip(),
                'user_agent' => $request->userAgent(),
            ]);

            // Send email to user
            Mail::to($downloader->email)->send(new DownloadBookEmail($downloader, $book));

            return Redirect::back()->with('success', 'Félicitations ! Votre document a été envoyé à votre adresse email avec succès. Consultez votre messagerie pour le télécharger.');
        });
    }

    /**
     * Build a description that reflects the active filters instead of always
     * repeating the bare category label.
     *
     * @param  array<int, string>  $activeFilters
     */
    protected function categoryDescription(Category $category, array $activeFilters, Request $request): string
    {
        $base = 'Découvrez les ouvrages NMI Education en '.$category->label.' : manuels scolaires, guides pédagogiques et littérature.';

        if ($activeFilters === []) {
            return meta_description($base);
        }

        $parts = [];

        if ($slug = $request->input('author_slug')) {
            $author = Author::where('slug', $slug)->first();
            $parts[] = 'de '.($author?->name ?? $slug);
        }

        if ($language = $request->input('lang')) {
            $parts[] = 'en '.($language instanceof Model ? $language->name : $language);
        }

        if ($classroom = $request->input('classroom')) {
            $parts[] = $classroom;
        }

        if ($theme = $request->input('theme')) {
            $parts[] = $theme;
        }

        return meta_description($base.($parts ? ' Sélection filtrée : '.implode(', ', $parts).'.' : ''));
    }
}
