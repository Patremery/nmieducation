<?php

namespace App\Providers\Filament;

use App\Filament\Pages\App\Profile;
use BezhanSalleh\FilamentShield\FilamentShieldPlugin;
use App\Filament\Pages\Auth\Login;
use App\Filament\Widgets\DashboardHighlight;
use Brickx\MaintenanceSwitch\MaintenanceSwitchPlugin;
use Filament\Http\Middleware\Authenticate;
use Filament\Http\Middleware\DisableBladeIconComponents;
use Filament\Http\Middleware\DispatchServingFilamentEvent;
use Filament\Pages;
use Filament\Panel;
use Filament\PanelProvider;
use Filament\Support\Colors\Color;
use Illuminate\Cookie\Middleware\AddQueuedCookiesToResponse;
use Illuminate\Cookie\Middleware\EncryptCookies;
use Illuminate\Foundation\Http\Middleware\VerifyCsrfToken;
use Illuminate\Routing\Middleware\SubstituteBindings;
use Illuminate\Session\Middleware\AuthenticateSession;
use Illuminate\Session\Middleware\StartSession;
use Illuminate\View\Middleware\ShareErrorsFromSession;
use Joaopaulolndev\FilamentGeneralSettings\FilamentGeneralSettingsPlugin;
use RickDBCN\FilamentEmail\FilamentEmail;
use Solutionforest\FilamentScaffold\FilamentScaffoldPlugin;

class AdminPanelProvider extends PanelProvider
{
    public function panel(Panel $panel): Panel
    {
        return $panel
            ->default()
            ->id('admin')
            ->path('admin')
            ->login(Login::class)
            ->brandLogo(settings('site_logo') ? asset('storage/'.settings('site_logo')) : null)
            ->brandLogoHeight("70px")
            ->passwordReset()
            ->sidebarCollapsibleOnDesktop()
            ->spa()
            ->profile(Profile::class, false)
            ->viteTheme('resources/css/filament/admin/theme.css')
            ->colors([
                'primary' => Color::Blue,
            ])
            ->globalSearchKeyBindings(['command+k', 'ctrl+k'])
            ->globalSearchFieldKeyBindingSuffix()
            ->discoverResources(in: app_path('Filament/Resources'), for: 'App\\Filament\\Resources')
            ->discoverPages(in: app_path('Filament/Pages'), for: 'App\\Filament\\Pages')
            ->pages([
                Pages\Dashboard::class,
            ])
            ->discoverWidgets(in: app_path('Filament/Widgets'), for: 'App\\Filament\\Widgets')
            ->widgets([
                DashboardHighlight::class,
                /* Widgets\AccountWidget::class,
                Widgets\FilamentInfoWidget::class, */
            ])
            ->middleware([
                EncryptCookies::class,
                AddQueuedCookiesToResponse::class,
                StartSession::class,
                AuthenticateSession::class,
                ShareErrorsFromSession::class,
                VerifyCsrfToken::class,
                SubstituteBindings::class,
                DisableBladeIconComponents::class,
                DispatchServingFilamentEvent::class,
            ])
            ->plugins([
                \MKWebDesign\FilamentWatchdog\FilamentWatchdogPlugin::make(),
                //FilamentScaffoldPlugin::make(),
                FilamentShieldPlugin::make(),
                FilamentEmail::make(),
                MaintenanceSwitchPlugin::make(),
                FilamentGeneralSettingsPlugin::make()
                    ->canAccess(fn() => auth()->id() === 1)
                    ->setSort(3)
                    ->setIcon('heroicon-o-cog')
                    ->setNavigationGroup('Settings')
                    ->setTitle('Paramètres généraux')
                    ->setNavigationLabel('Paramètres généraux'),
            ])
            ->authMiddleware([
                Authenticate::class,
            ]);
    }
}
