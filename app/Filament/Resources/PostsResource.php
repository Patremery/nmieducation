<?php

namespace App\Filament\Resources;

use App\Filament\Resources\PostsResource\Pages;
use App\Models\BlogCategory;
use App\Models\Post;
use App\Models\Tag;
use Filament\Forms\Components\DatePicker;
use Filament\Forms\Components\FileUpload;
use Filament\Forms\Components\Hidden;
use Filament\Forms\Components\RichEditor;
use Filament\Forms\Components\Select;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Table;

class PostsResource extends Resource
{
    protected static ?string $model = Post::class;

    protected static ?string $navigationIcon = 'heroicon-o-rectangle-stack';

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                TextInput::make('title')
                    ->label('Titre')
                    ->required(),
                Hidden::make('user_id')
                    ->value(auth()->id()),
                TextInput::make('slug')->required(),
                TextInput::make('description')
                    ->label('Résumé')
                    ->required(),
                RichEditor::make('content')
                    ->label('Contenu')
                    ->required(),
                FileUpload::make('featured_image')
                    ->label('Image mise en avant')
                    ->image()
                    ->disk('public')
                    ->directory('blog')
                    ->default(fn($state) => $state)
                    ->required(),
                TextInput::make('ordering')
                    ->label('Ordering')
                    ->required(),
                TextInput::make('status')
                    ->label('Statut')
                    ->required(),
                /* TextInput::make('sticky_until')
                    ->label('Date d\'expiration')
                    ->required(), */
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
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                TextColumn::make('user_id')->sortable()->searchable(),
                TextColumn::make('title')->sortable()->searchable(),
                TextColumn::make('slug')->sortable()->searchable(),
                TextColumn::make('description')->sortable()->searchable(),
                TextColumn::make('content')->sortable()->searchable(),
                TextColumn::make('featured_image')->sortable()->searchable(),
                TextColumn::make('ordering')->sortable()->searchable(),
                TextColumn::make('status')->sortable()->searchable(),
                TextColumn::make('sticky_until')->sortable()->searchable(),
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
