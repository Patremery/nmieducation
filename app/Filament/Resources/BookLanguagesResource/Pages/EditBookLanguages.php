<?php

namespace App\Filament\Resources\BookLanguagesResource\Pages;

use App\Filament\Resources\BookLanguagesResource;
use Filament\Actions;
use Filament\Resources\Pages\EditRecord;

class EditBookLanguages extends EditRecord
{
    protected static string $resource = BookLanguagesResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\ViewAction::make(),
            Actions\DeleteAction::make(),
        ];
    }
}
