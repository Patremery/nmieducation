<?php

namespace App\Models;

use App\Http\Resources\BookResource;
use App\Traits\HasStatus;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Book extends Model
{
    use HasFactory, HasStatus;

    protected $guarded = [];
    protected $casts = [
        'images' => 'array',
        'new' => 'boolean'
    ];

    //protected $with = ['author'];

    public function author(): BelongsTo
    {
        return $this->belongsTo(Author::class);
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

    public function toResource()
    {
        return new BookResource($this);
    }
}
