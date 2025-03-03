<?php

namespace App\Filament\Resources\SubmissionsResource\Pages;

use App\Filament\Resources\SubmissionsResource;
use Filament\Actions;
use Filament\Resources\Pages\ViewRecord;

class ViewSubmissions extends ViewRecord
{
    protected static string $resource = SubmissionsResource::class;

    protected function getHeaderActions(): array
    {
        return [
            //Actions\EditAction::make(),
        ];
    }
}
