<?php

use App\Http\Controllers\AuthorController;
use App\Http\Controllers\CatalogController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\ImportController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', [HomeController::class, 'index']);


Route::get('/catalogue', [CatalogController::class, 'index']);

Route::get('catalogue/category/{code}', [CatalogController::class, 'category']);

Route::get('/authors', [AuthorController::class, 'index'])->name('authors');
Route::get('/contact', [HomeController::class, 'contact'])->name('contact');
Route::get('/about', [HomeController::class, 'about'])->name('about');
Route::get('/become-distributor', [HomeController::class, 'becomeDistributor'])->name('become-distributor');
Route::get('/join-us', [HomeController::class, 'joinUs'])->name('join-us');
Route::get('/submit-your-manuscrit', [HomeController::class, 'manuscriptSubmission'])->name('manuscript-submission');

Route::get('/book/{id}', [CatalogController::class, 'show'])->name('book.show');

Route::get('/authors/{slug}', [AuthorController::class, 'view'])->name('author.show');

Route::get('/import-posts', [ImportController::class, 'import']);

Route::get('/blog', [HomeController::class, 'blog'])->name('blog.index');
Route::get('/posts/{slug}', [HomeController::class, 'article'])->name('article.show');
Route::post('/download-guide', [CatalogController::class, 'downloadGuide'])->name('download-guide');