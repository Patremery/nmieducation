<?php

namespace App\Filament\Resources;

use App\Filament\Resources\BooksResource\Pages;
use App\Models\Author;
use App\Models\Book;
use App\Models\BookLanguage;
use App\Models\Collection;
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
use App\Enums\ClassroomsEnum;
use App\Enums\CoursesEnum;
use App\Enums\LiteratureGenreEnum;
use App\Traits\HasStatus;

class BooksResource extends Resource
{
    use HasStatus;
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
                Grid::make([
                    'default' => 1,
                    'lg' => 3,
                ])
                    ->schema([
                        Section::make('Informations principales')
                            ->schema([
                                TextInput::make('title')
                                    ->label('Titre')
                                    ->required()
                                    ->columnSpanFull(),
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
                                    ->label('Résumé')
                                    ->columnSpanFull(),
                                FileUpload::make('images')
                                        ->multiple()
                                        ->image()
                                        ->disk('public')
                                        ->directory('books')
                                        ->columnSpanFull()
                                        ->optimize('webp'),
                                        //->getFilename(fn ($file, $record) => ($record?->slug ?? 'book') . '-' . time() . '.' . $file->getClientOriginalExtension()),
                               
                            ])->columnSpan(['lg' => 2]),

                        Grid::make()
                            ->schema([
                                Section::make('Détails')
                                    ->schema([
                                        self::getStatusField(),
                                        
                                        Select::make('authors')
                                                ->label("Auteurs")
                                                ->multiple()
                                                ->relationship('authors', 'name')
                                                ->options(Author::query()->published()->pluck("name", "id"))
                                                ->preload()
                                                ->searchable()
                                                ->visible(fn (Get $get) => 
                                                    static::isCategoryType($get('category_id'), 'literature') or 
                                                    static::isCategoryType($get('category_id'), 'kids')
                                                ),
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
                                        Select::make('classrooms')
                                                ->label("Classes")
                                                ->options(ClassroomsEnum::options())
                                                //->enum(ClassroomsEnum::class)
                                                ->searchable()
                                                ->multiple()
                                                ->visible(fn (Get $get) => static::isCategoryType(
                                                    $get('category_id'),
                                                    'school'
                                                ) or static::isCategoryType(
                                                    $get('category_id'),
                                                    'catalog'
                                                ) or static::isCategoryType(
                                                    $get('category_id'),
                                                    'literature'
                                                ) or static::isCategoryType(
                                                    $get('category_id'),
                                                    'guides'
                                                )),
                                        Select::make('subject')
                                                ->label("Sujet")
                                                ->options(CoursesEnum::options())
                                                ->searchable()
                                                ->visible(fn (Get $get) => static::isCategoryType(
                                                    $get('category_id'),
                                                    'school'
                                                ) or static::isCategoryType(
                                                    $get('category_id'),
                                                    'guides'
                                                )),
                                        
                                        Select::make('theme')
                                                ->label("Genre")
                                                ->options(LiteratureGenreEnum::options())
                                                ->enum(LiteratureGenreEnum::class)
                                                ->searchable()
                                                ->visible(fn (Get $get) => static::isCategoryType(
                                                    $get('category_id'),
                                                    'literature'
                                                ) or static::isCategoryType(
                                                    $get('category_id'),
                                                    'kids'
                                                )),
                                        TextInput::make('pages')
                                                ->numeric()
                                                ->suffix("pages"),
                                        TextInput::make('price')
                                                ->label('Prix')
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
                                            ->optimize('webp')
                                            ->required(),
                                        FileUpload::make('file')
                                            ->label("Fichier Numérique")
                                            ->acceptedFileTypes(['application/pdf'])
                                            ->columnSpanFull()
                                            ->visible(fn (Get $get) => (in_array($get('category_id'), [3, 5])))
                                            ->required(fn (Get $get) => (in_array($get('category_id'), [3, 5])))
                                            ->default(fn ($record) => $record->file ?? null)
                                            ->optimize('pdf')
                                            ->preserveFilenames(),
                                    ]),
                            ])->columnSpan(['lg' => 1]),
                    ])->visible(fn (Get $get) => $get('category_id')),
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                ImageColumn::make('featured_image')
                    ->label('')
                    ->height(70)
                    ,
                TextColumn::make('title')
                        ->label('Titre')
                        ->sortable()
                        ->searchable(),
                //TextColumn::make('description')->html()->searchable(),
                //TextColumn::make('summary')->sortable()->searchable(),
                TextColumn::make('authors.name')
                    ->label('Auteurs')
                    ->sortable()
                    ->searchable()
                    ->listWithLineBreaks()
                    ->limitList(3)
                    ->expandableLimitedList()
                    ->formatStateUsing(fn ($state, $record) => $record->authors->pluck('name')->join(', ')),
                TextColumn::make('language.name')
                        ->label('Langue')
                        ->sortable()
                        ->searchable(),
                TextColumn::make('category.label')
                        ->label('Catégorie')
                        ->sortable()
                        ->searchable(),
                //TextColumn::make('publication_date')->sortable()->searchable(),
                TextColumn::make('ISBN')->label("Code ISBN")->sortable()->searchable(),
                //TextColumn::make('images')->sortable()->searchable(),
                self::getStatusColumn(),
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
