<?php

namespace App\Models;

use App\Traits\HasStatus;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Author extends Model
{
    use HasFactory, HasStatus;

    protected $guarded = [];

    public function books()
    {
        return $this->hasMany(Book::class);
    }
}
