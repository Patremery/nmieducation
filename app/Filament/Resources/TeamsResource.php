<?php

namespace App\Filament\Resources;

use App\Filament\Resources\TeamsResource\Pages;
use App\Models\Team;
use App\Traits\DefaultStatusField;
use Filament\Forms\Components\FileUpload;
use Filament\Forms\Components\RichEditor;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Columns\ImageColumn;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Table;

class TeamsResource extends Resource
{
    use DefaultStatusField;
    protected static ?string $model = Team::class;

    protected static ?string $navigationIcon = 'heroicon-o-rectangle-stack';
    protected static ?string $navigationGroup = 'Catalogue';
    protected static ?string $label = 'Equipe';

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                TextInput::make('name')->required(),
                TextInput::make('position')->required(),
                FileUpload::make('photo')
                    ->default(fn ($state) => $state)
                    ->image()
                    ->disk('public')
                    ->directory('teams')
                    ->optimize('webp')
                    ->required(),
                TextInput::make('facebook_url'),
                TextInput::make('linkedin_url'),
                RichEditor::make('bio'),
                self::getStatusField()
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                ImageColumn::make('photo')->sortable(),
                TextColumn::make('name')->sortable()->searchable(),
                TextColumn::make('position')->sortable()->searchable(),
                TextColumn::make('facebook_url')->sortable()->searchable(),
                TextColumn::make('linkedin_url')->sortable()->searchable(),
                TextColumn::make('status')->sortable()
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
            'index' => Pages\ListTeams::route('/'),
            'create' => Pages\CreateTeams::route('/create'),
            'view' => Pages\ViewTeams::route('/{record}'),
            'edit' => Pages\EditTeams::route('/{record}/edit'), 
        ];
    }
}
