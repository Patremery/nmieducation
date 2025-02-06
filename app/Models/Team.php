<?php

namespace App\Models;

use App\Http\Resources\TeamResource;
use App\Traits\HasStatus;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Team extends Model
{
    use HasFactory, HasStatus;
    protected $guarded = [];

    public function toResource()
    {
        return new TeamResource($this);
    }
}
