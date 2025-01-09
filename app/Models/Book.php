<?php

namespace App\Models;

use App\Traits\HasStatus;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Book extends Model
{
    use HasFactory, HasStatus;

    protected $guarded = [];

    public function author()
    {
        return $this->belongsTo(Author::class);
    }

    public function category()
    {
        return $this->belongsTo(BookCategory::class, 'book_category_id');
    }

    public function language()
    {
        return $this->belongsTo(BookLanguage::class, 'book_language_id');
    }

    public function collection()
    {
        return $this->belongsTo(Collection::class);
    }
}
