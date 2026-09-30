<?php

use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Str;

if (! function_exists('settings')) {
    /**
     * Read a value from the single "general settings" record.
     *
     * The lookup is memoised for the duration of the request (and warmed in the
     * cache) so that calling it in loops or in several view composers stays cheap.
     *
     * @param  string|null  $property  Column name, or null to get the whole model.
     * @param  mixed  $default  Value returned when the column is missing or empty.
     */
    function settings(?string $property = null, mixed $default = null): mixed
    {
        static $record = null;
        static $resolved = false;

        if (! $resolved) {
            $resolved = true;

            // Same cache key as the Filament plugin, so saving the settings in the
            // admin panel invalidates this copy immediately.
            try {
                $record = Cache::remember(
                    'general_settings',
                    (int) config('filament-general-settings.expiration_cache_config_time', 60),
                    fn () => app(config('filament-general-settings.model'))->newQuery()->first()
                );
            } catch (Throwable) {
                // Settings are read while the framework is still booting (e.g. by
                // Filament), so a missing cache/settings table must never take the
                // whole application down. Fall back to reading the record directly.
                try {
                    $record = app(config('filament-general-settings.model'))->newQuery()->first();
                } catch (Throwable) {
                    $record = null;
                }
            }
        }

        if ($property === null) {
            return $record;
        }

        $value = data_get($record, $property, $default);

        return $value === null || $value === '' ? $default : $value;
    }
}

if (! function_exists('settings_array')) {
    /**
     * Read a JSON-cast settings column as an array, with dot-notation support.
     */
    function settings_array(string $property, array $default = []): array
    {
        $value = settings($property, $default);

        if (is_array($value)) {
            return $value;
        }

        if (is_string($value)) {
            $decoded = json_decode($value, true);

            return is_array($decoded) ? $decoded : $default;
        }

        return $default;
    }
}

if (! function_exists('setting_url')) {
    /**
     * Absolute URL for a file stored on the "public" disk (Filament uploads).
     */
    function setting_url(?string $path): ?string
    {
        if (blank($path)) {
            return null;
        }

        if (Str::startsWith($path, ['http://', 'https://', '//', 'data:'])) {
            return $path;
        }

        return asset(Str::startsWith($path, 'storage/') ? $path : 'storage/'.ltrim($path, '/'));
    }
}

if (! function_exists('meta_description')) {
    /**
     * Normalise arbitrary content into a meta description (<= 160 chars, no HTML).
     */
    function meta_description(?string $text, int $limit = 160): string
    {
        $text = trim(preg_replace('/\s+/u', ' ', strip_tags(html_entity_decode((string) $text, ENT_QUOTES, 'UTF-8'))) ?? '');

        if ($text === '') {
            return '';
        }

        if (mb_strlen($text) <= $limit) {
            return $text;
        }

        $truncated = mb_substr($text, 0, $limit - 1);

        $lastSpace = mb_strrpos($truncated, ' ');

        if ($lastSpace !== false && $lastSpace > $limit * 0.6) {
            $truncated = mb_substr($truncated, 0, $lastSpace);
        }

        return rtrim($truncated, " \t\n\r\0\x0B.,;:!-").'…';
    }
}

if (! function_exists('strip_shortcodes')) {
    /**
     * Remove shortcodes and editor artefacts from raw rich text before indexing.
     */
    function strip_shortcodes(?string $text): string
    {
        $text = (string) $text;
        $text = preg_replace('/\[\/?[^\]]{0,80}\]/', ' ', $text) ?? $text;
        $text = preg_replace('/\{[^{}]{0,80}\}/', ' ', $text) ?? $text;

        return trim(preg_replace('/\s+/u', ' ', strip_tags($text)) ?? '');
    }
}
