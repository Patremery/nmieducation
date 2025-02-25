<?php

namespace App\Enums;

enum SchoolSectionEnum: string
{
    case ENGLISH = 'English';
    case FRENCH = 'French';

    public static function options(): array
    {
        return array_map(fn(SchoolSectionEnum $section) => $section->value, SchoolSectionEnum::cases());
    }

    public static function label(string $value): string
    {
        return match ($value) {
            self::ENGLISH->value => 'Anglophone',
            self::FRENCH->value => 'Francophone',
        };
    }
}
