<?php

namespace App\Filament\Resources;

use App\Enums\DefaultStatusEnum;
use App\Filament\Resources\BookLanguagesResource\Pages;
use App\Models\BookLanguage;
use App\Traits\HasStatus;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;
use Filament\Forms\Components\TextInput;
use Filament\Tables\Columns\TextColumn;

class BookLanguagesResource extends Resource
{
    use HasStatus;
    protected static ?string $model = BookLanguage::class;

    protected static ?string $navigationIcon = 'heroicon-o-language';
    protected static ?string $navigationGroup = 'Catalogue';

    public static function getLabel() : string {
        return __('Langues');
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
                            ->columnSpanFull()
                            ->required(),
                TextInput::make('flag')
                        ->label("Drapeau"),
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
                TextColumn::make('flag')
                            ->label("Drapeau")
                            ->sortable()
                            ->searchable(),
                self::getStatusColumn()
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
            'index' => Pages\ListBookLanguages::route('/'),
        ];
    }
}
