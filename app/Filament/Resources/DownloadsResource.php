<?php

namespace App\Filament\Resources;

use App\Filament\Resources\DownloadsResource\Pages;
use App\Filament\Resources\DownloadsResource\RelationManagers;
use App\Models\Download;
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;

class DownloadsResource extends Resource
{
    protected static ?string $model = Download::class;

    protected static ?string $navigationIcon = 'heroicon-o-rectangle-stack';

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Forms\Components\TextInput::make('book_id')->required(),
Forms\Components\TextInput::make('downloader_id')->required(),
Forms\Components\TextInput::make('ip_address')->required()
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                Tables\Columns\TextColumn::make('book_id')->sortable()->searchable(),
Tables\Columns\TextColumn::make('downloader_id')->sortable()->searchable(),
Tables\Columns\TextColumn::make('ip_address')->sortable()->searchable()
            ])
            ->filters([
                //
            ])
            ->actions([
                Tables\Actions\ViewAction::make(),
                Tables\Actions\EditAction::make(),
            ])
            ->bulkActions([
                Tables\Actions\BulkActionGroup::make([
                    Tables\Actions\DeleteBulkAction::make(),
                ]),
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
            'create' => Pages\CreateDownloads::route('/create'),
            'view' => Pages\ViewDownloads::route('/{record}'),
            'edit' => Pages\EditDownloads::route('/{record}/edit'),
        ];
    }
}
