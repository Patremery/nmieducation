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
}
