<?php

namespace App\Http\Controllers;

use App\Http\Resources\AuthorResource;
use App\Http\Resources\BookResource;
use App\Models\Author;
use Inertia\Inertia;

class AuthorController extends Controller
{
    public function index()
    {
        $data = Author::published()->get(); 
        $authors = AuthorResource::collection($data);
        
        return Inertia::render('Authors', [
            'authors' => $authors,
            'title' => 'Auteurs'
        ]);
    }

    public function view(string $slug)
    {
        
        $author = AuthorResource::make(Author::where('slug', $slug)->first());
        $books = BookResource::collection($author->books()->with('authors', 'category', 'collection', 'language')->get());
      
        //dd($author);
        return Inertia::render('ViewAuthor', [
            'author' => $author,
            'books' => $books,
        ]);
    }
}
