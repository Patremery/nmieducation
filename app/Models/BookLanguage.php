<?php

namespace App\Models;

use App\Traits\HasStatus;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class BookLanguage extends Model
{
    use HasFactory, HasStatus;

    public $timestamps = false;

    protected $guarded = [];

    public function books()
    {
        return $this->hasMany(Book::class, 'book_language_id');
    }
    
}
