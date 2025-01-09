<?php

namespace App\Filament\Resources\CollectionsResource\Pages;

use App\Filament\Resources\CollectionsResource;
use Filament\Actions;
use Filament\Resources\Pages\ViewRecord;

class ViewCollections extends ViewRecord
{
    protected static string $resource = CollectionsResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\EditAction::make(),
        ];
    }
}
