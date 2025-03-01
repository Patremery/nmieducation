<?php

namespace App\Http\Controllers;

use App\Http\Resources\AuthorResource;
use App\Http\Resources\BookResource;
use App\Models\Author;
use App\Models\Book;
use Inertia\Inertia;

class AuthorController extends Controller
{
    public function index()
    {
        $data = Author::published()->get(); 
        $authors = AuthorResource::collection($data);
        //dd($authors);
        
        return Inertia::render('Authors', [
            'authors' => $data,
            'title' => 'Auteurs'
        ]);
    }

    public function view(string $slug)
    {
        
        $author = AuthorResource::make(Author::where('slug', $slug)->first());
        //$books = BookResource::collection($author->books);
      
        //dd($author);
        return Inertia::render('ViewAuthors', [
            'author' => $author,
            //'books' => $books,
        ]);
    }
}
