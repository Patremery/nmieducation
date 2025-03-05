<?php

namespace App\Enums;

enum LiteratureGenreEnum: string
{
    // Fiction
    case NOVEL = 'novel';
    case SHORT_STORY = 'short_story';
    case POETRY = 'poetry';
    case DRAMA = 'drama';
    case SCIENCE_FICTION = 'science_fiction';
    case FANTASY = 'fantasy';
    case MYSTERY = 'mystery';
    case THRILLER = 'thriller';
    case HORROR = 'horror';
    case ROMANCE = 'romance';
    case HISTORICAL_FICTION = 'historical_fiction';
    case ADVENTURE = 'adventure';
    case FABLE = 'fable';
    case FOLKTALE = 'folktale';
    case MYTH = 'myth';
    case LEGEND = 'legend';
    
    // Non-Fiction
    case BIOGRAPHY = 'biography';
    case AUTOBIOGRAPHY = 'autobiography';
    case MEMOIR = 'memoir';
    case ESSAY = 'essay';
    case JOURNALISM = 'journalism';
    case HISTORY = 'history';
    case PHILOSOPHY = 'philosophy';
    case SELF_HELP = 'self_help';
    case TRAVEL = 'travel';
    case SCIENCE = 'science';
    case ACADEMIC = 'academic';
    
    // African Literature Specific
    case ORAL_TRADITION = 'oral_tradition';
    case POSTCOLONIAL = 'postcolonial';
    case AFROFUTURISM = 'afrofuturism';
    case AFRICAN_REALISM = 'african_realism';
    
    // Children's Literature
    case PICTURE_BOOK = 'picture_book';
    case CHILDRENS_FICTION = 'childrens_fiction';
    case YOUNG_ADULT = 'young_adult';
    
    public function label(): string
    {
        return match($this) {
            // Fiction
            self::NOVEL => 'Roman',
            self::SHORT_STORY => 'Nouvelle',
            self::POETRY => 'Poésie',
            self::DRAMA => 'Théâtre',
            self::SCIENCE_FICTION => 'Science-Fiction',
            self::FANTASY => 'Fantaisie',
            self::MYSTERY => 'Mystère',
            self::THRILLER => 'Thriller',
            self::HORROR => 'Horreur',
            self::ROMANCE => 'Romance',
            self::HISTORICAL_FICTION => 'Fiction historique',
            self::ADVENTURE => 'Aventure',
            self::FABLE => 'Fable',
            self::FOLKTALE => 'Conte populaire',
            self::MYTH => 'Mythe',
            self::LEGEND => 'Légende',
            
            // Non-Fiction
            self::BIOGRAPHY => 'Biographie',
            self::AUTOBIOGRAPHY => 'Autobiographie',
            self::MEMOIR => 'Mémoires',
            self::ESSAY => 'Essai',
            self::JOURNALISM => 'Journalisme',
            self::HISTORY => 'Histoire',
            self::PHILOSOPHY => 'Philosophie',
            self::SELF_HELP => 'Développement personnel',
            self::TRAVEL => 'Récit de voyage',
            self::SCIENCE => 'Science',
            self::ACADEMIC => 'Académique',
            
            // African Literature Specific
            self::ORAL_TRADITION => 'Tradition orale',
            self::POSTCOLONIAL => 'Postcolonial',
            self::AFROFUTURISM => 'Afrofuturisme',
            self::AFRICAN_REALISM => 'Réalisme africain',
            
            // Children's Literature
            self::PICTURE_BOOK => 'Album illustré',
            self::CHILDRENS_FICTION => 'Fiction pour enfants',
            self::YOUNG_ADULT => 'Jeunes adultes',
        };
    }
    
    public function getCategory(): string
    {
        return match($this) {
            self::NOVEL, self::SHORT_STORY, self::POETRY, self::DRAMA,
            self::SCIENCE_FICTION, self::FANTASY, self::MYSTERY, self::THRILLER,
            self::HORROR, self::ROMANCE, self::HISTORICAL_FICTION, self::ADVENTURE,
            self::FABLE, self::FOLKTALE, self::MYTH, self::LEGEND => 'Fiction',
            
            self::BIOGRAPHY, self::AUTOBIOGRAPHY, self::MEMOIR, self::ESSAY,
            self::JOURNALISM, self::HISTORY, self::PHILOSOPHY, self::SELF_HELP,
            self::TRAVEL, self::SCIENCE, self::ACADEMIC => 'Non-Fiction',
            
            self::ORAL_TRADITION, self::POSTCOLONIAL, self::AFROFUTURISM,
            self::AFRICAN_REALISM => 'Littérature africaine',
            
            self::PICTURE_BOOK, self::CHILDRENS_FICTION, self::YOUNG_ADULT => 'Littérature jeunesse',
        };
    }
    
    public static function options(): array
    {
        return collect(self::cases())->mapWithKeys(fn (self $enum) => [$enum->value => $enum->label()])->toArray();
    }
    
    public static function getOptionsByCategory(): array
    {
        $categories = [
            'Fiction' => [],
            'Non-Fiction' => [],
            'Littérature africaine' => [],
            'Littérature jeunesse' => [],
        ];
        
        foreach (self::cases() as $case) {
            $categories[$case->getCategory()][$case->value] = $case->label();
        }
        
        return $categories;
    }
}