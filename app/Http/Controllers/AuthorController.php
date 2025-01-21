<?php

namespace App\Http\Controllers;

use App\Http\Resources\AuthorResource;
use App\Models\Author;
use Inertia\Inertia;

class AuthorController extends Controller
{
    public function index()
    {
        $authors = AuthorResource::collection(Author::active()->all());
        
        return Inertia::render('Authors', [
            'authors' => $authors
        ]);
    }

    public function view($name)
    {
        $author = new AuthorResource(Author::where('name', $name)->first());
        return Inertia::render('SingleAuthor', [
            'author' => $author
        ]);
    }
}
