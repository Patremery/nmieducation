<?php

namespace App\Filament\Resources\ContactsResource\Pages;

use App\Filament\Resources\ContactsResource;
use Filament\Actions;
use Filament\Resources\Pages\ViewRecord;

class ViewContacts extends ViewRecord
{
    protected static string $resource = ContactsResource::class;

    protected function getHeaderActions(): array
    {
        return [
            // Actions\EditAction::make(),
        ];
    }
}
