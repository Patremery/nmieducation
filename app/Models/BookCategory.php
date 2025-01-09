<?php

namespace App\Models;

use App\Traits\HasStatus;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class BookCategory extends Model
{
    use HasFactory, HasStatus;

    protected $guarded = [];

    public function books()
    {
        return $this->hasMany(Book::class, 'book_category_id');
    }
}
