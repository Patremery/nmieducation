<?php

use App\Models\GeneralSettings;

if (! function_exists('settings')) {
    function settings($property)
    {
        if(app()->environment('production'))
        return GeneralSettings::first()->$property;
    }
}
