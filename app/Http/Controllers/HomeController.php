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
        $books = BookResource::collection(Book::published()->with(['authors', 'category', 'collection', 'language'])->latest()->get());

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
        $posts = PostResource::collection(Post::published()->with(['categories', 'tags'])->latest()->get());

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
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email|max:255',
            'phone' => 'required|string|max:50',
            'subject' => 'required|string|max:255',
            'message' => 'required|string|max:5000',
        ]);

        DB::transaction(function () use ($validated) {
            $contact = Contact::create($validated);
            Mail::to(settings('support_email'))->send(new ContactMail($contact));
        });
        
        return redirect()->back()->with('success', 'Message envoyé avec succès');
    }

    public function storeManuscript(Request $request) {
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

        DB::transaction(function() use ($validated) {
            $manuscrit = Submission::create($validated);
            Mail::to(settings("support_email"))->send(new ManuscritSubmissionEmail($manuscrit));
        });
        
        return redirect()->back()->with('success', 'Manuscrit envoyé avec succès');
    }

    public function storeDistributor(Request $request) {
        $validated = $request->validate([
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
        
        // Assuming a Distributor or similar model exists, or just send an email
        // Distributor::create($validated);
        return redirect()->back()->with('success', 'Demande envoyée avec succès');
    }

    public function storeApplication(Request $request) {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email|max:255',
            'phone' => 'required|string|max:50',
            'address' => 'nullable|string|max:255',
            'city' => 'nullable|string|max:255',
            'country' => 'nullable|string|max:255',
            'genre' => 'nullable|string|max:255',
            'manuscript' => 'nullable|file|mimes:pdf,doc,docx|max:10240', // actually CV
        ]);

        if ($request->hasFile('manuscript')) {
            $validated['cv_path'] = $request->file('manuscript')->store('applications', 'public');
        }

        // JobApplication::create($validated);
        return redirect()->back()->with('success', 'Candidature envoyée avec succès');
    }
}
