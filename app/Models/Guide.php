<?php

namespace App\Models;

use App\Enums\DefaultStatusEnum;
use App\Traits\HasStatus;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Guide extends Model
{
    use HasFactory, HasStatus;
    
    protected $guarded = [];

    protected $casts = [
        'status' => DefaultStatusEnum::class,
    ];

    public function category() {
        return $this->belongsTo(BookCategory::class, 'book_category_id');
    }
    
}
