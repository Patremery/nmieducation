<?php

namespace App\Filament\Resources\SubmissionsResource\Pages;

use App\Filament\Resources\SubmissionsResource;
use Filament\Actions;
use Filament\Resources\Pages\EditRecord;

class EditSubmissions extends EditRecord
{
    protected static string $resource = SubmissionsResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\ViewAction::make(),
            Actions\DeleteAction::make(),
        ];
    }
}
