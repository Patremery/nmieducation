<?php

namespace App\Filament\Widgets;

use App\Models\Author;
use App\Models\Book;
use App\Models\Collection;
use App\Models\Team;
use Filament\Widgets\StatsOverviewWidget as BaseWidget;
use Filament\Widgets\StatsOverviewWidget\Stat;

class DashboardHighlight extends BaseWidget
{
    protected function getStats(): array
    {
        return [
            //
            Stat::make('Littérature Générale', Book::where('category_id', 1)->count())
                ->description('Littérature Générale')
                ->descriptionIcon('heroicon-m-arrow-trending-up'),
            Stat::make('Manuels Scolaires', Book::where('category_id', 2)->count())
                ->description('Manuels Scolaires')
                ->descriptionIcon('heroicon-m-arrow-trending-up'),
            Stat::make('Guides Pédagogiques', Book::where('category_id', 3)->count())
                ->description('Guides Pédagogiques')
                ->description('Guides Pédagogiques')
                ->descriptionIcon('heroicon-m-arrow-trending-up'),
            Stat::make('Littérature Jeunesse', Book::where('category_id', 4)->count())
                ->description('Littérature Jeunesse')
                ->descriptionIcon('heroicon-m-arrow-trending-up'),
            Stat::make('Catalogues', Book::where('category_id', 5)->count())
                ->description('Catalogues')
                ->descriptionIcon('heroicon-m-arrow-trending-up'),
            
            Stat::make('Total des auteurs', Author::count())
                ->description('Auteurs')
                ->description('Auteurs')
                ->descriptionIcon('heroicon-m-arrow-trending-up'),
            
        ];
    }
}
