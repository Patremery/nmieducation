<?php

namespace App\Http\Controllers;

use App\Http\Resources\BookResource;
use App\Http\Resources\PostResource;
use App\Http\Resources\TeamResource;
use App\Models\Book;
use App\Models\Post;
use App\Models\Team;
use Illuminate\Http\Request;
use Inertia\Inertia;

class HomeController extends Controller
{
     public function index()
    {
        $books = BookResource::collection(Book::published()->with(['authors', 'category', 'collection', 'language'])->get());

        return Inertia::render('Home', [
            'books' => $books
        ]);
    }

    public function contact() {
        $data = [
            'address' => 'Nomayos, entrée route Ngoumou, Yaoundé - Cameroun',
            'phone' => '00237 682 000 200',
            'postalCode' => 'P.O. Box 31267 Yaoundé, Cameroun',
            'email' => 'frontdesk@nmieducation.com',
            'facebook' => 'https://facebook.com/nmieducationsarl',
            'youtube' => 'https://www.youtube.com/@nmieducation5180',
            'twitter' => 'https://twitter.com/nmieducationcam',
            'linkedin' => 'https://www.linkedin.com/company/nmi-education-sarl',
        ];

        return Inertia::render('Contact', [
            'contacts' => $data
        ]);
    }

    public function becomeDistributor() {
        return Inertia::render('BecomeDistributor');
    }

    public function joinUs() {
        return Inertia::render('JoinUs');
    }

    public function manuscriptSubmission() {
        return Inertia::render('ManuscriptSubmission');
    }

    public function about() {
        $team = TeamResource::collection(Team::published()->latest()->get());
        return Inertia::render('About', [
            'team' => $team
        ]);
    }
    public function blog() {
        $posts = PostResource::collection(Post::published()->with(['categories', 'tags'])->get());

        return Inertia::render('Blog', [
            'posts' => $posts
        ]);
    }

    public function article($slug) {
        $post = PostResource::make(Post::published()->where('slug', $slug)->first());

        return Inertia::render('Article', [
            'post' => $post
        ]);
    }
}
