<?php

namespace App\Models;

use App\Enums\DefaultStatusEnum;
use App\Traits\HasStatus;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Collection extends Model
{
    use HasFactory, HasStatus;

    protected $guarded = [];
    protected $casts = [
        'status' => DefaultStatusEnum::class,
        'images' => 'array',
    ];

    public function books()
    {
        return $this->hasMany(Book::class);
    }
    
}
