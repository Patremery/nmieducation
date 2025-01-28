<?php

namespace App\Http\Controllers;

use App\Http\Resources\AuthorResource;
use App\Models\Author;
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
        $author = new AuthorResource(Author::where('name', $slug)->first());
        return Inertia::render('SingleAuthor', [
            'author' => $author
        ]);
    }
}
