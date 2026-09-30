<?php

namespace App\Models;

use App\Traits\HasStatus;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class BlogCategory extends Model
{
    use HasFactory, HasStatus;

    protected $guarded = [];

    protected $table = 'blog_categories';

    public function posts()
    {
        return $this->belongsToMany(Post::class, 'post_blog_category');
    }
}
