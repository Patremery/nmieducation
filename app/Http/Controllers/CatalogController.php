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
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use Inertia\Inertia;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Redirect;

class CatalogController extends Controller
{
    public function index(string $search = null)
    {
        $books = BookResource::collection(Book::published()->with(['authors', 'category', 'collection', 'language'])->get());

        return Inertia::render('Catalogue', [
            'books' => $books
        ]);
    }

    public function show($id)
    {
        $book = Book::findOrFail($id)->toResource();
        $similarBooks = BookResource::collection(Book::published()
                        ->where("id", "!=", $id)
                        ->where('category_id', $book->category_id)
                        ->with(['authors','category', 'collection', 'language'])->get());

        return Inertia::render('BookPresentation', [
            'book' => $book,
            'similarBooks' => $similarBooks
        ]);
    }

    public function category(string $code, Request $request)
    {
        //dump($request->all());
        $category = Category::where('code', $code)->first();

        $query = Book::query();

        if ($request->has('author_slug')) {
            $query->whereHas('authors', function ($q) use ($request) {
                $q->where('slug', $request->input('author_slug'));
            });
        }

        if ($request->has('lang')) {
            $query->where('book_language_id', $request->input('lang'))
            ->where('category_id', $category->id)
            ;
        }

        if($request->has('classroom')) {
            $query->whereJsonContains('classrooms', $request->input('classroom'));
        }

        if($request->has('theme')) {
            $query->where('theme', $request->input('theme'));
        }

        if($request->has('subject')) {
            $query->where('subject', $request->input('subject'));
        }

        if($request->has('collection')) {
            $query->whereHas('collection', function ($q) use ($request) {
                $q->where('slug', $request->input('collection'));
            });
        }

        $data = $query->published()
                      ->where('category_id', $category->id)
                      ->with(['authors','category', 'collection', 'language'])
                      ->get();

        $books = BookResource::collection($data);
        $authors = AuthorResource::collection(Author::published()->whereHas('books', function ($q) use ($category) {
            $q->where('category_id', $category->id);
        })->get());
        $languages = BookLanguage::all();
        $classrooms = Book::select('classrooms')->distinct()->get()->pluck('classrooms');
        $themes = Book::select('theme')->distinct()->get()->pluck('theme');
        $subjects = Book::select('subject')->distinct()->get()->pluck('subject');
        $collections = Collection::published()->get();

        return Inertia::render('CatalogCategory', [
            'code' => $code,
            'title' => $category->label,
            'books' => $books,
            'authors' => $authors,
            'languages' => $languages,
            'classrooms' => $classrooms,
            'themes' => $themes,
            'collections' => $collections,
            'subjects' => $subjects,
        ]);
    }

    public function view($id)
    {
        return Inertia::render('CatalogView', [
            'id' => $id
        ]);
    }

    public function downloadGuide(Request $request)
    {
        //dd($request->all());
        $request->validate([
            'username' => 'required|string|max:255',
            'email' => 'required|email|max:255',
            'phone' => 'required|string|max:255',
            'bookId' => 'required|integer',
        ]);

        return DB::transaction(function () use ($request) {
            $book = Book::findOrFail($request->input('bookId'));

            //check if user already exists
            $downloader = Downloader::where('email', $request->input('email'))->first();

            if(!$downloader) {
                //store user informations
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

            //Send email to user
            Mail::to($downloader->email)->send(new DownloadBookEmail($downloader, $book));

            return Redirect::back()->with('success', 'Félicitations ! Votre document a été envoyé à votre adresse email avec succès. Consultez votre messagerie pour le télécharger.');
            //return to_route('BookPresentation', $book)->with('success', 'Document downloaded successfully');
        });
    }
}
