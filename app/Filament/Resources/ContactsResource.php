<?php

namespace App\Filament\Resources;

use App\Filament\Resources\ContactsResource\Pages;
use App\Models\Contact;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Table;

class ContactsResource extends Resource
{
    protected static ?string $model = Contact::class;

    protected static ?string $navigationIcon = 'heroicon-o-rectangle-stack';
    protected static ?string $navigationGroup = "CMS";

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                TextInput::make('name')->required(),
                TextInput::make('email')->required(),
                TextInput::make('phone')->required(),
                TextInput::make('subject')->required(),
                TextInput::make('message')->required()
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                TextColumn::make('name')
                        ->label("Noms")
                        ->sortable()
                        ->searchable(),
                TextColumn::make('email')
                        ->label("Adresse E-mail")
                        ->sortable()
                        ->searchable(),
                TextColumn::make('phone')
                        ->label("Téléphone")
                        ->sortable()
                        ->searchable(),
                TextColumn::make('subject')
                        ->label("Objet")
                        ->sortable()
                        ->searchable(),
                TextColumn::make('message')
                        ->label("Message")
                        ->sortable()
                        ->searchable()
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
            'index' => Pages\ListContacts::route('/'),
            //'create' => Pages\CreateContacts::route('/create'),
            'view' => Pages\ViewContacts::route('/{record}'),
            //'edit' => Pages\EditContacts::route('/{record}/edit'),
        ];
    }
}
