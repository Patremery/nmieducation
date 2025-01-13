<?php

use App\Http\Controllers\CatalogController;
use App\Http\Controllers\HomeController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', [HomeController::class, 'index']);

Route::get('/about', function () {
    return Inertia::render('About');
});

Route::get('/catalogue', [CatalogController::class, 'index']);

Route::get('catalogue/template/{id}', [CatalogController::class, 'template']);

Route::get('/book/{id}', [CatalogController::class, 'show'])->name('book.show');
