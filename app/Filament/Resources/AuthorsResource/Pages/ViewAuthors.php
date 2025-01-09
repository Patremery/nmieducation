<?php

namespace App\Filament\Resources\AuthorsResource\Pages;

use App\Filament\Resources\AuthorsResource;
use Filament\Actions;
use Filament\Resources\Pages\ViewRecord;

class ViewAuthors extends ViewRecord
{
    protected static string $resource = AuthorsResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\EditAction::make(),
        ];
    }
}
