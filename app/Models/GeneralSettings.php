<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class GeneralSettings extends Model
{
    protected $table = 'general_settings';

    protected $guarded = [];

    protected $casts = [
        'seo_metadata' => 'array',
        'email_settings' => 'array',
        'social_network' => 'array',
        'more_configs' => 'array',
    ];
}
