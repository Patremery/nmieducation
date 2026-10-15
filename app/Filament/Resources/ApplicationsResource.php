<?php

namespace App\Filament\Resources;

use App\Filament\Resources\ApplicationsResource\Pages;
use App\Models\Application;
use Filament\Forms\Components\FileUpload;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Table;

class ApplicationsResource extends Resource
{
    protected static ?string $model = Application::class;

    protected static ?string $navigationIcon = 'heroicon-o-rectangle-stack';

    protected static ?string $navigationGroup = 'CMS';

    protected static ?string $label = 'Candidature';

    protected static ?string $pluralLabel = 'Candidatures';

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                TextInput::make('name')
                    ->label('Noms')
                    ->required(),
                TextInput::make('email')
                    ->label('E-mail'),
                TextInput::make('phone')
                    ->label('Téléphone'),
                TextInput::make('address')->label('Adresse'),
                TextInput::make('city')->label('Ville'),
                TextInput::make('country')->label('Pays'),
                TextInput::make('study_level')->label("Niveau d'étude"),
                FileUpload::make('file')->label('CV'),
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                TextColumn::make('name')->label('Noms')->sortable()->searchable(),
                TextColumn::make('email')->label('E-mail')->sortable()->searchable(),
                TextColumn::make('phone')->label('Téléphone')->sortable()->searchable(),
                TextColumn::make('city')->label('Ville')->sortable()->searchable(),
                TextColumn::make('country')->label('Pays')->sortable()->searchable(),
                TextColumn::make('study_level')->label("Niveau d'étude")->sortable()->searchable(),
                TextColumn::make('created_at')->label('Reçue le')->dateTime('d/m/Y H:i')->sortable(),
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
            'index' => Pages\ListApplications::route('/'),
            'view' => Pages\ViewApplications::route('/{record}'),
            'edit' => Pages\EditApplications::route('/{record}/edit'),
        ];
    }
}
