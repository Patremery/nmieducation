<?php

namespace App\Http\Controllers;

use App\Http\Resources\BookResource;
use App\Http\Resources\PostResource;
use App\Http\Resources\TeamResource;
use App\Mail\ContactMail;
use App\Mail\ManuscritSubmissionEmail;
use App\Models\Book;
use App\Models\Contact;
use App\Models\Post;
use App\Models\Submission;
use App\Models\Team;
use App\Services\SeoService;
use App\Support\SeoSchema;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Mail;
use Inertia\Inertia;
use Inertia\Response;

class HomeController extends Controller
{
    public function index(): Response
    {
        $books = Book::published()->with(['authors', 'category', 'collection', 'language'])->latest()->get();

        $seo = SeoService::make()
            ->page([
                'title' => 'Éditeur scolaire et littéraire au Cameroun',
                'description' => settings('site_description') ?: 'NMI Education édite et distribue des manuels scolaires, guides pédagogiques et ouvrages de littérature en Afrique centrale.',
                'image' => SeoService::defaultOgImage(),
            ])
            ->schema(SeoSchema::itemList(
                $books->take(10)->map(fn (Book $book) => [
                    'name' => $book->title,
                    'url' => route('book.show', $book->slug),
                ])->all(),
                'Dernières publications'
            ));

        return Inertia::render('Home', [
            'books' => BookResource::collection($books),
            'seo' => $seo->toArray(),
        ]);
    }

    public function contact(): Response
    {
        $contacts = [
            'address' => 'Nomayos, entrée route Ngoumou, Yaoundé - Cameroun',
            'phone' => '00237 682 000 200',
            'postalCode' => 'P.O. Box 31267 Yaoundé, Cameroun',
            'email' => 'frontdesk@nmieducation.com',
            'facebook' => 'https://facebook.com/nmieducationsarl',
            'youtube' => 'https://www.youtube.com/@nmieducation5180',
            'twitter' => 'https://twitter.com/nmieducationcam',
            'linkedin' => 'https://www.linkedin.com/company/nmi-education-sarl',
        ];

        $seo = SeoService::make()
            ->page([
                'title' => 'Contact',
                'description' => 'Contactez NMI Education : Yaoundé, Cameroun. Téléphone, e-mail, formulaire de contact et réseaux sociaux de notre maison d’édition.',
                'canonical' => route('contact'),
            ])
            ->breadcrumb([
                ['name' => 'Accueil', 'url' => url('/')],
                ['name' => 'Contact', 'url' => route('contact')],
            ]);

        return Inertia::render('Contact', [
            'contacts' => $contacts,
            'seo' => $seo->toArray(),
        ]);
    }

    public function becomeDistributor(): Response
    {
        $seo = SeoService::make()
            ->page([
                'title' => 'Devenir distributeur',
                'description' => 'Rejoignez le réseau de distribution de NMI Education et proposez nos manuels scolaires et ouvrages de littérature dans votre librairie.',
                'canonical' => route('become-distributor'),
            ])
            ->breadcrumb([
                ['name' => 'Accueil', 'url' => url('/')],
                ['name' => 'Devenir distributeur', 'url' => route('become-distributor')],
            ]);

        return Inertia::render('BecomeDistributor', ['seo' => $seo->toArray()]);
    }

    public function joinUs(): Response
    {
        $seo = SeoService::make()
            ->page([
                'title' => 'Rejoignez-nous',
                'description' => 'Offres d’emploi et candidatures chez NMI Education, éditeur scolaire et littéraire basé à Yaoundé, Cameroun.',
                'canonical' => route('join-us'),
            ])
            ->breadcrumb([
                ['name' => 'Accueil', 'url' => url('/')],
                ['name' => 'Rejoignez-nous', 'url' => route('join-us')],
            ]);

        return Inertia::render('JoinUs', ['seo' => $seo->toArray()]);
    }

    public function manuscriptSubmission(): Response
    {
        $seo = SeoService::make()
            ->page([
                'title' => 'Soumettre un manuscrit',
                'description' => 'Vous êtes auteur ? Envoyez votre manuscrit à NMI Education pour une évaluation et une éventuelle publication.',
                'canonical' => route('manuscript-submission'),
            ])
            ->breadcrumb([
                ['name' => 'Accueil', 'url' => url('/')],
                ['name' => 'Soumettre un manuscrit', 'url' => route('manuscript-submission')],
            ]);

        return Inertia::render('ManuscriptSubmission', ['seo' => $seo->toArray()]);
    }

    public function about(): Response
    {
        $team = Team::published()->latest()->get();

        $seo = SeoService::make()
            ->page([
                'title' => 'À propos',
                'description' => 'Découvrez NMI Education, maison d’édition camerounaise spécialisée dans les manuels scolaires, les guides pédagogiques et la littérature jeune et générale.',
                'canonical' => route('about'),
            ])
            ->breadcrumb([
                ['name' => 'Accueil', 'url' => url('/')],
                ['name' => 'À propos', 'url' => route('about')],
            ]);

        return Inertia::render('About', [
            'team' => TeamResource::collection($team),
            'seo' => $seo->toArray(),
        ]);
    }

