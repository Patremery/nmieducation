<?php

namespace App\Models;

use App\Enums\ClassroomsEnum;
use App\Http\Resources\BookResource;
use App\Traits\HasStatus;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class Book extends Model
{
    use HasFactory, HasStatus;

    protected $guarded = [];
    protected $casts = [
        'images' => 'array',
        'new' => 'boolean',
        'classrooms' => 'array',
    ];

    //protected $with = ['author'];

    public function authors(): BelongsToMany
    {
        return $this->belongsToMany(Author::class, 'author_book');
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

    public function getClassroomEnumsAttribute()
    {
        if (!$this->classrooms) {
            return [];
        }
        
        return array_map(function ($value) {
            return ClassroomsEnum::from($value);
        }, $this->classrooms);
    }

    public function toResource()
    {
        return new BookResource($this);
    }
}
