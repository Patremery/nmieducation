<?php

namespace App\Filament\Resources;

use App\Enums\DefaultStatusEnum;
use App\Filament\Resources\GuidesResource\Pages;
use App\Models\BookCategory;
use App\Models\Guide;
use App\Traits\DefaultStatusField;
use Filament\Forms\Components\FileUpload;
use Filament\Forms\Components\RichEditor;
use Filament\Forms\Components\Select;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Form;
use Filament\Forms\Set;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Table;

class GuidesResource extends Resource
{
    use DefaultStatusField;
    protected static ?string $model = Guide::class;

    protected static ?string $navigationIcon = 'heroicon-o-rectangle-stack';
    protected static ?string $navigationGroup = 'Catalogue';

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                TextInput::make('title')
                            ->label(__('Title'))
                            ->afterStateUpdated(fn (Set $set, ?string $state) => $set('slug', str()->slug($state)))
                            ->columnSpanFull()
                            ->live()
                            ->required(),
                TextInput::make('slug')
                        ->label(__('Slug'))
                        ->unique(ignoreRecord: true)
                        ->readOnly()
                        ->required(),
                Select::make('category_id')
                        ->label(__('Category'))
                        ->options(BookCategory::query()->published()->pluck("name", "id"))
                        ->required(),
                RichEditor::make('description')
                            ->required()
                            ->columnSpanFull(),
                FileUpload::make('featured_image')->required(),
                
                self::getStatusField()
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                TextColumn::make('title')->sortable()->searchable(),
                TextColumn::make('slug')->sortable()->searchable(),
                TextColumn::make('category.name')->sortable()->searchable(),
                TextColumn::make('description')->sortable()->searchable(),
                TextColumn::make('featured_image')->sortable()->searchable(),
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
            'index' => Pages\ManageGuides::route('/'),
        ];
    }
}
