<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Download extends Model
{
    protected $guarded = [];

    public function downloader()
    {
        return $this->belongsTo(Downloader::class);
    }

    public function book()
    {
        return $this->belongsTo(Book::class);
    }
}
