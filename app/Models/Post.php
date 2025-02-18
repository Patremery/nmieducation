<?php

namespace App\Models;

use App\Traits\HasStatus;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Post extends Model
{
    use HasFactory, HasStatus;

    protected $guarded = [];

     public function categories()
    {
        return $this->belongsToMany(BlogCategory::class, 'post_blog_category');
    }

    public function tags()
    {
        return $this->morphToMany(Tag::class, 'taggable');
    }
}
