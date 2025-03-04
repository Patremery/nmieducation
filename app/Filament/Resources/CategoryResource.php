<?php

namespace App\Filament\Resources;

use App\Filament\Resources\CategoryResource\Pages;
use App\Models\Category;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\Toggle;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Columns\IconColumn;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Columns\ToggleColumn;
use Filament\Tables\Table;

class CategoryResource extends Resource
{
    protected static ?string $model = Category::class;

    protected static ?string $navigationIcon = 'heroicon-o-rectangle-stack';
    protected static ?string $navigationGroup = 'Catalogue';
    protected static ?string $label = 'Catégories';

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                TextInput::make('code')
                    ->required()
                    ->unique(ignoreRecord: true)
                    ->disabled(fn (?Category $record) => $record?->isSystem()),
                    
                TextInput::make('label')
                    ->required(),
                    
                Toggle::make('is_active')
                    ->label('Actif')
                    ->default(true)
                    ->disabled(fn (?Category $record) => $record?->isSystem()),
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                TextColumn::make('label')
                        ->label('Nom')
                        ->sortable()
                        ->searchable(),
                TextColumn::make('code')->sortable()->searchable(),
                ToggleColumn::make('is_active')
                    ->label('Actif')
                    ->sortable()
                    ->searchable()
                    //->boolean()
                    //->trueIcon('heroicon-o-check-circle')
                    //->falseIcon('heroicon-o-x-circle')
            ])
            ->filters([
                Tables\Filters\SelectFilter::make('is_active'),
                Tables\Filters\SelectFilter::make('system')
                    ->query(fn ($query) => $query->system()),
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
            'index' => Pages\ManageCategories::route('/'),
        ];
    }
}
