<?php

namespace App\Filament\Resources;

use App\Filament\Resources\PostsResource\Pages;
use App\Models\Post;
use App\Traits\HasStatus;
use Filament\Forms\Components\DatePicker;
use Filament\Forms\Components\FileUpload;
use Filament\Forms\Components\Select;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Columns\ImageColumn;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Table;
use FilamentTiptapEditor\TiptapEditor;
use Filament\Forms\Components\Grid;
use Filament\Forms\Components\Section;
use Illuminate\Support\Str;
use Filament\Forms\Set;

class PostsResource extends Resource
{
    use HasStatus;
    protected static ?string $model = Post::class;

    protected static ?string $navigationIcon = 'heroicon-o-rectangle-stack';
    protected static ?string $label = "Articles";

     // Ajout du label de navigation
    protected static ?string $navigationLabel = 'Articles';
    //protected static ?string $navigationParentItem = "CMS";
    
    // Ajout du slug de navigation (optionnel, mais recommandé)
    protected static ?string $slug = 'posts';
    protected static ?string $navigationGroup = 'CMS';

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
                        ->columnSpan(2)
                        ->schema([
                            TextInput::make('title')
                                ->label('Titre')
                                ->required()
                                ->live()
                                ->afterStateHydrated(function (Set $set, $state) {
                                    if ($state) {
                                        $set('slug', Str::slug($state ?? ''));
                                    }
                                })
                                ->maxLength(255),
                            TextInput::make('slug')
                                ->label('Slug (URL)')
                                ->disabled()
                                ->required()
                                ->unique(ignoreRecord: true)
                                ->maxLength(255),
                            TiptapEditor::make('content')
                                ->label('Contenu')
                                ->profile('default')
                                ->maxContentWidth('5xl')
                                ->disk('public')
                                ->directory('posts')
                                ->required(),
                        ]),
                    
                    Section::make('Paramètres de publication')
                        ->columnSpan(1)
                        ->description('Configurez les détails de publication de cet article')
                        ->schema([
                            FileUpload::make('featured_image')
                                ->label('Image mise en avant')
                                ->image()
                                ->disk('public')
                                ->directory('blog')
                                ->optimize('webp')
                                ->required(),
                          
                            DatePicker::make('published_at')
                                ->label('Date de publication')
                                ->helperText('Sera définie automatiquement si non spécifiée')
                                ->format('Y')
                                ->native(false),
                            Select::make('categories')
                                ->label('Catégories')
                                ->relationship("categories", "name")
                                ->multiple()
                                ->preload()
                                ->required(),
                            Select::make('tags')
                                ->label('Tags')
                                ->relationship('tags', 'name')
                                ->multiple()
                                ->preload()
                                ->required(),
                        ]),
                ]),
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                //TextColumn::make('user_id')->sortable()->searchable(),
                ImageColumn::make('cover_photo_path')->label('Image'),
                TextColumn::make('title')
                ->label("Titre")
                ->formatStateUsing(function($state) {
                    return str()->limit($state, 50, "...");
                })
                ->searchable(),
                //TextColumn::make('slug')->sortable()->searchable(),
                
                TextColumn::make('categories.name')
                        ->label('Catégorie')
                        ->sortable(),
                self::getStatusColumn(),
                //TextColumn::make('sticky_until')->sortable()->searchable(),
                TextColumn::make('published_at')->sortable()->searchable()
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
            'index' => Pages\ListPosts::route('/'),
            'create' => Pages\CreatePosts::route('/create'),
            'view' => Pages\ViewPosts::route('/{record}'),
            'edit' => Pages\EditPosts::route('/{record}/edit'),
        ];
    }
}
