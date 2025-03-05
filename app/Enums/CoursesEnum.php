<?php

namespace App\Enums;

enum CoursesEnum: string
{
    case ENGLISH = 'english';
    case FRENCH = 'french';
    case MATH = 'math';
    case SCIENCE = 'science';
    case HISTORY = 'history';
    case GEOGRAPHY = 'geography';
    case PHYSICS = 'physics';
    case CHEMISTRY = 'chemistry';
    case BIOLOGY = 'biology';
    case COMPUTER_SCIENCE = 'computer_science';
    case LITERATURE = 'literature';
    case GERMAN = 'german';
    case SPANISH = 'spanish';
    case SPORTS = 'sports';
    case ART = 'art';
    case MUSIC = 'music';
    case TECHNOLOGY = 'technology';

    public function label(): string
    {
        return match ($this) {
            self::ENGLISH => __('English'),
            self::FRENCH => __('French'),
            self::MATH => __('Math'),
            self::SCIENCE => __('Science'),
            self::HISTORY => __('History'),
            self::GEOGRAPHY => __('Geography'),
            self::PHYSICS => __('Physics'),
            self::CHEMISTRY => __('Chemistry'),
            self::BIOLOGY => __('Biology'),
            self::COMPUTER_SCIENCE => __('Computer Science'),
            self::LITERATURE => __('Literature'),
            self::GERMAN => __('German'),
            self::SPANISH => __('Spanish'),
            self::SPORTS => __('Sports'),
            self::ART => __('Art'),
            self::MUSIC => __('Music'),
            self::TECHNOLOGY => __('Technology'),
        };
    }

    public static function options(): array
    {
        return collect(self::cases())->mapWithKeys(fn (self $enum) => [$enum->value => $enum->label()])->toArray();
    }

    public static function values(): array
    {
        return array_column(self::cases(), 'value');
    }
}
