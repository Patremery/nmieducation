<?php

namespace App\Filament\Resources;

use App\Enums\DefaultStatusEnum;
use App\Filament\Resources\BooksResource\Pages;
use App\Models\Author;
use App\Models\Book;
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
use Filament\Forms\Get;
use App\Services\CategoryService;
use Filament\Tables\Columns\ImageColumn;
use App\Enums\BookFormat;
use Filament\Forms\Components\Toggle;
use App\Enums\AudienceEnum;

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

    public static function label(string $label): string
    {
        return __("Ajouter un livre");
    }

    protected static function isCategoryType(?int $categoryId, string $type): bool
    {
        if (!$categoryId) {
            return false;
        }
        
        return app(CategoryService::class)
            ->getById($categoryId)?->code === $type;
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
                                Select::make('category_id')
                                    ->label("Catégorie")
                                    ->options(function () {
                                        return app(CategoryService::class)
                                            ->getAllActive()
                                            ->pluck('label', 'id');
                                    })
                                    ->searchable()
                                    ->live()
                                    ->required(),
                                Toggle::make("new")
                                        ->label("Nouveauté")
                                        ->default(false),
                                Select::make('book_language_id')
                                        ->label("Langue")
                                        ->options(BookLanguage::query()->published()->pluck("name", "id")),
                                
                                Select::make('collection_id')
                                    ->label("Collection")
                                    ->options(Collection::query()->published()->pluck("name", "id"))
                                    ->visible(fn (Get $get) => static::isCategoryType(
                                        $get('category_id'),
                                        'school'
                                    )),
                                RichEditor::make('description')
                                    ->maxLength(600)
                                    ->required()
                                    ->columnSpanFull(),
                                Textarea::make('summary')
                                    ->columnSpanFull(),
                                FileUpload::make('images')
                                        ->multiple()
                                        ->image()
                                        ->disk('public')
                                        ->directory('books')
                                        ->columnSpanFull(),
                               
                            ])->columnSpan(['lg' => 2]),

                        Grid::make()
                            ->schema([
                                Section::make('Détails')
                                    ->schema([
                                        self::getStatusField(),
                                        
                                        Select::make('author_id')
                                                ->label("Auteur")
                                                ->options(Author::query()->published()->pluck("name", "id"))
                                                ->columns(2)
                                                ->searchable()
                                                ->visible(fn (Get $get) => (static::isCategoryType(
                                        $get('category_id'),
                                        'literature'
                                    )) or (static::isCategoryType(
                                        $get('category_id'),
                                        'kids'
                                    ))),
                                        DatePicker::make('publication_date')
                                            ->label("Date de publication"),
                                       
                                        Select::make('support')
                                                ->label("Type de Support")
                                                ->options(BookFormat::options())
                                                ->searchable()
                                                ->enum(BookFormat::class)
                                                ->live()
                                                ->required(), 
                                        TextInput::make('ISBN')
                                                ->label("ISBN"),
                                        
                                        TextInput::make('theme')
                                                ->visible(fn (Get $get) => static::isCategoryType(
                                                    $get('category_id'),
                                                    'literature'
                                                )),
                                        TextInput::make('pages')
                                                ->numeric()
                                                ->suffix("pages"),
                                        TextInput::make('price')
                                                ->suffix("XAF"),
                                        Select::make('audience')
                                                ->label("Public Cible")
                                                ->options(AudienceEnum::options())
                                                ->enum(AudienceEnum::class)
                                                ->live()
                                                ->searchable()
                                                ->required(),
                                    ]),

                                Section::make('Liens')
                                    ->schema([
                                    TextInput::make('amazon_url')->label("URL Amazon"),
                                        TextInput::make('adinkra_url')->label("URL Adinkra"),
                                        TextInput::make('youscribe_url')->label("URL YouScribe"),
                                        TextInput::make('lq_url')->label("URL Librairies de Quartier"),
                                ])->visible(fn (Get $get) => in_array($get('support'), ["both", "digital"])),

                                Section::make('Images')
                                    ->schema([
                                        FileUpload::make('featured_image')
                                            ->label("Image de couverture")
                                            ->image()
                                            ->default(fn ($record) => $record->file ?? null)
                                            ->preserveFilenames()
                                            ->required(),
                                        FileUpload::make('file')
                                            ->label("Fichier Numérique")
                                            ->acceptedFileTypes(['application/pdf'])
                                            ->columnSpanFull()
                                            ->visible(fn (Get $get) => (in_array($get('category_id'), [3, 5])))
                                            ->required(fn (Get $get) => (in_array($get('category_id'), [3, 5])))
                                            ->default(fn ($record) => $record->file ?? null)
                                            ->preserveFilenames(),
                                    ]),
                            ])->columnSpan(['lg' => 1]),
                    ]),
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                ImageColumn::make('featured_image')
                    ->height(70)
                    ,
                TextColumn::make('title')->sortable()->searchable(),
                //TextColumn::make('description')->html()->searchable(),
                //TextColumn::make('summary')->sortable()->searchable(),
                TextColumn::make('author.name')->sortable()->searchable(),
                
                TextColumn::make('language.name')->sortable()->searchable(),
                TextColumn::make('category.name')->sortable()->searchable(),
                TextColumn::make('publication_date')->sortable()->searchable(),
                TextColumn::make('ISBN')->label("Code ISBN")->sortable()->searchable(),
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
