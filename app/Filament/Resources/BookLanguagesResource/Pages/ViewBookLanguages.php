<?php

namespace App\Filament\Resources\BookLanguagesResource\Pages;

use App\Filament\Resources\BookLanguagesResource;
use Filament\Actions;
use Filament\Resources\Pages\ViewRecord;

class ViewBookLanguages extends ViewRecord
{
    protected static string $resource = BookLanguagesResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\EditAction::make(),
        ];
    }
}
