<?php

namespace App\Http\Controllers;

use App\Http\Resources\BookResource;
use App\Models\Book;
use App\Models\Category;
use Inertia\Inertia;

class CatalogController extends Controller
{
    public function index()
    {
        $books = BookResource::collection(Book::published()->with(['author', 'category', 'collection', 'language'])->get());

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
                        ->with(['author','category', 'collection', 'language'])->get());

        return Inertia::render('BookPresentation', [
            'book' => $book,
            'similarBooks' => $similarBooks
        ]);
    }

    public function category(string $code)
    {
        $category = Category::where('code', $code)->first();

        $books = BookResource::collection(Book::published()
                        ->where('category_id', $category->id)
                        ->with(['author','category', 'collection', 'language'])->get());

        return Inertia::render('CatalogCategory', [
            'code' => $code,
            'title' => $category->label,
            'books' => $books
        ]);
    }

    public function view($id)
    {
        return Inertia::render('CatalogView', [
            'id' => $id
        ]);
    }
}