    public function blog(Request $request): Response
    {
        // The front-end paginates client-side, so every post stays in the HTML and
        // remains crawlable — which is what we want for a blog this size.
        $posts = Post::published()->with(['categories', 'tags', 'author'])->latest()->get();

        $seo = SeoService::make()
            ->page([
                'title' => 'Actualités',
                'description' => 'Les actualités, annonces et coulisses de NMI Education : nouveautés éditoriales, événements et récits de la maison.',
                'canonical' => route('blog.index'),
            ])
            ->breadcrumb([
                ['name' => 'Accueil', 'url' => url('/')],
                ['name' => 'Actualités', 'url' => route('blog.index')],
            ])
            ->itemList(
                $posts->take(20)->map(fn (Post $post) => [
                    'name' => $post->title,
                    'url' => route('article.show', $post->slug),
                ])->all(),
                'Actualités NMI Education'
            );

        return Inertia::render('Blog', [
            'posts' => PostResource::collection($posts),
            'seo' => $seo->toArray(),
        ]);
    }

    public function article(string $slug)
    {
        $post = Post::published()->where('slug', $slug)->first();

        if (! $post) {
            abort(404);
        }

        $post->load(['categories', 'tags', 'author']);

        $similarPosts = Post::published()
            ->where('id', '!=', $post->id)
            ->when(
                $post->categories->isNotEmpty(),
                fn ($q) => $q->whereHas('categories', fn ($c) => $c->whereIn('blog_category_id', $post->categories->pluck('id')))
            )
            ->with(['categories', 'tags'])
            ->latest()
            ->limit(3)
            ->get();

        $latestPosts = Post::published()->with(['categories', 'tags'])->latest()->limit(3)->get();

        $seo = SeoService::make()
            ->article($post)
            ->page([
                'title' => $post->meta_title ?: $post->title,
                'description' => meta_description($post->meta_description ?: $post->sub_title ?: strip_shortcodes($post->content)),
                'image' => $post->meta_og_image
                    ? asset('storage/'.$post->meta_og_image)
                    : ($post->featured_image ? asset('storage/'.$post->featured_image) : SeoService::defaultOgImage()),
                'canonical' => route('article.show', $post->slug),
                'type' => 'article',
                'publishedTime' => optional($post->published_at)->toIso8601String(),
                'modifiedTime' => optional($post->updated_at)->toIso8601String(),
                'section' => $post->categories->first()?->name,
                'tags' => $post->tags->pluck('name')->all(),
            ])
            ->breadcrumb(array_values(array_filter([
                ['name' => 'Accueil', 'url' => url('/')],
                ['name' => 'Actualités', 'url' => route('blog.index')],
                $post->categories->first()
                    ? ['name' => $post->categories->first()->name, 'url' => route('blog.index')]
                    : null,
                ['name' => $post->title, 'url' => route('article.show', $post->slug)],
            ])));

        return Inertia::render('Article', [
            'post' => PostResource::make($post),
            'similarPosts' => PostResource::collection($similarPosts),
            'latestPosts' => PostResource::collection($latestPosts),
            'seo' => $seo->toArray(),
        ]);
    }

    public function saveContact(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email|max:255',
            'phone' => 'required|string|max:50',
            'subject' => 'required|string|max:255',
            'message' => 'required|string|max:5000',
        ]);

        DB::transaction(function () use ($validated) {
            $contact = Contact::create($validated);
            Mail::to(settings('support_email') ?: config('mail.from.address'))->send(new ContactMail($contact));
        });

        return redirect()->back()->with('success', 'Message envoyé avec succès');
    }

    public function storeManuscript(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email|max:255',
            'phone' => 'required|string|max:50',
            'address' => 'nullable|string|max:255',
            'city' => 'nullable|string|max:255',
            'country' => 'nullable|string|max:255',
            'bookTitle' => 'nullable|string|max:255',
            'category' => 'nullable|string|max:255',
            'summary' => 'nullable|string|max:5000',
            'manuscript' => 'nullable|file|mimes:pdf,doc,docx|max:10240', // max 10MB
        ]);

        if ($request->hasFile('manuscript')) {
            $validated['file'] = $request->file('manuscript')->store('manuscripts', 'public');
        }

        DB::transaction(function () use ($validated) {
            $manuscrit = Submission::create($validated);
            Mail::to(settings('support_email') ?: config('mail.from.address'))->send(new ManuscritSubmissionEmail($manuscrit));
        });

        return redirect()->back()->with('success', 'Manuscrit envoyé avec succès');
    }

    public function storeDistributor(Request $request)
    {
        $request->validate([
            'companyName' => 'required|string|max:255',
            'registrationNumber' => 'required|string|max:255',
            'creationDate' => 'nullable|date',
            'address' => 'required|string|max:255',
            'city' => 'required|string|max:255',
            'phone' => 'required|string|max:50',
            'email' => 'required|email|max:255',
            'businessType' => 'required|string|max:255',
            'legalRep' => 'required|string|max:255',
            'repPhone' => 'required|string|max:50',
            'idNumber' => 'required|string|max:255',
            'idDate' => 'required|date',
        ]);

        return redirect()->back()->with('success', 'Demande envoyée avec succès');
    }

    public function storeApplication(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email|max:255',
            'phone' => 'required|string|max:50',
            'address' => 'nullable|string|max:255',
            'city' => 'nullable|string|max:255',
            'country' => 'nullable|string|max:255',
            'genre' => 'nullable|string|max:255',
            'manuscript' => 'nullable|file|mimes:pdf,doc,docx|max:10240', // actually CV
        ]);

        return redirect()->back()->with('success', 'Candidature envoyée avec succès');
    }
}
