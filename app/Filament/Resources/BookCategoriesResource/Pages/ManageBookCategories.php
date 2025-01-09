<?php

namespace App\Filament\Resources\BookCategoriesResource\Pages;

use App\Filament\Resources\BookCategoriesResource;
use Filament\Actions;
use Filament\Resources\Pages\ManageRecords;

class ManageBookCategories extends ManageRecords
{
    protected static string $resource = BookCategoriesResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\CreateAction::make(),
        ];
    }
}
