<?php

namespace App\Filament\Resources;

use App\Enums\DefaultStatusEnum;
use App\Filament\Resources\BookCategoriesResource\Pages;
use App\Models\BookCategory;
use App\Traits\DefaultStatusField;
use Filament\Forms\Components\Select;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Table;

class BookCategoriesResource extends Resource
{
    use DefaultStatusField;
    protected static ?string $model = BookCategory::class;

    protected static ?string $navigationIcon = 'heroicon-o-tag';

    protected static ?string $navigationGroup = 'Catalogue';

    public static function getLabel() : string {
        return __('Catégories');
    }

    public static function getNavigationBadge(): ?string
    {
        return static::getModel()::count();
    }

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                TextInput::make('name')
                            ->label("Nom")
                            ->required(),
                self::getStatusField()
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                TextColumn::make('name')
                            ->label("Nom")
                            ->sortable()
                            ->searchable(),
                TextColumn::make('status')
                    ->sortable()
                    ->badge()
                    ->color(fn (string $state): string => match ($state) {
                        DefaultStatusEnum::PUBLISHED->value => 'success',
                        DefaultStatusEnum::UNPUBLISHED->value => 'danger',
                        DefaultStatusEnum::DRAFT->value => 'warning',
                        default => 'danger',
                    })
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
            'index' => Pages\ManageBookCategories::route('/'),
        ];
    }
}
