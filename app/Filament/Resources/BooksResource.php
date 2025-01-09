<?php

namespace App\Filament\Resources;

use App\Enums\DefaultStatusEnum;
use App\Filament\Resources\BooksResource\Pages;
use App\Models\Author;
use App\Models\Book;
use App\Models\BookCategory;
use App\Models\BookLanguage;
use App\Models\Collection;
use App\Traits\DefaultStatusField;
use Filament\Forms\Components\DatePicker;
use Filament\Forms\Components\FileUpload;
use Filament\Forms\Components\RichEditor;
use Filament\Forms\Components\Select;
use Filament\Forms\Components\Textarea;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Table;
use Filament\Forms\Components\Section;
use Filament\Forms\Components\Grid;

class BooksResource extends Resource
{
    use DefaultStatusField;
    protected static ?string $model = Book::class;

    protected static ?string $navigationIcon = 'heroicon-o-book-open';
    protected static ?string $navigationGroup = 'Catalogue';

    public static function getLabel() : string {
        return __('Livres');
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
                        Section::make('Informations principales')
                            ->schema([
                                TextInput::make('title')
                                    ->required()
                                    ->columnSpanFull(),
                                Select::make('collection_id')
                                    ->label("Collection")
                                    ->options(Collection::query()->published()->pluck("name", "id"))
                                    ->required(),
                                RichEditor::make('description')
                                    ->required()
                                    ->columnSpanFull(),
                                Textarea::make('summary')
                                    ->columnSpanFull(),
                                FileUpload::make('images')
                                        ->multiple()
                                        ->columnSpanFull()
                                        ->required(),
                               
                            ])->columnSpan(['lg' => 2]),

                        Grid::make()
                            ->schema([
                                Section::make('Détails')
                                    ->schema([
                                        self::getStatusField(),
                                        Select::make('book_language_id')
                                            ->label("Langue")
                                            ->options(BookLanguage::query()->published()->pluck("name", "id"))
                                            ->required(),
                                        Select::make('book_category_id')
                                            ->label("Catégorie")
                                            ->options(BookCategory::query()->published()->pluck("name", "id"))
                                            ->required(),
                                        Select::make('author_id')
                                                ->label("Auteur")
                                                ->options(Author::query()->published()->pluck("name", "id"))
                                                ->columns(2)
                                                ->required(),
                                        DatePicker::make('publication_date')
                                            ->label("Date de publication")
                                            ->required(),
                                        TextInput::make('ISBN'),
                                    ]),

                                Section::make('Images')
                                    ->schema([
                                        FileUpload::make('featured_image')
                                            ->label("Image de couverture")
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
                TextColumn::make('featured_image')->sortable()->searchable(),
                TextColumn::make('title')->sortable()->searchable(),
                TextColumn::make('description')->sortable()->searchable(),
                TextColumn::make('summary')->sortable()->searchable(),
                TextColumn::make('author.name')->sortable()->searchable(),
                
                TextColumn::make('language.name')->sortable()->searchable(),
                TextColumn::make('category.name')->sortable()->searchable(),
                TextColumn::make('publication_date')->sortable()->searchable(),
                TextColumn::make('ISBN')->sortable()->searchable(),
                TextColumn::make('images')->sortable()->searchable(),
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

    public static function getRelations(): array
    {
        return [
            //
        ];
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ListBooks::route('/'),
            'create' => Pages\CreateBooks::route('/create'),
            'view' => Pages\ViewBooks::route('/{record}'),
            'edit' => Pages\EditBooks::route('/{record}/edit'),
        ];
    }
}
