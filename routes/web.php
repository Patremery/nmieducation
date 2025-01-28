<?php

use App\Http\Controllers\AuthorController;
use App\Http\Controllers\CatalogController;
use App\Http\Controllers\HomeController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', [HomeController::class, 'index']);

Route::get('/about', function () {
    return Inertia::render('About');
});

Route::get('/catalogue', [CatalogController::class, 'index']);

Route::get('catalogue/category/{code}', [CatalogController::class, 'category']);

Route::get('/authors', [AuthorController::class, 'index'])->name('authors');
Route::get('/contact', [HomeController::class, 'contact'])->name('contact');

Route::get('/book/{id}', [CatalogController::class, 'show'])->name('book.show');

Route::get('/authors/{slug}', [AuthorController::class, 'view'])->name('author.show');
