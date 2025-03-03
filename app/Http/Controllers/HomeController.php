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
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Mail;
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
        $similarPosts = PostResource::collection(Post::published()->with(['categories', 'tags'])->where('id', '!=', $post->id)->limit(3)->get());
        $latestPosts = PostResource::collection(Post::published()->with(['categories', 'tags'])->latest()->limit(3)->get());

        return Inertia::render('Article', [
            'post' => $post,
            'similarPosts' => $similarPosts,
            'latestPosts' => $latestPosts
        ]);
    }

    public function saveContact(Request $request) {
        //dd($request->all());
        $request->validate([
            'name' => 'required',
            'email' => 'required|email',
            'phone' => 'required',
            'subject' => 'string',
            'message' => 'string',
        ]);

        DB::transaction(function () use ($request) {

            $contact = Contact::create($request->all());
            Mail::to(settings('support_email'))->send(new ContactMail($contact));

            return redirect()->back()->with('success', 'Message envoyé avec succès');
        });

    }

    public function storeManuscript(Request $request) {
        DB::transaction(function() use ($request) {
            $manuscrit = Submission::create($request->all());
            
        Mail::to(settings("support_email"))->send(new ManuscritSubmissionEmail($manuscrit));
        });
    }
}
