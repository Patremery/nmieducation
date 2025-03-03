<?php

namespace App\Filament\Resources;

use App\Filament\Resources\DownloadsResource\Pages;
use App\Models\Download;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Table;
use Filament\Infolists\Components\TextEntry;
use Filament\Infolists\Components\Section;
use Filament\Infolists\Infolist;
use Filament\Tables\Grouping\Group;
use Filament\Tables\Actions\ExportAction;
use Filament\Tables\Actions\ExportBulkAction;
use App\Filament\Exports\DownloadsExporter;

class DownloadsResource extends Resource
{
    protected static ?string $model = Download::class;

    protected static ?string $navigationIcon = 'heroicon-o-rectangle-stack';
    protected static ?string $navigationGroup = 'CMS';
    protected static ?string $navigationLabel = 'Téléchargements';
    protected static ?string $pluralNavigationLabel = 'Téléchargements';
    protected static ?string $pluralModelLabel = 'Téléchargements';
    protected static ?string $modelLabel = 'Téléchargement';

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                TextInput::make('book_id')
                    
                ->required(),
                TextInput::make('downloader_id')->required(),
                TextInput::make('ip_address')->required()
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                TextColumn::make('downloader.name')
                    ->label('Téléchargé par')
                    ->sortable()
                    ->searchable(),
                    
                TextColumn::make('book.title')
                    ->label('Livre')
                    ->sortable()
                    ->searchable(),
                    
                TextColumn::make('created_at')
                    ->label('Date de téléchargement')
                    ->dateTime()
                    ->sortable(),
                    
                TextColumn::make('ip_address')
                    ->label('Adresse IP')
                    ->searchable(),
                    
                TextColumn::make('downloader.email')
                    ->label('Email')
                    ->icon('heroicon-o-envelope'),
                    
                TextColumn::make('downloader.phone')
                    ->label('Téléphone'),
                    
                TextColumn::make('user_agent')
                    ->label('Navigateur')
                    ->icon('heroicon-o-computer-desktop'),  
            ])
            ->defaultGroup('downloader.name')
            ->groups([
                Group::make('downloader.name')
                    ->label('Téléchargeur')
                    ->collapsible(),
                    
                Group::make('created_at')
                    ->label('Date')
                    ->date()
                    ->collapsible(),
                    
                Group::make('book.title')
                    ->label('Livre')
                    ->collapsible(),
            ])
            ->filters([
                //
            ])
            ->actions([
                Tables\Actions\ViewAction::make(),
                //Tables\Actions\EditAction::make(),
            ])
            ->bulkActions([
                ExportBulkAction::make()
                    ->label('Exporter la sélection')
                    ->icon('heroicon-o-arrow-down-tray')
                    ->exporter(DownloadsExporter::class),
                Tables\Actions\BulkActionGroup::make([
                    //Tables\Actions\DeleteBulkAction::make(),
                ]),
            ])
            ->headerActions([
                ExportAction::make()
                    ->label('Exporter tous')
                    ->icon('heroicon-o-arrow-down-tray')
                    ->exporter(DownloadsExporter::class),
            ]);
    }

    public static function getRelations(): array
    {
        return [
            //
        ];
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ListDownloads::route('/'),
        ];
    }

    public static function infolist(Infolist $infolist): Infolist
    {
        return $infolist
            ->schema([
                Section::make('Informations de téléchargement')
                    ->schema([
                        TextEntry::make('book.title')
                            ->label('Livre')
                            ->icon('heroicon-o-book-open'),
                            
                        TextEntry::make('downloader.name')
                            ->label('Téléchargé par')
                            ->icon('heroicon-o-user'),
                            
                        TextEntry::make('downloader.email')
                            ->label('Email')
                            ->icon('heroicon-o-envelope'),
                            
                        TextEntry::make('downloader.phone')
                            ->label('Téléphone')
                            ->icon('heroicon-o-phone'),
                            
                        TextEntry::make('ip_address')
                            ->label('Adresse IP')
                            ->icon('heroicon-o-globe-alt'),
                            
                        TextEntry::make('user_agent')
                            ->label('Navigateur')
                            ->icon('heroicon-o-computer-desktop')
                           ,
                            
                        TextEntry::make('created_at')
                            ->label('Date de téléchargement')
                            ->dateTime()
                            ->icon('heroicon-o-calendar'),
                    ])
                    ->columns(2),
            ]);
    }
}
