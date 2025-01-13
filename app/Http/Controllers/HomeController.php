<?php

namespace App\Http\Controllers;

use App\Http\Resources\BookResource;
use App\Models\Book;
use Illuminate\Http\Request;
use Inertia\Inertia;

class HomeController extends Controller
{
     public function index()
    {
        $books = BookResource::collection(Book::published()->with(['author', 'category', 'collection', 'language'])->get());

        return Inertia::render('Home', [
            'books' => $books
        ]);
    }
}
