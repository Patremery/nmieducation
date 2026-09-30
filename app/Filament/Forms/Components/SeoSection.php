<?php

namespace App\Filament\Forms\Components;

use Filament\Forms\Components\FileUpload;
use Filament\Forms\Components\Grid;
use Filament\Forms\Components\Section;
use Filament\Forms\Components\Textarea;
use Filament\Forms\Components\TextInput;

/**
 * Reusable "Référencement" section for content resources.
 *
 * Every field is optional: when left blank the SEO service falls back to the
 * record's own content (title, summary, featured image, ...).
 */
class SeoSection
{
    /**
     * @return array<int, Section>
     */
    public static function make(string $imageDirectory = 'seo'): array
    {
        return [
            Section::make('Référencement (SEO)')
                ->description('Laissez vide pour utiliser automatiquement le titre, le résumé et l’image du contenu.')
                ->icon('heroicon-o-magnifying-glass')
                ->collapsible()
                ->collapsed()
                ->columnSpanFull()
                ->schema([
                    Grid::make([
                        'default' => 1,
                        'md' => 2,
                    ])
                        ->schema([
                            TextInput::make('meta_title')
                                ->label('Titre SEO')
                                ->maxLength(255)
                                ->helperText('Affiché dans les résultats Google. Idéal : 50 à 60 caractères.')
                                ->placeholder('Laissez vide pour utiliser le titre'),
                            TextInput::make('focus_keyword')
                                ->label('Mot-clé principal')
                                ->maxLength(255)
                                ->helperText('Le mot-clé ciblé par cette page.'),
                        ]),

                    Textarea::make('meta_description')
                        ->label('Méta-description')
                        ->rows(3)
                        ->maxLength(180)
                        ->helperText('Affichée sous le titre dans Google. Idéal : 120 à 160 caractères.')
                        ->placeholder('Laissez vide pour utiliser le sous-titre / résumé'),

                    FileUpload::make('meta_og_image')
                        ->label('Image de partage (réseaux sociaux)')
                        ->image()
                        ->disk('public')
                        ->directory($imageDirectory)
                        ->optimize('webp')
                        ->helperText('Format 1200×630 recommandé. Laissez vide pour utiliser l’image principale.'),
                ]),
        ];
    }
}
