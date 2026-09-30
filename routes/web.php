<?php

use App\Http\Controllers\AuthorController;
use App\Http\Controllers\CatalogController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\ImportController;
use App\Http\Controllers\SitemapController;
use Illuminate\Support\Facades\Artisan;
use Illuminate\Support\Facades\Route;

Route::get('/', [HomeController::class, 'index'])->name('home');

Route::get('/catalogue', [CatalogController::class, 'index'])->name('catalogue');
Route::get('catalogue/category/{code}', [CatalogController::class, 'category'])->name('catalogue.category');

Route::get('/authors', [AuthorController::class, 'index'])->name('authors');
Route::get('/author/{slug}', [AuthorController::class, 'view'])->name('author.show');

Route::get('/contact', [HomeController::class, 'contact'])->name('contact');
Route::get('/about', [HomeController::class, 'about'])->name('about');

Route::get('/become-distributor', [HomeController::class, 'becomeDistributor'])->name('become-distributor');
Route::post('/become-distributor', [HomeController::class, 'storeDistributor'])->name('distributor.store');

Route::get('/join-us', [HomeController::class, 'joinUs'])->name('join-us');
Route::post('/join-us', [HomeController::class, 'storeApplication'])->name('application.store');

Route::get('/submit-your-manuscrit', [HomeController::class, 'manuscriptSubmission'])->name('manuscript-submission');
Route::post('/submit-your-manuscrit', [HomeController::class, 'storeManuscript'])->name('manuscript.store');

Route::get('/book/{slug}', [CatalogController::class, 'show'])->name('book.show');

Route::get('/blog', [HomeController::class, 'blog'])->name('blog.index');
Route::get('/posts/{slug}', [HomeController::class, 'article'])->name('article.show');
Route::post('/download-guide', [CatalogController::class, 'downloadGuide'])->name('download-guide');

Route::post('/contact', [HomeController::class, 'saveContact'])->name('contact.store');

/*
|--------------------------------------------------------------------------
| SEO
|--------------------------------------------------------------------------
*/

Route::get('/sitemap.xml', [SitemapController::class, 'index'])->name('sitemap');
Route::get('/robots.txt', [SitemapController::class, 'robots'])->name('robots');

/*
|--------------------------------------------------------------------------
| Maintenance tasks
|--------------------------------------------------------------------------
|
| These run Artisan commands and write to the database, so they must never be
| reachable on a public server. They are only registered locally; in production
| run the equivalent Artisan command instead.
|
*/

if (app()->environment('local')) {
    Route::get('/import-posts', [ImportController::class, 'import'])->name('import-posts');
    Route::get('/storage-link', function () {
        try {
            Artisan::call('storage:link');

            return 'Storage link has been created successfully.';
        } catch (Exception $e) {
            return 'Error: '.$e->getMessage();
        }
    })->name('storage-link');
}
