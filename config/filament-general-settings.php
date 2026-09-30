<?php

use App\Models\GeneralSettings;

return [
    'model' => GeneralSettings::class,

    'show_application_tab' => true,
    'show_logo_and_favicon' => true,
    'show_analytics_tab' => true,
    'show_seo_tab' => true,
    'show_email_tab' => true,
    'show_social_networks_tab' => true,

    // The settings record is invalidated explicitly by the plugin whenever an
    // administrator saves it, so the TTL only acts as a safety net.
    'expiration_cache_config_time' => 3600,
];
