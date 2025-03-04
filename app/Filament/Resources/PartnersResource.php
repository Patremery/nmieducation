<?php

namespace App\Filament\Resources;

use App\Filament\Resources\PartnersResource\Pages;
use App\Filament\Resources\PartnersResource\RelationManagers;
use App\Models\Partners;
use Filament\Forms;
use Filament\Forms\Components\FileUpload;
use Filament\Forms\Components\RichEditor;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Columns\ImageColumn;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Table;

class PartnersResource extends Resource
{
    protected static ?string $model = Partners::class;

    protected static ?string $navigationIcon = 'heroicon-o-rectangle-stack';
    protected static ?string $navigationGroup = 'Catalogue';
    protected static ?string $label = 'Partenaires';

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                TextInput::make('name')
                        ->label('Nom')
                        ->required(),
                TextInput::make('website')
                        ->label('Site Web'),
                FileUpload::make('logo_url')
                    ->default(fn ($state) => $state)
                    ->image()
                    ->disk('public')
                    ->optimize('webp')
                    ->directory('partners')
                    ->columnSpanFull(),
                
                RichEditor::make('description')->columnSpanFull(),
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                TextColumn::make('name')->sortable()->searchable(),
                TextColumn::make('website')->sortable()->searchable(),
                
                ImageColumn::make('logo_url')->sortable()->searchable(),
                
                TextColumn::make('description')->searchable()
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
