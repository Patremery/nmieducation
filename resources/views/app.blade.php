<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', config('seo.html_lang', 'fr')) }}">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="format-detection" content="telephone=no" />

    {{-- Server-rendered SEO: crawlers without JavaScript still get the metadata. --}}
    @include('partials.seo', ['seo' => $page['props']['seo'] ?? []])

    @inertiaHead
    @viteReactRefresh
    @vite(['resources/css/app.css', 'resources/js/App.tsx'])

    @stack('head')
  </head>
  <body class="font-sans antialiased">
    @inertia
  </body>
</html>
