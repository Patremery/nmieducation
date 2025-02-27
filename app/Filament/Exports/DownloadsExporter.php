<?php

namespace App\Filament\Exports;

use App\Models\Download;
use Filament\Actions\Exports\ExportColumn;
use Filament\Actions\Exports\Exporter;
use Filament\Actions\Exports\Models\Export;

class DownloadsExporter extends Exporter
{
    protected static ?string $model = Download::class;

    public static function getColumns(): array
    {
        return [
            ExportColumn::make('id')
                ->label('ID'),
                
            ExportColumn::make('downloader.name')
                ->label('Nom du téléchargeur'),
                
            ExportColumn::make('downloader.email')
                ->label('Email du téléchargeur'),
                
            ExportColumn::make('downloader.phone')
                ->label('Téléphone du téléchargeur'),
                
            ExportColumn::make('book.title')
                ->label('Titre du livre'),
                
            ExportColumn::make('book.category.label')
                ->label('Catégorie du livre'),
                
            ExportColumn::make('ip_address')
                ->label('Adresse IP'),
                
            ExportColumn::make('created_at')
                ->label('Date de téléchargement'),
        ];
    }
    
    public static function getCompletedNotificationBody(Export $export): string
    {
        return "Votre exportation est terminée et prête à être téléchargée.";
    }
} 