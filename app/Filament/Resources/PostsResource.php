<?php

namespace App\Filament\Resources;

use App\Filament\Resources\PostsResource\Pages;
use App\Models\BlogCategory;
use App\Models\Post;
use App\Models\Tag;
use Filament\Forms\Components\DatePicker;
use Filament\Forms\Components\FileUpload;
use Filament\Forms\Components\RichEditor;
use Filament\Forms\Components\Select;
use Filament\Forms\Components\Textarea;
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

class PostsResource extends Resource
{
    protected static ?string $model = Post::class;

    protected static ?string $navigationIcon = 'heroicon-o-rectangle-stack';

     // Ajout du label de navigation
    protected static ?string $navigationLabel = 'Articles';
    
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
                                ->required(),
                            TextInput::make('slug')->required(),
                            Textarea::make('description')
                                ->label('Résumé')
                                ->required(),
                            TiptapEditor::make('content')
                                ->label('Contenu')
                                ->profile('default')
                                ->maxContentWidth('5xl')
                                ->disk('public')
                                ->directory('posts')
                                ->columnSpanFull()
                                ->required(),
                        ]),
                    
                    Section::make('Paramètres de publication')
                        ->columnSpan(1)
                        ->schema([
                            FileUpload::make('featured_image')
                                ->label('Image mise en avant')
                                ->image()
                                ->disk('public')
                                ->directory('blog')
                                ->default(fn($state) => $state)
                                ->optimize('webp')
                                ->required(),
                            TextInput::make('ordering')
                                ->label('Ordering')
                                ->required(),
                            Select::make('status')
                                ->label('Statut')
                                ->options([
                                    'draft' => 'Brouillon',
                                    'published' => 'Publié',
                                    'scheduled' => 'Programmé',
                                    'archived' => 'Archivé',
                                ])
                                ->required(),
                            DatePicker::make('published_at')
                                ->label('Date de publication')
                                ->required(),
                            Select::make('blog_categories_id')
                                ->label('Catégories')
                                ->options(BlogCategory::all()->pluck('name', 'id'))
                                ->multiple()
                                ->required(),
                            Select::make('tags')
                                ->label('Tags')
                                ->options(Tag::all()->pluck('name', 'id'))
                                ->multiple()
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
                ImageColumn::make('featured_image')->label(''),
                TextColumn::make('title')->sortable()->searchable(),
                //TextColumn::make('slug')->sortable()->searchable(),
                
                TextColumn::make('ordering')->sortable()->searchable(),
                TextColumn::make('status')->sortable()->searchable(),
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
