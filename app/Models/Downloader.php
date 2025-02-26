<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Downloader extends Model
{
    protected $guarded = [];

    public function downloads()
    {
        return $this->hasMany(Download::class);
    }
}
