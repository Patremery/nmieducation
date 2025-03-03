<?php

namespace App\Filament\Resources;

use App\Filament\Resources\SubmissionsResource\Pages;
use App\Filament\Resources\SubmissionsResource\RelationManagers;
use App\Models\Submission;
use Filament\Forms;
use Filament\Forms\Components\FileUpload;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Table;

class SubmissionsResource extends Resource
{
    protected static ?string $model = Submission::class;

    protected static ?string $navigationIcon = 'heroicon-o-rectangle-stack';
    protected static ?string $navigationGroup = "CMS";
    protected static ?string $label = "Soumissions";

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                TextInput::make('name')
                        ->label("Noms")
                        ->required(),
                TextInput::make('email')
                ->label('E-mail'),
                TextInput::make('phone')
                ->label("Téléphone"),
                TextInput::make('address')->label("Adresse"),
                TextInput::make('country')->label("Pays"),
                TextInput::make('city')->label("Ville"),
                TextInput::make('title')->label("Titre"),
                TextInput::make('category')->label("Catégorie"),
                TextInput::make('summary')->label("Résumé"),
                FileUpload::make('file')->label("Fichier")
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                TextColumn::make('name')->sortable()->searchable(),
                TextColumn::make('email')->sortable()->searchable(),
                TextColumn::make('phone')->sortable()->searchable(),
                TextColumn::make('address')->sortable()->searchable(),
                TextColumn::make('city')->sortable()->searchable(),
                TextColumn::make('country')->sortable()->searchable(),
                TextColumn::make('title')->sortable()->searchable(),
                TextColumn::make('category')->sortable()->searchable(),
                TextColumn::make('summary')->sortable()->searchable(),
                TextColumn::make('file')->sortable()->searchable()
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
            'index' => Pages\ListSubmissions::route('/'),
            'view' => Pages\ViewSubmissions::route('/{record}'),
        ];
    }
}
