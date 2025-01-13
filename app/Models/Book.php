<?php

namespace App\Models;

use App\Traits\HasStatus;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Book extends Model
{
    use HasFactory, HasStatus;

    protected $guarded = [];
    protected $casts = [
        'images' => 'array',
        'new' => 'boolean'
    ];

    public function author()
    {
        return $this->belongsTo(Author::class, 'author_id');
    }

    public function category()
    {
        return $this->belongsTo(Category::class, 'category_id');
    }

    public function language()
    {
        return $this->belongsTo(BookLanguage::class, 'book_language_id');
    }

    public function collection()
    {
        return $this->belongsTo(Collection::class, 'collection_id');
    }
}
