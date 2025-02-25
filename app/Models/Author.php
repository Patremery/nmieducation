<?php

namespace App\Models;

use App\Http\Resources\AuthorResource;
use App\Traits\HasStatus;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Author extends Model
{
    use HasFactory, HasStatus;

    protected $guarded = [];
    //protected $with = ['books'];

    public function books()
    {
        return $this->belongsToMany(Book::class, 'author_book');
    }

    public function toResource()
    {
        return new AuthorResource($this);
    }
}
