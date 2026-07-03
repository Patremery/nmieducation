<?php

namespace App\Models;

use App\Traits\HasStatus;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Post extends Model
{
    use HasFactory, HasStatus;

    protected $guarded = [];
    
    protected $casts = [
        'published_at' => 'datetime',
        //*'scheduled_for' => 'datetime',
    ];

    /**
     * Get the user that authored the post
     */
    public function author(): BelongsTo
    {
        return $this->belongsTo(User::class, 'user_id');
    }

    /**
     * Get the categories associated with the post
     */
    public function categories(): BelongsToMany
    {
        return $this->belongsToMany(BlogCategory::class, 'post_blog_category');
    }

    /**
     * Get the tags associated with the post (polymorphic)
     */
    public function tags()
    {
        return $this->morphToMany(Tag::class, 'taggable');
    }
}


