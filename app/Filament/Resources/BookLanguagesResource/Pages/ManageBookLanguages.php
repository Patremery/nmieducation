<?php

namespace App\Filament\Resources\BookLanguagesResource\Pages;

use App\Filament\Resources\BookLanguagesResource;
use Filament\Actions;
use Filament\Resources\Pages\ManageRecords;

class ManageBookLanguages extends ManageRecords
{
    protected static string $resource = BookLanguagesResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\CreateAction::make(),
        ];
    }
}
