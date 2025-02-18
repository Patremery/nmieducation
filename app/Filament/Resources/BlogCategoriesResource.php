<?php

namespace App\Filament\Resources;

use App\Filament\Resources\BlogCategoriesResource\Pages;
use App\Models\BlogCategory;
use Filament\Forms\Components\Select;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Collection;

class BlogCategoriesResource extends Resource
{
    protected static ?string $model = BlogCategory::class;

    protected static ?string $navigationIcon = 'heroicon-o-rectangle-stack';

    protected static ?string $navigationGroup = 'Blog';

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                TextInput::make('name')
                        ->label('Nom')
                        ->live()
                        ->afterStateUpdated(function ($state, $set) 
                        {
                            $set('slug', str()->slug($state));
                        })
                        ->required(),
                TextInput::make('slug')
                        ->unique(ignoreRecord: true)
                        ->required(),
                Select::make('parent_id')
                        ->label('Catégorie parente')
                        ->options(function (BlogCategory $record = null): Collection {
                            return BlogCategory::query()
                                ->when($record, function ($query) use ($record) {
                                    $query->where('id', '!=', $record->id);
                                })
                                ->pluck('name', 'id');
                        })
                        ->searchable()
                        ->preload(),
                TextInput::make('order')
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                TextColumn::make('name')->sortable()->searchable(),
                TextColumn::make('slug')->searchable(),
                TextColumn::make('parent_id')
                        ->sortable()
                        ->formatStateUsing(function ($state) {
                            return BlogCategory::find($state)->name;
                        }),
                TextColumn::make('order')->sortable()->searchable()
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
            'index' => Pages\ManageBlogCategories::route('/'),
        ];
    }
}
