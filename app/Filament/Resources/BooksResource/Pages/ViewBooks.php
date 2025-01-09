<?php

namespace App\Filament\Resources\BooksResource\Pages;

use App\Filament\Resources\BooksResource;
use Filament\Actions;
use Filament\Resources\Pages\ViewRecord;

class ViewBooks extends ViewRecord
{
    protected static string $resource = BooksResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\EditAction::make(),
        ];
    }
}
