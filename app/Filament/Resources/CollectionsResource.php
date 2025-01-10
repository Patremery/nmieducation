<?php

namespace App\Filament\Resources;

use App\Enums\DefaultStatusEnum;
use App\Filament\Resources\CollectionsResource\Pages;
use App\Models\Collection;
use App\Traits\DefaultStatusField;
use Filament\Forms\Components\FileUpload;
use Filament\Forms\Components\RichEditor;
use Filament\Forms\Components\Textarea;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Table;
use Filament\Forms\Components\Grid;
use Filament\Forms\Components\Hidden;
use Filament\Forms\Components\Section;

class CollectionsResource extends Resource
{
    use DefaultStatusField;
    protected static ?string $model = Collection::class;

    protected static ?string $navigationIcon = 'heroicon-o-document-text';
    protected static ?string $navigationGroup = 'Catalogue';   
    protected static ?string $navigationParent = 'Books';
protected static ?int $navigationSort = 1; // Ordre dans le sous-menu

    public static function getLabel() : string {
        return __('Collections');
    }

    public static function getNavigationBadge(): ?string
    {
        return static::getModel()::count();
    }

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Grid::make([
                    'default' => 1,
                    'lg' => 3,
                ])
                    ->schema([
                        // Colonne principale (2/3 de l'écran)
                        Section::make('Informations principales')
                            ->schema([
                                TextInput::make('name')
                                    ->required()
                                    ->live()
                                    ->afterStateUpdated(function ($state, $set) {
                                        $set('slug', str()->slug($state));
                                    }),
                                Hidden::make('slug')
                                    ->unique(ignoreRecord: true)
                                    ->required(),
                                RichEditor::make('description')
                                    ->required()
                                    ->columnSpanFull(),
                                Textarea::make('summary')
                                    ->label("Résumé")
                                    ->columnSpanFull(),
                            ])->columnSpan(['lg' => 2]),

                        // Barre latérale (1/3 de l'écran)
                        Grid::make()
                            ->schema([
                                Section::make('Statut')
                                    ->schema([
                                        self::getStatusField()
                                    ]),

                                Section::make('Image')
                                    ->schema([
                                        FileUpload::make('featured_image')
                                            ->label("Image principale")
                                            ->required(),
                                    ]),
                            ])->columnSpan(['lg' => 1]),
                    ]),
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                TextColumn::make('featured_image')
                            ->sortable()
                            ->searchable(),
                TextColumn::make('name')
                            ->sortable()
                            ->searchable(),
                TextColumn::make('slug')
                            ->toggleable(isToggledHiddenByDefault: true)
                            ->sortable()
                            ->searchable(),
                TextColumn::make('language.name')
                            ->sortable(),
                TextColumn::make('status')
                    ->sortable()
                    ->badge()
                    ->color(fn (string $state): string => match ($state) {
                        DefaultStatusEnum::PUBLISHED->value => 'success',
                        DefaultStatusEnum::UNPUBLISHED->value => 'danger',
                        DefaultStatusEnum::DRAFT->value => 'warning',
                        default => 'danger',
                    }),
                TextColumn::make('description')
                            ->toggleable(isToggledHiddenByDefault: true)
                            ->searchable(),
                TextColumn::make('summary')
                            ->sortable()
                            ->searchable(),
                TextColumn::make('images')
                             ->toggleable(isToggledHiddenByDefault: true),
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
            'index' => Pages\ListCollections::route('/'),
            'create' => Pages\CreateCollections::route('/create'),
            'view' => Pages\ViewCollections::route('/{record}'),
            'edit' => Pages\EditCollections::route('/{record}/edit'),
        ];
    }
}
