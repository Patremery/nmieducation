<?php

namespace App\Http\Middleware;

use App\Services\SeoService;
use Illuminate\Http\Request;
use Inertia\Middleware;

class HandleInertiaRequests extends Middleware
{
    /**
     * The root template that's loaded on the first page visit.
     *
     * @see https://inertiajs.com/server-side-setup#root-template
     *
     * @var string
     */
    protected $rootView = 'app';

    /**
     * Determines the current asset version.
     *
     * @see https://inertiajs.com/asset-versioning
     */
    public function version(Request $request): ?string
    {
        return parent::version($request);
    }

    /**
     * Define the props that are shared by default.
     *
     * Controllers that build a page-specific SEO payload (via `SeoService`) pass
     * it as a `seo` prop; this fallback covers the pages that do not.
     *
     * @see https://inertiajs.com/shared-data
     *
     * @return array<string, mixed>
     */
    public function share(Request $request): array
    {
        $props = array_merge(parent::share($request), [
            'settings' => [
                'support_phone' => settings('support_phone'),
                'support_email' => settings('support_email'),
                'address' => config('seo.publisher.address.address_locality'),
                'site_name' => settings('site_name') ?? config('app.name'),
                'site_description' => settings('site_description'),
                'logo' => setting_url(settings('site_logo')),
                'favicon' => setting_url(settings('site_favicon')),
                'theme_color' => settings('theme_color'),
            ],
        ]);

        $props['seo'] = $props['seo'] ?? SeoService::make()->toArray();

        return $props;
    }
}
