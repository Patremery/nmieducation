<?php

namespace App\Filament\Resources;

use App\Filament\Resources\AuthorsResource\Pages;
use App\Models\Author;
use App\Traits\HasStatus;
use Filament\Forms\Components\DatePicker;
use Filament\Forms\Components\FileUpload;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Table;
use Filament\Forms\Components\Grid;
use Filament\Forms\Components\Section;
use Filament\Forms\Components\Hidden;
use Filament\Forms\Components\RichEditor;
use Filament\Tables\Columns\ImageColumn;


class AuthorsResource extends Resource
{
    use HasStatus;
    protected static ?string $model = Author::class;

    protected static ?string $navigationIcon = 'heroicon-o-user';

    protected static ?string $navigationGroup = 'Catalogue';
    public static function getNavigationLabel(): string
    {
        return __('Auteurs');
    }

    public static function getLabel() : string {
        return __('Auteurs');
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
                                    ->label('Nom')
                                    ->required()
                                    ->live()
                                    ->afterStateUpdated(function ($state, $set) {
                                        $set('slug', str()->slug($state));
                                    }),
                                TextInput::make('profession')
                                        ->label("Profession"),
                                Hidden::make('slug')
                                    ->unique(ignoreRecord: true)
                                    ->required(),
                                DatePicker::make('latest_publication_date')
                                        ->label("Date de dernière publication"),
                                RichEditor::make('biography')
                                    ->label('Biographie')
                                    ->columnSpanFull(),
                            ])->columnSpan(['lg' => 2]),

                        // Barre latérale (1/3 de l'écran)
                        Grid::make()
                            ->schema([
                                Section::make('Statut')
                                    ->schema([
                                        self::getStatusField(),
                                        
                                        TextInput::make('facebook_url')
                                                ->label("Profil Facebook"),
                                        TextInput::make('linkedin_url')
                                                ->label("Profil LinkedIn"),
                                        TextInput::make('twitter_url')
                                                ->label("Profil Twitter"),
                                    ]),
                                

                                Section::make('Photo')
                                    ->schema([
                                        FileUpload::make('photo')
                                            ->label("Photo de l'auteur")
                                            ->image()
                                            ->default(fn ($state) => $state)
                                            ->disk('public')
                                            ->directory('authors')
                                            ->optimize('webp'),
                                    ]),

                                
                            ])->columnSpan(['lg' => 1]),
                    ]),
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                ImageColumn::make('photo')
                            ->label("Photo"), 
                TextColumn::make('name')
                            ->label("Nom")
                            ->sortable()
                            ->searchable(),
                TextColumn::make('profession')
                            ->label("Profession")
                            ->sortable()
                            ->searchable(),
               /*  TextColumn::make('biography')
                            ->label("Biographie")
                            ->searchable(), */
                self::getStatusColumn()
                
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
            'index' => Pages\ListAuthors::route('/'),
            'create' => Pages\CreateAuthors::route('/create'),
            'view' => Pages\ViewAuthors::route('/{record}'),
            'edit' => Pages\EditAuthors::route('/{record}/edit'),
        ];
    }
}
