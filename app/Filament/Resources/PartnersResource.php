<?php

namespace App\Filament\Resources;

use App\Filament\Resources\PartnersResource\Pages;
use App\Filament\Resources\PartnersResource\RelationManagers;
use App\Models\Partners;
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;

class PartnersResource extends Resource
{
    protected static ?string $model = Partners::class;

    protected static ?string $navigationIcon = 'heroicon-o-rectangle-stack';
    protected static ?string $navigationGroup = 'Catalogue';

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Forms\Components\TextInput::make('name')->required(),
Forms\Components\TextInput::make('logo_url')->required(),
Forms\Components\TextInput::make('website')->required(),
Forms\Components\TextInput::make('description')->required()
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                Tables\Columns\TextColumn::make('name')->sortable()->searchable(),
Tables\Columns\TextColumn::make('logo_url')->sortable()->searchable(),
Tables\Columns\TextColumn::make('website')->sortable()->searchable(),
Tables\Columns\TextColumn::make('description')->sortable()->searchable()
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

    public static function getPages(): array
    {
        return [
            'index' => Pages\ManagePartners::route('/'),
        ];
    }
}
