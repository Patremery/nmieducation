<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

/**
 * Adds `X-Robots-Tag: noindex` to responses that must never be indexed.
 *
 * Covers the admin panel, the debug toolbars, and any error page — even when a
 * crawler ignores the `<meta name="robots">` inside the rendered HTML.
 */
class NoIndexAdmin
{
    public function handle(Request $request, Closure $next): Response
    {
        $response = $next($request);

        if ($this->shouldBeExcluded($request, $response)) {
            $response->headers->set('X-Robots-Tag', 'noindex, nofollow');
        }

        return $response;
    }

    protected function shouldBeExcluded(Request $request, Response $response): bool
    {
        if ($response->getStatusCode() >= 400) {
            return true;
        }

        foreach (['control-panel', 'admin', '_debugbar', 'horizon', 'telescope', 'storage-link', 'import-posts'] as $prefix) {
            if ($request->is($prefix) || $request->is($prefix.'/*')) {
                return true;
            }
        }

        return false;
    }
}
